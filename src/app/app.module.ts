import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ForumListComponent } from './forum/list/list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ThreadComponent } from './thread/thread.component';
import { ForumDetailComponent } from './forum/detail/detail.component';

/*
export const firebaseConfig = {
    apiKey: 'AIzaSyAjtlFRhOOYOQRrxuqasoTGsdksrnUKCYY',
    authDomain: 'angularbb.firebaseapp.com',
    databaseURL: 'https://angularbb.firebaseio.com',
    storageBucket: 'angularbb.appspot.com',
    messagingSenderId: '215305961679'
};
*/

export const firebaseConfig = {
    apiKey: "AIzaSyD7vn6OO418zWkWQUwkK5kivArPLd3ucgE",
    authDomain: "fireforum-b229b.firebaseapp.com",
    databaseURL: "https://fireforum-b229b.firebaseio.com",
    storageBucket: "fireforum-b229b.appspot.com",
    messagingSenderId: "655141948790"
};

/*
// Anonymous
af.auth.login({
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous,
});

// Email and password
af.auth.login({
  email: 'email@example.com',
  password: 'password',
},
{
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
});

// Social provider redirect
af.auth.login({
  provider: AuthProviders.Twitter,
  method: AuthMethods.Redirect,
});

// Social provider popup
af.auth.login({
  provider: AuthProviders.Github,
  method: AuthMethods.Popup,
});

*/
/*
const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Popup
};
*/
@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        ForumListComponent,
        ForumDetailComponent,
        ThreadComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig/*, myFirebaseAuthConfig*/)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
