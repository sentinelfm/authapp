import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/profile.component';

//import { UserComponent } from './components/user.component';
//import { AboutComponent } from './components/about.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    } 
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);    