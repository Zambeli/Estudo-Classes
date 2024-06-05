import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio',4,'Fogo',4,3)
const magaJulia = new Mago('Julia',8,'Gelo',7,10)
const arqueiroGustavo = new Arqueiro('Gustavo',8,10)
const arqueiroMagoChico = new ArqueiroMago('Chico',7,10,'ar',4,8)
const guerreiroCarlos = new Guerreiro('Carlos',7)


const personagens = [magoAntonio,magaJulia,arqueiroGustavo,arqueiroMagoChico,guerreiroCarlos]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(arqueiroMagoChico, arqueiroGustavo));

console.log(arqueiroGustavo());