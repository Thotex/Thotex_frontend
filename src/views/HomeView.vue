<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1>{{ msg.msg }}</h1>
    <NavBarHomepage />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import NavBarHomepage from '@/components/NavBarHomepage.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const message : {msg: string} = {
      msg: "hola mundo"
    };
    let msg : any = reactive(message);
    msg.msg = 999;
    const changeMessage = (message : string) : void => {
      msg.value = message
    }
    return { msg , changeMessage };
  },
  components: {
    HelloWorld,
    NavBarHomepage
  },
});
</script>
