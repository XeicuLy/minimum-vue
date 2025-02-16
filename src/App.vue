<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSampleStore } from './stores/sampleStore'
import { useCounterStore } from './stores/counterStore'

const sampleStore = useSampleStore()
const { count: countSample } = storeToRefs(sampleStore)

const counterStore = useCounterStore()
const { count: countCounter } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <h1>Sample</h1>
    <div>count: {{ countSample }}</div>
    <h2>Counter</h2>
    <div>count: {{ countCounter }}</div>
  </div>
</template>
