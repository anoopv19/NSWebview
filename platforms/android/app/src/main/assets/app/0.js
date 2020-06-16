(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center; \n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Home\">\n</ActionBar>\n\n<GridLayout>\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <!--Add your page content here-->\n            <Label text=\"🔥 NativeScript 🔥\" fontSize=\"40\"></Label>\n            <Label textWrap=\"true\"\n                text=\"Write code in the editor or drag and drop components to build a NativeScript mobile application.\"\n                class=\"h2 description-label\"></Label>\n            <Label textWrap=\"true\"\n                text=\"Scan THe QR code with your mobile device and watch the changes sync live while you play with the code.\"\n                class=\"h2 description-label\"></Label>\n                <WebView  \n                 height=\"1200px\"  src=\"http://129.213.130.18/55darktheme/\"> \n                </WebView> \n        </StackLayout> \n    </ScrollView>\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

// export function onNavigatingTo(args) {
//     const page: Page = <Page> args.object;
//     const vm = new Observable();
//     vm.set("webViewSrc", "https://docs.nativescript.org/");
//     vm.set("result", "");
//     vm.set("tftext", "https://docs.nativescript.org/");
//     page.bindingContext = vm;
// }
// export function onWebViewLoaded(webargs) {
//     const page: Page = <Page> webargs.object.page;
//     const vm = page.bindingContext;
//     const webview: WebView = <WebView> webargs.object;
//     vm.set("webViewSrc", "https://docs.nativescript.org/");
//     vm.set("result", "WebView is still loading...");
//     vm.set("enabled", false);
//         // const webview = webargs.object;
//         if (isAndroid) {
//             // Disabled the native zoom control (to enable gestures on Android)
//             webview.android.getSettings().setDomStorageEnabled(true);
//             webview.android.getSettings().setDisplayZoomControls(true);
//         }
//     webview.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
//         let message = "";
//         if (!args.error) {
//             message = `WebView finished loading of ${args.url}`;
//         } else {
//             message = `Error loading ${args.url} : ${args.error}`;
//         }
//         vm.set("result", message);
//         console.log(`WebView message - ${message}`);
//     });
// }
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.htmlString = "<div><h1>HtmlView demo</h1><h2>in NativeScript App</h2></div>";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-sidedrawer/angular/side-drawer-directives.js");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-calendar/angular/calendar-directives.js");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-chart/angular/chart-directives.js");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-dataform/angular/dataform-directives.js");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/nativescript-ui-autocomplete/angular/autocomplete-directives.js");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFdEI7QUFFakQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw2REFBYSxFQUFFO0NBQ3pDLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ2Q5Qiw4QkFBOEIsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsQzs7Ozs7OztBQ0F0SixpNEI7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQWtEO0FBVWxELHlDQUF5QztBQUN6Qyw2Q0FBNkM7QUFDN0MsbUNBQW1DO0FBQ25DLDhEQUE4RDtBQUM5RCw0QkFBNEI7QUFDNUIsMERBQTBEO0FBQzFELGdDQUFnQztBQUNoQyxJQUFJO0FBRUosNkNBQTZDO0FBQzdDLHFEQUFxRDtBQUNyRCxzQ0FBc0M7QUFDdEMseURBQXlEO0FBQ3pELDhEQUE4RDtBQUM5RCx1REFBdUQ7QUFDdkQsZ0NBQWdDO0FBR2hDLDZDQUE2QztBQUM3QywyQkFBMkI7QUFDM0Isa0ZBQWtGO0FBQ2xGLHdFQUF3RTtBQUN4RSwwRUFBMEU7QUFDMUUsWUFBWTtBQUlaLHVFQUF1RTtBQUN2RSw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLG1FQUFtRTtBQUNuRSxtQkFBbUI7QUFDbkIscUVBQXFFO0FBQ3JFLFlBQVk7QUFFWixxQ0FBcUM7QUFDckMsdURBQXVEO0FBQ3ZELFVBQVU7QUFDVixJQUFJO0FBUUo7SUFJSTtRQUhBLGVBQVUsR0FBVywrREFBK0QsQ0FBQztJQUlyRixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFSUSxhQUFhO1FBTnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7O1NBRXZDLENBQUM7O09BQ1csYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUE7QUFYeUI7Ozs7Ozs7OztBQ3hEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ2E7QUFDSjtBQUNBO0FBQ047QUFDTTtBQUNnQjtBQUN0QjtBQUNMO0FBRVg7QUFDVDtBQXNCakQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXBCdEIsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpR0FBOEI7Z0JBQzlCLDZGQUE0QjtnQkFDNUIsNkZBQTRCO2dCQUM1Qix1RkFBeUI7Z0JBQ3pCLDZGQUE0QjtnQkFDNUIsNkdBQXdDO2dCQUN4Qyx1RkFBeUI7Z0JBQ3pCLG9GQUF3QjtnQkFDeEIsdUVBQWlCO2dCQUNqQixrRkFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOERBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luOiAxNTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWxhYmVse1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiSG9tZVxcXCI+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgICAgICA8IS0tQWRkIHlvdXIgcGFnZSBjb250ZW50IGhlcmUtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwi8J+UpSBOYXRpdmVTY3JpcHQg8J+UpVxcXCIgZm9udFNpemU9XFxcIjQwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwiV3JpdGUgY29kZSBpbiB0aGUgZWRpdG9yIG9yIGRyYWcgYW5kIGRyb3AgY29tcG9uZW50cyB0byBidWlsZCBhIE5hdGl2ZVNjcmlwdCBtb2JpbGUgYXBwbGljYXRpb24uXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaDIgZGVzY3JpcHRpb24tbGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJTY2FuIFRIZSBRUiBjb2RlIHdpdGggeW91ciBtb2JpbGUgZGV2aWNlIGFuZCB3YXRjaCB0aGUgY2hhbmdlcyBzeW5jIGxpdmUgd2hpbGUgeW91IHBsYXkgd2l0aCB0aGUgY29kZS5cXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoMiBkZXNjcmlwdGlvbi1sYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFdlYlZpZXcgIFxcbiAgICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMjAwcHhcXFwiICBzcmM9XFxcImh0dHA6Ly8xMjkuMjEzLjEzMC4xOC81NWRhcmt0aGVtZS9cXFwiPiBcXG4gICAgICAgICAgICAgICAgPC9XZWJWaWV3PiBcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+IFxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtXZWJWaWV3LCBMb2FkRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS93ZWItdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuLy8gICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3Q7XG4vLyAgICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuLy8gICAgIHZtLnNldChcIndlYlZpZXdTcmNcIiwgXCJodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9cIik7XG4vLyAgICAgdm0uc2V0KFwicmVzdWx0XCIsIFwiXCIpO1xuLy8gICAgIHZtLnNldChcInRmdGV4dFwiLCBcImh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL1wiKTtcbi8vICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbldlYlZpZXdMb2FkZWQod2ViYXJncykge1xuLy8gICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gd2ViYXJncy5vYmplY3QucGFnZTtcbi8vICAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4vLyAgICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IDxXZWJWaWV3PiB3ZWJhcmdzLm9iamVjdDtcbi8vICAgICB2bS5zZXQoXCJ3ZWJWaWV3U3JjXCIsIFwiaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvXCIpO1xuLy8gICAgIHZtLnNldChcInJlc3VsdFwiLCBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiKTtcbi8vICAgICB2bS5zZXQoXCJlbmFibGVkXCIsIGZhbHNlKTtcbiAgICBcblxuLy8gICAgICAgICAvLyBjb25zdCB3ZWJ2aWV3ID0gd2ViYXJncy5vYmplY3Q7XG4vLyAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbi8vICAgICAgICAgICAgIC8vIERpc2FibGVkIHRoZSBuYXRpdmUgem9vbSBjb250cm9sICh0byBlbmFibGUgZ2VzdHVyZXMgb24gQW5kcm9pZClcbi8vICAgICAgICAgICAgIHdlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldERvbVN0b3JhZ2VFbmFibGVkKHRydWUpO1xuLy8gICAgICAgICAgICAgd2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0RGlzcGxheVpvb21Db250cm9scyh0cnVlKTtcbi8vICAgICAgICAgfVxuXG5cblxuLy8gICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgKGFyZ3M6IExvYWRFdmVudERhdGEpID0+IHtcbi8vICAgICAgICAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuLy8gICAgICAgICBpZiAoIWFyZ3MuZXJyb3IpIHtcbi8vICAgICAgICAgICAgIG1lc3NhZ2UgPSBgV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mICR7YXJncy51cmx9YDtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIG1lc3NhZ2UgPSBgRXJyb3IgbG9hZGluZyAke2FyZ3MudXJsfSA6ICR7YXJncy5lcnJvcn1gO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdm0uc2V0KFwicmVzdWx0XCIsIG1lc3NhZ2UpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgV2ViVmlldyBtZXNzYWdlIC0gJHttZXNzYWdlfWApO1xuLy8gICAgIH0pO1xuLy8gfVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGh0bWxTdHJpbmc6IHN0cmluZyA9IFwiPGRpdj48aDE+SHRtbFZpZXcgZGVtbzwvaDE+PGgyPmluIE5hdGl2ZVNjcmlwdCBBcHA8L2gyPjwvZGl2PlwiO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICAgXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==