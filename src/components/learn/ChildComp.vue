<script setup lang="ts">
const props = defineProps({
  msg: String
})

const emit = defineEmits(['response'])
emit('response', "Hello, world! this is a emit!")
</script>

<template>
    <div>
        {{props.msg}}
    </div>
</template>