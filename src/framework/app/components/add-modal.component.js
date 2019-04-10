import { HLComponent } from "framework";

class ModalComponent extends HLComponent {
    constructor(config){
        super(config);
        this.data = {
            title: 'Добавить новую книгу'
        }
    }
}

export const modalComponent = new ModalComponent({
    selector: 'add-modal-component',
    template: /*html*/`
        <div class="dialog" id="dialog-add" data-role="dialog">
        <div class="dialog-title">{{ title }}</div>
        <div class="dialog-content">
            Bassus abactors ducunt ad triticum.
            A fraternal form of manifestation is the bliss.
        </div>
        <div class="dialog-actions">
            <button class="button alert js-dialog-close">Отмена</button>
            <button class="button primary js-dialog-close">Добавить</button>
        </div>
    </div>
    `,
    styles: /*css*/``
});