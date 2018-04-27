import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { MainMenu } from "./customControls/mainMenu/MainMenu";
import { RozetComponent } from "./rozet/rozet.component";
import { InfoComponent } from "./info/info.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { Http } from "@angular/http";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { ModalViewComponent } from "./timeline/ModalComponents/CreateEventModalComponent";
import { TimeLineFileProvider } from "./timeline/FileProvider/TimelineFileProvider";

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/i18n', '.json');
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUICalendarModule,
        NativeScriptUIListViewModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        // ModalDialogService,
        NativeScriptHttpModule
    ],
    declarations: [
        MainMenu,
        AppComponent,
        TimelineComponent,
        ItemsComponent,
        ItemDetailComponent,
        RozetComponent,
        InfoComponent,
        LeaderboardComponent,
        ProfileComponent,
        ModalViewComponent
    ],
    providers: [
        ItemService,
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalViewComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
