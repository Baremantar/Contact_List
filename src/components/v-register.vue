<template>
  <div class="Register">
    <form class="container">
      <label class="form-component_label">Register</label>
      <input
        type="email"
        v-model="email"
        placeholder="type email"
        class="form-component"
      />
      <input
        type="password"
        v-model="password"
        placeholder="type password"
        class="form-component"
      />
      <button class="form-component btn" @click="Register">Register</button>
    </form>
    <div class="link">
      Have already account?
      <router-link to="/login">Sign in</router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";

export default {
  name: "vRegister",
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => alert(err.message));
    };
    return {
      Register,
      email,
      password,
    };
  },
};
</script>

<style scoped>
.Register {
  justify-content: center;
}
.container {
  justify-content: center;
  max-height: 220px;
}
.form-component {
  text-align: center;
  margin: 10px auto;
  width: 300px;
  height: 50px;
  display: block;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  transition: 0.3s all ease;
  font-weight: 600;
}
.form-component_label {
  text-align: center;
  margin: 10px auto;
  width: 100px;
  height: 30px;
  display: block;
  font-weight: 600;
}
.btn:hover {
  transition: 0.3s all ease;
  background-color: rgb(100, 158, 245);
  color: white;
}
.link {
  margin: 0 auto;
  max-height: 30px;
  max-width: 210px;
  padding: 3px;
  border-radius: 8px;
  font-weight: 300;
  color: white;
  background-color: rgb(100, 158, 245);
}
a {
  text-decoration: none;
  color: white;
  font-weight: 700;
}
</style>