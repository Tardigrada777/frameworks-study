import { _ } from '../../';
import { $ } from '../../';

export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
        this.styles = config.styles;
        this.el = null;
        this.components = config.components;
    }
    render(){
        initStyles(this.styles);
        
        this.el = $(this.selector);
        console.log('selector', this.el);
        if (!this.el) {
            throw new Error(`Component with selector ${this.selector} was not found`);
        }

        this.el.html(compileTemplate(this.template, this.data));

        initEvents.call(this);
    }
}

// Приватный метод, назначающий обработчики на заданные события
function initEvents(){

    //  Если события не были заданы, просто выходим
    if (_.isUndefined(this.events)) return

    //  Если события заданы, помещаем в объект events
    let events = this.events();

    // Проходим по каждому ключу объекта с событиями
    Object.keys(events).forEach(key => {
        
        //  В корневм элементе компонента находим 
        //  элемент, на который назначено событие
        //  и назначаем ему обработчик на 
        // заданное для него событие
        let listener = key.split(' ');
        this.el
            .find(listener[1])
            .on(listener[0], this[events[key]].bind(this))
    })
}

// Шаблонизатор (very simple)
function compileTemplate(template, data, components){
    // Проверяем, передан ли объект с данными data
    if (_.isUndefined(data)) return template;

    // С помощью regexp находим в шаблоне все вхождения
    // типа {{ <data> }} и заменяем их на содержимое соответствующего
    // поля объекта data
    let regex = /\{{(.*?)}}/g;
    template = template.replace(regex, (str, d) => {
        let key = d.trim();

        // Проверяем существует  ли поле data из шаблона {{ <data> }}
        // если нет, возворащаем сам шаблон, заданный пользователем
        if (_.isUndefined(data[key])) return str;

        // Если поле в объекте data существует, вставляем в шаблон
        // его значение
        return data[key];
    });

    

    return template
}

// Кастомные стили компонента
function initStyles(styles){
    
    // Если стили не заданы, то выходим
    if (_.isUndefined(styles)) return;

    // Проверяем, существует ли тег <style>
    let existStyles = document.getElementsByTagName('style');

    if (existStyles.length === 0){
        // Если нет, создаем новый тег и вставляем в <head>
        let style = document.createElement('style');
        style.innerHTML = styles;
        document.head.appendChild(style);
    } else {
        // Если существует, добавляем стили компонента в конец тега
        existStyles[0].innerHTML += styles;
    }
}