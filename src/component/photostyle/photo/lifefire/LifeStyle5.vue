<template>
  <div class="life5_outerbox">
    <input
      type="file"
      accept="image/*"
      ref="Input"
      @change="addImg($event)"
      style="display:none"
    />
    <p class="life5_title">Personal details</p>
    <div class="left_photo">
      <i class="el-icon-plus" @click="addImage"></i>
      <img
        :src="imgUL"
        alt=""
      />
    </div>
    <div class="right_text">
      <p>name</p>
      <input type="text" required />
      <hr />
      <br />
      <br />
      <br />
      <p>habit</p>
      <input type="text" />
      <hr />
      <br />
      <br />
      <br />
      <p>constellation</p>
      <input type="text" />
      <hr />
      <br />
      <br />
      <br />
      <p>message</p>
      <textarea name="" id="" cols="100%" rows="3"></textarea>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUL: ""
    }
  },
  methods: {
      addImage(){
          this.$refs.Input.dispatchEvent(new MouseEvent("click"));
      },
    addImg() {
      var files = this.$refs.Input.files; //利用input打开文件夹
      var that = this; //保存this作用域
      function readAndPreview(file) {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            that.imgUL = this.result;
          };
        }
      }
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
      if (files.length === 0) {
        return;
      }
    }
  }
}
</script>
<style lang="scss" scope>
.life5_outerbox {
  width: 100%;
  height: 700px;
  background-color: #fff;
  .life5_title {
    font-size: 50px;
    font-weight: bolder;
    color: #000;
  }
  .left_photo {
    width: 50%;
    height: 100%;
    position: relative;
    float: left;
    background-image: url('../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    // background-color: blanchedalmond;
    img {
      width: 100%;
      height: 100%;
    }
    .el-icon-plus {
      // vertical-align: middle;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
      color: rgb(241, 196, 15);
      opacity: 0;
      transition: all 0.3s ease-out;
    }
  }
  .left_photo:hover {
    .el-icon-plus {
      opacity: 1;
      transition: all 0.3s ease-out;
    }
  }
  .right_text {
    width: 50%;
    height: 100%;
    float: left;
    // background-color: blue;
    text-align: left;
    color: #fff;
    input {
      border: none;
      // outline: none;
      // resize: none;
      color: #000;
      // opacity: 0;
      font-size: 25px;
      background-color: #fff;
      width: 80%;
      height: 40px;
      // float: left;
      text-indent: 2rem;
    }
    input:focus {
      outline: -webkit-focus-ring-color auto 0rem;
    }
    // hr{
    //     border: 1px solid #000;
    // }
    p {
      width: 100%;
      text-align: left;
      color: #000;
      text-indent: 2rem;
    }
    textarea {
      border: none;
      outline: none;
      resize: none;
      font-size: 25px;
      background-color: #fff;
      text-indent: 2rem;
      color: #000;
    }
  }
}
</style>
