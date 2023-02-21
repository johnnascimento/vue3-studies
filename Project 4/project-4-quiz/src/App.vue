<template>
  <div v-bind:class="{hidden : !this.question && !this.incorrectAnswers && !this.correctAnswer}">
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="(answer, idx) in this.answers" v-bind:key="idx">
        <div class="form-control">
          <input type="radio"
            :disabled="this.answerSubmitted"
            :value="answer"
            class="options"
            name="options"
            v-model="this.chosenAnswer">
          <label v-html="answer"></label>
        </div>
      </template>

      <button type="button" class="send" id="send" v-if="!this.answerSubmitted" @click="this.submitAnswer()" :disabled="this.answerSubmitted">Send</button>

      <section v-if="this.answerSubmitted" class="result">
        <h4 v-if="this.chosenAnswer == this.correctAnswer">
          &#9989; Congratulations, the answer "<span v-html="this.correctAnswer"></span>" is correct.
        </h4>

        <h4 v-else>
          &#10060; I'm sorry, you picked the wrong answer. The correct is "<span v-html="this.correctAnswer"></span>"
        </h4>

        <button type="button" class="refreshQuiz" id="send" @click="this.getNextQuestion()" v-if="this.answerSubmitted">Next question</button>
      </section>
    </template>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      answerSubmitted: false
    }
  },

  computed: {
    answers() {
      let answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      answers.splice(Math.round(Math.random() * answers.length), 0, this.correctAnswer);

      return answers;
    }
  },

  methods: {
    submitAnswer() {
      if (!this.chosenAnswer) {
        alert('Select an option!');
      } else {
        if (this.chosenAnswer == this.correctAnswer) {
          console.log('this.chosenAnswer == this.correctAnswer');
        }

        this.answerSubmitted = true;
      }
    },

    getNextQuestion() {
      this.ajaxUrl = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=medium';
      this.axios.get(this.ajaxUrl)
        .then((response) => {
            console.log(response.data.results[0])

            this.question = response.data.results[0].question;
            this.incorrectAnswers = response.data.results[0].incorrect_answers;
            this.correctAnswer = response.data.results[0].correct_answer;
            this.answerSubmitted = false;
            this.chosenAnswer = undefined;
        });
    }
  },

  created() {
    console.log('created this', this);
    this.getNextQuestion();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hidden {
  display: none;
}
</style>
