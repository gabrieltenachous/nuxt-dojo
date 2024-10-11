<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem quod tempora beatae, id tempore ab at, suscipit tenetur totam, vero sunt expedita voluptas quisquam minus vitae iure libero illo?</p>
    </div>
    <div> {{ data }}</div>
</template>
<script setup> 
    const { data } = await useFetch('/api/currency/GBP');
</script>
<style scoped>
    h2 {
        margin-bottom: 20px; 
    }
    p {
        margin: 20px 0;
    }
</style>