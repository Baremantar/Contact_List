<template>
  <div class="startPage">
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import firebase from "firebase";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "vStartPage",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.push({name:'Login'});
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
        if (user) {
          router.replace("/home");
        }
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.startPage {
  max-height: 360px;
}
</style>