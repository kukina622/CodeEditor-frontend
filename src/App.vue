<template>
  <v-app>
    <Navigation />
    <v-main>
      <div class="contain">
        <Editor />
        <Output />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Editor from "./components/Editor";
import Navigation from "./components/Navigation";
import Output from "./components/Output";
export default {
  name: "App",

  components: {
    Editor,
    Navigation,
    Output,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.contain{
  display: flex;
}
</style>