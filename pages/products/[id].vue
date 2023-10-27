<template>
    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
import ProductDetails from '../../components/ProductDetails.vue';

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

const { data: product } = await useFetch(uri)

// If the product is empty, throw a 404 error
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found', fatal: true })
}

definePageMeta({
    layout: 'products',
})
</script>

<style scoped></style>