<template>
  <main>
    <button type="button" class="btn btn-light btn-lg" @click="increment">気合いをいれる</button>
    <p>{{ counter.count }}回気合いが入った</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from "@/stores/counter";
import Push from 'push.js'

const counter = useCounterStore();
const notificationFlag = ref(false);
const increment = () => {
  counter.$patch({ count: counter.count + 1 })
  if(!notificationFlag.value && counter.count > 10) {
    Push.create('Hello World!')
    notificationFlag.value = true;
  }
};
</script>

