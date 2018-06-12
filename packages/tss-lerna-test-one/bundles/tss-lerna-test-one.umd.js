(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tss-lerna-test-one', ['exports', '@angular/core'], factory) :
    (factory((global['tss-lerna-test-one'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestOneService = (function () {
        function TssLernaTestOneService() {
        }
        TssLernaTestOneService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestOneService.ctorParameters = function () { return []; };
        /** @nocollapse */ TssLernaTestOneService.ngInjectableDef = i0.defineInjectable({ factory: function TssLernaTestOneService_Factory() { return new TssLernaTestOneService(); }, token: TssLernaTestOneService, providedIn: "root" });
        return TssLernaTestOneService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestOneComponent = (function () {
        function TssLernaTestOneComponent() {
        }
        /**
         * @return {?}
         */
        TssLernaTestOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TssLernaTestOneComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tss-lerna-test-one',
                        template: "\n    <p>\n      tss-lerna-test-one works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestOneComponent.ctorParameters = function () { return []; };
        return TssLernaTestOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestOneModule = (function () {
        function TssLernaTestOneModule() {
        }
        TssLernaTestOneModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TssLernaTestOneComponent],
                        exports: [TssLernaTestOneComponent]
                    },] },
        ];
        return TssLernaTestOneModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TssLernaTestOneService = TssLernaTestOneService;
    exports.TssLernaTestOneComponent = TssLernaTestOneComponent;
    exports.TssLernaTestOneModule = TssLernaTestOneModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWxlcm5hLXRlc3Qtb25lLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdHNzLWxlcm5hLXRlc3Qtb25lL2xpYi90c3MtbGVybmEtdGVzdC1vbmUuc2VydmljZS50cyIsIm5nOi8vdHNzLWxlcm5hLXRlc3Qtb25lL2xpYi90c3MtbGVybmEtdGVzdC1vbmUuY29tcG9uZW50LnRzIiwibmc6Ly90c3MtbGVybmEtdGVzdC1vbmUvbGliL3Rzcy1sZXJuYS10ZXN0LW9uZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUc3NMZXJuYVRlc3RPbmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRzcy1sZXJuYS10ZXN0LW9uZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3MtbGVybmEtdGVzdC1vbmUgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRzc0xlcm5hVGVzdE9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHNzTGVybmFUZXN0T25lQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtbGVybmEtdGVzdC1vbmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUc3NMZXJuYVRlc3RPbmVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVHNzTGVybmFUZXN0T25lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUc3NMZXJuYVRlc3RPbmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztxQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsMkNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDBEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3VDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7cUJBQ3BDOztvQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==