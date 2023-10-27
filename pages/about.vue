<template>
    <div>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita fugiat eaque amet. Impedit ex, est
            illum aperiam nam, nesciunt animi officiis eum a dicta iste expedita placeat, cum quaerat.</p>
        <div>{{ data }}</div>
    </div>
</template>
  
<script setup>
const { data } = await useFetch('/api/ninja?name=shaun')
</script>
  
<style scoped>
h1 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    font-size: 18px;
    margin: 20px 0;
}
</style>