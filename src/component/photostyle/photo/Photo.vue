<template>
  <div class="photo_box">
    <div class="photo">
      <img
        id="img3"
        :src="src"
        alt=""
        :imgid="imgid"
      />
    </div>
    <input type="file" accept="image/*" ref="Input" @change="changeImage($event)" style="display:none">
    <div class="shadow">
      <p class="shadow_text2">Web Design</p>
      <p class="shadow_text1">PROJECT TITLE</p>
      <i class="el-icon-delete" @click="removeImg"></i>
      <i class="el-icon-plus" id="file" @click="addImg"></i>
    </div>
  </div>
</template>
<script>
// var shadowjs = require("./js/photo.js");
export default {
  data() {
    return {
      imageData:[]
    }
  },
  props:['src','imgid'],
  methods: {
    changeImage(e){
      var files = this.$refs.Input.files;//利用input打开文件夹
      var that = this;//保存this作用域
      function readAndPreview(file){
        if (/\.(jpe?g|png|gif)$/i.test(file.name)){
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e){
            if(that.imageData.indexOf(this.result) === -1){
              // var timestamp = (new Date()).getTime();
              // localStorage.setItem(that.imgid, this.result);
              that.$emit('getimg',{imageid:that.imgid,imageurl:this.result});
              // that.imageData.push(this.result);
            }
          };
        }
      }
      if(files){
        [].forEach.call(files, readAndPreview);
      }
      if (files.length === 0) {
        return;
      }
    },
    addImg(){
      this.$refs.Input.dispatchEvent(new MouseEvent('click'));
    },
    removeImg(){
      console.log("11删除")
      console.log(this.imgid)
      // this.$emit('removeimg',this.imgid);
      this.$parent.removeimg(this.imgid);
    }
  },
  mounted() {
    // if (localStorage.length > 1) {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     this.imageData.push(localStorage.getItem(key));
    //   }
    // }else{
    //   this.imageData = [];
    // }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.photo {
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.shadow {
  position: absolute;
  background-color: rgb(3, 46, 58);
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  .shadow_text1 {
    position: absolute;
    left: 50px;
    top: 50%;
    // transform:translateX(-50%);
    transform: translateY(-50%);
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: all 0.5s ease-out;
  }
  .shadow_text2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: all 0.5s ease-out;
  }
  .el-icon-delete {
    position: absolute;
    left: 100px;
    top: 50%;
    font-size: 20px;
    // transform:translateX(-200%);
    transform: translateY(-50%);
    color: #fff;
    transition: all 0.5s ease-out;
  }
  .el-icon-plus {
    position: absolute;
    left: 150px;
    top: 50%;
    font-size: 20px;
    // transform: translateX(100%);
    transform: translateY(-50%);
    color: #fff;
    transition: all 0.5s ease-out;
  }
}
.shadow:hover {
  opacity: 0.8;
  transition: all 0.5s ease-out;
  .shadow_text1 {
    transform: translateY(-50px);
    // transform: translateX(-100px);
    transition: all 0.5s ease-out;
  }
  .shadow_text2 {
    font-size: 16px;
    transition: all 0.5s ease-out;
  }
  .el-icon-delete {
    transform: translateY(50px);
    transition: all 0.5s ease-out;
  }
  .el-icon-plus {
    transform: translateY(50px);
    transition: all 0.5s ease-out;
  }
}
.photo_box {
  position: relative;
  padding: 0px;
  width: 260px;
  height: 260px;
  display: inline-block;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  background-image: url("../../../photo/3ac3fc75e81ba4e60a511fb0d1e6a4cd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
