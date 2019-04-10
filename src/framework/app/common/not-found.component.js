import { HLComponent } from "framework";

class NotFound extends HLComponent{
    constructor(config){
        super(config);
    }
}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: /*html*/`
      <div class="c-not-found">
        <div>
            <h2 class="red-text">404</h2>
            <a href="#"> Перейти на главную страницу </a>
        </div>
      </div>`,
    styles: /*css*/`
        .red-text {
            font-size: 72px;
        }
        .c-not-found{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    `
});