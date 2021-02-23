let Example = {
    data() {
        return {
            playerName: '',
            randomNumber1: Math.floor((Math.random() * 10) + 1),
            randomNumber2: Math.floor((Math.random() * 10) + 1),
            answer: '',
            imageSource: null,
            imageAlt: null,
            correct: null,
            feedbackClass: null,
            showHint: false,
            statements: [],
            statementsFeedback: {},
            level: '',
            bonusChallenges: {
                oddNumber: 'Is the answer an odd number?',
                greaterThan10: 'Is the answer greater than 10?',
                divisibleBy3: 'Is the answer evenly divisible by 3?'
            }
        }
    },
    methods: {
        submitAnswer() {
            let correctAnswer = this.randomNumber1 + this.randomNumber2;

            if (this.answer === correctAnswer) {
                this.imageSource = 'happy';
                this.imageAlt = 'Happy smiley face';
                this.correct = true;
                this.feedbackClass = 'correct';
            } else {
                this.imageSource = 'sad';
                this.imageAlt = 'Sad frowny face';
                this.correct = false;
                this.feedbackClass = 'incorrect';
            }

            Object.keys(this.bonusChallenges).forEach((key) => {

                let isTrue = null;

                if (key == 'oddNumber') {
                    isTrue = this.answer % 2 != 0;
                } else if (key == 'greaterThan10') {
                    isTrue = this.answer > 10;
                } else if (key == 'divisibleBy3') {
                    isTrue = this.answer % 3 == 0;
                }

                let feedback = isTrue && this.statements.includes(key) || !isTrue && !this.statements.includes(key);

                this.statementsFeedback[key] = [isTrue, feedback];
            });


        }
    },
}

const app = Vue.createApp(Example).mount('#app');
