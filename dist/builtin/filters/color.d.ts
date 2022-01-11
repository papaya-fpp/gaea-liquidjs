/**
 * 此方法用于将颜色描述对象转换为标准的 css color 属性值
 *
 * @param {object} colorObject 将要被转换的颜色描述对象
 * @returns string
 */
interface IColorObject {
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * 自定义 color 过滤器，并将 color 过滤器注册到 Liquid 中，color 过滤器用于颜色转换
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
export declare function color(x: IColorObject): string;
export {};
