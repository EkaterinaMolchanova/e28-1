import { createStore, createLogger } from 'vuex'
import { axios } from "@/common/app.js";

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            cartCount: 0,
            products: [],
            user: null,
        }
    },
    // Methods used to alter the state of our store
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        }
    },
    // Methods that can contain async. code
    // Can not directly alter the state - has to change state
    // by committing mutations
    actions: {
        fetchProducts(context) {
            axios.get("product").then((response) => {
                context.commit('setProducts', response.data.product);
            });
        },
        authUser(context) {
            axios.post('auth').then((response) => {
                if (response.data.authenticated) {
                    context.commit('setUser', response.data.user);
                }
            });
        },
    },
    getters: {
        getProductById(state) {
            return function (id) {
                return state.products.filter((product) => {
                    return product.id == id;
                }, id)[0];
            }
        }
    }
})