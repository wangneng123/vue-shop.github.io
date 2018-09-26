<template>
  <div class="header">
    <el-row class="menu fs-18 fw-bold cl-fff w-80">
      <el-col :sm="4" :lg="3" v-for="(item,index) in navs" :key="index">
        <router-link :to="item.link"  class="part" @click.native="clickNav( index)" :class="{active:item.active}">{{item.name}}</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navs:[
        {
          name:'Company',
          active:true,
          link: '/'
        },
        {
          name:'Services',
          active:false,
          link: '/Services'
        },
        {
          name:'Projects',
          active:false,
          link: '/Projects'
        },
        {
          name:'Quality',
          active:false,
          link: '/Quality'
        },
        {
          name:'Contact',
          active:false,
          link: '/Contact'
        }
      ]
    }
  },
  created:function(){
    if(location.hash.split('/')[1]==''){
    }else{
      this.navs.map((item)=>{
        item.active=false
        if(item.name==location.hash.split('/')[1]){
          item.active=true
        }
      })
    }
    console.log(this.navs)
  },
  methods:{
    clickNav (index) {
      this.navs.map((item)=>{
        item.active=false
      })
      this.navs[index].active=true
    }
  }
}
</script>

<style>
 .header{
   background: url("../assets/img/nav-bg.jpg") no-repeat 0 0;
   background-size: cover;
 }
</style>
