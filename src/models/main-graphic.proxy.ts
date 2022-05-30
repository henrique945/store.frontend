export interface MainGraphicProxy {

  /**
   * Ano analisado
   */
  ano: string;

  /**
   * É a soma das compras, menos a soma das vendas do ano em questão
   */
  saldo: string;

  /**
   * É o percentual que o saldo represente entre a soma de todos os soldas
   */
  porcentagem: number;

  /**
   * Valor utilizado no grafico
   */
  value?: number;

}
