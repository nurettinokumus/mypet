import { Observable } from "tns-core-modules/data/observable/observable";
import { EventTypeModel } from "./eventType.model";

export class EventModel extends Observable {
    constructor() {
        super();
        this.EventType = new EventTypeModel();
    }


    public PetId: String;


    private _eventDate: Date;
    public get eventDate(): Date {
        return this._eventDate;
    }
    public set eventDate(value: Date) {
        this._eventDate = value;
    }
    public get eventTime(): String {
        var hour = "00".substring(0, "00".length - this.eventDate.getHours().toString().length) + this.eventDate.getHours()
        var min = "00".substring(0, "00".length - this.eventDate.getMinutes().toString().length) + this.eventDate.getMinutes()
        return hour + " : " + min;
    }
    public EventType: EventTypeModel

    public IsDone: boolean

    public DoneDate: Date

    public get DoneTimeStr(): string {
        if (this.DoneDate) {
            var hour = "00".substring(0, "00".length - this.DoneDate.getHours().toString().length) + this.DoneDate.getHours()
            var min = "00".substring(0, "00".length - this.DoneDate.getMinutes().toString().length) + this.DoneDate.getMinutes()
            // var sec = "00".substring(0, "00".length - this.DoneDate.getSeconds().toString().length) + this.DoneDate.getSeconds()
            return hour + " : " + min ;
        }
    }



}