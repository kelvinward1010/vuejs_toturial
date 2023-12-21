<script setup lang="ts">
import FormInput from "./FormInput.vue"
</script>

<template>
    <div class="container">
        <div class="center">
            <FormInput />
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.container .center{
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    border-radius: 5px;
}

</style>