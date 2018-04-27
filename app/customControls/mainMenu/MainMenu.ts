import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar/segmented-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { AnimationCurve } from "tns-core-modules/ui/enums/enums";
import { Page } from "tns-core-modules/ui/page/page";
import { GestureEventData, TouchGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { TimelineComponent } from "../../timeline/timeline.component";
import { Color } from 'color';

@Component({
    selector: 'main-menu',
    styleUrls: ["./customControls/mainMenu/MainMenu.css"],

    templateUrl: './customControls/mainMenu/MainMenu.html'
})
export class MainMenu implements OnInit {
    @Input() selectedIndex: number;
    @Input() MainContext: any;
    @Input() onLongPress: any = (e) => { console.log("eventhandler yok") };
    constructor(private routerExtensions: RouterExtensions, private page: Page) {


    }

    ngOnInit(): void {
    }


    public longPressPrev(args: GestureEventData) {
        if (args.view.className.indexOf("selectedMenuBtn")>0) {
            this.onLongPress(args, this.MainContext);
        }
    }
    public ontouch(args: TouchGestureEventData) {
        if (args.action != "move") {
            if (args.view.scaleX == 1) {
                args.view.animate({
                    scale: { x: 1.5, y: 1.5 },
                    duration: 50,
                    curve: AnimationCurve.easeOut
                })
            } else {


                args.view.scaleX = 1;
                args.view.scaleY = 1;
            }
        }
    }
    public onNavigate(args: number) {
        let transationAnimate = {
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
                this.routerExtensions.navigate(['../profile'], transationAnimate)
                break;
            case 2:
                this.routerExtensions.navigate([''], transationAnimate)
                break;
            case 3:
                this.routerExtensions.navigate(['../rozet'], transationAnimate)
                break;
            case 4:
                this.routerExtensions.navigate(['../info'], transationAnimate)
                break;
            default:
                break;
        }
    }

    // public onselectedIndexChanged(args) {
    //     let transationAnimate = {
    //         transition: {
    //             name: "fade",
    //             duration: 200,
    //             curve: "linear"
    //         }
    //     };
    //     let bar = <SegmentedBar>args.object;
    //     switch (bar.selectedIndex) {
    //         case 0:
    //             this.routerExtensions.navigate(['../leaderboard'], transationAnimate);
    //             break;
    //         case 1:
    //             this.routerExtensions.navigate(['../profile'], transationAnimate)
    //             break;
    //         case 2:
    //             this.routerExtensions.navigate([''], transationAnimate)
    //             break;
    //         case 3:
    //             this.routerExtensions.navigate(['../rozet'], transationAnimate)
    //             break;
    //         case 4:
    //             this.routerExtensions.navigate(['../info'], transationAnimate)
    //             break;
    //         default:
    //             break;
    //     }
    // }
}
