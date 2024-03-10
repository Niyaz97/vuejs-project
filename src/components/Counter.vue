<script setup lang="ts">
import { reactive, ref } from 'vue'

const count = reactive({ count: 0 })
const incr = () => {
  count.count++
}
</script>

<template>
  <div>
    <h1>{{ count.count }}</h1>
  </div>
  <button @click="incr">increment</button>
</template>

<style scoped></style>
