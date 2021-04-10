import { Route } from '@angular/router';
import { ModuleService } from '../services/module.service';
import { ModuleData } from './../models/module.model';
import { Component, OnInit, Compiler } from '@angular/core';
import { RouterService } from '../services/router.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'portal',
    templateUrl: 'portal.component.html'
})

export class PortalComponent implements OnInit {
    installedModules$: any;
    errorMessage = '';
    errorVisible = false;

    constructor(private routerService: RouterService, private moduleService: ModuleService) {
    }

    ngOnInit(): void {
        console.log('starting PortalComponent::ngOninit()');
        // please note: modules.json will alwasy return registered as false.
        this.installedModules$ = this.moduleService.loadModules().do((res: any) => {
            console.log('res:', res);
            res.forEach((x: any) => {
                console.log('x:', x);
                if (x.registered) {
                    this.registerRoute(x);
                }
            });
        });
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
        console.log('starting PortalComponent::registerRoute()');
        console.log('moduleToEnable:', moduleToEnable);
        // load up the umd file and register the route whenever succeeded.
        // this.moduleService.loadModule(moduleToEnable).subscribe((exports) => {
        //     this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        // },
        // err => console.log(err),
        // (() => {
        //     this.showError(`${moduleToEnable.moduleName}
        //     could not be found, did you copy the umd
        //     file to ${moduleToEnable.location}?`);
        // }));
        this.moduleService.loadModuleSystemJS(moduleToEnable).then((exports) => {
            this.routerService.createAndRegisterRoute(moduleToEnable, exports);
        },
            (err: any) => {
                console.log('err:', err);
                this.showError(`${moduleToEnable.moduleName}
                 could not be found, did you copy the umd file to
                ${moduleToEnable.location}?`);
            });
    }

    private showError(message: string): void {
        this.errorMessage = message;
        this.errorVisible = true;
    }

    closeError(): void {
        this.errorVisible = false;
    }
}
