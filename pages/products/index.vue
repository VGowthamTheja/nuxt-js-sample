<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt-Dojo | Products',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'This is the products page',
        },
    ],
})
</script>

<style scoped></style>