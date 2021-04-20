<template>
    <div>
        <img
            alt="ZipFoods logo"
            id="logo"
            src="@/assets/images/zipfoods-logo.png"
        />

        <nav>
            <ul>
                <li>
                    <router-link
                        v-for="link in links"
                        v-bind:key="link"
                        v-bind:to="paths[link]"
                    >
                        <span v-if="link == 'cart'">({{ cartCount }})</span>
                        {{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>

        <router-view
            v-bind:products="products"
            v-on:update-products="loadProducts"
        ></router-view>
    </div>
</template>

<script>
import { axios, cart } from "@/common/app.js";

export default {
    name: "App",
    data() {
        return {
            products: [],

            /* Store links in an array to maintain order */
            links: ["home", "products", "add a product", "categories", "cart"],

            /* Map links to  the appropriate component */
            paths: {
                home: "/",
                products: "/products",
                "add a product": "/product/new",
                categories: "/categories",
                cart: "/cart",
            },
        };
    },
    computed: {
        cartCount() {
            return this.$store.state.cartCount;
        },
    },
    mounted() {
        this.loadProducts();

        this.$store.commit("setCartCount", cart.count());
    },
    methods: {
        loadProducts() {
            axios.get("product").then((response) => {
                this.products = response.data.product;
            });
        },
    },
};
</script>

<style src='@/assets/css/zipfoods.css'></style>

<style>
</style>
