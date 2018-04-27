import { Observable } from "tns-core-modules/data/observable";
import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { isAndroid } from "tns-core-modules/platform/platform";
import { CalendarWeekViewStyle, RadCalendar, CalendarSelectionEventData } from "nativescript-ui-calendar";
import { UserStylesService } from "./styles/CalendarStylesService";
import * as segmentedBarModule from "tns-core-modules/ui/segmented-bar";
import { Color } from "tns-core-modules/color/color";
import * as appSettingModule from "application-settings";
import * as app from 'application';
import * as imagepicker from "nativescript-imagepicker";
import * as ImageSource from "tns-core-modules/image-source";
import { Image } from "tns-core-modules/ui/image/image";
import { View } from "tns-core-modules/ui/layouts/layout-base";
import { ImageFilters } from 'nativescript-image-filters';


import { Blur } from "nativescript-blur";
import { PetEventService } from "./EventProvider/petEvent.services";
import { EventModel } from "./EventProvider/eventModel";
import { ListViewScrollEventData, ListViewEventData, RadListView } from "nativescript-ui-listview";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { AnimationCurve } from 'ui/enums';
import { SwipeGestureEventData, GestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { BaseComponent } from "../customControls/base.component";
import { TranslateService } from "ng2-translate";
import { ViewBase } from "tns-core-modules/ui/core/view-base/view-base";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./ModalComponents/CreateEventModalComponent";
import * as fs from "tns-core-modules/file-system";
import { TimeLineFileProvider } from "./FileProvider/TimelineFileProvider";


@Component({
    selector: "timeline",
    moduleId: module.id,
    templateUrl: "./timeline.component.html",
    styleUrls: ["./styles/timeline.component.css"],
    providers: [UserStylesService, PetEventService, Blur, TimeLineFileProvider],
})
export class TimelineComponent extends BaseComponent implements OnInit {

    private weekViewStyle: CalendarWeekViewStyle;
    public profileImagePath: string;
    public currentDateEventList: ObservableArray<EventModel>;
    private currentDate: Date;
    private monthKeys = ["ocak", "subat", "mart", "nisan", "mayis", "haziran",
        "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"
    ];
    public petId: string = "1"
    public get CurrentDateStr(): String {
        if (this.currentDate) {
            var monthName = "";
            this.translate.get("monthNames." + this.monthKeys[this.currentDate.getMonth()]).subscribe((res: string) => {
                monthName = res;
            });
            return monthName + " " + this.currentDate.getFullYear();
        }
    }


    constructor(private page: Page, private _calendarStyleService: UserStylesService, private petEventService: PetEventService, private blur: Blur, private translate: TranslateService, private modalService: ModalDialogService, private vcRef: ViewContainerRef, private fileProvider: TimeLineFileProvider) {
        super(page, translate);
        this.currentDateEventList = new ObservableArray<EventModel>();

    }


    ngOnInit(): void {
        this.weekViewStyle = this._calendarStyleService.getWeekViewStyle();
        this.profileImagePath = appSettingModule.getString('profileImagePath');
        if (!this.profileImagePath) {
            this.profileImagePath = this.fileProvider.GetProfileImagePath(this.petId)
            appSettingModule.setString('profileImagePath', this.profileImagePath);
        }

    }

    public Loaded(args) {
        var calendar: RadCalendar = <RadCalendar>args.object;

        if (isAndroid) {
            calendar.android.setDrawingVerticalGridLines(false);
            calendar.android.setDrawingHorizontalGridLines(false);
            calendar.android.getEventAdapter().getRenderer().setEventRenderMode(com.telerik.widget.calendar.events.EventRenderMode.Text);

        }
        calendar.selectedDate = new Date();
        let telCalendar = calendar.nativeView;
        let gestureManager = telCalendar.getGestureManager();
        gestureManager.setSwipeDownToChangeDisplayMode(false);
    }
    public onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = <RadCalendar>args.object;
        if (this.currentDate != calendar.selectedDate) {
            this.currentDate = calendar.selectedDate;
            this.currentDateEventList.splice(0);
            this.currentDateEventList.push(this.petEventService.GetEventListByDate(this.petId, this.currentDate));
        }
    }

    public showModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: this.currentDate.toDateString(),
            fullscreen: false,
        };
        return this.modalService.showModal(ModalViewComponent, options).then(result => {

            if (result)
                this.currentDateEventList.push(result)
        }).then((result) => {
            if (result)
                this.sortEvents();
        })
    }

    public MainContext: any = this;
    public timeLineMenuLongPress(e, mainContext) {
        var context = <TimelineComponent>mainContext
        context.showModal();
    }


    sortEvents() {
        this.currentDateEventList.sort((item: EventModel, otherItem: EventModel) => {

            var res = item.eventDate > otherItem.eventDate ? 1 : 0
            return res;
        })
        let list = <RadListView>this.page.getViewById('eventListView');
        list.refresh();
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var list = <RadListView>args.object;
        swipeLimits.left = list.getMeasuredWidth();
        swipeLimits.threshold = list.getMeasuredWidth() / 2;

    }
    public onItemSwiping(args: ListViewEventData) {
        var event = this.currentDateEventList.getItem(args.index);
        args.returnValue = !event.IsDone;
    }
    public opacity: number = 1;
    public onSwipeCellProgressChanged(args: ListViewEventData) {

        if (args.data.x >= args.data.swipeLimits.threshold * 2) {
            setTimeout(() => {
                var list = <RadListView>args.object;
                var event = this.currentDateEventList.getItem(args.index);
                event.IsDone = true;
                event.DoneDate = new Date();
                list.notifySwipeToExecuteFinished();
            }, 200);
        }
        this.opacity = args.data.x / (args.data.swipeLimits.threshold * 2)

    }

    public onPullToRefresh(args: ListViewEventData) {
        var time = Math.floor(Math.random() * 10)
        setTimeout(() => {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
            this.petEventService.CreateEvents("");

            this.currentDateEventList.splice(0);
            this.currentDateEventList.push(this.petEventService.GetEventListByDate(this.petId, this.currentDate));
            this.sortEvents();
            let list = <RadListView>this.page.getViewById('eventListView');
            list.refresh();
        }, time);


    }
    public turnBlurOn() {
        if (this.profileImagePath) {
            let imageView = this.page.getViewById('profileImageBlured');
            setTimeout(() => {
                this.blur
                    .on(imageView, "kitty", 25)
                    .then((imageSource?: any) => {

                        let image: any = this.page.getViewById("profileImageBlured");
                        
                        image.imageSource = imageSource;
                    })
            }, 200);

        }
    }

    public resetBlur() {
        let that = this;
        this.blur
            .off("kitty")
            .then((src?: any) => {
                let image: any = this.page.getViewById("profileImageBlured");
                image.imageSource = ImageSource.fromFile(this.profileImagePath);
                that.turnBlurOn()
            })
    }


    public onSelectSingleTap() {
        let context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }
    startSelection(context) {
        let _that = this;

        context
            .authorize()
            .then(() => {
                return context.present();
            })
            .then((selection) => {
                selection.forEach(function (selected) {
                    selected.getImage().then((source) => {
                        appSettingModule.clear();
                        var path = _that.fileProvider.SaveProfileImage(_that.petId, selected.fileUri)
                        //console.log("değisen :" + path)
                        _that.profileImagePath = path;
                        appSettingModule.setString('profileImagePath', path);
                        _that.resetBlur();
                    });
                });
            }).catch(function (e) {
                console.log('Error');
            });
    }

}

