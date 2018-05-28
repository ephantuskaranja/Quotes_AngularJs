import { Time } from "@angular/common";

export class Quote {
    public showAuthor:boolean;
    constructor(public id:number, public quote:string, public author:string, public postedBy:string,public timer:Date) {
        this.showAuthor=false
     }
}
