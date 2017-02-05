import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
//import 'rxjs/add/operator/switchMap';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-forum-form',
    templateUrl: './forum-form.component.html',
    styleUrls: ['./forum-form.component.scss']
})

export class ForumFormComponent implements OnInit {

    title: string;
    description: string;

    item: FirebaseListObservable<any[]>;
    forum_id;

    constructor(
        private af: AngularFire,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.forum_id = this.route.snapshot.params['id'];
        
        if(this.forum_id){
            this.item = af.database.list('/forums/' + this.forum_id);//,  { preserveSnapshot: true });
            console.log(this.forum_id);        
        }
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
