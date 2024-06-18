<template>
  <div class="input">
    <input v-model="formData" type="text" :placeholder="placeholder" />
    <p class="textHelper">{{ textHelper }}</p>
  </div>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  textHelper: {
    type: String,
    default: '',
  },
});
const formData = ref('');
</script>

<style lang="scss" scoped>
.input {
  input {
    min-width: 328px;
    padding: 17px 16px;
    box-sizing: border-box;
    border: 1px solid $border-gray;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
  .textHelper {
    margin-left: 15px;
    color: $text-gray;
  }
}
</style>
