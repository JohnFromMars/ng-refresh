import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class PsersonService {
    personChnaged = new Subject<string[]>();
    person: string[] = [];

    constructor(private httpClient: HttpClient) { }

    fetch() {
        this.httpClient.get<any>('https://swapi.dev/api/people')
            .pipe(map(resData => {
                return resData.results.map(m => m.name);

            })).subscribe(transFormData => {
                this.personChnaged.next(transFormData);
                console.log(transFormData);
            });
    }

    save(name: string) {
        this.person.push(name);
        this.personChnaged.next(this.person);
    }

    delete(name: string) {
        this.person = this.person.filter((person => {
            return person !== name;
        }));

        this.personChnaged.next(this.person);
        console.log(this.person);
    }
}