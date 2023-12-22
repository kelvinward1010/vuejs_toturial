<script setup lang="ts">
import BasicVue from "./basic/Basic.vue";
import PractialVue from "./practical/Practical.vue";
import { ref } from 'vue'

interface PropsItems {
    key: string;
    label: string;
    children: any;
}[]

const isShowBasic = ref(false)
const isShowPractical = ref(false)

</script>

<template>
    <div class="container">
        <div class="item">
            <div class="item_title" @click="isShowBasic = !isShowBasic">
                <h3 class="title">Basic</h3>
                <p v-if="isShowBasic">&or;</p>
                <p v-else="!isShowBasic">&and;</p>
            </div>
            <div class="content">
                <BasicVue :is-show="isShowBasic"/>
            </div>
        </div>

        <div class="item">
            <div class="item_title" @click="isShowPractical = !isShowPractical">
                <h3 class="title">Practical</h3>
                <p v-if="isShowPractical">&or;</p>
                <p v-else="!isShowPractical">&and;</p>
            </div>
            <div class="content">
                <PractialVue :is-show="isShowPractical"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item{
    width: 100%;
    border: 1px solid teal;
    border-radius: 5px;
    margin-top: 10px;
}
.item .item_title{
    background-color: teal;
    color: white;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    cursor: pointer;
}
.item .item_title p{
    margin-top: 6px;
    margin-left: 10px;
}
.item .content{
    margin: 5px;
}
</style>