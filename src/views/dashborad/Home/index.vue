<template>
  <div>home</div>
  <div>vuex 中的count：{{ count }}</div>
</template>
<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  console.log('store', store.state.count)
</script>
