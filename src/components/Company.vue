<template>
  <div class="company">
      <h4 class="title">Project's Work Stages</h4>
      <el-row :gutter="20" class="work cl-999">
          <el-col :xs="24" :sm="12" :lg="8">
              <div class="work-part">
                  <div class="num cl-fff">1.</div>
                  <div>Est libero tempore massasoluta nobis est eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut</div>
              </div>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
              <div class="work-part">
                  <div class="num cl-fff">2.</div>
                  <div>Est libero tempore massasoluta nobis est eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut</div>
              </div>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
              <div class="work-part">
                  <div class="num cl-fff">3.</div>
                  <div>Est libero tempore massasoluta nobis est eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut</div>
              </div>
          </el-col>
      </el-row>
      <el-row :gutter="40">
          <el-col :xs="24" :sm="12">
              <div class="who">
                  <h4 class="title">Who We Are</h4>
                  <div class="text cl-999">
                      <p>Tempore massasoluta nobis est eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut .</p>
                      <p>Libero tempore massasoluta nobis est omnis volutasassum enda est, omnis doloresed repeledu sem pqui eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut .</p>
                      <p>Massasoluta nobis est eligendi omnis volutasassum enda est, omnis doloresed massasoluta nobis est omnis volutasassum enda est, omnis doloresed repeledu sem pqui eligendi omnis volutasassum enda est, omnis doloresed repeledu sem pqui busdamet aut repeledu sem pqui .</p>
                      <p>Mobis est omnis volutasassum enda est, omnis volutasassum enda est, omnis doloresed repeledu doloresed repeledu sem pqui eligendi omnis omnis doloresed repeledu .</p>
                  </div>
              </div>
          </el-col>
          <el-col :xs="24" :sm="12">
              <div class="our">
                  <h4 class="title">Our Team</h4>
                  <div class="text cl-999">
                      <el-row class="part" :gutter="20">
                          <el-col :span="9">
                              <img  src="../assets/img/pic1.jpg" alt="">
                          </el-col>
                          <el-col :span="14">
                              <h4 class="name">Mark</h4>
                              <div class="cl-999 text">Massasoluta nobis est eligendi pqui omnis volutasassum enda est, omnis eligendi pqui</div>
                              <div class="icons">
                                  <span class="icon1"></span>
                                  <span class="icon2"></span>
                                  <span class="icon3"></span>
                              </div>
                          </el-col>
                      </el-row>
                      <el-row class="part" :gutter="20" style="padding-top: 10px">
                          <el-col :span="9">
                              <img  src="../assets/img/pic2.jpg" alt="">
                          </el-col>
                          <el-col :span="14">
                              <h4 class="name">Mark</h4>
                              <div class="cl-999 text">Massasoluta nobis est eligendi pqui omnis volutasassum enda est, omnis eligendi pqui</div>
                              <div class="icons">
                                  <span class="icon1"></span>
                                  <span class="icon2"></span>
                                  <span class="icon3"></span>
                              </div>
                          </el-col>
                      </el-row>
                  </div>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .icons span{
   background-image: url("../assets/img/com-icons.png");
 }
</style>
