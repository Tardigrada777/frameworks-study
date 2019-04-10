import { _ } from './util'

/**
 * @class
 * @description Служебная утилита, пародия на JQuery
 * @param {DOMElement | String}el DOM-элемент
 */
class DOMManipulator{
   constructor(el){
       if(_.isString(el)){
           el = document.querySelector(el);
       }
       this.nativeElement = el;
       this.isHL = true;
   }

   /**
    * @method 
    * @description Назначает обработчик события  на элемент
    * @param {string} eventName Имя события
    * @param {func} func Функция - обработчик события 
    * @param {obj} context  Контекст (опционально)
    */
   on(eventName, func, context = null){
    func = func.bind(context);
    this.nativeElement.addEventListener(eventName, func);

    // Возвращаем для того, чтобы дать возможность цепного вызова методов
    return this;
   }
   
    /**
     * @method 
     * @description Удаляет обработчик события с элемента
     * @param {string} eventName Название события
     * @param {func} func  Функцкия обработчик-события
     */
   off(eventName, func){
    this.nativeElement.removeEventListener(eventName.func)
    return this;
   }
   
   /**
    * @method 
    * @description Возвращает стили элемента, либо добавляет к стиляем переданные в метод
    * @param {obj} styles Объект стилей {key: value}
    */
   css(styles){
    // Если стили не переданы в метод, то просто возвращаем текущие стили элемента
    if(_.isUndefined(styles)) return this.nativeElement.styles;

    // Проходим по каждому ключу объекта стилей элемента
    Object.keys(styles).forEach(key => {
        this.nativeElement.style[key] = styles[key];
    });

    return this;
   }

   /**
    * @method 
    * @description Добавляет элементу произвольный класс
    * @param {string} className Имя класса
    */
   addClass(className){
       //  Проверяем, есть ли такой класс в списке классов
       if (this.hasClass(className)){
        
        // Если есть, просто возвращаем элемент
           return this; 
       } else {
        // Если нет, добавляем в список класса переданный класс
        this.nativeElement.classList.add(className);
       }
       return this;
   }

   /**
    * @method 
    * @description Удаляет у элемента переданный класс
    * @param {string} className Имя класса 
    */
   removeClass(className){
    this.nativeElement.classList.remove(className);
    return this;
   }

   /**
    * @method 
    * @description Проверяет, есть ли в списке классов элемента переданный
    * @param {string} className Имя класса
    */
   hasClass(className){
    return this.nativeElement.classList.contains(className);
   }

   /**
    * @method 
    * @description Добавляет переданный html к html элемента
    * @param {DOMManipulator | string } html 
    */
   html(html){
    // Проверяем, вызван ли метод в цепочке методов класса DOMManipulator
    // Если да, переодпределяем html
    if(html.isHL) html = html.nativeElement.innerHTML;

    // Если нет, то html - строка
    this.nativeElement.innerHTML = html;

    return this;
   }

   /**
    * @method
    * @description Добавляет произвольный html к элементу
    * @param {DOM-element} el 
    */
   append(el){
    if(el.isHL) el = el.nativeElement;
    this.nativeElement.appendChild(el);
    return this;
   }

   /**
    * @method
    * @description Находит родительский элемент
    */
   parent(){
    // Возвращаем родительский элемент текущего элемента, делая его экземпляром DOMManipulator
    return $(this.nativeElement.parentNode);
   }

   /**
    * @method
    * @description Присваивает аттрибуту элемента новое значение
    * @param {string} nameAttr Имя аттрибута
    * @param {strung} value Значение аттрибута
    */
   attr(nameAttr, value = null){
    // Проверяем, передано ли значение аттрибута
    if(_.isNull(value)) {
        //  Если нет, то просто возвращаем этот аттрибут 
        return this.nativeElement.getAttribute(nameAttr);
    } else {
        //  Если да, присваиваем аттрибуту новое значение
        this.nativeElement.setAttribute(nameAttr, value);
        return this;
    }
   }

   /**
    * @method
    * @description Находит первый элемент по заданному селектору
    * @param {string} selector 
    */
   find(selector){
    return $(this.nativeElement.querySelector(selector));
   }

   /**
    * @method 
    * @description Возвразает  все элементы по заданному селектору
    * @param {string} selector 
    */
   findAll(selector){
    // querySelectorAll возвращает псевдомассив, поэтому вызываем для него конструктор Array.fom()
    return Array.from(this.nativeElement.querySelectorAll(selector)).map(e => $(e));
   }
}

export function $(el){
    return new DOMManipulator(el);
}