(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tss-lerna-test-two', ['exports', '@angular/core'], factory) :
    (factory((global['tss-lerna-test-two'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestTwoService = (function () {
        function TssLernaTestTwoService() {
        }
        TssLernaTestTwoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestTwoService.ctorParameters = function () { return []; };
        /** @nocollapse */ TssLernaTestTwoService.ngInjectableDef = i0.defineInjectable({ factory: function TssLernaTestTwoService_Factory() { return new TssLernaTestTwoService(); }, token: TssLernaTestTwoService, providedIn: "root" });
        return TssLernaTestTwoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestTwoComponent = (function () {
        function TssLernaTestTwoComponent() {
        }
        /**
         * @return {?}
         */
        TssLernaTestTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TssLernaTestTwoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tss-lerna-test-two',
                        template: "\n    <p>\n      tss-lerna-test-two works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestTwoComponent.ctorParameters = function () { return []; };
        return TssLernaTestTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestTwoModule = (function () {
        function TssLernaTestTwoModule() {
        }
        TssLernaTestTwoModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TssLernaTestTwoComponent],
                        exports: [TssLernaTestTwoComponent]
                    },] },
        ];
        return TssLernaTestTwoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TssLernaTestTwoService = TssLernaTestTwoService;
    exports.TssLernaTestTwoComponent = TssLernaTestTwoComponent;
    exports.TssLernaTestTwoModule = TssLernaTestTwoModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWxlcm5hLXRlc3QtdHdvLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdHNzLWxlcm5hLXRlc3QtdHdvL2xpYi90c3MtbGVybmEtdGVzdC10d28uc2VydmljZS50cyIsIm5nOi8vdHNzLWxlcm5hLXRlc3QtdHdvL2xpYi90c3MtbGVybmEtdGVzdC10d28uY29tcG9uZW50LnRzIiwibmc6Ly90c3MtbGVybmEtdGVzdC10d28vbGliL3Rzcy1sZXJuYS10ZXN0LXR3by5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUc3NMZXJuYVRlc3RUd29TZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRzcy1sZXJuYS10ZXN0LXR3bycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3MtbGVybmEtdGVzdC10d28gd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRzc0xlcm5hVGVzdFR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHNzTGVybmFUZXN0VHdvQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtbGVybmEtdGVzdC10d28uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUc3NMZXJuYVRlc3RUd29Db21wb25lbnRdLFxuICBleHBvcnRzOiBbVHNzTGVybmFUZXN0VHdvQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUc3NMZXJuYVRlc3RUd29Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztxQ0FKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsMkNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLDBEQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O3VDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7cUJBQ3BDOztvQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==