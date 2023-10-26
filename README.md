# Newhair

## Instalação de dependências
* **Logo após clonar o projeto, execute o comando abaixo para instalar as dependências.**
```
npm install
```

## Servidor node
* **Para iniciar um servidor node com hot reload (reload a cada mudança no arquivo), execute o comando abaixo.**
```
npm run serve
```

## Build de produção
* **Para compilar o projeto e gerar uma build de produção, execute o comando abaixo.**
```
npm run build
```

## Errors
* **Caso queira uma verificação rápida de erros ou incoerências no código como variáveis não utilizadas e coisas do gênero, execute o seguinte comando:**
```
npm run lint
```

## Modelo do Json de configuração das vitrines
* **O Json deve ser aplicado na descrição opicional 2 sem qubras de linha, assim como no exemplo;**
* **Para aplica-lo deve-se usar a ferramenta de "Código fonte";**
* **Altere os campos da forma que julgar necessária, porém não remova nenhum.**
```
{"tipo": "mulher","destaque": true,"cronometro": {"ativo": true, "infinito": true, "dataFinal": "May 21, 2021 00:00:00"},"video": false, "brinde": {"ativo": true, "precoBrinde": 0.00, "precoTotal": 0.00}}
```

### Mais informações
Para mais informações acesse nossa [documentação](https://developers.wapstore.com.br/wapstore/api/v2/front) e nossas [recomendações](https://developers.wapstore.com.br/wapstore/api/v2/front/recommendations).
