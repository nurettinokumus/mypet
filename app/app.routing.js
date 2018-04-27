"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";
var timeline_component_1 = require("./timeline/timeline.component");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var rozet_component_1 = require("./rozet/rozet.component");
var info_component_1 = require("./info/info.component");
var leaderboard_component_1 = require("./leaderboard/leaderboard.component");
var profile_component_1 = require("./profile/profile.component");
var routes = [
    { path: "", redirectTo: "/timeline", pathMatch: "full" },
    { path: "timeline", component: timeline_component_1.TimelineComponent },
    { path: "rozet", redirectTo: "/rozet", pathMatch: "full" },
    { path: "rozet", component: rozet_component_1.RozetComponent },
    { path: "info", redirectTo: "/info", pathMatch: "full" },
    { path: "info", component: info_component_1.InfoComponent },
    { path: "leaderboard", redirectTo: "/leaderboard", pathMatch: "full" },
    { path: "leaderboard", component: leaderboard_component_1.LeaderboardComponent },
    { path: "profile", redirectTo: "/profile", pathMatch: "full" },
    { path: "profile", component: profile_component_1.ProfileComponent },
    { path: "items", redirectTo: "/item", pathMatch: "full" },
    { path: "item", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQTJEO0FBQzNELHNFQUFzRTtBQUN0RSxvRUFBa0U7QUFDbEUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSwyREFBeUQ7QUFDekQsd0RBQXNEO0FBQ3RELDZFQUEyRTtBQUMzRSxpRUFBK0Q7QUFFL0QsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBRWxELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBRTVDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBRTFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDdEUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBb0IsRUFBRTtJQUV4RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzlELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7SUFFaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN6RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtDQUN2RCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vIGltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGltZWxpbmVDb21wb25lbnQgfSBmcm9tIFwiLi90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm96ZXRDb21wb25lbnQgfSBmcm9tIFwiLi9yb3pldC9yb3pldC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEluZm9Db21wb25lbnQgfSBmcm9tIFwiLi9pbmZvL2luZm8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMZWFkZXJib2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi90aW1lbGluZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInRpbWVsaW5lXCIsIGNvbXBvbmVudDogVGltZWxpbmVDb21wb25lbnQgfSxcblxuICAgIHsgcGF0aDogXCJyb3pldFwiLCByZWRpcmVjdFRvOiBcIi9yb3pldFwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInJvemV0XCIsIGNvbXBvbmVudDogUm96ZXRDb21wb25lbnQgfSxcblxuICAgIHsgcGF0aDogXCJpbmZvXCIsIHJlZGlyZWN0VG86IFwiL2luZm9cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJpbmZvXCIsIGNvbXBvbmVudDogSW5mb0NvbXBvbmVudCB9LFxuXG4gICAgeyBwYXRoOiBcImxlYWRlcmJvYXJkXCIsIHJlZGlyZWN0VG86IFwiL2xlYWRlcmJvYXJkXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibGVhZGVyYm9hcmRcIiwgY29tcG9uZW50OiBMZWFkZXJib2FyZENvbXBvbmVudCB9LFxuXG4gICAgeyBwYXRoOiBcInByb2ZpbGVcIiwgcmVkaXJlY3RUbzogXCIvcHJvZmlsZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcInByb2ZpbGVcIiwgY29tcG9uZW50OiBQcm9maWxlQ29tcG9uZW50IH0sXG4gICAgXG4gICAgeyBwYXRoOiBcIml0ZW1zXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==