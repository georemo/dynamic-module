/**
 * 1. Adopted from: https://stackoverflow.com/questions/59634659/
 * systemjs-6-x-set-register-modules-or-provide-mapping-when-dynamically-loading-mo/63917606#63917606
 *
 * 2. async loadMainModule(mainModuleId: string) is based on the thread:
 * https://github.com/systemjs/systemjs/issues/1945
 */
import { Injectable } from '@angular/core';


// tslint:disable-next-line:variable-name
const SystemJS = (window as any).System;

@Injectable({
  providedIn: 'root'
})
export class SystemJsService {

  constructor() { }

  /**
   * based on the thread: https://github.com/systemjs/systemjs/issues/1945
   * \@param mainModuleId
   */
  // async loadMainModule(mainModuleId: string): Promise<void> {
  //   const system: any = (window as any).System;
  //   const rxjs: any = await system.import('rxjs');
  //   system.register('rxjs/operators', rxjs.default.operators);
  //   await system.import('hammerjs');
  //   await system.import(mainModuleId);
  // }

  // based on https://github.com/systemjs/systemjs/issues/2152#issuecomment-610470021
  // /**
  //  *
  //  * Usage: const libPath = 'https://path/to/angular/umd/library';

  //     const loader = new ModuleLoader();

  //     loader.register({
  //       '@angular/core': angularCore,
  //       '@angular/common': angularCommon,
  //       '@angular/common/http': angularCommonHttp,
  //       '@angular/forms': angularForms,
  //       '@angular/animations': angularAnimations,
  //       '@angular/platform-browser': angularPlatformBrowser,
  //       '@angular/platform-browser-dynamic': angularPlatformBrowserDynamic
  //     }).then(() => {

  //       loader.load(libPath).then(async lib => {
  //         if (lib.default) {
  //           lib = lib.default;
  //         }
  //         ... do your stuff with the module
  //       });

  //     });
  //  *
  //     Call this BEFORE calling load(url)
  //  */
  register(modules: { [name: string]: object }): Promise<this> {
    const imports: { [name: string]: string } = {};
    Object.keys(modules).forEach(key => {
      imports[key] = './lib/' + key;
    });
    const script = document.createElement('script');
    script.type = 'systemjs-importmap';
    script.textContent = JSON.stringify({ imports }, null, 3);
    document.head.appendChild(script);
    return SystemJS.prepareImport().then(() => {
      const baseUrl = this.getBaseUrl();
      Object.keys(modules).forEach(key => {
        SystemJS.set(baseUrl + 'lib/' + key, modules[key]);
      });
      return this;
    });
  }

  load(url: string): Promise<any> {
    return SystemJS.import(url);
  }

  private getBaseUrl(): string {
    let baseUrl;
    const baseEl = document.querySelector('base[href]');
    if (baseEl) {
      baseUrl = (baseEl as any).href;
    }

    if (!baseUrl && typeof location !== 'undefined') {
      baseUrl = location.href.split('#')[0].split('?')[0];
      const lastSepIndex = baseUrl.lastIndexOf('/');
      if (lastSepIndex !== -1) {
        baseUrl = baseUrl.slice(0, lastSepIndex + 1);
      }
    }
    return baseUrl;
  }
}
