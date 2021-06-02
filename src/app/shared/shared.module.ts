import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

@NgModule({
    imports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
})
export class SharedModule { }
