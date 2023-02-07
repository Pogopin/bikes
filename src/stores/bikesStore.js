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
        await fetch('https://fakestoreapi.com/products?limit=5')
          .then(res => res.json())
          .then(data => {
            console.log('data :', data)
            // тут логика добавление в стор
          })
      } catch (e) {
        console.log('e :', e)
      }
    }
  }
})