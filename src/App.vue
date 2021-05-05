<template>
  <v-app>
    <Navigation />
    <v-main>
      <Editor />
    </v-main>
  </v-app>
</template>

<script>
import Editor from "./components/Editor";
import Navigation from "./components/Navigation";

export default {
  name: "App",

  components: {
    Editor,
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
