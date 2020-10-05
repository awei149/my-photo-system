<template>
  <div>
      <div class="waterfall_img" ref="ul" style="width:100%">
          <img v-for="item in imgData" :key="item.imageid" class="img" :src="item.imageurl" alt="">
      </div>
  </div>
</template>

<script>
// import func from '../../../../vue-temp/vue-editor-bridge';
// import VueEvent from '../../../vueEvent/vueEvent';
export default {
  data() {
    return {
      imgData: [],
      imgLeft:[],
      imgTop:[]
    }
  },
  // inject:['reload'],
  methods: {
    initImg() {
      new Promise((resolve,reject)=>{
        this.imgData = this.indexdb.getstore();
      }).then(()=>{
        // this.startLoad();
      })
      setTimeout(()=>{
        this.startLoad();
      },200)
      // console.log('图片资源:'+this.imgData)
    },
    startLoad(){
        var ul = this.$refs.ul;
        // var box_width = parseInt(ul.style.width);
        // var box_width = parseInt(window.getComputedStyle(ul).width)
        var box_width = parseInt(ul.getBoundingClientRect().width)
        // var box_width = parseInt(ul.style.width);
        // console.log(box_width);
        // var box_width = parseInt(ul.getBoundingClientRect().width)
        console.log('box_width:'+ box_width);
        var column =parseInt(box_width / 280);
        var img = document.getElementsByClassName('img');
        console.log('img_lenght:'+ img.length);
        for(var i = 0; i < img.length; i ++){
            if(i < column){
                img[i].style.left = i * (280 + 5) + 'px'
                img[i].style.top = 0;
                console.log('height:'+img[i].offsetHeight);
                this.imgTop.push(img[i].offsetHeight);
            }else{
                var minTop = this.imgTop[0];
                var index = 0;
                for(var j = 0; j < this.imgTop.length; j ++){
                    if(minTop > this.imgTop[j]){
                        // temp = minTop;
                        minTop = this.imgTop[j];
                        // this.imgTop[j] = temp;
                        index = j;
                    }
                }
                console.log('index:'+ index);
                console.log('mintop:'+ minTop);
                img[i].style.left = index *(280 + 5) + 'px';
                img[i].style.top = this.imgTop[index] + 5 + 'px';
                this.imgTop[index] = this.imgTop[index] + img[i].offsetHeight + 5;
            }
        }
        var cover_box = document.getElementsByClassName('waterfall_img')[0];
        var max_height = this.imgTop[0];
        var flag;
        for(var v = 0; v < this.imgTop.length; v ++){
            if(max_height < this.imgTop[v]){
                max_height = this.imgTop[v];
                flag = v;
            }
        }
        this.$refs.ul.style.height = this.imgTop[flag] + 20 + 'px';
        console.log('bottom:'+this.imgTop[flag]);
        // this.reload();
    }
  },
  beforeMount() {
    // this.initImg();
    console.log('组件初始化完成1');
  },
  mounted() {
      this.initImg();
      // this.startLoad();
      // this.reload();
      // this.$router.go(0);
      // this.$VueEvent.$on('broadcast',function(data){
      //   console.log('数据：'+data);
      // })
      console.log('组件挂载完成1');
  },
  created(){
      // this.startLoad();
      console.log('组件初开始始化1');
    },
    beforeDestroy() {
      // this.startLoad();
      console.log('组件卸载前1');
    },
    destroyed(){
      // this.startLoad();
      console.log('组件卸载完成1');
    },
    beforeUpdate(){
      console.log('组件更新前1');
    },
  updated() {
    // this.reload();
    console.log('组件更新完成1');
    },
    beforeDestroy(){
      console.log('组件卸载前1');
    },
    destroyed() {
      // window.removeEventListener('scroll',this.startLoad());
      console.log('组件卸载完成1');
    },
};
</script>

<style lang="scss" scoped>
.waterfall_img{
    height: 1500px;
    // width: 100%;
    position: relative;
    // overflow: hidden;
    margin: 0;
    padding: 0;
    // background-color: #ccc;
    // border: 1px solid red;
    img{
        position: absolute;
        border: 30px solid #ccc;
        box-sizing: border-box;
        width: 280px;
        transition: all 0.5s ease-in-out;
    }
    img:hover{
      box-sizing: border-box;
      // z-index: 100;
      border: 10px solid #ccc;
      width: 280px;
    }
}
</style>
