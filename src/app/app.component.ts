import { Component } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods  } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private af: AngularFire) {}


    create_user(){
        this.af.auth.createUser({email: 'arg.box@gmail.com', password: '123456'});
    }

    delete_user(){
        //var user = this.af.auth.getAuth();
        // ({email: 'arg.box@gmail.com', password: '123456'});
    }

    login1() {
        this.af.auth.login({
            email: 'arg.box@gmail.com',
            password: '123456'
        },
        {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        });
    }

    login2() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Redirect
        });
    }

    login3() {
        this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
    }

    logout() {
        this.af.auth.logout();
    }
}
