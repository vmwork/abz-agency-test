<template>
  <button>{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Normal',
  },
  bgColor: {
    type: String,
    default: 'bg-yellow',
  },
});
</script>
