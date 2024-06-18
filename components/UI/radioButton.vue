<template>
  <div class="form_radio">
    <input
      :id="id"
      class="radio-button-primary"
      type="radio"
      name="drone"
      value="huey"
    />
    <label class="label" :for="id">{{ name }}</label>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    default: 'name',
  },
});
const emit = defineEmits(['clickOnButton']);
</script>

<style lang="scss" scoped>
.form_radio {
  display: flex;
  align-items: center;
}
input[type='radio'],
label {
  margin-top: 2px;
  margin-left: -2px;
  cursor: pointer;
}
input[type='radio'] {
  position: relative;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

input[type='radio']::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid $bg-blue;
}

input[type='radio']:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: $bg-blue;
  transform: translate(-50%, -50%);
  visibility: visible;
}
.label {
  margin-left: 15px;
}
</style>
