import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { ForumsComponent }       from './forums/forums.component';
import { ForumFormComponent }    from './forum-form/forum-form.component';
import { ThreadsComponent }      from './threads/threads.component';
import { ThreadComponent }       from './thread/thread.component';
import { ThreadFormComponent }   from './thread-form/thread-form.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: ForumsComponent
    },
    {
         path: 'forum/new',
         component: ForumFormComponent
    },
    {
         path: 'forum/edit/:id',
         component: ForumFormComponent
    },
    {
         path: 'forum/:id',
         component: ThreadsComponent
    },
    {
         path: 'thread-new/:id',
         component: ThreadFormComponent
    },
    {
         path: 'thread/:id',
         component: ThreadComponent
    },
    {
        path: '**',
        component: ForumsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
