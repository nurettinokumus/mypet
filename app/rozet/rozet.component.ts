import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { BaseComponent } from "../customControls/base.component";
import { TranslateService } from "ng2-translate";
import { ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { ModalDialogService } from "nativescript-angular/modal-dialog";

@Component({
    selector: "Rozet",
    moduleId: module.id,
    templateUrl: "./rozet.component.html"
})
export class RozetComponent extends BaseComponent implements OnInit {
    constructor(private page: Page, private translate: TranslateService) {
        super(page, translate);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for the view.
        *************************************************************/
    }

}