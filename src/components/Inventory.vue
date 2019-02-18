<template>
    <div class="col-md-9">
        <div v-for="(item, i) in items" :key="i" class="card float-left mb-3" style="width: 15rem;">
            <img class="card-img-top" :src="item.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">{{item.price}}</p>
                <a href="#" class="btn btn-primary">+ Add</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ['items'],
    

}
</script>

<style>

</style>
