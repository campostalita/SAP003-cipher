# Baita Coin

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. O Produto](#4-0-produto)


***

## **1. Prefácio**

Cifrar significa codificar. A cifra de César foi um dos primeiros tipos de 
criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha. É um tipo de cifra por substituição, em que cada letra do texto original
é substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

O *Baita Coin* utiliza esse sistema para codificar e decodificar sua senha e com isso
deixar seus dados mais seguros.

***
## **2. Resumo do projeto**

Nesse projeto foi usado **HTML**, **JavaScript(ES6)** e **CSS**.  

O usuário *Baita Coin* tem um campo para inserir sua mensagem de texto, e logo abaixo
inserir qual será o deslocamento (offset) da sua mensagem, podendo escolher se deseja codificar ou descodificar. Após escolher qual dessas opções deseja, e ter inserido os dados, ao
clicar na opção escolhida, aparecerá logo abaixo do local onde foram inseridos os dados, a
mensagem codificada conforme deslocamento escolhido. Essa cifragem acontecerá com letras
do alfabeto de A à Z, tanto maiúsculas quanto minúsculas.

***  

## **3. O Produto**

O produto final foi definido afim de codificar a senha colocada pelo usuário para que
ela seja codificada e com isso tenha mais segurança nos seus dados. Sua interface é
simples, para que o usuário tenha acesso fácil e rápido.

* Quem são os principais usuário do produto?  
    Os principais usuários serão clientes do *Baita Coin*
* Quais são os objetivos do usuário em relação com o produto?  
Será agilidade e segurança na proteção dos seus dados.
* Como você acredita que o produto está resolvendo os problemas do usuário?  
Estará ajudando eles a terem mais segurança pra guardar seus dados. 

### Interface do usuário (UI)

A interface permite que o usuário:

* Digite um _offset_ (deslocamento) indicando quantas posições irá acontecer o deslocamento de caracteres
  quer que a cifra utilize.
* Insira uma mensagem (texto) para ser cifrada.
* Veja o resultado da mensagem cifrada.
* Insira uma mensagem (texto) para ser decifrada.
* Veja o resultado da mensagem decifrada. 
