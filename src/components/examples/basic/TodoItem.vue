<script setup lang="ts">
const props = defineProps({
  todo: Object
})
</script>

<template>
  <li>{{ props.todo?.text }}</li>
</template>