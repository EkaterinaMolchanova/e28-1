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
                        >{{ link }}</router-link
                    >
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
import { products } from "@/common/products.js";

export default {
    name: "App",
    data() {
        return {
            products: products,

            /* Store links in an array to maintain order */
            links: ["home", "products", "categories"],

            /* Map links to the appropriate component */
            paths: {
                home: "/",
                products: "/products",
                categories: "/categories",
            },
        };
    },
};
</script>

<style src='@/assets/css/zipfoods.css'></style>

<style>
</style>
