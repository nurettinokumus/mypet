"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var page_1 = require("tns-core-modules/ui/page/page");
var eventModel_1 = require("../EventProvider/eventModel");
var eventType_model_1 = require("../EventProvider/eventType.model");
var ModalViewComponent = /** @class */ (function () {
    function ModalViewComponent(params, page) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.eventTypeList = new Array();
        this.currentdate = new Date(params.context);
        var event1 = new eventType_model_1.EventTypeModel();
        event1.Key = "mama";
        event1.TypeDetail = "test";
        event1.TypeName = "Mama Zamanı";
        this.eventTypeList.push(event1);
        var event2 = new eventType_model_1.EventTypeModel();
        event2.Key = "asi";
        event2.TypeDetail = "test";
        event2.TypeName = "Aşı Zamanı";
        this.eventTypeList.push(event2);
        var event3 = new eventType_model_1.EventTypeModel();
        event3.Key = "gezi";
        event3.TypeDetail = "test";
        event3.TypeName = "Gezi Zamanı";
        this.eventTypeList.push(event3);
        this.page.on("unloaded", function () {
            // using the unloaded event to close the modal when there is user interaction
            // e.g. user taps outside the modal page
            _this.params.closeCallback();
        });
    }
    ModalViewComponent.prototype.ngOnInit = function () {
    };
    ModalViewComponent.prototype.onTimeChanged = function (args) {
        this.selectedTime = args.value;
    };
    ModalViewComponent.prototype.onselectedIndexChanged = function (args) {
        var bar = args.object;
        this.selectedIndex = bar.selectedIndex;
    };
    ModalViewComponent.prototype.submit = function () {
        var eventType = this.eventTypeList[this.selectedIndex];
        var newEvent = new eventModel_1.EventModel();
        var eventTime = new Date(this.currentdate.getFullYear(), this.currentdate.getMonth(), this.currentdate.getDate(), this.selectedTime.getHours(), this.selectedTime.getMinutes(), 0, 0);
        newEvent.eventDate = eventTime;
        newEvent.IsDone = false;
        newEvent.EventType.TypeName = eventType.TypeName;
        newEvent.EventType.TypeDetail = eventType.TypeDetail;
        newEvent.EventType.Key = eventType.Key;
        this.params.closeCallback(newEvent);
    };
    ModalViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./CreateEventModalComponent.html",
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogParams, page_1.Page])
    ], ModalViewComponent);
    return ModalViewComponent;
}());
exports.ModalViewComponent = ModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRXZlbnRNb2RhbENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUV2ZW50TW9kYWxDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsbUVBQTRFO0FBQzVFLHNEQUFxRDtBQUNyRCwwREFBeUQ7QUFFekQsb0VBQWtFO0FBUWxFO0lBSUksNEJBQW9CLE1BQXlCLEVBQVUsSUFBVTtRQUFqRSxpQkF5QkM7UUF6Qm1CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFrQixDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQWMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQWMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQWMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNyQiw2RUFBNkU7WUFDN0Usd0NBQXdDO1lBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFTSwwQ0FBYSxHQUFwQixVQUFxQixJQUFJO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNsQyxDQUFDO0lBQ00sbURBQXNCLEdBQTdCLFVBQThCLElBQUk7UUFDOUIsSUFBSSxHQUFHLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3pDLENBQUM7SUFHTSxtQ0FBTSxHQUFiO1FBRUksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxRQUFRLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNwTCxRQUFRLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDckQsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBdERRLGtCQUFrQjtRQUo5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQzt5Q0FLOEIsMkJBQWlCLEVBQWdCLFdBQUk7T0FKeEQsa0JBQWtCLENBdUQ5QjtJQUFELHlCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1vZGVsIH0gZnJvbSBcIi4uL0V2ZW50UHJvdmlkZXIvZXZlbnRNb2RlbFwiO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlTW9kZWwgfSBmcm9tIFwiLi4vRXZlbnRQcm92aWRlci9ldmVudFR5cGUubW9kZWxcIjtcclxuaW1wb3J0IHsgU2VnbWVudGVkQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhci9zZWdtZW50ZWQtYmFyXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9DcmVhdGVFdmVudE1vZGFsQ29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY3VycmVudGRhdGU6IERhdGU7XHJcbiAgICBwdWJsaWMgZXZlbnRUeXBlTGlzdDogQXJyYXk8RXZlbnRUeXBlTW9kZWw+XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZUxpc3QgPSBuZXcgQXJyYXk8RXZlbnRUeXBlTW9kZWw+KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ZGF0ZSA9ICBuZXcgRGF0ZShwYXJhbXMuY29udGV4dCk7XHJcblxyXG4gICAgICAgIHZhciBldmVudDEgPSBuZXcgRXZlbnRUeXBlTW9kZWwoKTtcclxuICAgICAgICBldmVudDEuS2V5ID0gXCJtYW1hXCI7XHJcbiAgICAgICAgZXZlbnQxLlR5cGVEZXRhaWwgPSBcInRlc3RcIjtcclxuICAgICAgICBldmVudDEuVHlwZU5hbWUgPSBcIk1hbWEgWmFtYW7EsVwiO1xyXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlTGlzdC5wdXNoKGV2ZW50MSk7XHJcbiAgICAgICAgdmFyIGV2ZW50MiA9IG5ldyBFdmVudFR5cGVNb2RlbCgpO1xyXG4gICAgICAgIGV2ZW50Mi5LZXkgPSBcImFzaVwiO1xyXG4gICAgICAgIGV2ZW50Mi5UeXBlRGV0YWlsID0gXCJ0ZXN0XCI7XHJcbiAgICAgICAgZXZlbnQyLlR5cGVOYW1lID0gXCJBxZ/EsSBaYW1hbsSxXCI7XHJcbiAgICAgICAgdGhpcy5ldmVudFR5cGVMaXN0LnB1c2goZXZlbnQyKTtcclxuICAgICAgICB2YXIgZXZlbnQzID0gbmV3IEV2ZW50VHlwZU1vZGVsKCk7XHJcbiAgICAgICAgZXZlbnQzLktleSA9IFwiZ2V6aVwiO1xyXG4gICAgICAgIGV2ZW50My5UeXBlRGV0YWlsID0gXCJ0ZXN0XCI7XHJcbiAgICAgICAgZXZlbnQzLlR5cGVOYW1lID0gXCJHZXppIFphbWFuxLFcIjtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZUxpc3QucHVzaChldmVudDMpO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2Uub24oXCJ1bmxvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoZSB1bmxvYWRlZCBldmVudCB0byBjbG9zZSB0aGUgbW9kYWwgd2hlbiB0aGVyZSBpcyB1c2VyIGludGVyYWN0aW9uXHJcbiAgICAgICAgICAgIC8vIGUuZy4gdXNlciB0YXBzIG91dHNpZGUgdGhlIG1vZGFsIHBhZ2VcclxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRpbWVDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZSA9IGFyZ3MudmFsdWVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbnNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICBsZXQgYmFyID0gPFNlZ21lbnRlZEJhcj5hcmdzLm9iamVjdDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXg9YmFyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkVGltZTogRGF0ZVxyXG4gICAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcblxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSB0aGlzLmV2ZW50VHlwZUxpc3RbdGhpcy5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICB2YXIgbmV3RXZlbnQgPSBuZXcgRXZlbnRNb2RlbCgpO1xyXG4gICAgICAgIHZhciBldmVudFRpbWUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRkYXRlLmdldEZ1bGxZZWFyKCksIHRoaXMuY3VycmVudGRhdGUuZ2V0TW9udGgoKSwgdGhpcy5jdXJyZW50ZGF0ZS5nZXREYXRlKCksIHRoaXMuc2VsZWN0ZWRUaW1lLmdldEhvdXJzKCksIHRoaXMuc2VsZWN0ZWRUaW1lLmdldE1pbnV0ZXMoKSwwLDApO1xyXG4gICAgICAgIG5ld0V2ZW50LmV2ZW50RGF0ZSA9IGV2ZW50VGltZTtcclxuICAgICAgICBuZXdFdmVudC5Jc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBuZXdFdmVudC5FdmVudFR5cGUuVHlwZU5hbWUgPSBldmVudFR5cGUuVHlwZU5hbWU7XHJcbiAgICAgICAgbmV3RXZlbnQuRXZlbnRUeXBlLlR5cGVEZXRhaWwgPSBldmVudFR5cGUuVHlwZURldGFpbDtcclxuICAgICAgICBuZXdFdmVudC5FdmVudFR5cGUuS2V5ID0gZXZlbnRUeXBlLktleTtcclxuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKG5ld0V2ZW50KTtcclxuICAgIH1cclxufSJdfQ==