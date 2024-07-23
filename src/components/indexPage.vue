<template>
<el-container style="height: 100%; border: 1px solid #eee" v-loading="isLoading">
  <el-aside width="210px" style="background-color: rgb(238, 241, 246)">
    <el-menu style="height: 100%;" :default-active="activePath" class="el-menu-vertical-demo">
        <el-menu-item index="1" @click="toPath(1)"><i class="el-icon-setting"></i>模拟接口设置</el-menu-item>
        <el-menu-item index="2" @click="toPath(2)"><i class="el-icon-s-order"></i>模拟接口列表</el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <!-- <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>

      </el-dropdown>
      <span>用户</span>
    </el-header> -->

    <el-main>
      <mocksetting v-if="activePath == 1" :optionMap="optionMap" />
      <mockList ref="mockList" v-if="activePath == 2" @edit="toEdit" :optionMap="optionMap" />
    </el-main>
    <el-dialog
      :visible.sync="dialogVisible"
      width="60%"
    >
      <mockEdit @back="toList" ref="mockEdit" :filter="filter" :optionMap="optionMap" :currentRow="currentRow" v-if="dialogVisible"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subEdit" v-if="filter!=='view'" :disabled="isLoading">提 交</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </el-container>
</el-container>
</template>


<script>
  import mockList from './list.vue'
  import mockEdit from './edit.vue'
  import mocksetting from './setting.vue'
  import {getBaseInfo} from '../api/service'
  export default {
    data() {
      return {
        activePath: 1,
        filter: '',
        isLoading: false,
        dialogVisible: false,
        currentRow: {},
        optionMap: {
          dict_is_check_param:[],
          dict_param_type: [],
          dict_request_method: []
        }
      }
    },
    components: {
      mocksetting,
      mockList,
      mockEdit
    },
    created() {
      this.activePath = localStorage.getItem('activePath')  || 1
      getBaseInfo().then(res => {
        if(res.code === 200) {
          this.optionMap = res.data
        }
      })
    },
    methods: {
      toPath(path) {
        this.activePath = path
        localStorage.setItem('activePath', path)
      },
      toEdit(val, row) {
        this.currentRow = row
        this.dialogVisible = true
        this.filter = val
      },
      toList() {
        this.dialogVisible = false
      },
      subEdit() {
        this.isLoading = true
        this.$refs.mockEdit.submit().then(() => {
          this.dialogVisible = false
          this.$message.success('操作成功')
          this.$refs.mockList.getList()
        }).finally(() => {
          this.isLoading = false
        })

      }
    }
  };
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu-item.is-active {
    background: #d9ecff;
  }
  .el-aside {
    color: #333;
  }

</style>
