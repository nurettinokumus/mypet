"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var timeline_component_1 = require("./timeline/timeline.component");
var angular_1 = require("nativescript-ui-calendar/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var MainMenu_1 = require("./customControls/mainMenu/MainMenu");
var rozet_component_1 = require("./rozet/rozet.component");
var info_component_1 = require("./info/info.component");
var leaderboard_component_1 = require("./leaderboard/leaderboard.component");
var profile_component_1 = require("./profile/profile.component");
var http_1 = require("@angular/http");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var ng2_translate_1 = require("ng2-translate");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_2 = require("nativescript-angular/http");
var CreateEventModalComponent_1 = require("./timeline/ModalComponents/CreateEventModalComponent");
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                angular_1.NativeScriptUICalendarModule,
                angular_2.NativeScriptUIListViewModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_1.Http]
                }),
                // ModalDialogService,
                http_2.NativeScriptHttpModule
            ],
            declarations: [
                MainMenu_1.MainMenu,
                app_component_1.AppComponent,
                timeline_component_1.TimelineComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                rozet_component_1.RozetComponent,
                info_component_1.InfoComponent,
                leaderboard_component_1.LeaderboardComponent,
                profile_component_1.ProfileComponent,
                CreateEventModalComponent_1.ModalViewComponent
            ],
            providers: [
                item_service_1.ItemService,
                modal_dialog_1.ModalDialogService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            entryComponents: [CreateEventModalComponent_1.ModalViewComponent]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsb0VBQWtFO0FBQ2xFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsK0RBQThEO0FBQzlELDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFDdEQsNkVBQTJFO0FBQzNFLGlFQUErRDtBQUMvRCxzQ0FBcUM7QUFDckMsa0VBQXVFO0FBRXZFLCtDQUF3RjtBQUV4RiwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsa0dBQTBGO0FBRzFGLCtCQUFzQyxJQUFVO0lBQzVDLE1BQU0sQ0FBQyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUZELHNEQUVDO0FBMkNEO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QiwrQkFBZSxDQUFDLE9BQU8sQ0FBQztvQkFDcEIsT0FBTyxFQUFFLCtCQUFlO29CQUN4QixVQUFVLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO2lCQUNmLENBQUM7Z0JBQ0Ysc0JBQXNCO2dCQUN0Qiw2QkFBc0I7YUFDekI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsbUJBQVE7Z0JBQ1IsNEJBQVk7Z0JBQ1osc0NBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLDRDQUFvQjtnQkFDcEIsb0NBQWdCO2dCQUNoQiw4Q0FBa0I7YUFDckI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsaUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELGVBQWUsRUFBRSxDQUFDLDhDQUFrQixDQUFDO1NBQ3hDLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE1haW5NZW51IH0gZnJvbSBcIi4vY3VzdG9tQ29udHJvbHMvbWFpbk1lbnUvTWFpbk1lbnVcIjtcbmltcG9ydCB7IFJvemV0Q29tcG9uZW50IH0gZnJvbSBcIi4vcm96ZXQvcm96ZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJbmZvQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5mby9pbmZvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGVhZGVyYm9hcmRDb21wb25lbnQgfSBmcm9tIFwiLi9sZWFkZXJib2FyZC9sZWFkZXJib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZVN0YXRpY0xvYWRlciB9IGZyb20gXCJuZzItdHJhbnNsYXRlXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vdGltZWxpbmUvTW9kYWxDb21wb25lbnRzL0NyZWF0ZUV2ZW50TW9kYWxDb21wb25lbnRcIjtcbmltcG9ydCB7IFRpbWVMaW5lRmlsZVByb3ZpZGVyIH0gZnJvbSBcIi4vdGltZWxpbmUvRmlsZVByb3ZpZGVyL1RpbWVsaW5lRmlsZVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVMb2FkZXIoaHR0cDogSHR0cCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRlU3RhdGljTG9hZGVyKGh0dHAsICcvaTE4bicsICcuanNvbicpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoY3JlYXRlVHJhbnNsYXRlTG9hZGVyKSxcbiAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWFpbk1lbnUsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgVGltZWxpbmVDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBSb3pldENvbXBvbmVudCxcbiAgICAgICAgSW5mb0NvbXBvbmVudCxcbiAgICAgICAgTGVhZGVyYm9hcmRDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgICAgIE1vZGFsVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbTW9kYWxWaWV3Q29tcG9uZW50XVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==