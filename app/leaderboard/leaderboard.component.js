"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var base_component_1 = require("../customControls/base.component");
var ng2_translate_1 = require("ng2-translate");
var LeaderboardComponent = /** @class */ (function (_super) {
    __extends(LeaderboardComponent, _super);
    function LeaderboardComponent(page, translate) {
        var _this = _super.call(this, page, translate) || this;
        _this.page = page;
        _this.translate = translate;
        return _this;
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    };
    LeaderboardComponent = __decorate([
        core_1.Component({
            selector: "Leaderboard",
            moduleId: module.id,
            templateUrl: "./leaderboard.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, ng2_translate_1.TranslateService])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}(base_component_1.BaseComponent));
exports.LeaderboardComponent = LeaderboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGVhZGVyYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCxtRUFBaUU7QUFDakUsK0NBQWlEO0FBT2pEO0lBQTBDLHdDQUFhO0lBQ25ELDhCQUFvQixJQUFVLEVBQVMsU0FBMkI7UUFBbEUsWUFDSSxrQkFBTSxJQUFJLEVBQUMsU0FBUyxDQUFDLFNBQ3hCO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQU07UUFBUyxlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFbEUsQ0FBQztJQUdELHVDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFWUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBRTRCLFdBQUksRUFBb0IsZ0NBQWdCO09BRHpELG9CQUFvQixDQVdoQztJQUFELDJCQUFDO0NBQUEsQUFYRCxDQUEwQyw4QkFBYSxHQVd0RDtBQVhZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2N1c3RvbUNvbnRyb2xzL2Jhc2UuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwibmcyLXRyYW5zbGF0ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJMZWFkZXJib2FyZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbGVhZGVyYm9hcmQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGVhZGVyYm9hcmRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBhZ2UsdHJhbnNsYXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGUgdmlldy5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgfVxyXG59Il19