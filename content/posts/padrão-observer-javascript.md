---
title: '# Padrão Observer - Javascript'
date: 2019-09-20T05:14:24.413Z
tags:
  - javascript
  - js
  - padrões-projeto
  - design-patterns
coverImage: /images/uploads/whatsapp-image-2019-09-19-at-22.06.00.jpeg
description: >-
  > É um padrão de design de software no qual um objeto (chamado de `Subject`),
  mantém uma lista de seus dependentes (`Observers`) e os notifica
  automaticamente sobre qualquer alteração de estado, geralmente invocando um de
  seus métodos.


  Este padrão define um relacionamento um para muitos; Assim, quando um objeto
  (`subject`) é atualizado, ele notifica todos outros objetos (`observers`) de
  que eles foram atualizados.
---
## O que é o Padrão Observer 

> É um padrão de design de software no qual um objeto (chamado de `Subject`), mantém uma lista de seus dependentes (`Observers`) e os notifica automaticamente sobre qualquer alteração de estado, geralmente invocando um de seus métodos.

Este padrão define um relacionamento um para muitos; Assim, quando um objeto (`subject`) é atualizado, ele notifica todos outros objetos (`observers`) de que eles foram atualizados.

Quando começamos a estudar padrões de projeto, é difícil imaginar quando podemos usar ou como podemos identificar se estão sendo usados e aonde estariam aplicados.

Se pararmos pra pensar, ele é utilizado por muitas aplicações e frameworks na web. Um dos exemplos que me vieram à cabeça ao estudar o padrão recentemente foi o "Framework Progressivo" VueJs e a lib React. De fato, é assim que a reatividade funciona em alguns desses framework's.

Imagine que temos vários estados na nossa aplicação e queremos que os estados sejam atualizados quando algo importante acontece.

## Analogia

Vamos analisar um exemplo da vida real, imagine como uma newsletter funciona:

* Seu blog preferido começa a publicar vários artigos na semana, logo você não irá querer perder as novidades.
* Você então resolve assinar a newsletter, agora sempre será avisado quando algo novo for publicado, até o momento que você não quiser mais.
* Em um segundo momento você resolve que não é mais interessante receber aquilo, então você cancela a assinatura e o blog pára de enviar as novidades.
* Enquanto você cancela, podem ter várias outras pessoas assinando e cancelando a assinatura.


No padrão observer, o *Blog* seria o *Subject* e *você* seria o *Observer*.

## Prática

Para implementar os padrões de projeto temos que ter em mente que a grande maioria deles tem um contrato a ser seguido. Ele pode ser representado em progração orientada a objetos como uma `interface`, como não temos esse recurso, iremos implementar classes que representam nossos contratos, onde outras classes podem extender delas.

### Classe Subject

Nós teremos a classe Subject que irá manter uma lista de Observers que precisam ser notificados quando ocorrer uma atualização e também terá outras responsabilidades como adicionar ou remover Observers.

## Classe Observer

O objetivo da classe Observer é implementar um método update() que será chamado pelo método Subject notify(). Onde o update será responsável por renderizar o elemento novamente.

#### Mini biblioteca

Vamos ver como seria esse código na prática implementando uma mini lib de estados e renderização similar ao que o `React` faz. Nosso projetinho será o famoso *TODO list*.

- Subject: aqui teremos o contrato/métodos que serão implementados ou herdados, ele é reponsável por notificar todos os observadores.

``` javascript
class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(subscriber => subscriber !== observer);
  }
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data))
    }
  }
}

export default Subject

```

- Observer: aqui vemos o contrato do obersevador, onde ele tem um método para atualização dos seus objetos.

```javascript
class Observer {
  update() {}
}

export default Observer

```

- Store: responsável por manter o estado da nossa aplicação, ele assina o contrato/herda de Subject, nele temos como recuperar um estado usando método `get()` e temos como atualizar usando método `update()` onde dentro dele é executado o método `notify()`, responsável por atualizar a aplicação passando o estado.

```javascript
import Subject from './Subject'

class Store extends Subject {
  constructor() {
    super()
    this.store = {}
  }
  
  update(data = {}) {
    this.store = Object.assign(this.store, data)
    this.notify(this.store)
  }
  
  get() {
    return this.store
  }
}

export default Store

```

O Exemplo completo estará no [link](https://github.com/iagocavalcante/design-pattern-js/tree/master/observer-pattern).


#### Referências usadas para elaboração do artigo

- [Use a Cabeça ! Padrões de Projetos (design Patterns) - 2ª Edição](https://www.amazon.com.br/Cabe%C3%A7a-Padr%C3%B5es-Projetos-Eric-Freeman/dp/8576081741)
- [How to Use the Observable Pattern in JavaScript](https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/) 
- [The Observer Pattern in JavaScript explained](https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/)
- [JavaScript Design Patterns: The Observer Pattern](https://www.sitepoint.com/javascript-design-patterns-observer-pattern/)
- [Observer Design Pattern tutorial in JavaScript + Fun With a Language API](https://dev.to/erikwhiting88/observer-design-pattern-tutorial-in-javascript-fun-with-a-language-api-21o3)