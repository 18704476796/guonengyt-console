<!-- 登录页 -->
<template>
  <div class="loginBox" :style="{backgroundImage: 'url(' + api + loginBack + ')'}">
    <div class="login-float">
      <div class="login-left login-leftBox">
        <img :src="api + loginLogo" />
      </div>
      <div class="login-right">
        <div>
          <h3>登录/Login</h3>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <ul>
              <li>
                <el-form-item prop="user">
                  <el-input placeholder="请输入帐号" v-model="loginForm.user" clearable></el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item prop="password">
                  <el-input placeholder="请输入口令" v-model="loginForm.password" show-password></el-input>
                </el-form-item>
              </li>
              <li><el-button
                type="primary"
                class="loginBtn"
                @click="submitForm('loginForm')"
              >登入</el-button></li>
            </ul>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Login.js"></script>
<style lang="stylus" scoped src="./Login.css"></style>
