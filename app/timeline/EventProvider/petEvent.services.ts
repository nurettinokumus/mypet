import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { EventModel } from "./eventModel";
import { EventTypeModel } from "./eventType.model";

export class PetEventService {
    constructor() {
        this.CreateEvents("2");
    }
    private _eventList: EventModel[]

    public GetEventListByDate(petId: string, date: Date): EventModel[] {

        var res = this._eventList.filter((value) => {

            return date.getFullYear() == value.eventDate.getFullYear() && date.getMonth() == value.eventDate.getMonth() && date.getDate() == value.eventDate.getDate()

        }).sort((a, b) => {

            return a.eventDate > b.eventDate ? 1 : 0
        })
        return res;
    }
    public sortEvents() {
        var res = this._eventList.sort((a) => {

            return a.IsDone ? 1 : 0
        })
        return res;
    }

    public CreateEvents(petId: string) {
        this._eventList = new Array<EventModel>();
        let now = new Date();
        for (let day = now.getUTCDate() - 10; day < now.getUTCDate() + 10; day++) {
            var stopLimit = Math.floor(Math.random() * 4)
            for (let index = 0; index < 10; index++) {
                if (index > stopLimit)
                    break;
                var event = new EventModel();
                event.PetId = petId;
                event.IsDone = false;
                event.eventDate = new Date(now.getFullYear(), now.getMonth(), day, Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), 0, 0);
                var typeLimit = Math.floor(Math.random() * 10)
                if ((typeLimit % 2) == 0) {
                    event.EventType.Key = "asi";
                    event.EventType.TypeDetail = "Puppy GR"
                    event.EventType.TypeName = "Aşı Zamanı"

                }
                else {
                    event.EventType.Key = "mama";
                    event.EventType.TypeDetail = "Puppy GR"
                    event.EventType.TypeName = "Mama Zamanı"
                }
                 this._eventList.push(event)
            }
           

        }


    }

}