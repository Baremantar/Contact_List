<template>
  <div class="content">
    <div v-for="contact in allTContacts" :key="contact.id" class="row">
      <vContactItem :contact="contact" />
    </div>
  </div>
</template>

<script>
import vContactItem from "@/components/v-contactItem";
import { mapGetters } from "vuex";

export default {
  components: {
    vContactItem
  },
  computed: {
    ...mapGetters(["allTContacts", "completed"])
  }
};
</script>

<style scoped>
.content{
  max-height: 50px;
  margin: 10px 0;
}
</style>