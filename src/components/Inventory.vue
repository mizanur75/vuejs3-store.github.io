<template>
    <div>
        <div v-for="(item, i) in items" :key="i" class="card float-left mb-3 mr-3" style="width: 15rem;">
            <img class="card-img-top" :src="item.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <hr>
                <div class="row">
                    <div class="col-sm-4">
                        <p class="card-text font-weight-bold">{{item.price}}</p>
                    </div>
                    <div class="col-sm-8 text-right">
                        <a @click="addItem(item)" class="btn btn-sm btn-success" style="color:white">+ Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['items'],
    
    methods:{
        addItem(item){
            this.$emit('addNewItem', item)
        }
    }

}
</script>

<style>

</style>
