import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

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
        let items = af.database.list('/thread_messages/' + this.route.snapshot.params['id'],
        { query: { orderByChild: 'timestamp' }});

        let x = [];
        
        items.forEach(item => {x.push(item['title'])});
        

        x.reverse();

        alert(x);

        this.thread_id = this.route.snapshot.params['id'];




    }

    ngOnInit(): void {
    }    
}