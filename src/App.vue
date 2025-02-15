<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSampleStore } from './stores/sampleStore'
import { useCounterStore } from './stores/counterStore'

const sampleStore = useSampleStore()
const { count: countSample, doubleCount: doubleCountSample } = storeToRefs(sampleStore)
const { increment: incrementSample } = sampleStore

const counterStore = useCounterStore()
const { count: countCounter, doubleCount: doubleCountCounter } = storeToRefs(counterStore)
const { increment: incrementCounter } = counterStore
</script>

<template>
  <div>
    <h1>Sample</h1>
    <div>count: {{ countSample }}</div>
    <div>double count: {{ doubleCountSample }}</div>
    <button @click="incrementSample">Increment</button>
    <h2>Counter</h2>
    <div>count: {{ countCounter }}</div>
    <div>double count: {{ doubleCountCounter }}</div>
    <button @click="incrementCounter">Increment</button>
  </div>
</template>
