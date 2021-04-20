import { createStore, createLogger } from 'vuex'

// Only load the createLogger plugin when in development mode
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

export const store = createStore({
    plugins,
    state() {
        return {
            cartCount: 0,
            products: [],
        }
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        }
    }
})