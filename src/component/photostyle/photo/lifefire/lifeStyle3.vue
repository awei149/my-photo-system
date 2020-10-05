<template>
  <div class="life3-outer_box">
    <p class="life3_title">PHOTOGRAPHERS</p>
    <input
      type="file"
      accept="image/*"
      ref="Input"
      @change="addImg($event)"
      style="display:none"
    />
    <input
      type="file"
      accept="image/*"
      ref="adInput"
      @change="adIMG($event)"
      style="display:none"
    />
    <div
      class="move"
      @click="moveImg($event)"
      v-for="(item, index) in seat"
      :key="index"
      :style="{
        left: item.left + 'px',
        top: item.top + 'px',
        transform:
          'translate3d(' + item.x + 'px,' + item.y + 'px,' + item.z + 'px)'
      }"
    >
      <img :src="item.url" :data="item.count" alt="" class="img" @click="touchParent($event)" />
    </div>
    <!-- <div class="life3_photoBox1 move" @click="moveImg($event)">
      <img src="" data="item1" alt="" class="img" />
    </div>
    <div class="life3_photoBox2 move" @click="moveImg($event)">
      <img src="" data="item2" alt="" class="img" />
    </div>
    <div class="life3_photoBox3 move" @click="moveImg($event)">
      <img src="" data="item3" alt="" class="img" />
    </div>
    <div class="life3_photoBox4 move" @click="moveImg($event)">
      <img src="" data="item4" alt="" class="img" />
    </div>
    <div class="life3_photoBox5 move" @click="moveImg($event)">
      <img src="" data="item5" alt="" class="img" />
    </div>
    <div v-for="(item, index) in imgData" :key="index" class="newImg move" @click="moveImg($event)">
      <img :src="item.url" alt="" class="img"/>
    </div> -->
    <ul class="life3_photoShow">
      <li>
        <i class="el-icon-plus" data="0" @click="changeImage($event)"></i>
      </li>
      <li>
        <i class="el-icon-plus" data="1" @click="changeImage($event)"></i>
      </li>
      <li>
        <i class="el-icon-plus" data="2" @click="changeImage($event)"></i>
      </li>
      <li>
        <i class="el-icon-plus" data="3" @click="changeImage($event)"></i>
      </li>
      <li>
        <i class="el-icon-plus" data="4" @click="changeImage($event)"></i>
      </li>
      <li
        v-for="(item, index) in imageData"
        :key="index"
        :style="{
          'background-image': 'url(' + item.url + ')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }"
      >
        <i
          class="el-icon-plus"
          :data="item.count"
          @click="changeImage($event)"
        ></i>
      </li>
      <li>
        <i class="el-icon-plus" @click="addImage($event)"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgData: [],
      zIndex: -70,
      imgul: [],
      control1: 0,
      control2: 0,
      flag: 0,
      liUL: [],
      count1: 5,
      count2: 5,
      count: 0,
      imageData: [],
      backurl: require("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg"),
      seat: [
        {
          x: 0,
          y: -200,
          z: -50,
          left: 0,
          top: 450,
          count: 0,
          url: ""
        },
        {
          x: 0,
          y: -230,
          z: -25,
          left: 270,
          top: 450,
          count: 1,
          url: ""
        },
        {
          x: -175,
          y: -255,
          z: 0,
          left: 752,
          top: 450,
          count: 2,
          url: ""
        },
        {
          x: 0,
          y: -230,
          z: -25,
          left: 882,
          top: 450,
          count: 3,
          url: ""
        },
        {
          x: 0,
          y: -200,
          z: -50,
          left: 1154,
          top: 450,
          count: 4,
          url: ""
        }
      ]
    };
  },
  methods: {
    touchParent(e){
      var event = e.target.parentNode;
      // console.log(event);
      this.moveImg(event);
      // console.log(event.style.left);
      // console.log('冒个泡啊');
    },
    rightMove() {
      var img = document.getElementsByClassName("move");
      for (var i = 0; i < img.length; i++) {
        if (i + this.flag == img.length - 1) {
          img[i].style.left = this.seat[0].left + "px";
          img[i].style.top = this.seat[0].top + "px";
          img[i].style.transform =
            "translate3d(" +
            this.seat[0].x +
            "px" +
            "," +
            this.seat[0].y +
            "px" +
            "," +
            this.seat[0].z +
            "px" +
            ")";
          img[i].style.transition = "all 0.3s ease-out";
        } else {
          if (i + this.flag > img.length - 1) {
            img[i].style.left =
              this.seat[i - (img.length - 1) + this.flag].left + "px";
            img[i].style.top =
              this.seat[i - (img.length - 1) + this.flag].top + "px";
            img[i].style.transform =
              "translate3d(" +
              this.seat[i - (img.length - 1) + this.flag].x +
              "px" +
              "," +
              this.seat[i - (img.length - 1) + this.flag].y +
              "px" +
              "," +
              this.seat[i - (img.length - 1) + this.flag].z +
              "px" +
              ")";
            img[i].style.transition = "all 0.3s ease-out";
          } else {
            img[i].style.left = this.seat[this.flag + 1 + i].left + "px";
            img[i].style.top = this.seat[this.flag + 1 + i].top + "px";
            img[i].style.transform =
              "translate3d(" +
              this.seat[this.flag + 1 + i].x +
              "px" +
              "," +
              this.seat[this.flag + 1 + i].y +
              "px" +
              "," +
              this.seat[this.flag + 1 + i].z +
              "px" +
              ")";
            img[i].style.transition = "all 0.3s ease-out";
          }
        }
      }
      console.log(this.flag);
      this.flag++;
      if (this.flag == img.length) {
        this.flag = 0;
      }
    },
    leftMove() {
      var img = document.getElementsByClassName("move");
      for (var i = 0; i < img.length; i++) {
        if (i - this.flag == 0) {
          console.log("left:" + img[i].style.left);
          console.log(this.seat[this.seat.length - 1].left);
          img[i].style.left = this.seat[this.seat.length - 1].left + "px";
          img[i].style.top = this.seat[this.seat.length - 1].top + "px";
          img[i].style.transform =
            "translate3d(" +
            this.seat[this.seat.length - 1].x +
            "px" +
            "," +
            this.seat[this.seat.length - 1].y +
            "px" +
            "," +
            this.seat[this.seat.length - 1].z +
            "px" +
            ")";
          img[i].style.transition = "all 0.3s ease-out";
        } else {
          if (i - this.flag < 0) {
            img[i].style.left =
              this.seat[this.seat.length - 1 - (this.flag - i)].left + "px";
            img[i].style.top =
              this.seat[this.seat.length - 1 - (this.flag - i)].top + "px";
            img[i].style.transform =
              "translate3d(" +
              this.seat[this.seat.length - 1 - (this.flag - i)].x +
              "px" +
              "," +
              this.seat[this.seat.length - 1 - (this.flag - i)].y +
              "px" +
              "," +
              this.seat[this.seat.length - 1 - (this.flag - i)].z +
              "px" +
              ")";
            img[i].style.transition = "all 0.3s ease-out";
          } else {
            img[i].style.left = this.seat[i - this.flag - 1].left + "px";
            img[i].style.top = this.seat[i - this.flag - 1].top + "px";
            img[i].style.transform =
              "translate3d(" +
              this.seat[i - this.flag - 1].x +
              "px" +
              "," +
              this.seat[i - this.flag - 1].y +
              "px" +
              "," +
              this.seat[i - this.flag - 1].z +
              "px" +
              ")";
            img[i].style.transition = "all 0.3s ease-out";
          }
        }
      }
      console.log(this.flag);
      this.flag++;
      if (this.flag == img.length) {
        this.flag = 0;
      }
    },
    moveImg(e) {
      let event = e.target || e;
      var domleft = parseInt(event.style.left);
      if (domleft > 752) {
        if (this.control1 == 0) {
          // console.log(domleft-752);
          if (domleft - 752 == 130) {
            this.leftMove();
          }
          if (domleft - 752 == 402) {
            for (var i = 0; i < 2; i++) {
              this.leftMove();
            }
          }
        } else {
          // console.log(domleft-752);
          this.flag = (this.seat.length-1) - this.flag + 1;
          if (domleft - 752 == 130) {
            this.leftMove();
          }
          if (domleft - 752 == 402) {
            for (var i = 0; i < 2; i++) {
              this.leftMove();
            }
          }
        }
        this.control2 = 1;
        this.control1 = 0;
      } else {
        if (this.control2 == 0) {
          if (752 - domleft == 482) {
            this.rightMove();
          }
          if (752 - domleft == 752) {
            for (var i = 0; i < 2; i++) {
              this.rightMove();
            }
          }
        } else {
          this.flag = (this.seat.length-1) - this.flag+1;
          if (752 - domleft == 482) {
            this.rightMove();
          }
          if (752 - domleft == 752) {
            for (var i = 0; i < 2; i++) {
              this.rightMove();
            }
          }
        }
        this.control1 = 1;
        this.control2 = 0;
      }
    },
    adIMG() {
      var files = this.$refs.adInput.files; //利用input打开文件夹
      console.log(files);
      var that = this;
      function readAndPreview(file) {
        console.log("111");
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            if (that.imgData.indexOf(this.result) === -1) {
              var timestamp = new Date().getTime();
              that.imgData.push({
                id: timestamp,
                url: this.result
              });
              that.imageData.push({
                id: timestamp,
                url: this.result,
                count: that.count1
              });
              that.seat.push({
                x: 0,
                y: -200,
                z: that.zIndex,
                left: 1154,
                top: 450,
                count: that.count2,
                url: this.result
              });
              that.count2++;
              that.count1++;
              console.log(that.zIndex);
              that.zIndex -= 20;
              console.log(that.imgData);
              console.log(this.result);
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
    addImg() {
      // console.log(m)
      var files = this.$refs.Input.files; //利用input打开文件夹
      console.log(files);
      var that = this; //保存this作用域
      var length = this.imgul.length;
      var model = this.imgul[length - 1];
      var UL = this.liUL[this.liUL.length - 1];
      console.log(model);
      function readAndPreview(file) {
        console.log("111");
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            if (that.imgData.indexOf(this.result) === -1) {
              var timestamp = new Date().getTime();
              that.imgData.push({
                id: timestamp,
                url: this.result
              });
              that.seat[that.count].url = this.result;
              UL.style.backgroundImage = "url(" + this.result + ")";
              console.log(this.result);
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
    changeImage(e) {
      console.log(e.target.getAttribute("data"));
      this.liUL.push(e.target.parentNode);
      this.count = parseInt(e.target.getAttribute("data"));
      this.$refs.Input.dispatchEvent(new MouseEvent("click"));
    },
    addImage() {
      this.$refs.adInput.dispatchEvent(new MouseEvent("click"));
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  position: relative;
  // z-index: 90;
}
.life3-outer_box {
  position: relative;
  width: 100%;
  height: 900px;
  perspective: 300px;
  -webkit-perspective: 300px;
  transform-style: perspective-3d;
  -webkit-transform-style: preserve-3d;
  // background-color:rgb( 11,12,17);
}
.move {
  width: 350px;
  height: 450px;
  position: absolute;
  // z-index: 99;
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
}
.life3_photoBox1 {
  width: 350px;
  height: 450px;
  position: absolute;
  left: 0;
  top: 50%;
  // -webkit-transform: translateY(-225px);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
  // z-index: 1;
  // transform-style:preserve-3d;
  transform: translate3d(0, -200px, -50px);
  // transform: translateZ(-50px);
}
.life3_photoBox2 {
  width: 350px;
  height: 450px;
  position: absolute;
  left: 18%;
  top: 50%;
  transform: translate3d(0, -225px, -20px);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
  // z-index: 100;
  // transform-style:preserve-3d;
  // transform: translateZ(50);
}
.life3_photoBox3 {
  width: 350px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  // z-index: 1;
  transform: translate3d(-175px, -250px, 0);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
  // transform-style:preserve-3d;
  // transform: translateZ(20);
}
.life3_photoBox4 {
  width: 350px;
  height: 450px;
  position: absolute;
  right: 18%;
  top: 50%;
  transform: translate3d(0, -225px, -20px);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
}
.life3_photoBox5 {
  width: 350px;
  height: 450px;
  position: absolute;
  right: 0;
  top: 50%;
  // -webkit-transform: translateY(-225px);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
  // z-index: 1;
  // transform-style:preserve-3d;
  transform: translate3d(0, -200px, -50px);
  // transform: translateZ(-50px);
}
.newImg {
  width: 350px;
  height: 450px;
  position: absolute;
  right: 0;
  top: 50%;
  // -webkit-transform: translateY(-225px);
  background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
  background-color: red;
  // z-index: 1;
  // transform-style:preserve-3d;
  transform: translate3d(0, -200px, -70px);
}
.life3_photoShow {
  position: absolute;
  left: 0;
  bottom: 10px;
  // margin: 0 auto;
  padding: 0;
  // border: 1px solid #fff;
  li {
    float: left;
    position: relative;
    width: 100px;
    height: 150px;
    list-style: none;
    background-color: red;
    background-image: url("../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 10px;
    .el-icon-plus {
      position: absolute;
      font-size: 20px;
      color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.5s ease-out;
    }
  }
}
.life3_photoShow li:hover {
  .el-icon-plus {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
}
.life3_title {
  font-size: 50px;
  font-weight: bolder;
  color: #000;
}
</style>
