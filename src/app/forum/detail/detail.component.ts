import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class ForumDetailComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    forum_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.items = af.database.list('/forum_threads/' + this.route.snapshot.params['id']);
        this.forum_id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
    }    

}