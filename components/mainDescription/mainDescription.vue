<template>
  <div class="main-decription">
    <h1>Test assignment for front-end developer</h1>
    <p>
      What defines a good front-end developer is one that has skilled knowledge
      of HTML, CSS, JS with a vast understanding of User design thinking as
      they'll be building web interfaces with accessibility in mind. They should
      also be excited to learn, as the world of Front-End Development keeps
      evolving.
    </p>
    <UIButton class="button" :title="'Sign up'"></UIButton>
  </div>
</template>
<style lang="scss" scoped>
.main-decription {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-image: url('./../../assets/img/description-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 75px;

  h1 {
    text-align: center;
    width: 328px;
    color: $text-white;
    padding-top: 10px;
    font-weight: normal;
  }
  p {
    margin-top: 0px;
    width: 328px;
    text-align: center;
    color: $text-white;
    font-weight: normal;
  }
  .button {
    margin-top: 25px;
  }
}
</style>
