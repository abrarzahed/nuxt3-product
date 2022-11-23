export default defineEventHandler(async (event) => {
  const { currencyApiKey } = useRuntimeConfig();
  // api call with private key
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyApiKey}`
  );

  return data;
});
