export default () => {
  const users = ref([]);
  const pageNumber = ref(1);
  const count = ref(6);
  const config = useRuntimeConfig();
  const endOfUserList = ref(false);
  const getUsers = async () => {
    const { data: usersList, status } = await useAsyncData('data', () =>
      $fetch(
        `${config.public.apiBase}users?page=${pageNumber.value}&count=${count.value}`
      )
    );
    if (status.value === 'error') {
      endOfUserList.value = true;
    }
    if (status.value !== 'error' && pageNumber.value === 1) {
      users.value.push(...usersList.value.users);
    }
    if (status.value !== 'error' && pageNumber.value >= 2) {
      users.value.push(...usersList.value.users);
    }
    pageNumber.value = usersList.value.page + 1;
  };

  return { getUsers, users, endOfUserList };
};
