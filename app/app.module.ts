import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';

import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { ResumeComponent } from './resume/resume.component';


])

@NgModule({
  imports:      [ BrowserModule,
                  MaterialModule.forRoot(),
                  AppRoutingModule ],
  declarations: [ AppComponent,
                  HomeComponent,
                  CenterContentComponent,
                  ResumeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
