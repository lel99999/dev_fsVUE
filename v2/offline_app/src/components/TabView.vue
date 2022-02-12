<template>
  <div id="app">
    <b-btn @click="show2 = !show2;">Show Second Tab? -> {{ show2 }}</b-btn>

    <keep-alive>
      <b-tabs lazy>
        <b-tab title="first"> <br />I'm the first fading tab </b-tab>

        <b-tab title="second" v-if="show2">
          <br />I'm the second tab content
        </b-tab>

        <b-tab title="third"> <br />I'm the third tab content </b-tab>
      </b-tabs>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  data() {
    return {
      show2: true
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #263747;
  margin-top: 50px;
}
</style>