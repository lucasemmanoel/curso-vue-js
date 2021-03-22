new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		perigo: true,
		classe3: '',
		classe4: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' 
					? 'encolher' : 'destaque'
			}, 2000)
		},
		setPerigo(event) {
		},
		iniciarProgresso() {
			
		}
	},
	computed: {
		estiloDesafio01() {
			return {
				encolher: this.encolher,
				destaque: !this.encolher
			}
		}
	},
	watch: {
		ativarClasse(novo, antigo) {
			if(this.ativarClasse === 'true') {
				return { aplicarAtiva: true, desativa: false }
			}
			if(this.classeAtiva === 'false') {
				return {desativa: true, aplicarAtiva: false}
			}
		}
	}
})
