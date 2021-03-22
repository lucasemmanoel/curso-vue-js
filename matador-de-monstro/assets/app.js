new Vue({
    el: '#app',
    data: {
        jogador: {
            nome: 'Lucas',
            saude: 100,
            ataque: 0,
            pocao: 6,
            especial: 3
        },
        jogadorSaude: 100,
        monstro: {
            nome: 'Dragão',
            saude: 100,
            ataque: 0
        },
        monstroSaude: 100,
        resultado: '',
        lutaIniciada: false,
        fimLuta: false,
        logs: []
    },
    methods: {
        atacar () {
            let log = {}
            if(this.fimLuta)
                return
            this.jogador.ataque = Math.trunc(Math.random()*11)
            this.monstro.ataque = Math.trunc(Math.random()*11) + Math.trunc(Math.random()*8)
            this.jogador.saude -= (this.monstro.ataque > this.jogador.saude)? this.jogador.saude : this.monstro.ataque
            this.monstro.saude -= (this.jogador.ataque > this.monstro.saude)? this.monstro.saude : this.jogador.ataque
            log.jogador = this.jogador.nome + ' Recebeu Dano de ' + this.monstro.ataque + ' do ' + this.monstro.nome
            log.monstro = this.monstro.nome + ' Recebeu Dano de ' + this.jogador.ataque + ' do ' + this.jogador.nome
            this.logs.push(log)
            console.log(this.logs)
        },
        curar () {
            if(this.fimLuta)
                return
            let log = {}
            if (this.jogador.pocao > 0) {
                const efeitoPocao = (this.jogador.saude >= 100) ? 0 : 20 + Math.trunc(Math.random()*11)
                this.jogador.saude += efeitoPocao
                this.jogador.saude = (this.jogador.saude >= 100)? 100 : this.jogador.saude
                this.jogador.pocao--
                log.cura = 'Se curou ' + efeitoPocao + ' ainda tem ' + this.jogador.pocao + ' poções'
            }
            this.monstro.ataque = Math.trunc(Math.random()*11) + Math.trunc(Math.random()*8)
            this.jogador.saude -= (this.monstro.ataque > this.jogador.saude)? this.jogador.saude : this.monstro.ataque
            log.jogador = this.jogador.nome + ' Recebeu Dano de ' + this.monstro.ataque + ' do ' + this.jogador.nome
            log.monstro = 'O ' + this.monstro.nome + ' não recebeu dano'
            this.logs.push(log)
            console.log(this.logs)
        },
        usarEspecial() {
            if(this.fimLuta)
                return
            let log = {}
            if (this.jogador.especial > 0) {
                this.jogador.ataque = Math.trunc(Math.random()*11) + Math.trunc(Math.random()*25)
                this.monstro.saude -= (this.jogador.ataque > this.monstro.saude)? this.monstro.saude : this.jogador.ataque
                this.jogador.especial--
            }
            this.monstro.ataque = Math.trunc(Math.random()*11) + Math.trunc(Math.random()*8)
            this.jogador.saude -= (this.monstro.ataque > this.jogador.saude)? this.jogador.saude : this.monstro.ataque
            log.jogador = this.jogador.nome + ' Recebeu Dano de ' + this.monstro.ataque + ' do ' + this.monstro.nome
            log.monstro = this.monstro.nome + ' Recebeu Dano de ' + this.jogador.ataque + ' do ' + this.jogador.nome + ' com o ataque especial ainda possui ' + this.jogador.especial + ' especial para usar'
            this.logs.push(log)
            console.log(this.logs)
        },
        iniciarPartida () {
            this.lutaIniciada = !this.lutaIniciada
            this.jogador.saude = 100
            this.jogador.pocao = 6
            this.jogador.especial = 3
            this.monstro.saude = 100
            this.logs = []
        }
    },
    computed: {
        statusSaudeJogador () {
            return (this.jogador.saude < 20) ? 'alerta' : (this.jogador.saude < 50 ) ? 'atencao' : 'saudavel'
        },
        statusSaudeMonstro () {
            return (this.monstro.saude < 20) ? 'alerta' : (this.monstro.saude < 50 ) ? 'atencao' : 'saudavel'
        },
        temResultado () {
            return this.jogador.saude == 0 || this.monstro.saude == 0
        },
        jogadorGanhou () {
            return this.jogador.saude > 0 && this.monstro.saude <= 0
        },
        monstroGanhou () {
            return this.jogador.saude <= 0 && this.monstro.saude > 0
        },
        lutaEmpatada () {
            return this.jogador.saude <= 0 && this.monstro.saude <= 0
        }
    },
    watch: {
        temResultado (value) {
            if(value == true) {
                this.lutaIniciada = false
            }
        }
    }
})