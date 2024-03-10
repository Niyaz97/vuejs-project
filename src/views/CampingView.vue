<script setup lang="ts">
import Counter from '@/components/Counter.vue'
</script>
<template>
  <div class="camping">
    <h1>This is a camping page</h1>
    <Counter></Counter>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .camping {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
