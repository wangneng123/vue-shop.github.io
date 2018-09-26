<template>
  <div class="quality w-80">
      <el-row :gutter="40">
          <el-col :xs="24" :sm="14">
              <h4 class="big-title fs-40">Advice From Expert</h4>
              <el-row :gutter="30" class="people-part">
                  <el-col :span="9">
                      <div class="img-box">
                          <img src="../assets/img/people1.jpg" alt="">
                      </div>
                  </el-col>
                  <el-col :span="15">
                      <div class="title fs-20">Rogerer</div>
                      <div class="cl-999">Massasoluta nobis est eligendi pqui omnis volutasassum enda est, eligendi pqui omnis volutasassum enda est, omnis omnis eligendi pqui</div>
                  </el-col>
              </el-row>
              <el-row :gutter="30" class="people-part">
                  <el-col :span="9">
                      <div class="img-box">
                          <img src="../assets/img/people2.jpg" alt="">
                      </div>
                  </el-col>
                  <el-col :span="15">
                      <div class="title fs-20">Henry</div>
                      <div class="cl-999">Massasoluta nobis est eligendi pqui omnis volutasassum enda est, eligendi pqui omnis volutasassum enda est, omnis omnis eligendi pqui</div>
                  </el-col>
              </el-row>
              <h4 class="big-title fs-40">Quality Assurance</h4>
              <div class="cl-999 msg">Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Proin ullamcorper urna et felis. Vestibulum iaculis lacinia est.</div>
          </el-col>
          <el-col :xs="24" :sm="10">
              <h4 class="big-title fs-40">Quality Assurance</h4>
              <div class="msg cl-999">Eveniet utoluptates estumo usandaeItaque earum rerum hic tenetur a sapi ente delectus, ut aut reiciendis voluptatibus .</div>
              <ul class="list">
                  <li>
                      <img src="../assets/img/dot.png" alt="">
                      <a href="#">Quam andomised words.</a>
                  </li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Volutpa andomised words</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Varius domised words.</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Morbi nunc odio gravida</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Sociis natoque penatibus</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Volutpa andomised words</a></li>
              </ul>
              <div class="cl-999 msg">Eveniet utoluptates estumo usandaeItaque earum rerum hic tenetur a sapi ente delectus, ut aut reiciendis.</div>
              <ul class="list">
                  <li>
                      <img src="../assets/img/dot.png" alt="">
                      <a href="#">Quam andomised words.</a>
                  </li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Volutpa andomised words</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Varius domised words.</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Morbi nunc odio gravida</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Sociis natoque penatibus</a></li>
                  <li> <img src="../assets/img/dot.png" alt=""><a href="#">Volutpa andomised words</a></li>
              </ul>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Quality',
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
