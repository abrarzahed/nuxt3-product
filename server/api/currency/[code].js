export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyApiKey } = useRuntimeConfig();

  const url = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`;

  const { data } = await $fetch(url);
  return data;
});
