const Game = {
    data() {
        return {
            playerName: '',
            gameStarted: false,
            mysteryNumber: Math.floor(Math.random() * 10) + 1,
            guess: null,
            guesses: [],
            correct: false,
        }
    },
    methods: {
        addGuess() {
            this.guesses.push(this.guess);
            this.correct = this.guess == this.mysteryNumber;
        },
        reset() {
            this.correct = false;
            this.mysteryNumber = Math.floor(Math.random() * 10) + 1
            this.guesses = [];
            this.guess = null;
        }
    }
}

const app = Vue.createApp(Game).mount('#app');