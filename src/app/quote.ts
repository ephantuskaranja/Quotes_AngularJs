import { Time } from "@angular/common";

export class Quote {
    public showAuthor:boolean;
    public upVotes:number;
    public downVotes:number;
    constructor(public id:number, public quote:string, public author:string, public postedBy:string,public timer:Date) {
        this.showAuthor=false;
        this.upVotes= 0;
        this.downVotes= 0;
     }
}
