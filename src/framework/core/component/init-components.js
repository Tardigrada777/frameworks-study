import { _ } from "../../tools/util";
import { renderComponent } from "./render-component";

// Приватный метод инициализации и рендера компонентов
/**
 * 
 * @param {obj} bootstrap - корневой компонент приложения
 * @param {aray} components - компоненты приложения
 * 
 * Проходит по всем компонентам и передает каждый из них в функцию renderComponent
 */
export function initComponents(bootstrap, components) {
    
    if (_.isUndefined(bootstrap)){
        throw new Error('Bootstrap component is not defined');
    } else {
        [bootstrap, ...components].forEach(renderComponent);
    }
}