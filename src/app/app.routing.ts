import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';

import { ForumListComponent } from './forum/list/list.component';
import { ForumDetailComponent } from './forum/detail/detail.component';

import { ThreadComponent } from './thread/thread.component';

const appRoutes: Routes = [
/*
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
*/
    {
        path: '',
        component: ForumListComponent
    },
    {
         path: 'forum/:id',
         component: ForumDetailComponent
    },
    {
         path: 'thread/:id',
         component: ThreadComponent
    },
    {
        path: '**',
        component: ForumListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);