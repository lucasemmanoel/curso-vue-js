new Vue({
    el: '#desafio',
    data: {
        nome: 'Lucas Emmanoel Araujo Machado',
        idade: 34,
        linkImagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/791.png'
    },
    methods: {
        idadeTriplo: function() {
            return 3*this.idade
        },
        randomValue: function() {
            return Math.random()
        }
    }
})