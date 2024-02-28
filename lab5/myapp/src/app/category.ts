export interface Product{
  name: string;
  price: number;
  likes: number;
}
export interface Category{
  id: number;
  title: string;
  numberOfProducts: number;
  products: Product[];
}
export const categories=[
  {id:1, title: 'phones',numberOfProducts:5, products: [
     {name:'Sumsung A30',price: 200, likes: 0},
     {name:'Redmi Notes',price: 210, likes: 0},
     {name:'Sumsung A50',price: 250, likes: 0},
     {name:'Iphone 13',price: 1000, likes: 0},
     {name:'Oppo',price: 180, likes: 0}
  ]},
  {id: 2, title: 'TV',numberOfProducts:5, products: [
     {name: 'LED1',price: 14800,likes: 0},
     {name: 'LED2',price: 24999,likes: 0},
     {name: 'LED3',price: 34900,likes: 0},
     {name: 'LED4',price: 49390,likes: 0},
     {name: 'LED5',price: 15990,likes: 0}
  ]},
  {id: 3, title: 'computers',numberOfProducts:5, products: [
     {name: 'HP',price: 5000, likes: 0},
     {name: 'HP',price: 5000, likes: 0},
     {name: 'HP',price: 5000, likes: 0},
     {name: 'HP',price: 5000, likes: 0},
     {name: 'HP',price: 5000, likes: 0},
  ]},
  {id: 4, title: 'other',numberOfProducts:5, products:[
     {name: 'other tech 1',price:2000,likes:0},
     {name: 'other tech 1',price:2000,likes:0},
     {name: 'other tech 1',price:2000,likes:0},
     {name: 'other tech 1',price:2000,likes:0},
     {name: 'other tech 1',price:2000,likes:0}
  ]}
]
