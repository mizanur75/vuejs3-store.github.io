<template>
  <div id="app">
    <!-- navbar -->
    <Navbar></Navbar>
    <div class="container">
      <div class="row mt-3">
        <!-- Inventory -->
        <Inventory :items="items"></Inventory>
        <!-- cart -->
        <Cart></Cart>
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
      items: []
    }
  },

  mounted(){
    this.items = Data
  }

}
</script>

<style>

</style>
