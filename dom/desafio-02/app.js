new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Alerta')
        },
        escreveValor(event) {
            this.valor = event.target.value
        }
    }
})