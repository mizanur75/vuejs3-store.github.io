<template>
    <div class="col-md-3">
        <table class="table table-sm">
        <thead>
            <tr>
            <th>#SL</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in items" :key="i">
            <td>{{i + 1}}</td>
            <td>{{item.name}} </td>
            <td>{{item.price}}/=</td>
            <td><button type="button" @click="removeItem(i)" class="btn btn-sm btn-danger">x</button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td colspan="2">Total</td>
            <td> {{total}} /=</td>
            </tr>
        </tfoot>
        </table>
    </div>
</template>

<script>
export default {

    props:['items'],

    computed:{
        total(){
            var total = 0
            this.items.forEach(item => {
                total += parseFloat(item.price)
            })
            return total
        }
    },

    methods:{
        removeItem(i){
            this.items.splice(i, 1)
        }
    }

}
</script>

<style>

</style>
