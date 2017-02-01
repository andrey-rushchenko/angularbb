import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-forum-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ForumListComponent {
    items: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.items = af.database.list('/forums');
    }
}