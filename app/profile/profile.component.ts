import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { BaseComponent } from "../customControls/base.component";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent extends BaseComponent implements OnInit {
    constructor(private page: Page,private translate: TranslateService) {
        super(page,translate);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }
}