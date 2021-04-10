import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';
import { ModuleService } from '../services/module.service';
import { ModuleData } from '../models/module.model';
import { CommonModule } from '@angular/common';

// RxJS
import 'rxjs/add/operator/do';
// import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    installedModules$: any;
    errorMessage = '';
    errorVisible = false;

    constructor(private routerService: RouterService, private moduleService: ModuleService) {
    }

    ngOnInit(): void {
        console.log('starting DashboardComponent::ngOninit()');
        // please note: modules.json will alwasy return registered as false.
        this.installedModules$ = this.moduleService.loadModules().do(res =>
            res.forEach(x => {
                if (x.registered) {
                    this.registerRoute(x);
                }
            })
        );
    }

    enableModule(moduleToEnable: ModuleData): void {
        // enable or disable module
        if (this.isRegistered(moduleToEnable)) {
            this.routerService.unRegisterRoute(moduleToEnable.path);
        } else {
            this.registerRoute(moduleToEnable);
        }
    }

    isRegistered(moduleData: ModuleData): boolean {
        return this.routerService.routeIsRegistered(moduleData.path);
    }

    private registerRoute(moduleToEnable: ModuleData): any {
        console.log('starting registerRoute()');
        // load up the umd file and register the route whenever succeeded.
        this.moduleService.loadSysJs2(moduleToEnable).then((exports) => {
            this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        },
            (err) => {
                this.showError(`${moduleToEnable.moduleName}
                 could not be found, did you copy the umd file to
                ${moduleToEnable.location}?`, err);
            });
    }

    private showError(message: string, err: any): void {
        this.errorMessage = message;
        this.errorVisible = true;
        console.log(err); // Log error in console
    }

    closeError(): void {
        this.errorVisible = false;
    }
}
