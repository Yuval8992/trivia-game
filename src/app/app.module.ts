import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './layout/header/header.component';
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { TriviaContainerModule } from './modules/trivia-container/trivia-container.module';
import * as fromApp from './store/app.reducer';
import { TriviaEffects } from './modules/trivia-container/store/trivia.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TriviaContainerModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TriviaEffects]),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
