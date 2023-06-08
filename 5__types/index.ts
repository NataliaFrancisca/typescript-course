// Tipos Primitivos e Tipos Novos do TS

// boolean (true or false)
let isOpen: boolean;
isOpen = false;
isOpen = true;
isOpen = false;

// string ('foo', "foo", `foo`)
let userName = 'Natalia';
let message: string;
message = "You are a shit :)";
message = 'You are nice :)';
message = `You ${userName} is nothing`;

// number (int, float, hex, binary)
let total: number;
total = 23;
total = 23.4;
total = 0xFFF0;

// array(type[])
let items: number[];
items = [1,2,2];

let totalArr: Array<number|string>;
totalArr = [10, 20, 'quatro'];

// tuple (é um array que sabemos o número de elementos dentro dele, e o tipo de cada um)
// tuple poder ter vários items
let title: [number, string]
title = [10, 'joanas'];

let studentsNameNote: [string, number, string, number];
studentsNameNote = ['maria', 10, 'joana', 10];

// enum (chave e valor)
enum Colors{
    white = '#FFF',
    black = '#000'
}

let primaryColor = Colors.black;
let secondaryColor = Colors.white;


// any (qualquer coisa) NÃO É LEGAL! tudo pode ser qualquer coisa :0
let coisa: any;
coisa = true;
coisa = 'banana';
coisa = 20;
coisa = Colors.black;

// void (vazio) - não tem retorno
function logger(){
    console.log('foo');
}

// null | undefined - não foi definido, na prática não tem diferença nenhuma
type Bla = string | undefined;
let maria: Bla;

// never => que nunca vai retornar
function error():never{
    throw new Error('error');
}

// object - não é nem string, nem array, nem number
// pode ser qualquer coisa, mas que esteja dentro do objeto
let cart: object;

cart = {
    key: 'fi'
}
