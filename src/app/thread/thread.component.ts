import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
//import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-thread',
    templateUrl: './thread.component.html',
    styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    thread_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.items = af.database.list('/thread_messages/' + this.route.snapshot.params['id'],
            { query: { limitToLast: 20 }})
            .map((array) => array.reverse()) as FirebaseListObservable<any[]>;

        this.thread_id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
    }    
}