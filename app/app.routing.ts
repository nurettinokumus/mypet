import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// import { ItemsComponent } from "./item/items.component";
// import { ItemDetailComponent } from "./item/item-detail.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { RozetComponent } from "./rozet/rozet.component";
import { InfoComponent } from "./info/info.component";
import { LeaderboardComponent } from "./leaderboard/leaderboard.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    { path: "", redirectTo: "/timeline", pathMatch: "full" },
    { path: "timeline", component: TimelineComponent },

    { path: "rozet", redirectTo: "/rozet", pathMatch: "full" },
    { path: "rozet", component: RozetComponent },

    { path: "info", redirectTo: "/info", pathMatch: "full" },
    { path: "info", component: InfoComponent },

    { path: "leaderboard", redirectTo: "/leaderboard", pathMatch: "full" },
    { path: "leaderboard", component: LeaderboardComponent },

    { path: "profile", redirectTo: "/profile", pathMatch: "full" },
    { path: "profile", component: ProfileComponent },
    
    { path: "items", redirectTo: "/item", pathMatch: "full" },
    { path: "item", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }