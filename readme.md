# Objetivo
Dado o número de um cartão de crédito, validar qual é a **bandeira** daquele cartão.

---

# Tabela de Bandeiras

| Bandeira         | Início do Número                                                                    |
|------------------|-------------------------------------------------------------------------------------|
| **Visa**         | Começa sempre com o número **4**                                                    |
| **Mastercard**   | Começa com dígitos entre **51 e 52** ou entre **2221 a 2720**                       |
| **Elo**          | Pode começar com vários intervalos, como **4011**, **4312**, **4389**, entre outros |
| **American Express** | Inicia com **34** ou **37**                                                     |
| **Discover**     | Começa com **6011**, **65**, ou com a faixa de **644 a 649**                        |
| **Hipercard**    | Geralmente começa com **6062**                                                      |
| **Enroute**      | Geralmente começa com **2149**                                                      |
| **JCB**          | Geralmente começa com **3551**                                                      |
| **Voyager**      | Geralmente começa com **86993**                                                     |
| **Aura**         | Geralmente começa com **5086**                                                      |

---

# Explicação
1. **Regex para cada bandeira**:  
   Cada bandeira possui uma expressão regular que verifica se o número do cartão começa com os padrões especificados na tabela.

2. **Iteração sobre as bandeiras**:  
   A função percorre todas as expressões regulares e verifica se o número do cartão corresponde a alguma delas.

3. **Retorno da bandeira**:  
   - Se o número do cartão corresponder a uma bandeira, o nome da bandeira será retornado.
   - Caso contrário, será retornado "Bandeira desconhecida".

---

# Teste

Para testar os cartões:
- Substitua o valor de `numeroCartao` no seu código.
- Execute o script:

```bash
node src/index
```

Exemplo de saída esperada:
```json
{ valid: true, bandeira: 'visa' }
```

---

# Projeto
**cart-o-de-cr-dito-no-copilot**

---
<!-->
Quer que eu também já te entregue um modelinho de código para essa validação em Node.js? 🎯  
(Se quiser, eu já preparo com os regex prontos!)-->