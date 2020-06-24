<!-- 管理员管理 -->
<template>
  <div class="box">
    <screen-box
      @changeStatusValue="changeStatusValue"
      @search="search"
      @administratorsAdd="administratorsAdd"
      @changeCheckType='changeCheckType'>
    </screen-box>
    <tables
      :tableData="tableData"
      :tableHeight="tableHeight"
      @onlocked="onlocked"
      @lookFor="lookFor"
      @deleteUser="deleteUser">
    </tables>
    <paging
      :totalRows="totalRows"
      :pageSize="pageSize"
      @getInfo="getInfo"
      @getInfo_current="getInfo_current">
    </paging>
    <el-dialog title="查看详情" :visible.sync="dialogFormVisible" width="700px" :rules="ruless">
      <div class="checkTable border">
        <div class="border-bottom">
          <label class="border-right">姓名</label>
          <span>{{ruleForm.realName}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">电话</label>
          <span>{{ruleForm.phoneNum}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">邮箱</label>
          <span>{{ruleForm.email}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">公司名称</label>
          <span>{{ruleForm.unitName}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">地址</label>
          <span>{{ruleForm.contactAddress}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">备注</label>
          <span>{{ruleForm.about}}</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">选择版本</label>
          <span v-if = "ruleForm.edition === '1'">基础版</span>
          <span v-if = "ruleForm.edition === '2'">标准版</span>
          <span v-if = "ruleForm.edition === '3'">高级版</span>
          <span v-if = "ruleForm.edition === '4'">定制版</span>
        </div>
        <div class="border-bottom">
          <label class="border-right">行业系统</label>
          <span v-if = "ruleForm.industrySystem === '1'">工厂能源管理</span>
          <span v-if = "ruleForm.industrySystem === '2'">电力需求侧</span>
          <span v-if = "ruleForm.industrySystem === '3'">供热阀控</span>
          <span v-if = "ruleForm.industrySystem === '4'">小区能源管理</span>
          <span v-if = "ruleForm.industrySystem === '5'">高校能源管理</span>
          <span v-if = "ruleForm.industrySystem === '6'">医院能源管理</span>
          <span v-if = "ruleForm.industrySystem === '7'">公共建筑能源监测</span>
          <span v-if = "ruleForm.industrySystem === '8'">智慧水务</span>
          <span v-if = "ruleForm.industrySystem === '9'">其他行业能源计量</span>
        </div>
      </div>
      <div class="question border">
        <ul class="question-wapper">
          <li class="title">问题及答案：</li>
          <li class="queList" v-for="(item, index) of questionList" :key='index'>
            <div class="question-top">
              <span>{{index+1}}.{{item.problemContent}}</span>
            </div>
            <div class="anwser">答案：{{item.answerContent}}</div>
          </li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./FreeUser.js"></script>
<style lang="stylus" scoped src="./FreeUser.css"></style>
