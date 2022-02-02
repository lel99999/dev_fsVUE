<template>
  <div id="app">
    <tabs>
      <tab title="Tab 1">Hello From Tab 1</tab>
      <tab title="Tab 2">Hello From Tab 2</tab>
      <tab title="Tab 3">Hello From Tab 3</tab>
      <tab title="Tab 4">Hello From Tab 4</tab>
    </tabs>
    <Tester />
  </div>
</template>

<script>
//import CalendarWeek from './components/CalendarWeek.vue';
//import CalendarEntry from './components/CalendarEntry.vue';
import Tester from './components/Tester.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

export default {
  name: 'App',
  components: {
      Tester,
      Tab,
      Tabs
    },
    data () {
      return {
        mode: 'dark'
      }
    },
    methods: {
      changeStyle () {
        if (this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      }
    }
  }


</script>

<style lang="scss">
html,
body {
  height: 100%;
}
</style><style lang="scss">
html,
body {
  height: 100%;
}
</style>
<style lang="scss" scoped>
#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
