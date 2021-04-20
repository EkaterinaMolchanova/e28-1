<template>
    <div id="product-page">
        <div v-if="productNotFound">
            <p>Product {{ id }} not found.</p>
            <router-link v-bind:to="'/products'"
                >Go to all products</router-link
            >
        </div>

        <div v-else-if="product">
            <show-product
                v-bind:product="product"
                v-bind:detailed="true"
            ></show-product>

            <button v-on:click="addToCart">Add to cart</button>

            <transition name="fade">
                <div class="alert" v-if="addConfirmation">
                    This product was added to your cart!
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";

import { cart } from "@/common/app.js";

export default {
    components: {
        "show-product": ShowProduct,
    },
    props: {
        id: {
            type: String,
        },
        products: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {
            addConfirmation: false,
        };
    },
    computed: {
        product() {
            return this.products.filter((product) => {
                return product.id == this.id;
            }, this.id)[0];
        },
        productNotFound() {
            return this.product == null;
        },
    },
    methods: {
        addToCart() {
            console.log(this.product.id);

            cart.add(this.product.id);

            this.$store.commit("setCartCount", cart.count());

            this.addConfirmation = true;

            setTimeout(() => {
                this.addConfirmation = false;
            }, 3000);
        },
    },
};
</script>

<style scoped>
</style>