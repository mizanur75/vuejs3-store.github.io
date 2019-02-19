<template>
  <div id="app">
    
    <!-- navbar -->
    <Navbar></Navbar>
    <router-link to="/">Hello Router</router-link>
    <router-link to="/item/1">Test Router 1</router-link>
    
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-9">
          <router-view @addNewItem="addToCart"></router-view>
        </div>
        <div class="col-md-3">
          <Cart :items="cart"></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Inventory from './components/Inventory'
import Cart from './components/Cart'
import Data from './data'
export default {

  components:{
    Navbar,
    // Inventory,
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
    }
  }

}
</script>

<style>

</style>
