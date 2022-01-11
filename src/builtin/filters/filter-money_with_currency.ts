/**
 * 自定义 money_with_currency 过滤器，并将 money_with_currency 过滤器注册到 Liquid 中
 * money_with_currency 过滤器用于将数值转换为带货币标识的字符串
 *
 * @param {object} Liquid
 * @see https://liquidjs.com/zh-cn/tutorials/plugins.html
 */
export function moneyWithCurrency (price: number) {
  return `$ ${String(price)} USD`
};
