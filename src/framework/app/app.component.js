import { HLComponent } from "framework";

class AppComponent extends HLComponent {
    constructor(config){
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: /*html*/`
        <app-header></app-header>
        <router-outlet></router-outlet>
        <add-modal-component></add-modal-component>
        <window-component></window-component>
        <comment-modal-component></comment-modal-component>
    `
});