import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
//import 'rxjs/add/operator/switchMap';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-thread-form',
    templateUrl: './thread-form.component.html',
    styleUrls: ['./thread-form.component.scss']
})

export class ThreadFormComponent implements OnInit {

    title: string;
    description: string;

    //items: FirebaseListObservable<any[]>;
    forum_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.forum_id = this.route.snapshot.params['id'];
        //this.items = af.database.list('/forum_threads/' + this.route.snapshot.params['id']);
    }

    ngOnInit(): void {
    }    

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.af.database.list('/forum_threads/' + this.forum_id)
            .push({title: this.title, description: this.description})
            .then(_ => console.log('item added to ' + this.forum_id));
        this.goBack();
    }
}
