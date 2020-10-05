<template>
  <div>
    <el-container>
      <el-main>
        <router-view v-if="show"></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  provide(){
    return{
      reload: this.reload
    }
  },
  data() {
    return {
      msg: "根组件",
      show:true
    };
  },
  methods: {
    reload(){
      this.reload = false;
      this.$nextTick(function(){
        this.reload = true;
      })
    }
  }
};
</script>
<style lang="scss" scope>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>