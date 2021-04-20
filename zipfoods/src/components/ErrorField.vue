<template>
    <ul>
        <li
            v-for="(error, index) in errors"
            v-bind:key="index"
            class="form-feedback-error"
        >
            {{ error }}
        </li>
    </ul>
</template>

<script>
export default {
    props: ["errors"],
};
</script>
