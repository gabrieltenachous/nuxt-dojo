export default defineEventHandler(async (event) => { 

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_EGncV5Yg9b1527bXlp6lUf7pT2wcNs9N42QhHPra')
  
    return data
  }) 