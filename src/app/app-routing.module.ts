import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component'
import { TriviaContainerComponent } from './modules/trivia-container/trivia-container.component';

export const routes: Routes = [
    { path: '', redirectTo: '/trivia-game', pathMatch: 'full' },
    { path: 'trivia-game', component: TriviaContainerComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }