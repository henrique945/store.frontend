export interface MainTableProxy {

  /**
   * Ano analisado
   */
  ano: string;

  /**
   * É a soma do valor de todas as vendas do ano em questão
   */
  compras: string;

  /**
   * É a soma do valor de todas as compras do ano em questão
   */
  vendas: string;

  /**
   * É a soma do ICMS pago nas compras no ano em questão.
   */
  ICMS: string;

  /**
   * É a soma do valor de ST pago no ano em questão
   */
  ST: string;

}
