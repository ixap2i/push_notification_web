<template>
  <main>
    <button type="button" class="btn btn-light btn-lg" @click="increment">気合いをいれる</button>
    <p>{{ counter.count }}回気合いが入った</p>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
const increment = () => {
  counter.$patch({ count: counter.count + 1 })
};
</script>

