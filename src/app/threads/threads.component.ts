import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }                   from '@angular/router';
//import 'rxjs/add/operator/switchMap';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-threads',
    templateUrl: './threads.component.html',
    styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    forum_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) {
        this.forum_id = this.route.snapshot.params['id'];
        this.items = af.database.list('/forum_threads/' + this.forum_id);
    }

    ngOnInit(): void {
    }    

    newThread(): void {
        this.router.navigate(['/thread-new/' + this.forum_id]);
    }

    deleteThread(key: string): void {
        this.af.database.list('/forum_threads/' + this.forum_id).remove(key)
            .then(_ => console.log('item deleted from ' + this.forum_id));
    }
}