import { HLComponent } from "framework";

class CommentComponent extends HLComponent {
    constructor(config){
        super(config);
        this.data = {
            title: 'Заметка или комментарий'
        }
    }
}

export const commentComponent = new CommentComponent({
    selector: 'comment-modal-component',
    template: /*html*/`
        <div class="dialog" id="dialog-comment" data-role="dialog">
        <div class="dialog-title">{{ title }}</div>
        <div class="dialog-content">
            <select data-role="select">
                <optgroup label="Фантастика">
                    <option value="dedicated_corei3_hp">Core i3 (hp)</option>
                    <option value="dedicated_pentium_hp">Pentium (hp)</option>
                    <option value="dedicated_smart_corei3_hp">Smart Core i3 (hp)</option>
                </optgroup>
                <optgroup label="Научная литература">
                    <option value="mini">Mini</option>
                    <option value="site">Site</option>
                    <option value="portal">Portal</option>
                </optgroup>
                <optgroup label="Фэнтези">
                    <option value="evps0">eVPS-TEST (30 дней)</option>
                    <option value="evps1" selected="selected">eVPS-1</option>
                    <option value="evps2">eVPS-2</option>
                </optgroup>
            </select>
            Длина комментария: <span id="counter">-</span>
            <textarea data-role="textarea" data-chars-counter="#counter" data-prepend="<span class='mif-leanpub'></span>"></textarea>
        </div>
        <div class="dialog-actions">
            <button class="button alert js-dialog-close">Отмена</button>
            <button class="button primary js-dialog-close">Добавить</button>
        </div>
    </div>
    `,
    styles: /*css*/``
});