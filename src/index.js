function validarBandeiraCartao(numeroCartao) {
    const bandeiras = [
        { nome: "Visa", regex: /^4/ },
        { nome: "MasterCard", regex: /^(5[1-5]|2[2-7][0-9]{2})/ },
        { nome: "Elo", regex: /^(4011|4312|4389|6220|650|651|652|653|654|655|656|657|658|659)/ },
        { nome: "American Express", regex: /^(34|37)/ },
        { nome: "Discover", regex: /^(6011|65|64[4-9])/ },
        { nome: "Hipercard", regex: /^6062/ }
    ];

    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return bandeira.nome;
        }
    }

    return "Bandeira desconhecida";
}

// Exemplo de uso:
const numeroCartao = "5277959558870483"; // Substitua pelo número do cartão
const bandeira = validarBandeiraCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);