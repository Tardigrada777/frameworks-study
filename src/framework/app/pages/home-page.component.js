import { HLComponent, router } from "framework";
import { http } from "../..";
import { $ } from "../../tools/dom";
import { _ } from "../../tools/util";
import { modalComponent } from "../components/add-modal.component";

class HomePageComponent extends HLComponent {
    constructor(config){
        super(config);
        this.data = {
            title: 'Home-Library'
        }
    }

    afterInit(){

        _.delay(500).then(() => {
            document.querySelector('.tiles-grid').style.opacity = "1";
        })

        _.delay(700).then(() => {
            $('h1.main-logo').removeClass('main-logo-hidden');
        })
    }
}

export const  homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: /*html*/`
        <div class="container">
            <div class="row">
                <div class="tiles-grid">
                    <div    
                        data-role="tile"
                        class="bg-red" 
                        data-size="small"
                        onclick="Metro.dialog.open('#dialog-add')">
                        <span class="mif-plus icon"></span>
                    </div>
                    <div data-role="tile" class="bg-lime" data-size="small">
                        <span class="mif-chart-line icon"></span>
                    </div>
                    <div data-role="tile" data-size="small" class="col-1 row-2 bg-amber">
                        <span class="mif-clipboard icon"></span>
                    </div>
                    <div 
                        data-role="tile" 
                        data-size="small" 
                        class="col-2 row-2"
                        onclick="Metro.dialog.open('#dialog-comment')">
                        <span class="mif-comment icon"></span>
                    </div>
                    <div data-role="tile" class="bg-teal" data-size="medium">
                        <span class="mif-file-download icon"></span>
                    </div>
                    <div 
                        data-role="tile" 
                        class="bg-pink" 
                        data-size="wide">
                        <span class="mif-books icon"></span>
                    </div>
                </div>
                <h1 class="main-logo main-logo-hidden fg-blue"> {{ title }} <span class="mif-book-reference fg-magenta"></span></h1>
            </div>
            <modal-component></modal-component>
        </div>
    `,
    styles: /*css*/`
        .container{
            margin-top: 150px;
        }

        .tiles-grid{
            opacity: 0;
            transition: opacity .2s ease-in-out;
        }

        .main-logo-hidden{
            opacity: 0;
        }

        .main-logo{
            font-size: 112px;
            margin-left: auto;
            margin-top: 50px;
            font-weight: bold;
            color: white;
            text-decoration: underline;
            transition: all .6s ease;
        }
    `
});