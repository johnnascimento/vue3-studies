<template>
  <div v-bind:class="{hidden : !this.question && !this.incorrectAnswers && !this.correctAnswer}">
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="(answer, idx) in this.answers" v-bind:key="idx">
        <div class="form-control">
          <input type="radio"
            :value="answer"
            class="options"
            name="options"
            v-model="this.chosen_answer">
          <label v-html="answer"></label>
        </div>
      </template>

      <button type="button" @click="this.submitAnswer()" class="send" id="send">Send</button>
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
      chosen_answer: undefined
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
      if (!this.chosen_answer) {
        alert('Select an option!');
      } else {
        if (this.chosen_answer == this.correctAnswer) {
          alert('Props! This is right')
        } else {
          alert('NOPs! This is right')
        }
      }
    }
  },

  created() {
    this.ajaxUrl = 'https://opentdb.com/api.php?amount=1&category=11&difficulty=medium';
    this.axios.get(this.ajaxUrl)
      .then((response) => {
          console.log(response.data.results[0])

          this.question = response.data.results[0].question;
          this.incorrectAnswers = response.data.results[0].incorrect_answers;
          this.correctAnswer = response.data.results[0].correct_answer;
      });
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
