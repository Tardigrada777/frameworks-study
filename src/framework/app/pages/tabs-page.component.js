import { HLComponent, $ } from "framework";

class TabsPageComponent extends HLComponent {
    constructor(config){
        super(config);
        this.data = {
            tabTitleOne: 'Tab title'
        }
    }
    events(){
        return {
            'click .collapsible': 'onTabClick'
        }
    }

    onTabClick({target}){
        let $target = $(target);

        if (!$target.hasClass('collapsible-header')) return

        this.el.findAll('js-tab').forEach(e => {
            e.removeClass('active');
        });
        $target.parent().addClass('active')
    }
}

const data = {
    tabTitleOne: 'Text from template'
}

const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: /*html*/`
    <div class="container">
        <div class="row">
            <ul class="collapsible col s10 offset-s1">
                <li class="js-tab">
                    <div class="collapsible-header"><i class="material-icons">filter_drama</i>{{tabTitleOne}}</div>
                    <div class="collapsible-body"><span> ${data.tabTitleOne} </span></div>
                </li>
                <li class="js-tab">
                    <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li class="js-tab">
                    <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        </div>
    </div>`,
    styles: /*css*/`
        .collapsible li.active .collapsible-body{ 
            display: block;
        }
    `
}); 

export {tabsPageComponent};