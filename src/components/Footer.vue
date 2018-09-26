<template>
  <div class="footer">
    <div class="top w-80">
      <el-row :gutter="40">
        <el-col :sm="24" :lg="12">
          <h4 class="tit cl-fff">Latest Projects</h4>
          <div style="padding-right: 60px">
            <el-row :gutter="20" class="ta-center">
              <el-col :span="8">
                <div class="img-box"><img src="../assets/img/pic1.jpg" alt=""></div>
                <div class="cl-fff t1">Commercial</div>
                <div class="cl-999 t2">Donec vitae mi</div>
              </el-col>
              <el-col :span="8">
                <div class="img-box"><img src="../assets/img/pic2.jpg" alt=""></div>
                <div class="cl-fff t1">Personal</div>
                <div class="cl-999 t2">Donec vitae mi</div>
              </el-col>
              <el-col :span="8">
                <div class="img-box"><img src="../assets/img/pic3.jpg" alt=""></div>
                <div class="cl-fff t1">Commercial</div>
                <div class="cl-999 t2">Donec vitae mi</div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :sm="12" :lg="6">
          <h4 class="tit cl-fff">Location</h4>
          <div class="txt cl-999">
            795 Folsom Ave, Suite 600
            San Francisco, CA 94107
            P : (123) 456-7890
          </div>
          <div>
            <span class="cl-fff">Email : </span>
            <span class="cl-common">Example.com</span>
          </div>
        </el-col>
        <el-col :sm="12" :lg="6">
          <h4 class="tit cl-fff">Contact</h4>
          <div style="height: 110px;border-bottom: 1px solid #999">
            <el-row :gutter="20">
              <el-col :span="6">
                <i class="el-icon-phone cl-common fs-40"></i>
              </el-col>
              <el-col :span="18" class="cl-999 fs-18 lh-30">
                <p>Call toll-free</p>
                <p>+1-234-567-8900</p>
              </el-col>
            </el-row>
          </div>
          <div class="icons ta-center">
            <span class="icon1"></span>
            <span class="icon2"></span>
            <span class="icon3"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom cl-999 ta-center">Copyright © 2016.Company name All rights reserved.More Templates <span class="cl-common">模板之家</span> - Collect from <span class="cl-common">网页模板</span></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
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
 .footer .icons span{
   background: url("../assets/img/ftr-icons.png")
 }
</style>
