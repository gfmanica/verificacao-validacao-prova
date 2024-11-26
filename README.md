# Documentação

1 - O primeiro passo para desenvolver a atividade foi iniciar um projeto usando Jest, visto que seria a tecnologia pra fazer os testes e também inserir a documentação dos casos e de cada etapa do preocesso.
![imagem do início do projeto](https://github.com/user-attachments/assets/da485cd0-f7e5-4a30-b7eb-c81b327f59b7)

2 - Em sequência, criei um arquivo README.md para inserir toda a documentação e os casos de testes necessários. Depois, comecei a ler os requisitos e então escrevi os casos de teste:
![imagem dos casos de teste](https://github.com/user-attachments/assets/cd40634e-a95f-4b7c-a0cc-1b0ecf49b7c5)

3 - Depois de fazer os casos, construí a função `calculateInvoice` para começar a desenvolver os testes. Implementei todas as regras necessárias e adicionei JSDocs para ajudar na tipagem e adicionei comentários para ajudar na documentação.
![imagem dos casos de teste](https://github.com/user-attachments/assets/f0384c67-9e93-40ba-8fac-bb47985944b9)

4 - Após criar a função do cálculo, criei o arquivo de test do jest e com base na documentação do framework, criei o primeiro caso de teste:
![imagem dos casos de teste](https://github.com/user-attachments/assets/f50d4601-cb25-4194-a25b-3fdb6e0f2aa4)

Com o teste criado, executei `npm test` e o resultado foi que o teste passou com sucesso.
![imagem dos casos de teste](https://github.com/user-attachments/assets/cd6c61bb-d44b-4d23-8b29-fe453f978e4d)

5 - Com o primeiro teste feito, foi fácil replicar o resto com base nos casos de teste já descritos
![imagem dos casos de teste](https://github.com/user-attachments/assets/5c1e3da5-d345-43ac-9533-d755719e6f1c)

Descobri a existencia do `describe` também, que cria um bloco que agrupa vários testes relacionados, e relacionei com a função que estou testando:
![imagem dos casos de teste](https://github.com/user-attachments/assets/9eaeb6c2-5074-470f-bb3a-1a9a920b4f0a)

6 - Por fim, executei o teste geral com os novos testes criados, e o resultado foi que passou com sucesso em todos os testes, incluindo com os casos em que é experado que uma excessão seja lançada.
![imagem dos casos de teste](https://github.com/user-attachments/assets/4decd28c-c1e5-4c1c-bc40-addbc77d97fa)

# Casos de teste

| Caso de teste | Cenário                                         | Entradas                                                                                                 | Saída esperada            |
| ------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------- |
| 1             | Calcula sem desconto informado                  | `[{name: 'apple', price: 50, quantity: 2}, {name: 'banana', price: 40, quantity: 5}]`, `discount: 0`     | 300.00                    |
| 2             | Calcula com desconto informado                  | `[{name: 'apple', price: 50, quantity: 2}, {name: 'banana', price: 40, quantity: 5}]`, `discount: 0.1`   | 270.00                    |
| 3             | Fatura acima de R$ 1.000 com desconto informado | `[{name: 'apple', price: 100, quantity: 7}, {name: 'banana', price: 40, quantity: 10}]`, `discount: 0.1` | 890.00                    |
| 4             | Fatura acima de R$ 1.000 sem desconto informado | `[{name: 'apple', price: 100, quantity: 8}, {name: 'banana', price: 40, quantity: 12}]`, `discount: 0`   | 1180.00                   |
| 5             | Dispara exceção com preço negativo              | `[{name: 'apple', price: 60, quantity: 5}, {name: 'banana', price: -40, quantity: 5}]`, `discount: 0.2`  | `InvalidProductException` |
| 6             | Dispara exceção com quantidade negativa         | `[{name: 'apple', price: 90, quantity: 7}, {name: 'banana', price: 40, quantity: -5}]`, `discount: 0.3`  | `InvalidProductException` |

# Resultados finais
![imagem dos casos de teste](https://github.com/user-attachments/assets/4decd28c-c1e5-4c1c-bc40-addbc77d97fa)

