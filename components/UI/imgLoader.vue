<template>
  <div class="imgLoader">
    <div class="button">
      <label>
        <input
          id="userfile"
          ref="fileInput"
          style="display: none"
          type="file"
          name="userfile[]"
          multiple
          accept="image/*"
          @change="changeUploadFile()"
        />
        <span>Upload</span>
      </label>
    </div>
    <div class="upload-mask">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const label = ref('Upload your photo');
const fileInput = ref(null);
const files = ref();

const changeUploadFile = () => {
  files.value = fileInput.value?.files[0].name;
  label.value = fileInput.value?.files[0].name;
};
</script>

<style lang="scss" scoped>
.imgLoader {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 47px;
  .button span {
    background: transparent;
    border-radius: 0;
    border: 1px solid $border-black;
    padding: 15px 14px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }
  .input {
    display: none;
  }
  .upload-mask {
    padding: 14px 73px 14px 16px;
    border: 1px solid $border-gray;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: default;
    min-width: 150px;
  }
}
</style>
