const Game = {
    data() {
        return {
            playerName: '',
            mysteryNumber: 4,
            guess: null,
            guesses: [],
            correct: false,
        }
    },
    methods: {
        addGuess() {
            this.guesses.push(this.guess);
            this.correct = this.guess == this.mysteryNumber;
        }
    }
}

const app = Vue.createApp(Game).mount('#app');