<template>
  <div class="Login">
    <form class="container">
      <label class="form-component_label">Login</label>
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
      <input
        type="submit"
        @click="Login"
        value="Login"
        class="form-component btn"
      />

      <p class="link">
        Not yet registered? <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase";

import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          router.replace("/home");
        }
      });
    };

    return {
      Login,
      email,
      password,
    };
  },
};
</script>


<style lang="scss" scoped>
.container {
  .form-component_label {
  text-align: center;
  margin: 10px auto;
  width: 100px;
  height: 30px;
  display: block;
  font-weight: 600;
}
  justify-content: center;
  .link {
  margin: 0 auto;
  max-height: 30px;
  max-width: 200px;
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
.btn:hover {
  transition: 0.3s all ease;
  background-color: rgb(100, 158, 245);
  color: white;
}
</style>