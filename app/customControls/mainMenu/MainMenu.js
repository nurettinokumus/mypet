"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var enums_1 = require("tns-core-modules/ui/enums/enums");
var page_1 = require("tns-core-modules/ui/page/page");
var MainMenu = /** @class */ (function () {
    function MainMenu(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.onLongPress = function (e) { console.log("eventhandler yok"); };
    }
    MainMenu.prototype.ngOnInit = function () {
    };
    MainMenu.prototype.longPressPrev = function (args) {
        if (args.view.className.indexOf("selectedMenuBtn") > 0) {
            this.onLongPress(args, this.MainContext);
        }
    };
    MainMenu.prototype.ontouch = function (args) {
        if (args.action != "move") {
            if (args.view.scaleX == 1) {
                args.view.animate({
                    scale: { x: 1.5, y: 1.5 },
                    duration: 50,
                    curve: enums_1.AnimationCurve.easeOut
                });
            }
            else {
                args.view.scaleX = 1;
                args.view.scaleY = 1;
            }
        }
    };
    MainMenu.prototype.onNavigate = function (args) {
        var transationAnimate = {
            transition: {
                name: "fade",
                duration: 200,
                curve: "linear"
            }
        };
        switch (args) {
            case 0:
                this.routerExtensions.navigate(['../leaderboard'], transationAnimate);
                break;
            case 1:
                this.routerExtensions.navigate(['../profile'], transationAnimate);
                break;
            case 2:
                this.routerExtensions.navigate([''], transationAnimate);
                break;
            case 3:
                this.routerExtensions.navigate(['../rozet'], transationAnimate);
                break;
            case 4:
                this.routerExtensions.navigate(['../info'], transationAnimate);
                break;
            default:
                break;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MainMenu.prototype, "selectedIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MainMenu.prototype, "MainContext", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MainMenu.prototype, "onLongPress", void 0);
    MainMenu = __decorate([
        core_1.Component({
            selector: 'main-menu',
            styleUrls: ["./customControls/mainMenu/MainMenu.css"],
            templateUrl: './customControls/mainMenu/MainMenu.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], MainMenu);
    return MainMenu;
}());
exports.MainMenu = MainMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbk1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRjtBQUVsRixzREFBK0Q7QUFDL0QseURBQWlFO0FBQ2pFLHNEQUFxRDtBQVdyRDtJQUlJLGtCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRGpFLGdCQUFXLEdBQVEsVUFBQyxDQUFDLElBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBSXZFLENBQUM7SUFFRCwyQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUdNLGdDQUFhLEdBQXBCLFVBQXFCLElBQXNCO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDTCxDQUFDO0lBQ00sMEJBQU8sR0FBZCxVQUFlLElBQTJCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDZCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7b0JBQ3pCLFFBQVEsRUFBRSxFQUFFO29CQUNaLEtBQUssRUFBRSxzQkFBYyxDQUFDLE9BQU87aUJBQ2hDLENBQUMsQ0FBQTtZQUNOLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFHSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFDTSw2QkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksaUJBQWlCLEdBQUc7WUFDcEIsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDdEUsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO2dCQUNqRSxLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUE7Z0JBQ3ZELEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtnQkFDL0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO2dCQUM5RCxLQUFLLENBQUM7WUFDVjtnQkFDSSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQTVEUTtRQUFSLFlBQUssRUFBRTs7bURBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOztpREFBa0I7SUFDakI7UUFBUixZQUFLLEVBQUU7O2lEQUErRDtJQUg5RCxRQUFRO1FBTnBCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztZQUVyRCxXQUFXLEVBQUUseUNBQXlDO1NBQ3pELENBQUM7eUNBS3dDLHlCQUFnQixFQUFnQixXQUFJO09BSmpFLFFBQVEsQ0E0RnBCO0lBQUQsZUFBQztDQUFBLEFBNUZELElBNEZDO0FBNUZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNlZ21lbnRlZEJhciwgU2VnbWVudGVkQmFySXRlbSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NlZ21lbnRlZC1iYXIvc2VnbWVudGVkLWJhclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zL2VudW1zXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSwgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgVGltZWxpbmVDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21haW4tbWVudScsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY3VzdG9tQ29udHJvbHMvbWFpbk1lbnUvTWFpbk1lbnUuY3NzXCJdLFxyXG5cclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21Db250cm9scy9tYWluTWVudS9NYWluTWVudS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnUgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgTWFpbkNvbnRleHQ6IGFueTtcclxuICAgIEBJbnB1dCgpIG9uTG9uZ1ByZXNzOiBhbnkgPSAoZSkgPT4geyBjb25zb2xlLmxvZyhcImV2ZW50aGFuZGxlciB5b2tcIikgfTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxvbmdQcmVzc1ByZXYoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLnZpZXcuY2xhc3NOYW1lLmluZGV4T2YoXCJzZWxlY3RlZE1lbnVCdG5cIik+MCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uTG9uZ1ByZXNzKGFyZ3MsIHRoaXMuTWFpbkNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvbnRvdWNoKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLmFjdGlvbiAhPSBcIm1vdmVcIikge1xyXG4gICAgICAgICAgICBpZiAoYXJncy52aWV3LnNjYWxlWCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnZpZXcuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMS41LCB5OiAxLjUgfSxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGFyZ3Mudmlldy5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICAgICAgYXJncy52aWV3LnNjYWxlWSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25OYXZpZ2F0ZShhcmdzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdHJhbnNhdGlvbkFuaW1hdGUgPSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHN3aXRjaCAoYXJncykge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycuLi9sZWFkZXJib2FyZCddLCB0cmFuc2F0aW9uQW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLi4vcHJvZmlsZSddLCB0cmFuc2F0aW9uQW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycnXSwgdHJhbnNhdGlvbkFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLi4vcm96ZXQnXSwgdHJhbnNhdGlvbkFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLi4vaW5mbyddLCB0cmFuc2F0aW9uQW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBvbnNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcclxuICAgIC8vICAgICBsZXQgdHJhbnNhdGlvbkFuaW1hdGUgPSB7XHJcbiAgICAvLyAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgIC8vICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxyXG4gICAgLy8gICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgIC8vICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIGxldCBiYXIgPSA8U2VnbWVudGVkQmFyPmFyZ3Mub2JqZWN0O1xyXG4gICAgLy8gICAgIHN3aXRjaCAoYmFyLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgIC8vICAgICAgICAgY2FzZSAwOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLi4vbGVhZGVyYm9hcmQnXSwgdHJhbnNhdGlvbkFuaW1hdGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgMTpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy4uL3Byb2ZpbGUnXSwgdHJhbnNhdGlvbkFuaW1hdGUpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSAyOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnJ10sIHRyYW5zYXRpb25BbmltYXRlKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgMzpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy4uL3JvemV0J10sIHRyYW5zYXRpb25BbmltYXRlKVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgNDpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy4uL2luZm8nXSwgdHJhbnNhdGlvbkFuaW1hdGUpXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgZGVmYXVsdDpcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG4iXX0=