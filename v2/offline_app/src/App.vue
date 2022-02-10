<template>
  <div class="flex w-screen h-screen text-gray-700">
    <div class="flex flex-col flex-shrink-1 w-150 border-r border-gray-300 bg-gray-100">
      <!-- sidebar -->
        <!-- <v-treeview v-model="treeData" :treeTypes="treeTypes" @selected="selected" :openAll="openAll" :contextItems="contextItems" @contextSelected="contextSelected"></v-treeview> -->
        <SideTree></SideTree>
        <img src="./assets/automatedsyscheck_small.png" />
      
    </div>
    <div class="flex flex-col flex-grow">
      <!-- main content -->
      <TabView></TabView>
    </div>
  </div>
</template>
<script>
//import VTreeview from "v-treeview";
import VTreeviewVue from "./components/VTreeview.vue";
import VTreeviewItemVue from "./components/VTreeviewItem.vue";
import SideTree from "./components/SideTree.vue";
import TabView from "./components/TabView.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


export default {
  name: 'App',
  components: {
    // VTreeview,
    // VTreeviewItemVue,
    SideTree,
    TabView,
  }
};
</script>

