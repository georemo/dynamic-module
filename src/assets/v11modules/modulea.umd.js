(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.modulea = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ModuleaService = /** @class */ (function () {
        function ModuleaService() {
        }
        return ModuleaService;
    }());
    ModuleaService.ɵfac = function ModuleaService_Factory(t) { return new (t || ModuleaService)(); };
    ModuleaService.ɵprov = i0.ɵɵdefineInjectable({ token: ModuleaService, factory: ModuleaService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleaService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ModuleaComponent = /** @class */ (function () {
        function ModuleaComponent() {
        }
        ModuleaComponent.prototype.ngOnInit = function () {
        };
        return ModuleaComponent;
    }());
    ModuleaComponent.ɵfac = function ModuleaComponent_Factory(t) { return new (t || ModuleaComponent)(); };
    ModuleaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModuleaComponent, selectors: [["lib-modulea"]], decls: 2, vars: 0, template: function ModuleaComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " modulea works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleaComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-modulea',
                        template: "\n    <p>\n      modulea works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ModuleaModule = /** @class */ (function () {
        function ModuleaModule() {
        }
        return ModuleaModule;
    }());
    ModuleaModule.ɵfac = function ModuleaModule_Factory(t) { return new (t || ModuleaModule)(); };
    ModuleaModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModuleaModule });
    ModuleaModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModuleaModule, { declarations: [ModuleaComponent], exports: [ModuleaComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuleaModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ModuleaComponent
                        ],
                        imports: [],
                        exports: [
                            ModuleaComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of modulea
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;
    exports.ModuleaService = ModuleaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=modulea.umd.js.map
