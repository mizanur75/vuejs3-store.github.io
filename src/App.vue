<template>
  <div id="app">
    <!-- navbar -->
    <Navbar @query="searchItem"></Navbar>
    <div class="container">
      <div class="row mt-3">
        <!-- Inventory -->
        <Inventory @addNewItem="addToCart" :items="items"></Inventory>
        <!-- cart -->
        <Cart :items="cart"></Cart>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import Cart from './components/Cart'
import Data from './data'
export default {

  components:{
    Navbar,
    Inventory,
    Cart
  },

  data(){
    return{
      items: [],
      cart: []
    }
  },

  mounted(){
    this.items = Data
  },
  methods:{
    addToCart(item){
      this.cart.push(item)
    },
    searchItem(query){
      this.items = Data.filter(item =>{
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }
  }

}
</script>

<style>

</style>
