<template>
    <div id="cart-page">
        <h1>Your Cart</h1>

        <div v-if="items.length == 0">No items</div>

        <ul data-test="cart-contents" class="clean-list" v-if="productsLoaded">
            <li v-for="item in items" v-bind:key="item.id">
                {{ item.quantity }} x {{ getProductDetails(item.id).name }}
                <button
                    v-on:click="removeFromCart(item.id)"
                    data-test="remove-from-cart-button"
                >
                    Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { cart } from "@/common/app.js";

export default {
    data() {
        return {
            items: [],
        };
    },
    computed: {
        productsLoaded() {
            return this.products.length > 0;
        },
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.items = cart.getItems();
    },
    methods: {
        getProductDetails(id) {
            return this.products.filter((product) => {
                return product.id == id;
            }, id)[0];
        },
        removeFromCart(id) {
            cart.remove(id);

            this.$store.commit("setCartCount", cart.count());
        },
    },
};
</script>

<style scoped>
button {
    font-size: 1.2rem;
    padding: 6px;
    background-color: var(--red);
}
</style>