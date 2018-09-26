<template>
  <div class="contact w-80">
      <h4 class="title fs-40">Contact Us</h4>
      <el-form class="form" ref="form" :model="form" label-width="80px" :rules="rules" >
          <el-row class="ta-center">
              <el-col :xs="24" :sm="18" :lg="13" >
                  <el-form-item label="Name" prop="name">
                      <el-input placeholder="Name" v-model="form.name"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="18" :lg="13" >
                  <el-form-item label="Email" prop="email">
                      <el-input placeholder="Email" v-model="form.email"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="18" :lg="13" >
                  <el-form-item label="Phone" prop="phone">
                      <el-input placeholder="Phone" v-model="form.phone"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="18" :lg="13" >
                  <el-form-item label="Message" prop="message">
                      <el-input type="textarea" placeholder="Message" v-model="form.message"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="18" :lg="13" >
                  <el-form-item label="" >
                      <el-button type="primary" style="width: 100%" @click="submitForm('form')">SUBMIT</el-button>
                  </el-form-item>
              </el-col>
          </el-row>
      </el-form>
      <el-alert style="position: fixed;top: 40px;width: 40%;left: 30%"
              v-if="success"
              title="成功提示的文案"
              type="success"
              show-icon>
      </el-alert>
  </div>
</template>

<script>
  function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
  }
  var validPhone=(rule, value,callback)=>{
    if (!value){
      callback(new Error('请输入电话号码'))
    }else  if (!isvalidPhone(value)){
      callback(new Error('请输入正确的11位手机号码'))
    }else {
      callback()
    }
  }
export default {
  name: 'Contact',
  data () {
    return {
      form: {
        name:'',
        email:'',
        phone:'',
        message:''
      },
      success:false,
      rules:{
        name:[
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        phone:[
          { required: true, trigger: 'blur',validator: validPhone },
        ],
        email:[
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        message:[
          { required: true, message: '请输入信息', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.$refs['form'].resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .hello{
   background-image: url("../assets/logo.png");
 }
</style>
