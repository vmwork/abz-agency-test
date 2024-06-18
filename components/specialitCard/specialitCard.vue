<template>
  <div class="specialitCard">
    <NuxtImg class="user-photo" :src="user.photo" width="70" />
    <p class="user-name">{{ $truncate(user.name, 10) }}</p>
    <div class="specialists">
      <p class="about-specialist">
        {{ $truncate(user.position, 35) }}
      </p>
      <p class="about-specialist">{{ $truncate(user.email, 35) }}</p>
      <p class="about-specialist">{{ user.phone }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: () => {},
  },
});
const { $truncate } = useNuxtApp();
</script>

<style lang="scss" scoped>
.specialitCard {
  background: $bg-white;
  max-width: 328px;
  min-width: 328px;
  border-radius: 10px;
  padding: 20px 0px 15px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .user-photo {
    border-radius: 50%;
  }
  p {
    text-align: center;
  }
  .user-name {
    margin-top: 20px;
  }
  .specialists {
    margin-top: 10px;
  }
  .about-specialist {
    margin-top: 5px;
  }
}
</style>
