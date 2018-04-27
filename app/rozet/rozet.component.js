"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var base_component_1 = require("../customControls/base.component");
var ng2_translate_1 = require("ng2-translate");
var RozetComponent = /** @class */ (function (_super) {
    __extends(RozetComponent, _super);
    function RozetComponent(page, translate) {
        var _this = _super.call(this, page, translate) || this;
        _this.page = page;
        _this.translate = translate;
        return _this;
    }
    RozetComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    };
    RozetComponent = __decorate([
        core_1.Component({
            selector: "Rozet",
            moduleId: module.id,
            templateUrl: "./rozet.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, ng2_translate_1.TranslateService])
    ], RozetComponent);
    return RozetComponent;
}(base_component_1.BaseComponent));
exports.RozetComponent = RozetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm96ZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm96ZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLHNEQUFxRDtBQUNyRCxtRUFBaUU7QUFDakUsK0NBQWlEO0FBVWpEO0lBQW9DLGtDQUFhO0lBQzdDLHdCQUFvQixJQUFVLEVBQVUsU0FBMkI7UUFBbkUsWUFDSSxrQkFBTSxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQ3pCO1FBRm1CLFVBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFTLEdBQVQsU0FBUyxDQUFrQjs7SUFFbkUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFUUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUU0QixXQUFJLEVBQXFCLGdDQUFnQjtPQUQxRCxjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELENBQW9DLDhCQUFhLEdBV2hEO0FBWFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLi9jdXN0b21Db250cm9scy9iYXNlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIm5nMi10cmFuc2xhdGVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJSb3pldFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcm96ZXQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm96ZXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwYWdlLCB0cmFuc2xhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhlIHZpZXcuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIH1cclxuXHJcbn0iXX0=