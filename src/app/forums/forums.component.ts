import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-forums',
    templateUrl: './forums.component.html',
    styleUrls: ['./forums.component.scss']
})
export class ForumsComponent {
    items: FirebaseListObservable<any[]>;

    constructor(
        private router: Router,
        private af: AngularFire
    ) {
        this.items = af.database.list('/forums');
    }

    add(): void {
        this.router.navigate(['/forum/new']);
    }

    edit(key: string): void {
        this.router.navigate(['/forum/edit/' + key]);
    }

    delete(key: string): void {
        this.af.database.list('/forums').remove(key).then(_ => console.log('item deleted!'));
    }
}