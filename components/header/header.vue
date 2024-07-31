<template>
  <header class="header-wrapper">
    <NuxtImg src="/logo.svg" width="104" />
    <nav class="nav">
      <UIButton :title="'Users'"></UIButton>
      <UIButton :title="'Sign up'"></UIButton>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 13px 16px;
  align-items: center;
  nav {
    min-width: 210px;
    display: flex;
    justify-content: space-around;
  }
}
@media screen and (min-width: 768px) {
  .header-wrapper {
    padding: 13px 32px;
  }
}
</style>
