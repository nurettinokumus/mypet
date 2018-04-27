"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var platform_1 = require("tns-core-modules/platform/platform");
var CalendarStylesService_1 = require("./styles/CalendarStylesService");
var appSettingModule = require("application-settings");
var imagepicker = require("nativescript-imagepicker");
var ImageSource = require("tns-core-modules/image-source");
var nativescript_blur_1 = require("nativescript-blur");
var petEvent_services_1 = require("./EventProvider/petEvent.services");
var base_component_1 = require("../customControls/base.component");
var ng2_translate_1 = require("ng2-translate");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var CreateEventModalComponent_1 = require("./ModalComponents/CreateEventModalComponent");
var TimelineFileProvider_1 = require("./FileProvider/TimelineFileProvider");
var TimelineComponent = /** @class */ (function (_super) {
    __extends(TimelineComponent, _super);
    function TimelineComponent(page, _calendarStyleService, petEventService, blur, translate, modalService, vcRef, fileProvider) {
        var _this = _super.call(this, page, translate) || this;
        _this.page = page;
        _this._calendarStyleService = _calendarStyleService;
        _this.petEventService = petEventService;
        _this.blur = blur;
        _this.translate = translate;
        _this.modalService = modalService;
        _this.vcRef = vcRef;
        _this.fileProvider = fileProvider;
        _this.monthKeys = ["ocak", "subat", "mart", "nisan", "mayis", "haziran",
            "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"
        ];
        _this.petId = "1";
        _this.MainContext = _this;
        _this.opacity = 1;
        _this.currentDateEventList = new observable_array_1.ObservableArray();
        return _this;
    }
    Object.defineProperty(TimelineComponent.prototype, "CurrentDateStr", {
        get: function () {
            if (this.currentDate) {
                var monthName = "";
                this.translate.get("monthNames." + this.monthKeys[this.currentDate.getMonth()]).subscribe(function (res) {
                    monthName = res;
                });
                return monthName + " " + this.currentDate.getFullYear();
            }
        },
        enumerable: true,
        configurable: true
    });
    TimelineComponent.prototype.ngOnInit = function () {
        this.weekViewStyle = this._calendarStyleService.getWeekViewStyle();
        this.profileImagePath = appSettingModule.getString('profileImagePath');
        if (!this.profileImagePath) {
            this.profileImagePath = this.fileProvider.GetProfileImagePath(this.petId);
            appSettingModule.setString('profileImagePath', this.profileImagePath);
        }
    };
    TimelineComponent.prototype.Loaded = function (args) {
        var calendar = args.object;
        if (platform_1.isAndroid) {
            calendar.android.setDrawingVerticalGridLines(false);
            calendar.android.setDrawingHorizontalGridLines(false);
            calendar.android.getEventAdapter().getRenderer().setEventRenderMode(com.telerik.widget.calendar.events.EventRenderMode.Text);
        }
        calendar.selectedDate = new Date();
        var telCalendar = calendar.nativeView;
        var gestureManager = telCalendar.getGestureManager();
        gestureManager.setSwipeDownToChangeDisplayMode(false);
    };
    TimelineComponent.prototype.onDateSelected = function (args) {
        var calendar = args.object;
        if (this.currentDate != calendar.selectedDate) {
            this.currentDate = calendar.selectedDate;
            this.currentDateEventList.splice(0);
            this.currentDateEventList.push(this.petEventService.GetEventListByDate(this.petId, this.currentDate));
        }
    };
    TimelineComponent.prototype.showModal = function () {
        var _this = this;
        var options = {
            viewContainerRef: this.vcRef,
            context: this.currentDate.toDateString(),
            fullscreen: false,
        };
        return this.modalService.showModal(CreateEventModalComponent_1.ModalViewComponent, options).then(function (result) {
            if (result)
                _this.currentDateEventList.push(result);
        }).then(function (result) {
            if (result)
                _this.sortEvents();
        });
    };
    TimelineComponent.prototype.timeLineMenuLongPress = function (e, mainContext) {
        var context = mainContext;
        context.showModal();
    };
    TimelineComponent.prototype.sortEvents = function () {
        this.currentDateEventList.sort(function (item, otherItem) {
            var res = item.eventDate > otherItem.eventDate ? 1 : 0;
            return res;
        });
        var list = this.page.getViewById('eventListView');
        list.refresh();
    };
    TimelineComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var list = args.object;
        swipeLimits.left = list.getMeasuredWidth();
        swipeLimits.threshold = list.getMeasuredWidth() / 2;
    };
    TimelineComponent.prototype.onItemSwiping = function (args) {
        var event = this.currentDateEventList.getItem(args.index);
        args.returnValue = !event.IsDone;
    };
    TimelineComponent.prototype.onSwipeCellProgressChanged = function (args) {
        var _this = this;
        if (args.data.x >= args.data.swipeLimits.threshold * 2) {
            setTimeout(function () {
                var list = args.object;
                var event = _this.currentDateEventList.getItem(args.index);
                event.IsDone = true;
                event.DoneDate = new Date();
                list.notifySwipeToExecuteFinished();
            }, 200);
        }
        this.opacity = args.data.x / (args.data.swipeLimits.threshold * 2);
    };
    TimelineComponent.prototype.onPullToRefresh = function (args) {
        var _this = this;
        var time = Math.floor(Math.random() * 10);
        setTimeout(function () {
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
            _this.petEventService.CreateEvents("");
            _this.currentDateEventList.splice(0);
            _this.currentDateEventList.push(_this.petEventService.GetEventListByDate(_this.petId, _this.currentDate));
            _this.sortEvents();
            var list = _this.page.getViewById('eventListView');
            list.refresh();
        }, time);
    };
    TimelineComponent.prototype.turnBlurOn = function () {
        var _this = this;
        if (this.profileImagePath) {
            var imageView_1 = this.page.getViewById('profileImageBlured');
            setTimeout(function () {
                _this.blur
                    .on(imageView_1, "kitty", 25)
                    .then(function (imageSource) {
                    var image = _this.page.getViewById("profileImageBlured");
                    image.imageSource = imageSource;
                });
            }, 200);
        }
    };
    TimelineComponent.prototype.resetBlur = function () {
        var _this = this;
        var that = this;
        this.blur
            .off("kitty")
            .then(function (src) {
            var image = _this.page.getViewById("profileImageBlured");
            image.imageSource = ImageSource.fromFile(_this.profileImagePath);
            that.turnBlurOn();
        });
    };
    TimelineComponent.prototype.onSelectSingleTap = function () {
        var context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    };
    TimelineComponent.prototype.startSelection = function (context) {
        var _that = this;
        context
            .authorize()
            .then(function () {
            return context.present();
        })
            .then(function (selection) {
            selection.forEach(function (selected) {
                selected.getImage().then(function (source) {
                    appSettingModule.clear();
                    var path = _that.fileProvider.SaveProfileImage(_that.petId, selected.fileUri);
                    console.log("değisen :" + path);
                    _that.profileImagePath = path;
                    appSettingModule.setString('profileImagePath', path);
                    _that.resetBlur();
                });
            });
        }).catch(function (e) {
            // console.log(e);
        });
    };
    TimelineComponent = __decorate([
        core_1.Component({
            selector: "timeline",
            moduleId: module.id,
            templateUrl: "./timeline.component.html",
            styleUrls: ["./styles/timeline.component.css"],
            providers: [CalendarStylesService_1.UserStylesService, petEvent_services_1.PetEventService, nativescript_blur_1.Blur, TimelineFileProvider_1.TimeLineFileProvider],
        }),
        __metadata("design:paramtypes", [page_1.Page, CalendarStylesService_1.UserStylesService, petEvent_services_1.PetEventService, nativescript_blur_1.Blur, ng2_translate_1.TranslateService, modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, TimelineFileProvider_1.TimeLineFileProvider])
    ], TimelineComponent);
    return TimelineComponent;
}(base_component_1.BaseComponent));
exports.TimelineComponent = TimelineComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0NBQW9FO0FBQ3BFLHNEQUFxRDtBQUNyRCwrREFBK0Q7QUFFL0Qsd0VBQW1FO0FBR25FLHVEQUF5RDtBQUV6RCxzREFBd0Q7QUFDeEQsMkRBQTZEO0FBTTdELHVEQUF5QztBQUN6Qyx1RUFBb0U7QUFNcEUsbUVBQWlFO0FBQ2pFLCtDQUFpRDtBQUVqRCw0RkFBMEY7QUFDMUYsa0VBQTJGO0FBQzNGLHlGQUFpRjtBQUVqRiw0RUFBMkU7QUFVM0U7SUFBdUMscUNBQWE7SUFxQmhELDJCQUFvQixJQUFVLEVBQVUscUJBQXdDLEVBQVUsZUFBZ0MsRUFBVSxJQUFVLEVBQVUsU0FBMkIsRUFBVSxZQUFnQyxFQUFVLEtBQXVCLEVBQVUsWUFBa0M7UUFBMVMsWUFDSSxrQkFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBR3pCO1FBSm1CLFVBQUksR0FBSixJQUFJLENBQU07UUFBVSwyQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO1FBQVUscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsVUFBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGVBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsa0JBQVksR0FBWixZQUFZLENBQW9CO1FBQVUsV0FBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxrQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFmbFMsZUFBUyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTO1lBQ3JFLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUTtTQUMxRCxDQUFDO1FBQ0ssV0FBSyxHQUFXLEdBQUcsQ0FBQTtRQW9FbkIsaUJBQVcsR0FBUSxLQUFJLENBQUM7UUE0QnhCLGFBQU8s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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybS9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBDYWxlbmRhcldlZWtWaWV3U3R5bGUsIFJhZENhbGVuZGFyLCBDYWxlbmRhclNlbGVjdGlvbkV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIjtcclxuaW1wb3J0IHsgVXNlclN0eWxlc1NlcnZpY2UgfSBmcm9tIFwiLi9zdHlsZXMvQ2FsZW5kYXJTdHlsZXNTZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIHNlZ21lbnRlZEJhck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcclxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ01vZHVsZSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0ICogYXMgaW1hZ2VwaWNrZXIgZnJvbSBcIm5hdGl2ZXNjcmlwdC1pbWFnZXBpY2tlclwiO1xyXG5pbXBvcnQgKiBhcyBJbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiO1xyXG5pbXBvcnQgeyBJbWFnZUZpbHRlcnMgfSBmcm9tICduYXRpdmVzY3JpcHQtaW1hZ2UtZmlsdGVycyc7XHJcblxyXG5cclxuaW1wb3J0IHsgQmx1ciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmx1clwiO1xyXG5pbXBvcnQgeyBQZXRFdmVudFNlcnZpY2UgfSBmcm9tIFwiLi9FdmVudFByb3ZpZGVyL3BldEV2ZW50LnNlcnZpY2VzXCI7XHJcbmltcG9ydCB7IEV2ZW50TW9kZWwgfSBmcm9tIFwiLi9FdmVudFByb3ZpZGVyL2V2ZW50TW9kZWxcIjtcclxuaW1wb3J0IHsgTGlzdFZpZXdTY3JvbGxFdmVudERhdGEsIExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSwgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tQ29udHJvbHMvYmFzZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCB7IFZpZXdCYXNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3LWJhc2Uvdmlldy1iYXNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9Nb2RhbENvbXBvbmVudHMvQ3JlYXRlRXZlbnRNb2RhbENvbXBvbmVudFwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZUZpbGVQcm92aWRlciB9IGZyb20gXCIuL0ZpbGVQcm92aWRlci9UaW1lbGluZUZpbGVQcm92aWRlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidGltZWxpbmVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3RpbWVsaW5lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc3R5bGVzL3RpbWVsaW5lLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU3R5bGVzU2VydmljZSwgUGV0RXZlbnRTZXJ2aWNlLCBCbHVyLCBUaW1lTGluZUZpbGVQcm92aWRlcl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lbGluZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByaXZhdGUgd2Vla1ZpZXdTdHlsZTogQ2FsZW5kYXJXZWVrVmlld1N0eWxlO1xyXG4gICAgcHVibGljIHByb2ZpbGVJbWFnZVBhdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50RGF0ZUV2ZW50TGlzdDogT2JzZXJ2YWJsZUFycmF5PEV2ZW50TW9kZWw+O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50RGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgbW9udGhLZXlzID0gW1wib2Nha1wiLCBcInN1YmF0XCIsIFwibWFydFwiLCBcIm5pc2FuXCIsIFwibWF5aXNcIiwgXCJoYXppcmFuXCIsXHJcbiAgICAgICAgXCJ0ZW1tdXpcIiwgXCJhZ3VzdG9zXCIsIFwiZXlsdWxcIiwgXCJla2ltXCIsIFwia2FzaW1cIiwgXCJhcmFsaWtcIlxyXG4gICAgXTtcclxuICAgIHB1YmxpYyBwZXRJZDogc3RyaW5nID0gXCIxXCJcclxuICAgIHB1YmxpYyBnZXQgQ3VycmVudERhdGVTdHIoKTogU3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgbW9udGhOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuZ2V0KFwibW9udGhOYW1lcy5cIiArIHRoaXMubW9udGhLZXlzW3RoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKV0pLnN1YnNjcmliZSgocmVzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vbnRoTmFtZSA9IHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb250aE5hbWUgKyBcIiBcIiArIHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfY2FsZW5kYXJTdHlsZVNlcnZpY2U6IFVzZXJTdHlsZXNTZXJ2aWNlLCBwcml2YXRlIHBldEV2ZW50U2VydmljZTogUGV0RXZlbnRTZXJ2aWNlLCBwcml2YXRlIGJsdXI6IEJsdXIsIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGZpbGVQcm92aWRlcjogVGltZUxpbmVGaWxlUHJvdmlkZXIpIHtcclxuICAgICAgICBzdXBlcihwYWdlLCB0cmFuc2xhdGUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGVFdmVudExpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEV2ZW50TW9kZWw+KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndlZWtWaWV3U3R5bGUgPSB0aGlzLl9jYWxlbmRhclN0eWxlU2VydmljZS5nZXRXZWVrVmlld1N0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5wcm9maWxlSW1hZ2VQYXRoID0gYXBwU2V0dGluZ01vZHVsZS5nZXRTdHJpbmcoJ3Byb2ZpbGVJbWFnZVBhdGgnKTtcclxuICAgICAgICBpZiAoIXRoaXMucHJvZmlsZUltYWdlUGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVJbWFnZVBhdGggPSB0aGlzLmZpbGVQcm92aWRlci5HZXRQcm9maWxlSW1hZ2VQYXRoKHRoaXMucGV0SWQpXHJcbiAgICAgICAgICAgIGFwcFNldHRpbmdNb2R1bGUuc2V0U3RyaW5nKCdwcm9maWxlSW1hZ2VQYXRoJywgdGhpcy5wcm9maWxlSW1hZ2VQYXRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBMb2FkZWQoYXJncykge1xyXG4gICAgICAgIHZhciBjYWxlbmRhcjogUmFkQ2FsZW5kYXIgPSA8UmFkQ2FsZW5kYXI+YXJncy5vYmplY3Q7XHJcblxyXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgY2FsZW5kYXIuYW5kcm9pZC5zZXREcmF3aW5nVmVydGljYWxHcmlkTGluZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYWxlbmRhci5hbmRyb2lkLnNldERyYXdpbmdIb3Jpem9udGFsR3JpZExpbmVzKGZhbHNlKTtcclxuICAgICAgICAgICAgY2FsZW5kYXIuYW5kcm9pZC5nZXRFdmVudEFkYXB0ZXIoKS5nZXRSZW5kZXJlcigpLnNldEV2ZW50UmVuZGVyTW9kZShjb20udGVsZXJpay53aWRnZXQuY2FsZW5kYXIuZXZlbnRzLkV2ZW50UmVuZGVyTW9kZS5UZXh0KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGVuZGFyLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHRlbENhbGVuZGFyID0gY2FsZW5kYXIubmF0aXZlVmlldztcclxuICAgICAgICBsZXQgZ2VzdHVyZU1hbmFnZXIgPSB0ZWxDYWxlbmRhci5nZXRHZXN0dXJlTWFuYWdlcigpO1xyXG4gICAgICAgIGdlc3R1cmVNYW5hZ2VyLnNldFN3aXBlRG93blRvQ2hhbmdlRGlzcGxheU1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRGF0ZVNlbGVjdGVkKGFyZ3M6IENhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY2FsZW5kYXI6IFJhZENhbGVuZGFyID0gPFJhZENhbGVuZGFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnREYXRlICE9IGNhbGVuZGFyLnNlbGVjdGVkRGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gY2FsZW5kYXIuc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlRXZlbnRMaXN0LnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUV2ZW50TGlzdC5wdXNoKHRoaXMucGV0RXZlbnRTZXJ2aWNlLkdldEV2ZW50TGlzdEJ5RGF0ZSh0aGlzLnBldElkLCB0aGlzLmN1cnJlbnREYXRlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93TW9kYWwoKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmN1cnJlbnREYXRlLnRvRGF0ZVN0cmluZygpLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZUV2ZW50TGlzdC5wdXNoKHJlc3VsdClcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdClcclxuICAgICAgICAgICAgICAgIHRoaXMuc29ydEV2ZW50cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE1haW5Db250ZXh0OiBhbnkgPSB0aGlzO1xyXG4gICAgcHVibGljIHRpbWVMaW5lTWVudUxvbmdQcmVzcyhlLCBtYWluQ29udGV4dCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gPFRpbWVsaW5lQ29tcG9uZW50Pm1haW5Db250ZXh0XHJcbiAgICAgICAgY29udGV4dC5zaG93TW9kYWwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc29ydEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlRXZlbnRMaXN0LnNvcnQoKGl0ZW06IEV2ZW50TW9kZWwsIG90aGVySXRlbTogRXZlbnRNb2RlbCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IGl0ZW0uZXZlbnREYXRlID4gb3RoZXJJdGVtLmV2ZW50RGF0ZSA/IDEgOiAwXHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgbGlzdCA9IDxSYWRMaXN0Vmlldz50aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoJ2V2ZW50TGlzdFZpZXcnKTtcclxuICAgICAgICBsaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xyXG4gICAgICAgIHZhciBsaXN0ID0gPFJhZExpc3RWaWV3PmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsaXN0LmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsaXN0LmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uSXRlbVN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSB0aGlzLmN1cnJlbnREYXRlRXZlbnRMaXN0LmdldEl0ZW0oYXJncy5pbmRleCk7XHJcbiAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9ICFldmVudC5Jc0RvbmU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyID0gMTtcclxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFByb2dyZXNzQ2hhbmdlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG5cclxuICAgICAgICBpZiAoYXJncy5kYXRhLnggPj0gYXJncy5kYXRhLnN3aXBlTGltaXRzLnRocmVzaG9sZCAqIDIpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IDxSYWRMaXN0Vmlldz5hcmdzLm9iamVjdDtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IHRoaXMuY3VycmVudERhdGVFdmVudExpc3QuZ2V0SXRlbShhcmdzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LklzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBldmVudC5Eb25lRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0Lm5vdGlmeVN3aXBlVG9FeGVjdXRlRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gYXJncy5kYXRhLnggLyAoYXJncy5kYXRhLnN3aXBlTGltaXRzLnRocmVzaG9sZCAqIDIpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblB1bGxUb1JlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgdGltZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGV0RXZlbnRTZXJ2aWNlLkNyZWF0ZUV2ZW50cyhcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVFdmVudExpc3Quc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlRXZlbnRMaXN0LnB1c2godGhpcy5wZXRFdmVudFNlcnZpY2UuR2V0RXZlbnRMaXN0QnlEYXRlKHRoaXMucGV0SWQsIHRoaXMuY3VycmVudERhdGUpKTtcclxuICAgICAgICAgICAgdGhpcy5zb3J0RXZlbnRzKCk7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ID0gPFJhZExpc3RWaWV3PnRoaXMucGFnZS5nZXRWaWV3QnlJZCgnZXZlbnRMaXN0VmlldycpO1xyXG4gICAgICAgICAgICBsaXN0LnJlZnJlc2goKTtcclxuICAgICAgICB9LCB0aW1lKTtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHR1cm5CbHVyT24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZmlsZUltYWdlUGF0aCkge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VWaWV3ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKCdwcm9maWxlSW1hZ2VCbHVyZWQnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsdXJcclxuICAgICAgICAgICAgICAgICAgICAub24oaW1hZ2VWaWV3LCBcImtpdHR5XCIsIDI1KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChpbWFnZVNvdXJjZT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2U6IGFueSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInByb2ZpbGVJbWFnZUJsdXJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UuaW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXRCbHVyKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmJsdXJcclxuICAgICAgICAgICAgLm9mZihcImtpdHR5XCIpXHJcbiAgICAgICAgICAgIC50aGVuKChzcmM/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZTogYW55ID0gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwicHJvZmlsZUltYWdlQmx1cmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuaW1hZ2VTb3VyY2UgPSBJbWFnZVNvdXJjZS5mcm9tRmlsZSh0aGlzLnByb2ZpbGVJbWFnZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgdGhhdC50dXJuQmx1ck9uKClcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uU2VsZWN0U2luZ2xlVGFwKCkge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gaW1hZ2VwaWNrZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTZWxlY3Rpb24oY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICBzdGFydFNlbGVjdGlvbihjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IF90aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgY29udGV4dFxyXG4gICAgICAgICAgICAuYXV0aG9yaXplKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucHJlc2VudCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAoc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5nZXRJbWFnZSgpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBTZXR0aW5nTW9kdWxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gX3RoYXQuZmlsZVByb3ZpZGVyLlNhdmVQcm9maWxlSW1hZ2UoX3RoYXQucGV0SWQsIHNlbGVjdGVkLmZpbGVVcmkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGXEn2lzZW4gOlwiICsgcGF0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoYXQucHJvZmlsZUltYWdlUGF0aCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFNldHRpbmdNb2R1bGUuc2V0U3RyaW5nKCdwcm9maWxlSW1hZ2VQYXRoJywgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGF0LnJlc2V0Qmx1cigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=