import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "JavaScript",
    theme: "default",
    UserCode: "",
    UserInput:"",
    AllLanguage: {
      JavaScript: "text/javascript",
      Python: "text/x-python",
      C: "text/x-csrc",
      Java: "text/x-java",
      "C++": "text/x-c++src",
    },
    compileResult:"",
    compileStatus:"status"
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
    },
    submitInput(state,newInput){
      state.UserInput=newInput
    },
    resultCode(state,compileResult){
      state.compileStatus = compileResult.substr(0,1) === "1" ? "success" : "fail"
      state.compileResult = compileResult.substr(2);
    },
    changeCompileStatus(state,compileStatus){
      state.compileStatus=compileStatus
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
