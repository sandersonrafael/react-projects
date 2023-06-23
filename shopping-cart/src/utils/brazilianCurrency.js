export default function brazilianCurrency(value) {
  return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
