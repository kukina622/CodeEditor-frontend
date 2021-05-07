<template>
  <div class="outerOutput">
    <h2 class="compileResult">
      Compile {{ compileStatus }}
    </h2>
    <pre class="output">{{compileResult}}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["compileResult", "compileStatus"]),
  },
};
</script>

<style scoped>
.outerOutput {
  display: inline-flex;
  width: 25%;
  height: 100vh;
  flex-direction: column;
}
.output{
  display: block;
  background-color: rgb(187, 178, 178);
  color:white;
  overflow-y:auto;
  padding-top:20px;
  padding-left:20px;
  padding-right:20px;
  border: 1px solid rgb(187, 178, 178);
  border-radius:10px
}
.compileResult{
  text-align:center;
}
</style>