<script setup>
const ui = /* ui */ {
  background: 'bg-red dark:bg-pink-900',
  text: 'text-red-500',
}
</script>

<template>
  <p>
    Welcome Page
  </p>
  <u-card to="/about" label="test" :ui="ui">
    asdfas
  </u-card>
</template>
