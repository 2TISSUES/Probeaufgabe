// store.ts
import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export const key: InjectionKey<Store<ProductData>> = Symbol();

export const store = createStore<ProductData>({
	state: {
		filters: [],
		products: [],
		header: {
			headerDescription: '',
			headerTitle: '',
		},
		watchlist: [],
	},
	getters: {
		filteredProducts: (state, getters) => (filter: Filter) => {
			switch (filter) {
				case 'Alle':
					return state.products;
				case 'Verfügbar':
					return state.products.filter((p) => p.available);
				case 'Vorgemerkt':
					return state.products.filter((p) => state.watchlist.includes(p.id));
				default:
					return state.products;
			}
		},
		getProductById: (state) => (id: Number) => {
			return state.products.find((p) => p.id == id)
		},
		inWatchlist: (state) => (id : Number) => {
			return state.watchlist.includes(id)
		}
	},
	mutations: {
		setProductData(state, data) {
			Object.assign(state, data);
		},
		setWatchlist(state, id : Number) {
			let watchlist = state.watchlist
			if(watchlist.includes(id)) {
				watchlist.splice(watchlist.indexOf(id), 1)
			} else {
				watchlist.push(id)
			}
			
		}
	},
	actions: {
		fetchProductsData: async (ctx) => {
			const data = await (
				await fetch(
					'https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json',
				)
			).json();
			ctx.commit('setProductData', data);
		},
		updateWatchlist: (ctx, id) => 
			ctx.commit('setWatchlist', id)
	},
});

// define your own `useStore` composition function
export function useStore() {
	return baseUseStore(key);
}

