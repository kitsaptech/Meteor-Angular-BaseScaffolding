import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-router.module';
import { AppComponent } from '../components/app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'en' } ],
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
