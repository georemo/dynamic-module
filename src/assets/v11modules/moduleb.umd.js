(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('moduleb', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.moduleb = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var ModulebService = /** @class */ (function () {
        function ModulebService() {
        }
        return ModulebService;
    }());
    ModulebService.ɵfac = function ModulebService_Factory(t) { return new (t || ModulebService)(); };
    ModulebService.ɵprov = i0.ɵɵdefineInjectable({ token: ModulebService, factory: ModulebService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulebService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var ModulebComponent = /** @class */ (function () {
        function ModulebComponent() {
        }
        ModulebComponent.prototype.ngOnInit = function () {
        };
        return ModulebComponent;
    }());
    ModulebComponent.ɵfac = function ModulebComponent_Factory(t) { return new (t || ModulebComponent)(); };
    ModulebComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModulebComponent, selectors: [["lib-moduleb"]], decls: 2, vars: 0, template: function ModulebComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " moduleb works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulebComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-moduleb',
                        template: "\n    <p>\n      moduleb works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var ModulebModule = /** @class */ (function () {
        function ModulebModule() {
        }
        return ModulebModule;
    }());
    ModulebModule.ɵfac = function ModulebModule_Factory(t) { return new (t || ModulebModule)(); };
    ModulebModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModulebModule });
    ModulebModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModulebModule, { declarations: [ModulebComponent], exports: [ModulebComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulebModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ModulebComponent
                        ],
                        imports: [],
                        exports: [
                            ModulebComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of moduleb
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModulebComponent = ModulebComponent;
    exports.ModulebModule = ModulebModule;
    exports.ModulebService = ModulebService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=moduleb.umd.js.map
