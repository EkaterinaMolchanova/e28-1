let WordScramble = {
    data() {
        return {
            words: [
                ['apple', 'Sometimes red, sometimes delicious'],
                ['washington', 'Rushmore’s left edge'],
                ['pumpkin', 'Halloween’s favorite fruit'],
                ['football', 'Play with your hands or feet, depending on your location']
            ],
            gameStarted: false,
            name: '',
            hint: '',
            word: '',
            guess: '',
            lastWord: '',
            feedback: false,
            correct: false,
        }
    },
    computed: {
        displayWord() {
            let wordAsArray = this.word.split('');
            wordAsArray.sort(() => Math.random() - 0.5);
            return wordAsArray.join('');
        }
    },
    methods: {
        submitGuess() {
            this.correct = this.guess.toLowerCase() == this.word;
            this.feedback = true;
        },
        startGame() {
            this.gameStarted = true;
            this.loadGame();
        },
        loadGame() {
            this.feedback = false;
            this.guess = '';

            while (this.word === this.lastWord) {
                this.choice = this.words[Math.floor(Math.random() * this.words.length)];
                this.word = this.choice[0];
                this.hint = this.choice[1];
            }

            this.lastWord = this.word;
        }
    }
}

const app = Vue.createApp(WordScramble).mount('#app');