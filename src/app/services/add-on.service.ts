/**
 * This is also another alternative that has not worke so far
 */

import {
  Injectable,
  Injector,
  Compiler,
  ComponentRef,
  NgModuleRef,
} from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';

import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserAnimations from '@angular/platform-browser/animations';

declare const SystemJS: any;

/*
interface for gui modules
*/
export interface ModuleData {
  path: string;
  location: string;
  moduleName: string;
  rootComponent?: string;
  description: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AddOnService {
  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private moduleRef: NgModuleRef<any>
  ) { }

  loadAddon(addon: string, moduleName: string): Promise<ComponentRef<any>> {
    console.log('start loadAddon(addon: string)');
    console.log('addon>>');
    console.log(addon);
    return this.loadSystemJs(addon)
      .then((pkg: any) => pkg[moduleName])
      .then((ngModule: any) => this.compile(ngModule))
      .then((cmpRef: any) => {
        console.groupEnd();
        return cmpRef;
      }).catch((e: any) => {
        console.groupEnd();
        throw e;
      });
  }

  private loadSystemJs(addonPath: string): any {
    console.log('start loadSystemJs(addonPath)');
    console.log('addonPath>>');
    console.log(addonPath);
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));

    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));
    return SystemJS.load(addonPath);
  }

  private compile(ngModule: any): Promise<ComponentRef<any>> {
    console.log('start compile(ngModule)');
    console.log('ngModule>>');
    console.log(ngModule);
    return this.compiler
      .compileModuleAndAllComponentsAsync(ngModule)
      .then(factories => {
        const factory = factories.componentFactories.find(
          componentFactory =>
            ngModule.getViewComponent().name ===
            componentFactory.componentType.name
        );
        if (factory) {
          const cmpRef: any = factory.create(
            this.injector,
            [],
            null,
            this.moduleRef
          );
          return cmpRef;
        }
      });
  }
}
