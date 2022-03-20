declare module "*.vue" {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}

declare interface Product{
    "name": string;
    "id": number;
    "imageURL": string;
    "available": boolean;
    "releaseDate": date;
    "description": string;
    "longDescription": string;
    "rating": number;
    "price": {
      "value": number;
      "currency": "EUR";
    };
}

declare interface Header{
  headerTitle: string;
  headerDescription: string;
}

declare type Filter = "Alle" | "Verfügbar" | "Vorgemerkt";

declare interface ProductData {
  products: Product[];
  filters: Filter[],
  header: Header,
  watchlist: Number[]
}
