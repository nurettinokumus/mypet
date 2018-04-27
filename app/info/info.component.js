"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var base_component_1 = require("../customControls/base.component");
var ng2_translate_1 = require("ng2-translate");
var InfoComponent = /** @class */ (function (_super) {
    __extends(InfoComponent, _super);
    function InfoComponent(page, translate) {
        var _this = _super.call(this, page, translate) || this;
        _this.page = page;
        _this.translate = translate;
        return _this;
    }
    InfoComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    };
    InfoComponent = __decorate([
        core_1.Component({
            selector: "Info",
            moduleId: module.id,
            templateUrl: "./info.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page, ng2_translate_1.TranslateService])
    ], InfoComponent);
    return InfoComponent;
}(base_component_1.BaseComponent));
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsbUVBQWlFO0FBQ2pFLCtDQUFpRDtBQVFqRDtJQUFtQyxpQ0FBYTtJQUM1Qyx1QkFBb0IsSUFBVSxFQUFTLFNBQTJCO1FBQWxFLFlBQ0ksa0JBQU0sSUFBSSxFQUFDLFNBQVMsQ0FBQyxTQUN4QjtRQUZtQixVQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsZUFBUyxHQUFULFNBQVMsQ0FBa0I7O0lBRWxFLENBQUM7SUFHRCxnQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBVlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FFNEIsV0FBSSxFQUFvQixnQ0FBZ0I7T0FEekQsYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUEsQUFYRCxDQUFtQyw4QkFBYSxHQVcvQztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vY3VzdG9tQ29udHJvbHMvYmFzZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XHJcbmltcG9ydCAqIGFzIFBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJJbmZvXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pbmZvLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZm9Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBhZ2UsdHJhbnNsYXRlKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB2aWV3LlxyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcbn0iXX0=