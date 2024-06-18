export default () => {
  const config = useRuntimeConfig();

  const positions = ref([]);

  const getPositions = async () => {
    const { data: positionsList, status } = await useAsyncData('data', () =>
      $fetch(`${config.public.apiBase}positions`)
    );
    if (positionsList.value.success && positions.value.length === 0) {
      positions.value = positionsList.value.positions;
    }
  };

  return { positions, getPositions };
};
