"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable/observable");
var eventType_model_1 = require("./eventType.model");
var EventModel = /** @class */ (function (_super) {
    __extends(EventModel, _super);
    function EventModel() {
        var _this = _super.call(this) || this;
        _this.EventType = new eventType_model_1.EventTypeModel();
        return _this;
    }
    Object.defineProperty(EventModel.prototype, "eventDate", {
        get: function () {
            return this._eventDate;
        },
        set: function (value) {
            this._eventDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventModel.prototype, "eventTime", {
        get: function () {
            var hour = "00".substring(0, "00".length - this.eventDate.getHours().toString().length) + this.eventDate.getHours();
            var min = "00".substring(0, "00".length - this.eventDate.getMinutes().toString().length) + this.eventDate.getMinutes();
            return hour + " : " + min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventModel.prototype, "DoneTimeStr", {
        get: function () {
            if (this.DoneDate) {
                var hour = "00".substring(0, "00".length - this.DoneDate.getHours().toString().length) + this.DoneDate.getHours();
                var min = "00".substring(0, "00".length - this.DoneDate.getMinutes().toString().length) + this.DoneDate.getMinutes();
                // var sec = "00".substring(0, "00".length - this.DoneDate.getSeconds().toString().length) + this.DoneDate.getSeconds()
                return hour + " : " + min;
            }
        },
        enumerable: true,
        configurable: true
    });
    return EventModel;
}(observable_1.Observable));
exports.EventModel = EventModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBeUU7QUFDekUscURBQW1EO0FBRW5EO0lBQWdDLDhCQUFVO0lBQ3RDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdDQUFjLEVBQUUsQ0FBQzs7SUFDMUMsQ0FBQztJQU9ELHNCQUFXLGlDQUFTO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQXFCLEtBQVc7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyxpQ0FBUzthQUFwQjtZQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ25ILElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ3RILE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU9ELHNCQUFXLG1DQUFXO2FBQXRCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNqSCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDcEgsdUhBQXVIO2dCQUN2SCxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUU7WUFDL0IsQ0FBQztRQUNMLENBQUM7OztPQUFBO0lBSUwsaUJBQUM7QUFBRCxDQUFDLEFBdkNELENBQWdDLHVCQUFVLEdBdUN6QztBQXZDWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGVNb2RlbCB9IGZyb20gXCIuL2V2ZW50VHlwZS5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5FdmVudFR5cGUgPSBuZXcgRXZlbnRUeXBlTW9kZWwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFBldElkOiBTdHJpbmc7XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2V2ZW50RGF0ZTogRGF0ZTtcclxuICAgIHB1YmxpYyBnZXQgZXZlbnREYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudERhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGV2ZW50RGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50RGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBldmVudFRpbWUoKTogU3RyaW5nIHtcclxuICAgICAgICB2YXIgaG91ciA9IFwiMDBcIi5zdWJzdHJpbmcoMCwgXCIwMFwiLmxlbmd0aCAtIHRoaXMuZXZlbnREYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5sZW5ndGgpICsgdGhpcy5ldmVudERhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgIHZhciBtaW4gPSBcIjAwXCIuc3Vic3RyaW5nKDAsIFwiMDBcIi5sZW5ndGggLSB0aGlzLmV2ZW50RGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5sZW5ndGgpICsgdGhpcy5ldmVudERhdGUuZ2V0TWludXRlcygpXHJcbiAgICAgICAgcmV0dXJuIGhvdXIgKyBcIiA6IFwiICsgbWluO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEV2ZW50VHlwZTogRXZlbnRUeXBlTW9kZWxcclxuXHJcbiAgICBwdWJsaWMgSXNEb25lOiBib29sZWFuXHJcblxyXG4gICAgcHVibGljIERvbmVEYXRlOiBEYXRlXHJcblxyXG4gICAgcHVibGljIGdldCBEb25lVGltZVN0cigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLkRvbmVEYXRlKSB7XHJcbiAgICAgICAgICAgIHZhciBob3VyID0gXCIwMFwiLnN1YnN0cmluZygwLCBcIjAwXCIubGVuZ3RoIC0gdGhpcy5Eb25lRGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkubGVuZ3RoKSArIHRoaXMuRG9uZURhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgICAgICB2YXIgbWluID0gXCIwMFwiLnN1YnN0cmluZygwLCBcIjAwXCIubGVuZ3RoIC0gdGhpcy5Eb25lRGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5sZW5ndGgpICsgdGhpcy5Eb25lRGF0ZS5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgLy8gdmFyIHNlYyA9IFwiMDBcIi5zdWJzdHJpbmcoMCwgXCIwMFwiLmxlbmd0aCAtIHRoaXMuRG9uZURhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkubGVuZ3RoKSArIHRoaXMuRG9uZURhdGUuZ2V0U2Vjb25kcygpXHJcbiAgICAgICAgICAgIHJldHVybiBob3VyICsgXCIgOiBcIiArIG1pbiA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19