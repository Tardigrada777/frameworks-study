import { _ } from '../../tools/util'

/**
 * 
 * @param {component} c - компонент
 * 
 * Последовательно вызывает у компонента функции жизненного цикла. 
 * 1. onInit() --> Инициализация компонента
 * 2. render() --> Рендер компонента
 * 3. afterInit() --> Сразу после рендера
 */

export function renderComponent(c){
    if (!_.isUndefined(c.onInit)) c.onInit();
    console.log('render', c)
    c.render();
    if (!_.isUndefined(c.afterInit)) c.afterInit();
}