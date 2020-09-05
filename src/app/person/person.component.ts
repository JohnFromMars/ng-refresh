import { Component, OnInit, OnDestroy } from "@angular/core";
import { PsersonService } from "./person.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit, OnDestroy {
    personList: string[];
    private personListSub: Subscription;

    constructor(private personServie: PsersonService) { }

    ngOnInit() {
        this.personServie.fetch();
        this.personListSub = this.personServie.personChnaged.subscribe(
            (persons) => {
                this.personList = persons;
            });
    }

    onRemove(name: string) {
        this.personServie.delete(name);
    }

    ngOnDestroy() {
        this.personListSub.unsubscribe();
    }
}
