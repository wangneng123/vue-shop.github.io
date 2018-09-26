<template>
  <div class="Projects w-80">
      <h4 class="title">Progects</h4>
      <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :lg="8" v-for="(item,index) in list" :key="index">
              <div class="part" @mouseenter="clickMouseenter(index)" @click="preview(item,index)">
                  <div class="img-box">
                      <img :src="item.img" alt="">
                  </div>
                  <div class="text-box">
                      <p class="t1 cl-fff fs-18">Lorem Ipsum</p>
                      <p class="t2 cl-999">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</p>
                  </div>
              </div>
          </el-col>
      </el-row>
      <!--预览图片-->
      <el-dialog
              title=""
              :visible.sync="dialogVisible"
              width="30%"
              style="background: transparent"
              :show-close="false"
              class="ta-right"
              @closed="handleClose()"
              >
          <i class="el-icon-close cl-fff fs-20 fw-bold" @click="dialogclose()"></i>
          <div class="banner-box">
              <el-carousel :autoplay="false" indicator-position="none" :initial-index="imgindex">
                  <el-carousel-item v-for="(item,index) in listimg" :key="index" >
                      <img :src="item" alt="" style="width: 100%">
                  </el-carousel-item>
              </el-carousel>
          </div>
          <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Progects',
  data () {
    return {
      hover: false,
      dialogVisible:false,
      imgindex:'',
      listimg:'',
      list:[
        {
          img: require('../assets/img/banner1.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:1,
          showtext:false
        },
        {
          img: require('../assets/img/banner2.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:2,
          showtext:false
        },
        {
          img: require('../assets/img/banner3.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:3,
          showtext:false
        },
        {
          img: require('../assets/img/banner4.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:4,
          showtext:false
        },
        {
          img: require('../assets/img/banner5.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:5,
          showtext:false
        },
        {
          img: require('../assets/img/banner6.jpg'),
          title:'Lorem Ipsum',
          msg:'Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here',
          id:6,
          showtext:false
        }
      ]
    }
  },
  methods:{
    clickMouseenter(index){
      // this.list.map((item)=>{
      //   item.showtext=false
      // })
      // this.list[index].showtext=true
    },
    preview(item,index){
      this.dialogVisible=true
      let arr=[]
      this.list.map((item)=>{
        arr.push(item.img)
      })
      this.listimg=arr
      console.log(arr)
      console.log('index',index)
      this.imgindex=index
    },
    handleClose(){
      console.log(1111)
      this.listimg=[]
      this.imgindex=''
    },
    dialogclose(){
      this.dialogVisible=false
      console.log(this.imgindex)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .hello{
   background-image: url("../assets/logo.png");
 }
</style>
