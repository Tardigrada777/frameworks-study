import { HLComponent } from "framework";

class WindowComponent extends HLComponent {
    constructor(config){
        super(config);
        this.data = {
            title: 'Заметка или комментарий'
        }
    }
}

export const windowComponent = new WindowComponent({
    selector: 'window-component',
    template: /*html*/`
        <div data-role="window" id="window"
            data-title="Window title"
            data-btn-close="true"
            data-btn-min="true"
            data-btn-max="true"
            class="no-visible"
            data-draggable="true"
            data-width="300" 
            data-height="160">
            On/off window system buttons with attributes.
        </div>
    `,
    styles: /*css*/``
});