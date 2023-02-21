<template>
  <div v-bind:class="{hidden : !this.question && !this.incorrectAnswers && !this.correctAnswer}">
    <h1 v-html="this.question"></h1>

    <div class="form-control">
      <input type="radio" value="true" class="options" name="options" id="option-1">
      <label for="option-1">True</label>
    </div>

    <div class="form-control">
      <input type="radio" value="false" class="options" name="options" id="option-2">
      <label for="option-2">False</label>
    </div>

    <button type="button" class="send" id="send">Send</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined
    }
  },

  created() {
    this.axios.get('https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean').then((response) => {
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
