<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!-- login form -->
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>Welcome to Uranus System</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
//get current time
import { getTime } from '@/utils/time'
//import user store
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()

//el-form component
let loginForms = ref()

//get router
let $router = useRouter()

//route object
let $route = useRoute()

//define loading
let loading = ref(false)
//collect username and password
let loginForm = reactive({ username: 'admin', password: '111111' })
//login button function
const login = async () => {
  //ensure all forms are validated before sending request
  await loginForms.value.validate()
  //loading parameter
  loading.value = true
  //what will happen after clicking?
  //1. inform repository sending login request
  //2. success -> home
  //3. fail -> fail message
  try {
    //login success
    await useStore.userLogin(loginForm)
    //programming navigator, jump to home page
    //redirect to query if query parameter contains, or jump to home page directly
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    //notification
    ElNotification({
      type: 'success',
      message: 'Welcome back',
      title: `HI,Good ${getTime()}`,
    })
    //no matter login success or fail, loading terminates
    loading.value = false
  } catch (error) {
    loading.value = false
    //fail notification
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
//custom rule validator
//rule: rule object
//value: text content of form
//callback: send message if invalid
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5 && value.length <= 10) {
    callback()
  } else {
    callback(new Error('username length must be in range 6-10 !'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6 && value.length <= 10) {
    callback()
  } else {
    callback(new Error('password length must be in range 6-15 !'))
  }
}

//define form rules, edit config objects
const rules = {
  //rule object properties
  //required: required properties
  //min: min length
  //max: max length
  //message: error message
  //trigger: change -> triggered when text change,blur -> triggered rules when blur losses
  username: [
    {
      required: true,
      min: 5,
      max: 10,
      message: 'username length must be in range 6-10',
      trigger: 'change',
    },
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 15,
      message: 'password length must be in range 6-15',
      trigger: 'change',
    },
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
