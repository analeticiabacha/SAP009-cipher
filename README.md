# Você sabe como ter uma senha segura?
Primeiro projeto desenvolvido para o Bootcamp da Laboratória. Essa aplicação permite que o usuário codifique ou descodifique suas senhas de forma segura, mostrando na prática a Cifra de César. Essa aplicação traz segurança para as senhas dos usuários.

## Índice

* [1. Sobre o Projeto](#1-Sobre)
* [2. Instruções](#2-Intruções)
* [3. Interface](#3-Interface-do-projeto)
* [4. Objetivos Alcançados](#4-Objetivos-Alcançados)

***

## 1. Sobre

Através da aplicação "Você sabe como ter uma senha segura?", o usuário poderá 
ter segurança ao utilizar suas senhas. 
A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Instruções 

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 6 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  G H I J K L M N O P Q R S T U V W X Y Z A B C D E F
* A letra A será G
* A letra B será H
* A palavra SABEDORIA será YGHKJUXOG
* A frase "Tenha uma senha segura!" será "ZKTNG ASG YKTNG YKMAXG!"

É de suma importância ressaltar que essa aplicação funcina apenas para letras 
(sejam elas maiúsculas ou minúsculas). Caso o usuário entre com caracteres 
especiais ou números, esses permanecem os mesmos e não são codificados/decodificados.

Exemplo: Considerando um offset de 3.
Frase: "O Numero da minha casa é: 159.
Codificação: R QXPHUR GD PLQKD FDVD : 159.


## 3. Interface do projeto

A interface desenvolvida foi pensada na praticidade e autonomia do usuário,
possibilitando uma maior interação. Ao topo, possui algumas informações
básicas e relevantes da cifra de césar, e instruções diretas para que o 
usuário selecione a opção que ele deseja (Codificar ou Decodificar).

<div align='center'>
<img src="https://user-images.githubusercontent.com/30864314/214058973-de134bf7-4bfb-45b9-a161-792c33502dd4.png" />
</div>
  
  
É necessário que o usuário preencha todos os campos para prosseguir 
com a funcionalidade. Caso isso não seja realizado, o sistema emite
um alerta e impede que o usuário prossiga.

<div align='center'>
<img src="https://user-images.githubusercontent.com/30864314/214058639-965f3195-b827-4406-bffa-eb7a0701f216.png" />
</div>


## 4. Objetivos alcançados
- [:star2:] Interface que permite ao usuário criptografar e descriptografar.
- [:star2:] Possibilidade de escolha do Offset (deslocamento) pelo usuário.
- [:star2:] Interface onde o usuário digite a mensagem desejada.
- [:star2:] Interface para visualização do resultado da cifra.
- [:star2:] Alerta caso algum campo não seja preenchico.
- [:star2:] Cifrar/Decifrar letras maiúculas/minúsculas.
- [:star2:] Suporte para caracteres especiais: são mantidos.
- [:star2:] Interface para visualização do resultado da cifra.
- [:star2:] REDME com definição da aplicação.
