<template>
  <div class="content">
    <div class="row">
      <input
        @change="contactTextChange"
        v-bind:value="contactText"
        class="form-control"
        type="text"
      />
      <button @click="addContactI" class="btn">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      contactText: "",
    };
  },
  methods: {
    ...mapActions(["addContact"]),
    contactTextChange(e) {
      this.contactText = e.target.value;
    },

    addContactI() {
      this.addContact({
        id: v1(),
        title: this.contactText,
        complete: false,
      });
      this.contactText = "";
    },
  },
};
</script>

<style scoped>
.content{
  margin-top: 10px;
  max-height: 50px;
}
.form-control {
  max-height: 100px;
  max-width: 450px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.btn {
  background: #fff;
  border-radius: 10px;
  max-width: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.btn:hover {
  transition: 0.3s all ease;
  background-color: rgb(100, 158, 245);
  color: white;
}
.row{
  justify-content: center;
  display: flex;
}
</style>