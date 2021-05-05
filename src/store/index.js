import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "JavaScript",
    theme: "default",
    UserCode: "",
    AllLanguage: {
      JavaScript: "text/javascript",
      Python: "text/x-python",
      C: "text/x-csrc",
      Java: "text/x-java",
      "C++": "text/x-c++src",
    },
  },
  mutations: {
    changeLanguage(state, newLanguage) {
      state.language = newLanguage;
    },
    changeTheme(state, newTheme) {
      state.theme = newTheme;
    },
    submitCode(state,newCode){
      state.UserCode=newCode;
    }
  },
  actions: {},
  modules: {},
  getters: {
    editorLanguage(state) {
      return state.AllLanguage[state.language];
    },
  },
});
