<template>
    <div class="life4_outerbox">
        <p>PHOTOGRAPHERS</p>
        <div class="life4_photoBox">
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
            <div class="life4_photo">
                <img src="../../../../photo/372cfb5f33b797f8fe61b93c60acc464.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr:[]
        }
    },
    methods: {
        startLoad(){
            var fatherBox = document.getElementsByClassName('life4_photoBox')[0];
            var item = fatherBox.children;
            var grap = 20;
            var pageWidth = this.getClient().width;//页面的宽度
            var colum = parseInt(pageWidth/370)
            var outerBox = document.getElementsByClassName('life4_outerbox')[0];
            for(var i = 0; i < item.length; i++){
                if(i < colum){
                    item[i].style.left = i * 370 + 'px';
                    item[i].style.top = 0;
                    this.arr.push(item[i].offsetHeight)
                    console.log(item[i].offsetHeight)
                }else{
                    var minHeight = this.arr[0];
                    var index = 0;
                    //找到最小的高度的索引
                    for(var j = 0; j < this.arr.length; j ++){
                        if(minHeight > this.arr[j]){
                            minHeight = this.arr[j];
                            index = j;
                        }
                    }
                    item[i].style.top = this.arr[index] + 20 + 'px';
                    item[i].style.left = item[index].offsetLeft + 'px';
                    //修改最小列的高度
                    console.log(item[i].offsetHeight);
                    this.arr[index] = this.arr[index] + item[i].offsetHeight + 20;
                }
            }
            var maxheight = this.arr[0];
            for(var i = 0; i < this.arr.length; i++){
                if(maxheight < this.arr[i]){
                    maxheight = this.arr[i];
                }
            }
            outerBox.style.height = maxheight + 20 + 'px';
            console.log("arr:"+this.arr)

        },
        getClient(){
            return{
                width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        }
    },
    mounted() {
        this.startLoad();
    },
    // beforeUpdate() {
    //     this.startLoad();
    // },
    updated() {
        this.startLoad();
    },
}
</script>
<style lang="scss" scoped>
    .life4_outerbox{
        width: 100%;
        // height: 800px;
        background-color: #fff;
        p{
            font-size: 50px;
            font-weight: bolder;
            color: #000;
        }
        overflow: hidden;
    }
    .life4_photoBox{
        position: relative;
        width: 100%;
        padding: 0;
        .life4_photo{
            position: absolute;
            padding: 0;
            box-sizing: border-box;
            width: 350px;
            border: 50px solid #b9b9b9;
            // height: 100px;
            // background-color: red;
            img{
                width: 100%;
            }
        }
    }
</style>