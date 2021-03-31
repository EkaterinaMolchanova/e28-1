<template>
    <div id="categories-page">
        <h2>Categories</h2>
        <ul class="clean-list">
            <li v-for="(category, id) in categories" v-bind:key="id">
                {{ category }}
            </li>
        </ul>
    </div>
</template>

<script>
import { products } from "@/common/products.js";

export default {
    data() {
        return {
            products: products,
        };
    },
    computed: {
        categories() {
            let categories = this.products.map((product) => product.categories);
            let mergedCategories = [].concat.apply([], categories);

            // Return unique, sorted categories
            return [...new Set(mergedCategories)].sort();
        },
    },
};
</script>

<style>
</style>