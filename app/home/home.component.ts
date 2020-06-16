import { Component, OnInit } from "@angular/core";
import {WebView, LoadEventData} from "tns-core-modules/ui/web-view";
import { Page } from "tns-core-modules/ui/page";
import { TextField } from "tns-core-modules/ui/text-field";
import {Observable} from "tns-core-modules/data/observable";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { isAndroid } from "tns-core-modules/platform";



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

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    htmlString: string = "<div><h1>HtmlView demo</h1><h2>in NativeScript App</h2></div>";


    constructor() {
    }

    ngOnInit(): void {
    }

     
}
