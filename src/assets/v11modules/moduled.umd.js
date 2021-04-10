(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('moduled', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.moduled = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ModuledService = /** @class */ (function () {
        function ModuledService() {
        }
        return ModuledService;
    }());
    ModuledService.ɵfac = function ModuledService_Factory(t) { return new (t || ModuledService)(); };
    ModuledService.ɵprov = i0.ɵɵdefineInjectable({ token: ModuledService, factory: ModuledService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuledService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ModuledComponent = /** @class */ (function () {
        function ModuledComponent() {
        }
        ModuledComponent.prototype.ngOnInit = function () {
        };
        return ModuledComponent;
    }());
    ModuledComponent.ɵfac = function ModuledComponent_Factory(t) { return new (t || ModuledComponent)(); };
    ModuledComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModuledComponent, selectors: [["lib-moduled"]], decls: 2, vars: 0, template: function ModuledComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " moduled works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuledComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-moduled',
                        template: "\n    <p>\n      moduled works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ModuledModule = /** @class */ (function () {
        function ModuledModule() {
        }
        return ModuledModule;
    }());
    ModuledModule.ɵfac = function ModuledModule_Factory(t) { return new (t || ModuledModule)(); };
    ModuledModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModuledModule });
    ModuledModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModuledModule, { declarations: [ModuledComponent], exports: [ModuledComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModuledModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ModuledComponent
                        ],
                        imports: [],
                        exports: [
                            ModuledComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of moduled
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModuledComponent = ModuledComponent;
    exports.ModuledModule = ModuledModule;
    exports.ModuledService = ModuledService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=moduled.umd.js.map
