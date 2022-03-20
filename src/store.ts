// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export const key: InjectionKey<Store<ProductData>> = Symbol()

export const store = createStore<ProductData>({
  state: {
    filters: [],
    products: [],
    header: {
      headerDescription: "",
      headerTitle: ""
    },
    watchlist: [],
  },
  mutations: {
    setProductData(state, data) {
      Object.assign(state, data);
    }
  },
  actions: {
    fetchProductsData: async (ctx) => {
      const data = await (
        await fetch(
          "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"
        )
      ).json();
      ctx.commit("setProductData", data);
    }
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}