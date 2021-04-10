// import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, COMPILER_OPTIONS, CUSTOM_ELEMENTS_SCHEMA, CompilerFactory, Compiler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PortalModule } from './portal/portal.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ClrIconModule } from '@clr/angular';
import { RouterService } from './services/router.service';
import { ModuleService } from './services/module.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory): Compiler {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    PortalModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      // Disabled because Compiler is not passed through correctly so PortalModule is not created successfull.
      // {
      //   path: 'portal', loadChildren: './portal/portal.module#PortalModule'
      // }
    ], { useHash: true }),
  ],
  providers: [RouterService, ModuleService,
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
