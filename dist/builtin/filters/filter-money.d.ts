/**
 * 自定义 money 过滤器，并将 money 过滤器注册到 Liquid 中
 * money 过滤器用于将数值转换为不带货币标识的字符串
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
export declare function money(price: number): string;
