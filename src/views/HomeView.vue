<template>
  <main>
    <button type="button" class="btn btn-light btn-lg" @click="increment">気合いをいれる</button>
    <p>{{ counter.count }}回気合いが入った</p>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from "../stores/counter"
import Push from 'push.js'

const counter = useCounterStore()
const notificationFlag = ref(false)
const win: Window = window
const increment = () => {
  counter.$patch({ count: counter.count + 1 })
  if(!notificationFlag.value && counter.count > 10) {
    Push.create('筋トレしろ\u{1F4AA}', {
      onClick: function() {
        win.location = 'https://www.youtube.com/results?search_query=%E7%AD%8B%E3%83%88%E3%83%AC%E3%80%80%E8%85%B9%E7%AD%8B'
      }
    })
    notificationFlag.value = true
  }
}
</script>

