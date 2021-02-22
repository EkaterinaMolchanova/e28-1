let Example = {
    data() {
        return {
            randomNumber1: Math.floor((Math.random() * 10) + 1),
            randomNumber2: Math.floor((Math.random() * 10) + 1),
            answer: '',
        }
    },
    methods: {
        submitAnswer() {
            console.log('Submit answer...');
        }
    },
}

const app = Vue.createApp(Example).mount('#app');
