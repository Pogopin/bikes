import { defineStore } from 'pinia'

const id = 'bikes-store'

export const useBikesStore = defineStore(id, {
  state: () => {
    return {
      bikesData: []
    }
  },
  getters: {
    getBikesData: (state) => state.bikesData
  },
  actions: {
    async getBikes () {
      try {
        // const response = await fetch('https://fakestoreapi.com/products?limit=3')
        // console.log('response :', response)
        const response = await fetch('https://fakestoreapi.com/products?limit=3', {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        this.bikesData = data.map((el, i) => {
          return {
            id: el.id,
            title: el.title,
            price: el.price,
            rating: el.rating.rate,
            img: `bicicleta${i+1}.jpg`,
            imgFull: `bicicleta${i+1}-full.jpg`,
            characteristics: [
              { name: 'Motor Elétrico', icon: 'eletrica.svg' },
              { name: 'Fibra de Carbono', icon: 'lines.svg' },
              { name: '40km/h', icon: 'velocidade.svg' },
              { name: 'Rastreador', icon: 'rastreador.svg' }
            ]
          }
        })
      } 
      catch (e) {
        console.log('e :', e)
      }
    }
  }
})