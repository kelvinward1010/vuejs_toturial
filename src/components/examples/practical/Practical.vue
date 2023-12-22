<script setup lang="ts">

//ALL
const props = defineProps({
    isShow: Boolean
})
    
</script>

<template>
    <div class="container" v-if="props.isShow">
        <div class="item_container">
            ok
        </div>
    </div>
</template>

<style scoped>
.item_container{
    margin-top: 10px;
    border-top: 1px solid black;
}
</style>