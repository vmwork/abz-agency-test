export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      truncate: (content, length, clamp) => {
        clamp = clamp || '...';
        return content.length > length
          ? content.slice(0, length) + clamp
          : content;
      },
    },
  };
});
