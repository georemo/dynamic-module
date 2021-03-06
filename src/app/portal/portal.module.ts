import { RouterModule, Router } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PortalComponent } from './portal.component';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: PortalComponent
            }
        ]),
        CommonModule
],
    exports: [PortalComponent],
    declarations: [PortalComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalModule { }
