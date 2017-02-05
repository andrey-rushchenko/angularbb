import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
//import 'rxjs/add/operator/switchMap';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-forum-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class ForumFormComponent implements OnInit {

    title: string;
    description: string;

    //items: FirebaseListObservable<any[]>;
    //forum_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private location: Location
    ) {
        //this.items = af.database.list('/forum_threads/' + this.route.snapshot.params['id']);
        //this.forum_id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
    }    

    goBack(): void {
        this.location.back();
    }

    saveForm(): void {
        this.af.database.list('/forums')
            .push({title: this.title, description: this.description})
            .then(_ => console.log('item added!'));;
        this.goBack();
    }
}
