(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('modulec', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.modulec = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ModulecService = /** @class */ (function () {
        function ModulecService() {
        }
        return ModulecService;
    }());
    ModulecService.ɵfac = function ModulecService_Factory(t) { return new (t || ModulecService)(); };
    ModulecService.ɵprov = i0.ɵɵdefineInjectable({ token: ModulecService, factory: ModulecService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulecService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ModulecComponent = /** @class */ (function () {
        function ModulecComponent() {
        }
        ModulecComponent.prototype.ngOnInit = function () {
        };
        return ModulecComponent;
    }());
    ModulecComponent.ɵfac = function ModulecComponent_Factory(t) { return new (t || ModulecComponent)(); };
    ModulecComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModulecComponent, selectors: [["lib-modulec"]], decls: 2, vars: 0, template: function ModulecComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " modulec works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulecComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-modulec',
                        template: "\n    <p>\n      modulec works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ModulecModule = /** @class */ (function () {
        function ModulecModule() {
        }
        return ModulecModule;
    }());
    ModulecModule.ɵfac = function ModulecModule_Factory(t) { return new (t || ModulecModule)(); };
    ModulecModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModulecModule });
    ModulecModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModulecModule, { declarations: [ModulecComponent], exports: [ModulecComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulecModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ModulecComponent
                        ],
                        imports: [],
                        exports: [
                            ModulecComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of modulec
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModulecComponent = ModulecComponent;
    exports.ModulecModule = ModulecModule;
    exports.ModulecService = ModulecService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=modulec.umd.js.map
