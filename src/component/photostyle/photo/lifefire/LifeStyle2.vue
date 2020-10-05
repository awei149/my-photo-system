<template>
  <div class="life2-outer_box">
    <input
            type="file"
            accept="image/*"
            ref="Input"
            @change="addImg($event)"
            style="display:none"
          />
    <p class="life2_title">PHOTO GALLERY</p>
    <div ref="life2">
      <div class="life2_photo_template1" ref="life2_child1">
        <div class="life2_photo_img1 position">
          <img src="" alt="" />
          <i class="el-icon-plus"  @click="addImage($event)"></i>
        </div>
        <div class="life2_photo_img2 position">
          <img src="" alt="" />
          <i class="el-icon-plus" @click="addImage($event)"></i>
        </div>
        <div class="life2_photo_img3 position">
          <img src="" alt="" />
          <i class="el-icon-plus" @click="addImage($event)"></i>
        </div>
      </div>
      <div class="life2_photo_template2" ref="life1_child2">
        <div class="life2_photo_img3 position">
          <img src="" alt="" />
          <i class="el-icon-plus"  @click="addImage($event)"></i>
        </div>
        <div class="life2_photo_img2 position">
          <img src="" alt="" />
          <i class="el-icon-plus"  @click="addImage($event)"></i>
        </div>
        <div class="life2_photo_img1 position">
          <img src="" alt="" />
          <i class="el-icon-plus"  @click="addImage($event)"></i>
        </div>
      </div>
    </div>
    <el-button type="success" class="life2_button" @click="life2_addphoto"
      >新增模板</el-button
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [1],
      data2: [1],
      flag: 1,
      imgData:[],
      ele:[]
    };
  },
  methods: {
    life2_addphoto() {
      if (this.flag == 1) {
        var child1 = document.createElement("div");
        child1.ref = 'life2_child1';
        child1.className = "life2_photo_template1";
        child1.innerHTML = `<div class="life2_photo_img1 position">
          <img src="" alt="" />
          <i class="el-icon-plus"  @click=\"addImage($event)\"></i>
        </div>
        <div class="life2_photo_img2 position">
          <img src="" alt="" />
          <i class="el-icon-plus" @click="addImage($event)"></i>
        </div>
        <div class="life2_photo_img3 position">
          <img src="" alt="" />
          <i class="el-icon-plus" @click="addImage($event)"></i>
        </div>`;
        this.$refs.life2.appendChild(child1);
        this.flag = 0;
      } else {
        var child2 = document.createElement("div");
        child2.className = "life2_photo_template2";
        child2.ref = 'life1_child2';
        child2.innerHTML = "<div class='life2_photo_img1 position'>"+
          "<img src='' alt='' />"+
          "<i class='el-icon-plus'  @click=\"addImage($event)\"></i>"+
        "</div>"+
        "<div class='life2_photo_img2 position'>"+
          "<img src='' alt='' />"+
          "<i class='el-icon-plus'  @click=\"addImage($event) \"></i>"+
        "</div>"+
        "<div class='life2_photo_img3 position'>"+
          "<img src='' alt='' />"+
          "<i class='el-icon-plus'  @click=\"addImage($event) \"></i>"+
        "</div>";
        this.$refs.life2.appendChild(child2);
        this.flag = 1;
      }
    },
    addImg() {
      // console.log(m)
      var files = this.$refs.Input.files; //利用input打开文件夹
      console.log(files)
      var that = this; //保存this作用域
      var length = this.ele.length;
      var parent = this.ele[length - 1];
      var firstchi = parent.firstChild;
      // console.log(e.target)
      // var parent = e.target.parentNode;
      // var firstchi = parent.firstChild;
      // console.log(firstchi);
      // console.log(parent);
      // console.log(img1.src);
      function readAndPreview(file) {
        console.log('111');
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
              firstchi.src = this.result;
              // console.log(img1.src);
              console.log(firstchi.src);
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
    addImage(e){
      // console.log(e.target.previousElementSibling)
      // e.target.previousElementSibling.dispatchEvent(new MouseEvent('click',{data:'msg'}));
      // this.addImg();
      this.ele.push(e.target.parentNode);
      this.$refs.Input.dispatchEvent(new MouseEvent('click'));
    },
  }
};
</script>
<style lang="scss" scope>
.position {
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .el-icon-plus {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 50px;
    color: #fff;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.5s ease-out;
  }
}
.position:hover {
  .el-icon-plus {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
}
.life2-outer_box {
  width: 100%;
  // height: 500px;
  background-color: #fff;
  overflow: hidden;
  .life2_title {
    font-size: 50px;
    font-weight: bolder;
  }
  .life2_button {
    background-color: #fff;
    border-color: #000;
    color: #000;
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  .life2_button:hover {
    background-color: #0b0c11;
    color: #fff;
  }
}
.life2_photo_template1 {
  width: 100%;
  height: 400px;
  background-color: #000;
}
.life2_photo_template2 {
  width: 100%;
  height: 400px;
  background-color: #000;
}
.life2_photo_img1 {
  width: 50%;
  height: 100%;
  background-color: #eabb;
  float: left;
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.life2_photo_img2 {
  width: 24%;
  height: 100%;
  background-color: #abcc;
  float: left;
  background-image: url("../../../../photo/3ac3fc75e81ba4e60a511fb0d1e6a4cd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.life2_photo_img3 {
  width: 26%;
  height: 100%;
  background-color: #abcc;
  float: left;
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
</style>
