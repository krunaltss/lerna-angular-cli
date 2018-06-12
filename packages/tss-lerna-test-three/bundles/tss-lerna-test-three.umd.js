(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tss-lerna-test-three', ['exports', '@angular/core'], factory) :
    (factory((global['tss-lerna-test-three'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestThreeService = (function () {
        function TssLernaTestThreeService() {
        }
        TssLernaTestThreeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestThreeService.ctorParameters = function () { return []; };
        /** @nocollapse */ TssLernaTestThreeService.ngInjectableDef = i0.defineInjectable({ factory: function TssLernaTestThreeService_Factory() { return new TssLernaTestThreeService(); }, token: TssLernaTestThreeService, providedIn: "root" });
        return TssLernaTestThreeService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestThreeComponent = (function () {
        function TssLernaTestThreeComponent() {
        }
        /**
         * @return {?}
         */
        TssLernaTestThreeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TssLernaTestThreeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-tss-lerna-test-three',
                        template: "\n    <p>\n      tss-lerna-test-three works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        TssLernaTestThreeComponent.ctorParameters = function () { return []; };
        return TssLernaTestThreeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TssLernaTestThreeModule = (function () {
        function TssLernaTestThreeModule() {
        }
        TssLernaTestThreeModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [TssLernaTestThreeComponent],
                        exports: [TssLernaTestThreeComponent]
                    },] },
        ];
        return TssLernaTestThreeModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TssLernaTestThreeService = TssLernaTestThreeService;
    exports.TssLernaTestThreeComponent = TssLernaTestThreeComponent;
    exports.TssLernaTestThreeModule = TssLernaTestThreeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNzLWxlcm5hLXRlc3QtdGhyZWUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90c3MtbGVybmEtdGVzdC10aHJlZS9saWIvdHNzLWxlcm5hLXRlc3QtdGhyZWUuc2VydmljZS50cyIsIm5nOi8vdHNzLWxlcm5hLXRlc3QtdGhyZWUvbGliL3Rzcy1sZXJuYS10ZXN0LXRocmVlLmNvbXBvbmVudC50cyIsIm5nOi8vdHNzLWxlcm5hLXRlc3QtdGhyZWUvbGliL3Rzcy1sZXJuYS10ZXN0LXRocmVlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRzc0xlcm5hVGVzdFRocmVlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10c3MtbGVybmEtdGVzdC10aHJlZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0c3MtbGVybmEtdGVzdC10aHJlZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVHNzTGVybmFUZXN0VGhyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRzc0xlcm5hVGVzdFRocmVlQ29tcG9uZW50IH0gZnJvbSAnLi90c3MtbGVybmEtdGVzdC10aHJlZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Rzc0xlcm5hVGVzdFRocmVlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1Rzc0xlcm5hVGVzdFRocmVlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUc3NMZXJuYVRlc3RUaHJlZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3VDQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQiw2Q0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsNERBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7eUNBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO3dCQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztxQkFDdEM7O3NDQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9