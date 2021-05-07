<template>
  <v-app-bar app>
    <v-row align="center" justify="end">
      <div class="selectSection">
        <v-select
          hide-details="auto"
          v-model="selectedTheme"
          :items="themes"
          label="Theme"
          outlined
          dense
        />
      </div>
      <div class="selectSection">
        <v-select
          hide-details="auto"
          v-model="selectedLanguage"
          :items="languages"
          label="Language"
          outlined
          dense
        />
      </div>

      <v-btn
        color="#9CCC65"
        class="mr-3"
        height="40px"
        outlined
        @click="runCode"
      >
        <v-icon color="#9CCC65"> mdi-play </v-icon>
        Run
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      languages: ["Python", "JavaScript", "C", "C++", "Java"],
      themes: ["default", "cobalt", "monokai", "neat"],
      selectedLanguage: "JavaScript",
      selectedTheme: "default",
    };
  },
  methods: {
    async runCode() {
      this.$bus.$emit("runCode");
      let postData = { language: this.language, UserCode: this.UserCode };
      this.$store.commit("changeCompileStatus","loading")
      await this.axios.post("/compiler", postData)
      .then((res) => {
        let status = res.data.status;
        let compileResult=res.data.compileResult;
        if (status){
          this.$store.commit("resultCode",compileResult);
        }
      });
    },
  },
  computed: {
    ...mapState(["language", "UserCode"]),
  },
  watch: {
    selectedLanguage() {
      this.$store.commit("changeLanguage", this.selectedLanguage);
    },
    selectedTheme() {
      this.$store.commit("changeTheme", this.selectedTheme);
    },
  },
};
</script>

<style scoped>
.selectSection {
  width: 10vw;
  margin-right: 15px;
}
</style>
