<template>
  <div class="outer_box">
    <p class="title" style="color:#000">WE ARE BEAUTY HUNTERS !</p>
    <div class="template_box">
      <div class="template1">
        <div v-for="(item, index) in data" :key="index" class="life1_box">
          <v-lifestyle></v-lifestyle>
        </div>
        <el-button type="success" class="button" @click="addphoto"
          >新增模板</el-button
        >
      </div>
      <div class="template2">
          <v-lifestyle2></v-lifestyle2>
      </div>
      <div class="template3">
        <v-lifestyle3></v-lifestyle3>
      </div>
      <!-- <div class="template4">
        <v-lifestyle4></v-lifestyle4>
      </div> -->
      <div class="template5">
        <v-lifestyle5></v-lifestyle5>
      </div>
    </div>
  </div>
</template>
<script>
import lifestyle from "./lifefire/LifeStyle1.vue";
import lifestyle2 from './lifefire/LifeStyle2.vue'
import lifestyle3 from './lifefire/lifeStyle3.vue'
// import lifestyle4 from './lifefire/lifeStyle4.vue'
import lifestyle5 from './lifefire/LifeStyle5.vue'
export default {
  data() {
    return {
      data: [1]
    };
  },
  components: {
    "v-lifestyle": lifestyle,
    'v-lifestyle2':lifestyle2,
    'v-lifestyle3':lifestyle3,
    // 'v-lifestyle4':lifestyle4,
    'v-lifestyle5':lifestyle5
  },
  methods: {
    addphoto() {
      this.data.push(1);
    }
  }
};
</script>
<style lang="scss" scope>
.outer_box {
  width: 100%;
  //   height: 500px;
  background-color: #fff;
  overflow: hidden;
}
.template_box{
    margin-bottom: 20px;
    overflow: hidden;
    .template1{
        overflow: hidden;
    }
    .template2{
        overflow: hidden;
    }
    .template5{
      overflow: hidden;
    }
}
.title {
  margin: 0 auto;
  font-size: 50px;
  font-weight: bolder;
  color: #fff;
  margin-top: 30px;
  // overflow: hidden;
}
.life1_box {
  margin-bottom: 20px;
}
.button {
  float: left;
  margin-left: 250px;
  margin-bottom: 20px;
  background-color: #0b0c11;
  border-color: #fff;
}
</style>
