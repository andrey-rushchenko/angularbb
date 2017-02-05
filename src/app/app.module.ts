import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumFormComponent } from './forum/form/form.component';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadFormComponent } from './thread-form/thread-form.component';

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
        ForumsComponent,
        ForumFormComponent,
        ThreadsComponent,
        ThreadComponent,
        ThreadFormComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
