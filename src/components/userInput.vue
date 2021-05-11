<template>
  <div class="userInputOuter">
    <h2 class="inputTitle">Input</h2>
    <textarea class="userInput" v-model="userInput"></textarea>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userInput:""
    }
  },
  created() {
    this.$bus.$on("runCode", () => {
      this.$store.commit("submitInput", this.userInput);
    });
  },
  beforeDestroy() {
    this.$bus.$off("runCode");
  }
};
</script>

<style scoped>
.userInputOuter {
  height: 40vh;
  width: 100%;
}
.userInput{
  width: 100%;
  height: 35vh;
  border: 1px solid black;
  border-radius: 10px;
}
.inputTitle{
  text-align:center
}
</style>

