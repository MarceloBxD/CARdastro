export const formatValue = (txt) => {
    var atual = txt;
    var valueModified = atual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    return valueModified;
}