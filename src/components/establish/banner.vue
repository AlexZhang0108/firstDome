<template>
<div class="header">
  <ul class="con clearfix">
    <li> <img src="../../assets/img/logo.png"></li>
    <li class="fR" @click="home">个人中心</li>
  </ul>
  </div>
</template>
<script>
export default {
  methods: {
    home() {
      this.$router.push({
        path: "/personage"
      });
    }
  }
};
</script>
<style scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  border-top: 1px;
  border-top-width: 1px;
  background-color: #333333;
  min-width: 1200px;
}
.con {
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  padding: 10px 10px 0px 10px;
}
.con li {
  float: left;
  line-height: 45px;

  font-size: 18px;
  color: #ffffff;
}
</style>
