<template>
  <div class="main_box">
    <div class="my_picture">MY PICTURES</div>
    <div class="line"></div>
    <p class="line_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus
      leo nec ornare diamcommodo nibh ante facilisis.
    </p>
    <el-row name="el_button">
      <el-button type="primary" @click="showflag">add</el-button>
      <el-button type="success" @click="showflag1">SCENERY</el-button>
      <el-button type="info" >ARCHITECTURE</el-button>
      <el-button type="warning" >FIGURE</el-button>
      <el-button type="danger" >HISTORY</el-button>
    </el-row>
    <div class="photos">
        <div v-show="flag">
          <div class="photo-box" v-for="src in imageData" :key="src.imageid">
          <v-photo :src="src.imageurl" @getimg="getimgData" :imgid="src.imageid"></v-photo>
        </div>
        <div class="addimg">
          <input type="file" accept="image/*" ref="input" @change="addimage($event)" style="display:none">
          <i class="el-icon-plus" id="file" @click="openfile"></i>
        </div>
        </div>
        <div v-if="flag1">
          <v-life2 ref="life2"></v-life2>
        </div>
    </div>
    <!-- <button @click="geiImage">渲染图片</button> -->
  </div>
</template>
<script>
import Photo from './photo/Photo.vue';
import life2 from './photo/Life2';
// import VueEvent from '../../vueEvent/vueEvent';
export default {
  inject:['reload'],
  data() {
    return {
      show:true,
      imageData:[],
      flag: true,
      flag1:false,
      dateBase:'imageDateBase',
      storeName:'imageStore',
      imageID:'id',
      indexdbflag:false
      // imageid:[]
    }
  },
  methods: {
     geiImage(datebase,n,storename,imageID){
      //  var 
       new Promise((resolve,reject)=>{
         this.indexdb.createIndexdb(datebase,n,storename,imageID);
         console.log(datebase,n,storename,imageID)
        //  this.imageData = this.indexdb.getstore();
        //  resolve(this.imageData);
        resolve('成功');
        // this.indexdb.getstore()
       }).then((data)=>{
        //  console.log(data);
        //  console.log(that)
        console.log('成功');
       })
       setTimeout(()=>{
         this.imageData = this.indexdb.getstore();
        //  VueEvent.$emit('to-life2',this.imageData);
        // this.$VueEvent.$emit('broadcast',this.imageData);
        //  console.log('广播数据')
       },100)
      //  this.imageData = this.indexdb.getstore();
      // console.log(this.indexdb.getstore());
      // this.indexdb.createIndexdb(this.dateBase,3,this.storeName,this.imageID);
        // setTimeout(()=>{
        //   this.imageData = this.indexdb.getstore();
        // },0)
    },
    openDateBase(datebase,n,storename,imageID){
      this.indexdb.createIndexdb(datebase,n,storename,imageID);
      this.indexdbflag = true;
    },
    // reload(){
    //   this.show = false;
    //   this.$nextTick(()=>{
    //     this.show = true;
    //   })
    // },
    showflag(){
      this.flag = true;
      this.flag1 = false;
      // this.reload();
    },
    showflag1(){
      this.flag1 = true;
      this.flag = false;
      // this.reload();
      // this.$refs.life2.initImg();
      // this.$refs.life2.startLoad();
      // this.$refs.life2.beforeMount();
      // this.$refs.life2.mounted();
    },
    getimgData(data){
      console.log("替换照片");
      // console.log(this.imageData);
      // console.log(this.imageData.length);
      for(var i = 0; i < this.imageData.length; i++){
        if(this.imageData[i].imageid == data.imageid){
          this.imageData[i].imageurl = data.imageurl;
        }
      }
    },
    removeimg(data){
      try {
        console.log("删除照片");
      for(var i = 0; i < this.imageData.length; i ++){
        if(this.imageData[i].imageid == data){
          this.imageData.splice(i,1);
          break;
        }
      }
      console.log("删除照片");
      localStorage.removeItem(data);
      } catch (error) {
        console.log(error)
      }
    },
    addimage(){
      var files = this.$refs.input.files;//利用input打开文件夹
      var that = this;//保存this作用域
      function readOpenFile(file){
        if(/\.(jpe?g|png|gif)$/i.test(file.name)){
          var reader = new FileReader();//通过FileDeader类型读取文件内容
          reader.readAsDataURL(file);//将文件数据以url形式保存在result中
          reader.onload = function(e){//文件读完之后执行
            if(that.imageData.indexOf(this.result) === -1){
              var timestamp = (new Date()).getTime();
              that.$http.post('/api/setValue',{
                imageID:timestamp.toString(),
                imageName:this.result
              })
              // localStorage.setItem(timestamp, this.result);
              that.indexdb.addIndexdb({id:timestamp,imageurl:this.result});
              // that.$emit('getimg',this.result)
              that.imageData.push({imageid:timestamp,imageurl:this.result});
              console.log(this.result);
              // that.imageid.push(timestamp);
            }
          };
        }
      }
      if(files){
        [].forEach.call(files, readOpenFile);
      }
      if (files.length === 0) {
        return;
      }
    },
    openfile(){
      this.$refs.input.dispatchEvent(new MouseEvent('click'));
    }
  },
  components:{
      'v-photo':Photo,
      'v-life2':life2
  },
  // mounted() {
    // console.log(this.indexdb.myDB.flag);
    // if(this.indexdb.myDB.flag == 1){
    //   this.indexdb.getstore();
    // }
    // console.log('组件挂载完成');
    // if (localStorage.length > 1) {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     var key = localStorage.key(i);
    //     if(localStorage.getItem(key) == "INFO"){
    //       continue;
    //     }else{
    //       this.imageData.push({imageid:key,imageurl:localStorage.getItem(key)});
    //     }
    //   }
    // }else{
    //   this.imageData = [];
    // }
  // },
  // beforeCreadted(){
  //   console.log('组件开始初始化之前');
  // },
  created(){
    console.log('组件开始初始化');
    // this.indexdb.createIndexdb(this.dateBase,3,this.storeName,this.imageID);
  },
  beforeMount(){
    console.log('组件初始化完成');
    // this.openDateBase(this.dateBase,3,this.storeName,this.imageID);
    // this.geiImage(this.dateBase,3,this.storeName,this.imageID)
  },
  mounted(){
    console.log('组件挂载完成');
    // this.geiImage();
    this.geiImage(this.dateBase,3,this.storeName,this.imageID);
  },
  beforeUpdate(){
    // this.$refs.life2.initImg();
    console.log('组件更新前');
    // this.reload();
  },
  updated(){
    console.log('组件更新完成');
    // this.$refs.life2.startLoad();
    // this.reload();
  },
  // beforeDestroy(){
  //   console.log('组件销毁前');
  // },
  // destroyed(){
  //   console.log('组件销毁中');
  // }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.main_box {
  overflow: hidden;
  width: 100%;
  // height: 1500px;
  margin-bottom: 10px;
  background-color: #f1c40f;
}
.my_picture {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 110px;
  text-align: center;
  font-size: 40px;
  color: rgb(29, 67, 77);
  font-family: monospace;
}
.line {
  width: 70px;
  height: 3px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #a9971c;
}
.line_text {
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0 auto;
  margin-top: 30px;
  color: rgb(29, 67, 77);
}
.el-row{
    margin-top: 50px;
}
.el-button{
    background-color: rgba(255,255,255,0);
    border-color: #ffc;
}
.photos{
    margin: 0 auto;
    width: 76.5%;
    // border: 1px solid black;
    margin-top: 10px;
    overflow: hidden;
    .photo-box{
      float: left;
    }
}
.addimg{
  position: relative;
  float: left;
  width: 260px;
  height: 260px;
  background-color: black;
  margin-top: 30px;
  margin-right: 15px;
  margin-left:15px ;
  background-image: url("../../photo/3ac3fc75e81ba4e60a511fb0d1e6a4cd.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .el-icon-plus{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    font-size: 50px;
  }
}
</style>
