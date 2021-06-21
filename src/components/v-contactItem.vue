<template>
  <div class="content">
    <div class="row">
      <h3 v-if="!editing" class="text_row">{{ contact.title }}</h3>

      <div v-else class="row">
        <input
          v-bind:value="contactText"
          @change="contactTextChange"
          type="text"
          class="form-control"
        />
      </div>
      <div class="row">
        <button @click="updateContactI(contact)" class="btn">
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button @click="deleteContact(contact.id)" class="btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    contact: {},
  },
  data() {
    return {
      contactText: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["deleteContact", "updateContact"]),
    contactTextChange(e) {
      this.contactText = e.target.value;
    },
    updateContactI(contact) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.contactText = contact.title;
        this.updateContact(contact);
      } else {
        contact.title = this.contactText;
        contact.complete = this.completed;
      }
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
.text_row{
  line-height: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  text-align: center;
}
.form-control {
  text-align: center;
  max-width: 600px;
  margin: 0px 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.row {
  max-width: 500px;
  display: flex;
}
.btn {
  background: #fff;
  margin-left: 10px;
  max-width: 75px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}
.btn:hover {
  transition: 0.3s all ease;
  background-color: rgb(100, 158, 245);
  color: white;
}
</style>