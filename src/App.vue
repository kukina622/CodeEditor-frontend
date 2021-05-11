<template>
  <v-app>
    <Navigation />
    <v-main>
      <div class="contain">
        <Editor />
        <div class="std">
          <Output />
          <UserInput />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Editor from "./components/Editor";
import Navigation from "./components/Navigation";
import Output from "./components/Output";
import UserInput from "./components/userInput.vue";
export default {
  name: "App",

  components: {
    Editor,
    Navigation,
    Output,
    UserInput,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.contain {
  display: flex;
}
.std{
  display: flex;
  flex-direction: column;
  width: 25%;
}
</style>