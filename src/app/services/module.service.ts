// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { ModuleData } from '../models/module.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Compiler, Inject, ReflectiveInjector, Injector, COMPILER_OPTIONS } from '@angular/core';
import { AddOnService } from './add-on.service';
import { SystemJsService } from './system-js.service';

import 'rxjs/add/operator/map';
// import { filter, map } from 'rxjs/operators';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserAnimations from '@angular/platform-browser/animations';

declare var SystemJS: any;

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  source = `http://${window.location.host}/`;

  constructor(
    private compiler: Compiler,
    private http: HttpClient,
    private svAddOn: AddOnService,
    private svSysJs: SystemJsService,
  ) {
    console.log(compiler);
  }

  loadModules(): Observable<ModuleData[]> {
    console.log('starting ModuleService::loadModules()');
    return this.http.get('./assets/modules.json')
      .map((res: any) => {
        console.log('loadModules/res:', res);
        const ret = JSON.parse(JSON.stringify(res));
        // const ret = res.json();
        console.log('loadModules/ret:', ret);
        return ret;
      });
  }

  loadModule(moduleInfo: ModuleData): Observable<any> {
    console.log('starting loadModule()');
    let url = this.source + moduleInfo.location;
    console.log('url1:', url);
    url = url.replace('/./', '/');
    console.log('url2:', url);
    return this.http.get(url)
      .map((res: any) => {
        console.log('res:', res);
        // return JSON.stringify(res);
        return res.text();
      })
      .map(source => {
        const exports: any = {}; // this will hold module exports
        const modules: any = {   // this is the list of modules accessible by plugins
          '@angular/core': AngularCore,
          '@angular/common': AngularCommon,
          '@angular/router': AngularRouter,
          '@angular/platform-browser/animations': BrowserAnimations,
          '@clr/angular': AngularClarity
        };
        // shim 'require' and eval
        const require: any = (module: any) => modules[module];
        eval(source);
        // Need to check if there is another solution for eval as this is described as 'Evil'

        this.compiler.compileModuleAndAllComponentsSync(exports[`${moduleInfo.moduleName}`]);
        // console.log(exports); // disabled as this object is cleared anyway
        return exports;
      });
  }

  // loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
  //   console.log('starting loadModuleSystemJS()');
  //   const url = this.source + moduleInfo.location;
  //   SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
  //   SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
  //   SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
  //   SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
  //   SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));

  //   console.log('loadModuleSystemJS/moduleInfo:', moduleInfo);
  //   console.log('loadModuleSystemJS/url:', url);
  //   // now, import the new module
  //   return SystemJS.import(`${url}`).then((module: any) => {
  //     console.log('loadModuleSystemJS/module:', module);
  //     return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
  //       console.dir('loadModuleSystemJS/moduleInfo:', JSON.stringify(moduleInfo));
  //       console.dir('loadModuleSystemJS/module:', JSON.stringify(module));
  //       console.dir('loadModuleSystemJS/compiled:', JSON.stringify(compiled));
  //       return module;
  //     });
  //   });
  // }
  loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
    const url = this.source + moduleInfo.location;
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));

    // now, import the new module
    return SystemJS.import(`${url}`).then((module: any) => {
      // console.log(module);
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        console.dir('loadModuleSystemJS/moduleInfo:', JSON.stringify(moduleInfo));
        console.dir('loadModuleSystemJS/module:', JSON.stringify(module));
        console.dir('loadModuleSystemJS/compiled:', JSON.stringify(compiled));
        return module;
      });
    });
  }

  loadSysJs1(moduleInfo: any): Promise<any> {
    console.log('starting ModuleService::loadSysJs()');
    const url = this.source + moduleInfo.location;
    const moduleName = moduleInfo.moduleName;
    return this.svAddOn.loadAddon(url, moduleName).then((module: any) => {
      // this.view.clear();
      // this.view.insert(cmpRef.hostView);
      console.log(module);
      return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
        console.log(compiled);
        return module;
      });
    });
  }

  loadSysJs2(moduleInfo: any): Promise<any> {
    const url = this.source + moduleInfo.location;
    return this.svSysJs.register({
      '@angular/core': AngularCore,
      '@angular/common': AngularCommon,
      '@angular/router': AngularRouter,
      '@angular/platform-browser/animations': BrowserAnimations,
      '@clr/angular': AngularClarity
    }).then(() => {
      return this.svSysJs.load(url);
    });
  }

}