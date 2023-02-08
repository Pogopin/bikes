import { defineStore } from 'pinia'

const id = 'bikes-store'

export const useBikesStore = defineStore(id, {
  state: () => {
    return {
      isLoading: 0,
      bikesData: []
    }
  },
  getters: {
    getBikesData: (state) => state.bikesData
  },
  actions: {
    async getBikes () {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=3');
        const data = await response.json();
        this.bikesData = data.map((el) => {
          return {
            id: el.id,
            title: el.title,
            price: el.price,
            rating: el.rating.rate
          }
        });
        this.bikesData.forEach((el, i) => {
          el.img = `bicicleta${i+1}.jpg`; 
        });

        console.log(this.bikesData)
        this.isLoading = 1;
      } 
      catch (e) {
        console.log('e :', e);
      }
    }
  }
})