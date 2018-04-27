import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { Page } from "tns-core-modules/ui/page/page";
import { EventModel } from "../EventProvider/eventModel";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { EventTypeModel } from "../EventProvider/eventType.model";
import { SegmentedBar } from "tns-core-modules/ui/segmented-bar/segmented-bar";


@Component({
    moduleId: module.id,
    templateUrl: "./CreateEventModalComponent.html",
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;
    public eventTypeList: Array<EventTypeModel>

    constructor(private params: ModalDialogParams, private page: Page) {
        this.eventTypeList = new Array<EventTypeModel>();
        this.currentdate =  new Date(params.context);

        var event1 = new EventTypeModel();
        event1.Key = "mama";
        event1.TypeDetail = "test";
        event1.TypeName = "Mama Zamanı";
        this.eventTypeList.push(event1);
        var event2 = new EventTypeModel();
        event2.Key = "asi";
        event2.TypeDetail = "test";
        event2.TypeName = "Aşı Zamanı";
        this.eventTypeList.push(event2);
        var event3 = new EventTypeModel();
        event3.Key = "gezi";
        event3.TypeDetail = "test";
        event3.TypeName = "Gezi Zamanı";
        this.eventTypeList.push(event3);

        this.page.on("unloaded", () => {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            this.params.closeCallback();
        });
    }

    ngOnInit() {
    }

    public onTimeChanged(args) {
        this.selectedTime = args.value
    }
    public onselectedIndexChanged(args) {
        let bar = <SegmentedBar>args.object;
        this.selectedIndex=bar.selectedIndex;
    }
    private selectedTime: Date
    public selectedIndex: number;
    public submit() {

        var eventType = this.eventTypeList[this.selectedIndex];
        var newEvent = new EventModel();
        var eventTime = new Date(this.currentdate.getFullYear(), this.currentdate.getMonth(), this.currentdate.getDate(), this.selectedTime.getHours(), this.selectedTime.getMinutes(),0,0);
        newEvent.eventDate = eventTime;
        newEvent.IsDone = false;
        newEvent.EventType.TypeName = eventType.TypeName;
        newEvent.EventType.TypeDetail = eventType.TypeDetail;
        newEvent.EventType.Key = eventType.Key;
        this.params.closeCallback(newEvent);
    }
}