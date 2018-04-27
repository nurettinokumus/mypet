import { Page } from "tns-core-modules/ui/page/page";
import { TranslateService } from "ng2-translate";
import * as Platform from "platform";

export class BaseComponent  {
    constructor(private mpage : Page,private translateService: TranslateService) {
        mpage.actionBarHidden = true; 
        this.translateService.use(Platform.device.language.split("-")[0]);
    }
}