import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { ErrorComponent } from './components/error/error.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    ErrorComponent,
    HomeComponent,
    PersonCreateComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
