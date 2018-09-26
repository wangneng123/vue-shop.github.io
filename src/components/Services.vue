<template>
  <div class="services w-80">
      <el-row :gutter="30">
          <el-col :xs="24" :sm="12">
              <h4 class="title">Space Planning</h4>
              <div class="img-box">
                  <img src="../assets/img/pic4.jpg" alt="">
              </div>
          </el-col>
          <el-col :xs="24" :sm="12">
              <h4 class="title">Need Analysis</h4>
              <div class="cl-999 msg">
                  <p>Necessitatibus saepe eveniet utolu.ptates estu repudiandae sint et molestiae non recusandaeItaque earum rerum hic tene tura sapiente delectusut aut oloribus asperiores repellattotam rem aperiam.</p>
                  <p>Etla que ipsa quae abp. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius. Cum sociis natoque.</p>
                  <p>Nulla dui fusce feugiat malesuada odio. Mor bi nunc odio gravida at cursus nec, luctusa, lorem. Maecenas tristique orci ac sem.</p>
              </div>
          </el-col>
      </el-row>
      <el-row :gutter="20" >
          <h4 class="title">Feature Services</h4>
          <el-col :sm="12" :xs="24" :lg="8" >
              <el-row :gutter="2">
                  <el-col :span="4">
                      <span class="cl-fff tag">01</span>
                  </el-col>
                  <el-col :span="20" class="cl-999">
                      <p class="t1">At Vero Eos Accusamus</p>
                      <p class="t2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :sm="12" :xs="24" :lg="8">
              <el-row :gutter="2">
                  <el-col :span="4">
                      <span class="cl-fff tag">01</span>
                  </el-col>
                  <el-col :span="20" class="cl-999">
                      <p class="t1">At Vero Eos Accusamus</p>
                      <p class="t2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :sm="12" :xs="24" :lg="8">
              <el-row :gutter="2">
                  <el-col :span="4">
                      <span class="cl-fff tag">01</span>
                  </el-col>
                  <el-col :span="20" class="cl-999">
                      <p class="t1">At Vero Eos Accusamus</p>
                      <p class="t2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
