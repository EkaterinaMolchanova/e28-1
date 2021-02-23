let Example = {
    data() {
        return {
            playerName: '',
            randomNumber1: Math.floor((Math.random() * 10) + 1),
            randomNumber2: Math.floor((Math.random() * 10) + 1),
            answer: '',
            imageSource: null,
            imageAlt: null,
            feedback: null,
            correct: null,
            feedbackClass: null,
            showHint: false,
            statements: [],
            level: '',
            abc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in pulvinar libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        }
    },
    methods: {
        submitAnswer() {
            let correctAnswer = this.randomNumber1 + this.randomNumber2;

            if (this.answer === correctAnswer) {
                this.imageSource = 'happy';
                this.imageAlt = 'Happy smiley face';
                this.feedback = 'You got it correct!';
                this.correct = true;
                this.feedbackClass = 'correct';
            } else {
                this.imageSource = 'sad';
                this.imageAlt = 'Sad frowny face';
                this.feedback = 'Incorrect - try again.';
                this.correct = false;
                this.feedbackClass = 'incorrect';
            }
        }
    },
}

const app = Vue.createApp(Example).mount('#app');
