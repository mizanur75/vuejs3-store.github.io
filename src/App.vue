<template>
  <div id="app">
    <!-- navbar -->
    <Navbar></Navbar>
    <div class="container">
      <div class="row mt-3">
        <!-- Inventory -->
        <Inventory></Inventory>
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
export default {

  components:{
    Navbar,
    Inventory,
    Cart
  }

}
</script>

<style>

</style>
