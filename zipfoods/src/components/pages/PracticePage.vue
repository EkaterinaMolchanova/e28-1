<template>
    <div>
        {{ greeting }}
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
    setup() {
        const playerName = ref("Bob");

        const greeting = computed(() => {
            return "Hello " + playerName.value;
        });

        onMounted(() => {
            console.log("The component was mounted...");
        });

        return { playerName, greeting };
    },
};
</script>