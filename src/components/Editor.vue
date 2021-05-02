<template>
  <codemirror 
    v-model="code" 
    :options="cmOptions"
    @ready="onCmReady" 
  />
</template>

<script>
import { codemirror } from "vue-codemirror";

// import base style
import "codemirror/lib/codemirror.css";

// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/clike/clike.js"; //contain C C++ Java
import "codemirror/mode/python/python.js";

//theme css
import "codemirror/theme/monokai.css";
import "codemirror/theme/neat.css";

//hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/selection/active-line.js";

//other addon
import "codemirror/addon/edit/closebrackets";

export default {
  components: {
    codemirror,
  },
  data() {
    return {
      code: "",
      cmOptions: {
        tabSize: 2,
        mode: "text/x-python",
        theme: "neat",
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
        smartIndent: true,
        indentUnit: 2,
      },
      language: {
        Javascript: "text/javascript",
        Python: "text/x-python",
        C: "text/x-csrc",
        Java: "text/x-java",
        "C++": "text/x-c++src",
      },
    };
  },
  methods: {
    onCmReady(cm) {
      cm.setSize("80%", "100vh");
      cm.on("keypress", () => {
        cm.showHint({ completeSingle: false });
      });
    },
  },
};
</script>
