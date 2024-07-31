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

      <client-only>
        <div class="radio-buttons-wrapper">
          <legend class="legend">Select your position</legend>
          <div class="">
            <div
              v-for="(position, i) in positions"
              :key="position.id"
              class="radio-buttons"
            >
              <UIRadioButton
                :id="position.id"
                :name="position.name"
                :checked="i === 0 ? true : false"
              ></UIRadioButton>
            </div>
          </div>
        </div>
      </client-only>
      <div class="imgLoader">
        <UIImgLoader></UIImgLoader>
      </div>
      <div class="button">
        <div class="">
          <UIButton :bg-color="'dark-gray'" :title="'Sign up'"></UIButton>
        </div>
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
@media screen and (min-width: 768px) {
  .sendForm {
    padding: 100px 16px 100px 16px;
    .sendForm-wrapper {
      display: flex;
      flex-direction: column;

      width: 704px;
    }
    .radio-buttons-wrapper {
      width: 504px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .legend {
      margin-top: 18px;
      margin-left: -35px;
    }
    .imgLoader {
      width: 720px;
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
