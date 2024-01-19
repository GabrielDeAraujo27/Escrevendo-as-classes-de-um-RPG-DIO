class party {
    constructor(nome, lvl, tipo) {
        this.nome = nome;
        this.lvl = lvl;
        this.tipo = tipo;
    }

    atk() {
        let skill;

        switch (this.tipo){
            case ("arcanista"): 
                skill = "Esfera Arcana";
                break;
            case ("paladino"):
                skill = "Punição Divina";
                break;
            case ("monge"):
                skill = "Chute do Dragão";
                break;
            case ("ninja"):
                skill = "Rasengan";
                break;
            default:
                skill = "um soco";
        }
        console.log(`O ${this.tipo}, ${this.nome}(lvl:${this.lvl}), atacou usando ${skill}!`)
    }
}

var playerArcanista = new party("Gandalf", 63, "arcanista");
var playerPaladino = new party("Jesus", 45, "paladino");
var playerMonge = new party("Monarch", 58, "monge");
var playerNinja = new party("Naruto", 34, "ninja");
var playerNovato = new party("Pirralho", 2, "novato");

playerArcanista.atk();
playerPaladino.atk();
playerMonge.atk();
playerNinja.atk();
playerNovato.atk();