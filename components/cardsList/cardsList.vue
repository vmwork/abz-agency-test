<template>
  <div class="cardsList">
    <h2>Working with GET request</h2>
    <div class="cards">
      <div v-for="user in users" :key="user.id">
        <SpecialitCard :user="user"></SpecialitCard>
      </div>
    </div>
    <UIButton
      class="show-more"
      :title="'Show more'"
      @click-on-button="showMore"
    ></UIButton>
  </div>
</template>

<script setup>
import useGetUser from './../composables/useGetUser';

const { getUsers, users } = useGetUser();
getUsers();

const showMore = () => {
  getUsers();
};
</script>

<style lang="scss" scoped>
.cardsList {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $bg-gray;
  padding: 105px 16px 0px 16px;
  h2 {
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: normal;
  }

  .cards {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
    column-gap: 20px;
  }
  .show-more {
    margin-top: 50px;
  }
}
</style>
