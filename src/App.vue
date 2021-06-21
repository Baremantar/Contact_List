<template>
  <div id="App">
    <router-view/>
  </div>
</template>

<script>

export default {
 name: 'App',
 
}
</script>
<style >
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
html,
body {
  background-color:white;
  font-family: "Titillium Web", sans-serif;}
</style>