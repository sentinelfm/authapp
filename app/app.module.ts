import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { routing, appRoutingProviders } from './app.routing';
import { AuthGuard } from './auth.guard';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { ProfileComponent }  from './components/profile.component';

//services
import { Auth } from './services/auth.service';

@NgModule({
  imports:      [   //imports from angular or 3rd parties
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [   //imports developed from users
    AppComponent,
    HomeComponent,
    ProfileComponent 
//    UserComponent,
//    AboutComponent,
  ],
  bootstrap:    [ //root component 
    AppComponent 
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})
export class AppModule { }