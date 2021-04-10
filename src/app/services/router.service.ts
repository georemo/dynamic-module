import { HttpClient } from '@angular/common/http';
import { ModuleData } from '../models/module.model';
import { Router, Route } from '@angular/router';
import { Injectable, Compiler } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  existingRoutes: BehaviorSubject<Route[]>;

  constructor(private router: Router, private compiler: Compiler, private http: HttpClient) {
    this.existingRoutes = new BehaviorSubject<Route[]>(this.routes);
  }

  private get routes(): Route[] {
    const routesToReturn = this.router.config;
    return routesToReturn.filter(x => x.path !== '');
  }

  createAndRegisterRoute(moduleToRegister: ModuleData, exports: any): any {
    console.log('starting RouterService::createAndRegisterRoute()');
    const route: Route = {
      path: moduleToRegister.path,
      loadChildren: () => exports[`${moduleToRegister.moduleName}`]
    };
    console.dir('createAndRegisterRoute/route:', JSON.stringify(route));
    this.registerRoute(route);
  }

  routeIsRegistered(path: string): boolean {
    return this.router.config.filter(r => r.path === path).length > 0;
  }

  registerRoute(route: any): void {
    console.log('starting registerRoute()');
    if (this.routeIsRegistered(route.path)) {
      return;
    }
    console.log('...pushing route');
    this.router.config.push(route);
    console.log('this.router.config:', this.router.config);
    this.updateRouteConfig(this.router.config);
  }

  unRegisterRoute(path: string): void {
    console.log('starting unRegisterRoute()');
    console.log('Unregister', path);
    this.updateRouteConfig(this.router.config.filter(route => route.path !== path));
  }

  private updateRouteConfig(config: any): void {
    console.log('starting updateRouteConfig()');
    this.router.resetConfig(config);
    this.existingRoutes.next(this.routes);
  }
}
