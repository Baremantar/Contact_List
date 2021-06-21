<template>
  <div class="home">
    <div class="container">
      <div class="head"><h1>Welcome, user</h1></div>
      <div class="left_side">
        <div class="contacts label" >List</div>
        <button class="logout_btn" @click="logout">Logout</button>
      </div>
      <div class="right_side">
        <v-contactInput></v-contactInput>
        <v-contactList></v-contactList>
      </div>
    </div>
  </div>
</template>

<script>
import vContactList from '../components/v-contactList.vue'
import vContactInput from '../components/v-contactInput.vue'
import {useRouter} from 'vue-router'
import firebase from 'firebase'

export default {
  components:{
    vContactList,
    vContactInput
  },
  setup() {
    const router = useRouter();
    const logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Signed out");
        })
        .catch((err) => {
          alert(err.message);
        });
      router.replace('/login');
    };

    return {
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  justify-content: center;
  display: flex;
  .head {
    max-height: 50px;
    text-align: center;
    background-color: rgb(233, 233, 233);
    border-bottom: 1px solid rgb(216, 216, 216);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
}
.container {
  margin: 0 10px;
  margin-top: 10px;
  max-width: 1240px;
  max-height: 900px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  background: rgb(245, 245, 245);
}

.left_side {
  display: block;
  float: left;
  max-width: 30%;
  max-height: 850px;
  .label {
    color: #000;
    line-height: 60px;
    height: 60px;
    text-align: center;
    background-color: rgb(233, 233, 233);
    font-weight: 700;
    position: relative;
    left: 0px;
    transition: 0.3s all ease;
    border-bottom: 1px solid rgb(216, 216, 216);
  }
  .label:hover {
    transition: 0.3s all ease;
    color: white;
    background-color: rgb(100, 158, 245);
  }
  .logout_btn {
    position: relative;
    left: 20px;
    top: 720px;
    text-align: center;
    max-width: 90%;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: 0.3s all ease;
    font-weight: 600;
  }
  .logout_btn:hover {
    transition: 0.3s all ease;
    background-color: rgb(100, 158, 245);
    color: white;
  }
}
.right_side {
  border-left: 1px solid rgb(216, 216, 216);
  border-bottom-right-radius: 30px;
  background-color: rgb(233, 233, 233);
  position: relative;
  max-height: 850px;
  float: right;
  max-width: 70%;
}
</style>