<template>
  <div class="sendForm">
    <div class="sendForm-wrapper">
      <h2>Working with POST request</h2>
      <div class="form">
        <UIInput :placeholder="'Your name'"></UIInput>
        <UIInput :placeholder="'Email'"></UIInput>
        <UIInput
          class="helper-size"
          :placeholder="'Phone'"
          :text-helper="'+38 (XXX) XXX - XX - XX'"
        ></UIInput>
      </div>
      <legend class="legend">Select your position</legend>
      <client-only>
        <div
          v-for="position in positions"
          :key="position.id"
          class="radio-buttons"
        >
          <UIRadioButton
            :id="position.id"
            :name="position.name"
          ></UIRadioButton>
        </div>
      </client-only>
      <div class="">
        <UIImgLoader></UIImgLoader>
      </div>
      <div class="button">
        <UIButton :bg-color="'dark-gray'" :title="'Sign up'"></UIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import useGetPosition from './../composables/useGetPosition';

const { positions, getPositions } = useGetPosition();

getPositions();
</script>

<style lang="scss" scoped>
.sendForm {
  padding: 110px 16px 100px 16px;
  background: $bg-gray;
  display: flex;
  justify-content: center;
  .sendForm-wrapper {
    display: flex;
    flex-direction: column;
    width: 328px;
  }
  h2 {
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: normal;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    margin-top: 15px;
    .helper-size {
      font-size: 12.5px;
    }
  }
  .radio-buttons {
    margin-top: 5px;
  }
  .legend {
    margin-top: 18px;
  }
  .button {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>
