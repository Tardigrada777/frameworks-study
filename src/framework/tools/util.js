import { isNull, isString } from "util";

/**
 * @namespace
 * @description Служебный объект - пародия на underscore/lodash
 * @since 23.02.2018
 */
const _ = {
    /**
     * @function 
     * @param {number} ms Эмуляция загрузчика перед стартом приложения(временно)
     */

    delay(ms = 1000){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms)
        })
    },

    /**
     * 
     * @param {any} d 
     * @description Проверяет является ли переданная сущность indefined
     * @returns {boolean}
     *
     */
    isUndefined(d){
        return typeof d === 'undefined';
    },

    /**
     * @description Проверяет, является ли переданная сущность null
     * @param {any} d 
     * @returns {boolean}
     */
    isNull(d){
        return d === null;
    },

    /**
     * @description Проверяет, является ли переданная сущность String
     * @param {any} d 
     * @returns {string}
     */
    isString(d){
        return typeof d === 'string';
    }
}


export { _ }