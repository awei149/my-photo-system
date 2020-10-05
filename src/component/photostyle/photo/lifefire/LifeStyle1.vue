<template>
  <div class="lifestyle-outer_box">
    <div class="lifestyle_left_text">
      <textarea
        name="text"
        id="left_text"
        cols="70%"
        rows="7"
        v-model="text"
      ></textarea>
      <!-- <input type="text" class="left_text"> -->
    </div>
    <div class="lifestyle_right_photo">
      <img
        src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg"
        alt=""
        ref="img1"
      />
      <i class="el-icon-plus" id="file" @click="addImage"></i>
    </div>
    <input
      type="file"
      accept="image/*"
      ref="Input"
      @change="addImg($event)"
      style="display:none"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      imgData:[]
    };
  },
  methods: {
    addImg(e) {
      var files = this.$refs.Input.files; //利用input打开文件夹
      var that = this; //保存this作用域
      var img1 = this.$refs.img1;
      console.log(img1.src);
      function readAndPreview(file) {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            if (that.imgData.indexOf(this.result) === -1) {
              var timestamp = (new Date()).getTime();
              that.imgData.push({
                  id:timestamp,
                  url:this.result
              })
              img1.src = this.result;
              console.log(img1.src);
              console.log(this.result);

              // localStorage.setItem(that.imgid, this.result);
            //   that.$emit("getimg", {
            //     imageid: that.imgid,
            //     imageurl: this.result
            //   });
              // that.imageData.push(this.result);
            }
          };
        }
      }
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
      if (files.length === 0) {
        return;
      }
    },
    addImage(){
      this.$refs.Input.dispatchEvent(new MouseEvent('click'));
    },
  }
};
</script>
<style lang="scss" scoped>
.lifestyle-outer_box {
  width: 75%;
  height: 300px;
  // border: 1px solid #fff;
  margin: 0 auto;
  margin-top: 40px;
}
.lifestyle_left_text {
  display: flex;
  justify-content: center; //使子项目水平居中
  align-items: center; //使子项目垂直居中
  width: 55%;
  height: 100%;
  // background-color: #fff;
  float: left;
}
.lifestyle_right_photo {
  width: 45%;
  height: 100%;
  float: left;
  background-color: #f40;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.lifestyle_right_photo:hover{
    .el-icon-plus{
        opacity: 1;
        transition: all 0.5s ease-out;
    }
}
.el-icon-plus{
    position: absolute;
    font-size: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #eee;
    opacity: 0;
    transition: all 0.5s ease-out;;
}
#left_text {
  margin: auto;
  width: 80%;
  height: 259px;
  line-height: 37px;
  overflow: hidden;
  font-size: 20px;
  font-weight: bolder;
  color: #000;
  border: none;
  outline: none;
  resize: none;
  background-image: url("../../../../photo/background3.png");
  background-repeat: repeat-y;
  // cursor: pointer;
  // opacity: 0.1;
  // overflow-x: hidden;
  // overflow-y: hidden;
  border-bottom: 1px solid #000;
}
</style>
