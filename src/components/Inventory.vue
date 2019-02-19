<template>
    <div class="row">
        <div class="row mb-3">
            <div class="col-md-11">
                <input type="text" class="form-control form-control-sm" v-model="query" placeholder="Serach Here">
            </div>
        </div>
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

    data(){
        return{
            query: '',
            items:[
                {id:1, name: 'BMW', price:'25'},
                {id:2, name: 'Toyota', price:'20'},
                {id:3, name: 'Toyota', price:'20'},
                {id:4, name: 'Toyota', price:'20'},
                {id:5, name: 'Toyota', price:'20'},
            ]
        }
    },

    watch:{
        query: function (newQ, oldQ){
            if(newQ === ''){
                this.items
            }else{
                this.searchItem(this.query)
            }
        }
    },
    
    methods:{
        addItem(item){
            this.$emit('addNewItem', item)
        },
        searchItem(query){
        this.items = this.items.filter(item =>{
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
        }
    }

}
</script>

<style>

</style>
