const Game = {
    data() {
        return {
            playerName: '',
            gameStarted: false,
            mysteryNumber: Math.floor(Math.random() * 10) + 1,
            guess: null,
            guesses: [],
            correct: false,
            // The following two properties were added just to demo
            // some array/object rendering. They are not actually part of the game/app.
            settings: {
                max: 200,
                type: 'numeric',
                guessLimit: 15,
            },
            guessesDetailed: [
                { guess: 15, result: 'low' },
                { guess: 60, result: 'high' },
                { guess: 50, result: 'low' },
            ]
        }
    },
    methods: {
        addGuess(event) {
            console.log(event);
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