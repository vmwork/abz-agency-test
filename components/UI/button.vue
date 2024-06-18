<template>
  <button :class="bgColor" @click="$emit('clickOnButton')">{{ title }}</button>
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
  endOfUserList: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['clickOnButton']);
</script>

<style lang="scss" scoped>
.dark-gray {
  background-color: $bg-dark-gary;
  width: 101px;
  color: $text-white;
  font-weight: 400;
  &:hover {
    background-color: $button-hover-color;
  }
}
</style>
