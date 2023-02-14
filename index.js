/**
 Aprendendo JS
**/

    /* atividades de JS podem ser sincronas e assincronas */

    const buyIceCream2 = async function (amount){
        if (amount < 3){
            throw new Error('Falha na atividade async 3');
        }else{
            return 'Atividade async 3 com sucesso';
        }
    }
//As atividades assincronas são executadas depois das sincronas em ordem de chamada


let person ={
    age: 20,
    name: 'Jow'
};
//objeto JS, parece uma struct de c/c++
console.log(person);


const teste = (a, b)=>{
    const c = (a*b)/2;
    console.log('(a * b)/2 ='+c)
}
//o objeto que realiza operações, e recebe parametros
teste(3, 4);


    /* um parametro pode tambem ser função */

function getName(name, printName) {
    printName();
    return name;
}

let variavel= getName('Joseph', function() {
    console.log("I've got your name")
})
console.log(variavel);


    /* Promise */

const buyIceCream = function (amount) {
    return new Promise (function (resolve, reject){
       // resolve - a function to call when the promise is successful
       // reject - a function to call when the promise has failed
       setTimeout(() => {
           if (amount < 3){
               reject('Falha na Atividade async 1');
           }else{
               resolve('Atividade async 1');
           }
       })
    })
}

buyIceCream(10)
   .then((response)=>{
       console.log(response);
   })
    .catch((error) =>{
        console.log(error);
    })
// .then vai executar o sucesso da promessa, e o .catch, assim como no Try/Catch, vai pegar a exeção


async function main(){
    //sem o await, a funçao iria executar a atividade sincrona (clg('sync')) primeiro
    await buyIceCream(10);//Atividade Async 1
    console.log('Atividade sync');
    const iceCream = await buyIceCream2(20);//Atividade Async 2
    console.log('Atividade async 2');
    console.log(iceCream);
    }

main();

const car1 = {
    model: 'nissan',
    year: 2022,
    colour: 'blue'
}
 console.log(car1);
const car2 = car1;

car2.colour='red'
//if i change car 2 then car 1 will also change, because car2 is associated to car1 and is not a copy
console.log(car1);
console.log(car2);

const cloned = Object.assign({}, car1);
//agora não esta igualando, mas sim copiando as caracteristicas de car1
console.log(cloned);
cloned.colour= 'black'
console.log(cloned);
console.log(car1);

const cloned2 = {...car1}
//'...' quer dizer unpack, então vai descarregar as info no objeto 
console.log(cloned2);
cloned2.colour = 'yellow';
console.log(cloned2);

const array1 = [1,2,3];
const array2 = [4,5,6];
console.log(array1);
console.log(array2);
const array3 = [
    ...array1,
    ...array2,
]
//'...', tambem serve para descarregar em arrays
console.log(array3);

function add(...nums) {
    //mas quando colocado como parametro significa compactar
    let sum = 0;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
    }
    return sum;
}

const result = add(1,3,5,2,4,2);
console.log(result)


    /* separar os atributos de objetos em variáveis */

console.log(cloned);
const {model: modelo, year: ano} = cloned;
//atributo no objeto: variavel (mas se quiser nomear a variável igual ao atributo, não precisa do ':')
console.log(modelo, ano); 

    /* trocando as avriaveis de lugar, sem usar uma variavel auxiliar */

let a = 1;
let b = 9;
console.log('a:',a,'b:',b);
[a, b] = [b, a]
console.log('a:',a,'b:',b);


    /*   OO em JS   */

class Car{
    Brand = '';
    Model = '';
    Year = '';
    
    constructor(Brand, Model, Year){
        
        this.Brand = Brand;
        this.Model = Model;
        this.Year = Year;
        
    }

    drive = function(){
        console.log(this.Brand, this.Model, 'is driving')
    }
}
//Classe car, com os atributos e construtor, e uma função 

const Jeep = new Car('Jeep', 'Compas', 2020);
console.log(Jeep.Brand, Jeep.Model, Jeep.Year);
Jeep.drive();
//ao instanciar um objeto o construtor é chamado


 /* Heranças */

class Jogador{
    constructor(apelido, time){
        this.apeapelido = apelido;
        this.time = time;
        console.log('jogador:', apelido, 'entrou no:', time);
    }
    Chute(overall){
        this.overall = overall;
    }
    Posicionamento(overall){
        this.overall = overall;
    }
    Movimento(overall){
        this.overall = overall;
    }
    Ganhar(){
        console.log('ganhou facil');
    }
}
class JogadorDeLinha extends Jogador{
    constructor(apelido, time, isDestro){
        super(apelido, time);
        this.isDestro = false;
        console.log('jogador:', apelido, 'entrou no:', time+'. Eh destro?', isDestro);
    }
    Cabeceio(overall){
        this.overall = overall;
    }
    Corrida(overall){
    this.overall = overall;
    }
    Jogar(overall){
    this.overall = overall;
    }

}
class Atacante extends JogadorDeLinha{

}
class JogadorDeGol extends Jogador{
    Defesa(overall){
    this.overall = overall;
    }
    Salto(overall){
    this.overall = overall;
    }
    Saida(overall){
    this.overall = overall;
    }
}
//o Atacante herda caracteristicas de Jogador de Linha, que herda de Jogador
let ponta = new Atacante('Zequinha', 'Criciuma', true);
ponta.Ganhar();
//E pode fazer uso das própias funções, do avô ou pai


    /* Polimorfismo */

class Cobranca{
    constructor(){
        this.sinal(); 
    }
    sinal(){

    }
    pagamento(){

    }
    extorno(){

    }
}
class Visa extends Cobranca{
    sinal(){
        console.log('Sinal Visa Estabelecido');
    }
    pagamento(qtd){
        this.qtd = qtd;
        console.log('Pagamento feito em R$'+qtd);
    }
    extorno(qtd){
        this.qtd = qtd;
        console.log('Extorno feito em R$'+qtd);
    }
}
class MasterCard extends Cobranca{
    sinal(){
        console.log('Sinal MasterCard Estabelecido');
    }
    pagamento(qtd){
        this.qtd = qtd;
        console.log('Pagamento feito em R$'+qtd);
    }
    extorno(qtd){
        this.qtd = qtd;
        console.log('Extorno feito em R$'+qtd);
    }
}
class Elo extends Cobranca{
    sinal(){
        console.log('Sinal Elo Estabelecido');
    }
    pagamento(qtd){
        this.qtd = qtd;
        console.log('Pagamento feito em R$'+qtd);
    }
    extorno(qtd){
        this.qtd = qtd;
        console.log('Extorno feito em R$'+qtd);
    }
}
//Em suma, polimorfismo é quando difeerentes classes possuem metodos com nomes iguais
//isso é bom para situaçoes de heranca onde os filhos são semelhantes em suas caracteristicas

class Cliente{
    PagarCobranca(bandeira, qtd){
        bandeira.sinal();
        return bandeira.pagamento(qtd);
    }
    ReceberExtorno(bandeira, qtd){
        bandeira.sinal();
        return bandeira.extorno(qtd);
    }
}

let Joseph = new Cliente();
 Visa = new Visa();
 Elo = new Elo();
 MasterCard = new MasterCard();
Joseph.ReceberExtorno(Visa, 100);
Joseph.ReceberExtorno(Elo, 3000);
Joseph.PagarCobranca(MasterCard, 50);
//por exemplo, o cliente pôde fazer uso da mesma função 'receberExtorno', em duas classes diferentes
//devido ao polimorfismo


    /* Quando enfrentar uma herança muito complexa é ideal usar composição de objetos */

    const Animal = {
        eat: function(){
        console.log('Hungry');
        }
    }
    
    const Moveable = {
        move: function(){
        console.log('I am movement able');
        }
    }

    const Flyable = {
        fly: function(){
        console.log('I believe I can fly');
        }
    }
    
    const CanEatMeat = {
    eatMeat: true,
    }
    
    const CanEatVegies = {
    eatVegies: true,
    }
    
    const Swimmable = {
        swim: function(){
        }
    }
    const Runnable = {
        run: function(){
            console.log('run forest run!');
        } 
    }
    
    function Penguin(){
        return {
            ...Animal,
            ...Moveable,
            ...CanEatMeat,
            ...Swimmable,
        }
    }
    function Eagle(opcao={}){
        return {
            ...Animal,
            ...Moveable,
            ...CanEatMeat,
            ...Flyable,
            ...opcao,
        }
    }
    /* A Função Penguin e Eagle, se classificam como composições de objeto
    poderia ser herança visto que são animais e são moveable, mas a arvore de heranças 
    seria muito complexa para compor essas duas aves, então a composição de objetos é
    o ideal pra essa situação */
    
    const Koalsky = Penguin();
    const Bald = Eagle();
    console.log(Koalsky);
    console.log(Bald);
    Bald.fly();


    /* protótipo */

function fruta(cor){
    this.cor = cor;
}
const banana = new fruta('Amarelo');
console.log(banana);
/*
O objeto de fruta tem as seguintes instancias
constructor: ƒ fruta(cor)
[[Prototype]]: Object
*/

const apple = new banana.__proto__.constructor('apple');
//Por isso podemos criar o objeto dessa maneira usando o objeto __proto__ (Protótipo)
console.log(apple);

/*
    - Todo contrutor ou classe tem somente 1 objeto de prototipo.
    - Toda instância de objeto tem o __proto__; __proto__ é um link 
      ao prototipo do construtor do objeto.
    - O objeto prototipo tem uma propiedade que é Construtor que faz
      referencia ao própio construtor.
*/

console.log(banana.__proto__=== fruta.prototype);
//o ressultado dessa consulta vai ser True, porque fazem referencia ao úinico prototipo

fruta.prototype.comer = function(){
    console.log('comendo');
}
banana.comer();
apple.comer();
/*
mais um exemplo de que os objetos possuem o mesmo protótipo, e se uma função for criada no prototipo, 
toda objeto terá acesso a função.
*/

function carr(){
    this.drive = function(){
        //...
    }
}

function carr2(){
    
}
carr2.prototype.drive = function(){
    //...
}
/* a função 'drive' de carr2 é mais eficiente do que carr, porque utiliza uma função para todos os 
futuros instâncias, enquanto a função 'drive' de carr cria uma nova função drive para cada instância */

// const arr = [];
const arr = new Array();
console.log(arr.__proto__ === Array.prototype);
console. log(Array.prototype.constructor === Array);
console.log(arr.__proto__.constructor === Array);

// the prototype chain

/*
    - Tudo em JS é um objeto
    - Tudo em JS herda do Construtor do objeto
    - Todo objeto tem um __proto__ que aponta para seu protótipo
*/
 
console.log(Array.prototype.__proto__);//Aponta para a protótipo do pai
console.log(Array.prototype.__proto__=== Object.prototype);//Comprovando a afirmação acima
console.log(Object.prototype.__proto__);
//O Object é o topo da herança em JS, pro isso o prototype.__proto__ é null
let nome = 'Samuel';
console.log(nome.__proto__);//String { "" } , porque String é o pai de nome
console.log(nome.__proto__.__proto__);//Object { … }, porque Object é o pai de String
console.log(nome.__proto__.__proto__.__proto__);//null porque Object é o Topo da Herança em JS

    /* Como ocorre a chamada de função por trás das cenas */

/* 
Quando chamamos uma função em um objeto, o que ocorre é JS vai buscar a função no propio objeto, 
caso não encontre vai procurar no pai do objeto, e caso não encontre, vai sucessivamente procurando até chegar 
no topo da herança que é o Object.
*/


    /* import e export */

    import arq from './modulo.js';
    /*
        - Quando vamos importar de um outro arquivo, esse arquivo é chamado de módulo, 
        e pode também ser no formato de .mjs
        - formato: import objetoDoModulo from './arquivo.js(ou.mjs)'
        - o './' é porque o módulo está no mesmo diretorio do arquivo principal
    */
    import {sub} from './modulo.js';
    /* 
        - import {sub as outroNome} from './modulo.js'; é a outra maneira, caso queira 
        sobrepor o nome.
    */
    console.log(arq);
    console.log('Função Add:', arq.add(91, 9));
    console.log('Função Sub: '+sub(91, 9));
    // Obs.: usar a virgula pra somar dois elementos no clg ja add um espaço, já o '+' não.
    

    