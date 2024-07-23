!<!--
* @description
* @fileName list.vue
* @author chenwenquan
* @date 2024/07/17 14:25:30
!-->
<template>
  <div class="table">
    <el-table class="table_one" :data="tableData" border  highlight-current-row @current-change="rowClick" v-loading="isLoading">
         <el-table-column
            type="index"
            align="center"
            header-align="center"
            label="序号"
            width="100">
          </el-table-column>
        <el-table-column prop="prepend" label="接口地址前缀">
          <template slot-scope="scope">
            {{ optionMap.url_prefix }}
          </template>
        </el-table-column>
        <el-table-column prop="apiName" label="接口名称">
        </el-table-column>
        <el-table-column prop="requestMethod" label="请求方式">
          <template slot-scope="scope" v-if="optionMap.dict_request_method.length > 0">
            {{optionMap.dict_request_method.find(item => item.key == scope.row.requestMethod).value}}
          </template>
        </el-table-column>
        <el-table-column prop="returnData" label="返回数据">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column
            label="操作"
            align="center"
            header-align="center"
            width="300"
            >
             <template slot-scope="scope">
                <el-button
                  size="mini"
                  :disabled="isLoading"
                  @click.stop="handleView(scope.$index, scope.row)">查看</el-button>
                <el-button
                  size="mini"
                  type="primary"
                  :disabled="isLoading"
                  @click.stop="handleEdit(scope.$index, scope.row)">修改</el-button>

                   <el-popconfirm
                  title="确定删除吗？"
                  @confirm="handleDelete(scope.$index, scope.row)"
                >
                  <el-button @click.stop size="mini" slot="reference"  type="danger" :disabled="isLoading"
                  >删除</el-button>
                </el-popconfirm>
            </template>
          </el-table-column>
    </el-table>
    <div class="bottom">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage">
    </el-pagination>

    </div>
    <el-table
          :data="headerData"
          border
          class="table_two"
          style="width: 100%">
           <el-table-column
            type="index"
            align="center"
            label="序号"
            header-align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="paramName"
            label="参数名"
          >
            <template slot-scope="scope">
              <el-input placeholder="请输入" :disabled="scope.row.disabled" v-model="scope.row.paramName"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="paramValue"
            label="参数值">
            <template slot-scope="scope">
              <el-input placeholder="请输入" :disabled="scope.row.disabled" v-model="scope.row.paramValue"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="dict_param_type"
            label="参数位置">
            <template slot-scope="scope">
              <el-select placeholder="选择" :disabled="scope.row.disabled" v-model="scope.row.paramType">
                <el-option :value="i.key" :label="i.value" :key="n" v-for="(i, n) in optionMap.dict_param_type" ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            header-align="center"
            width="200"
            >
              <!-- <template slot="header">
                <div class="operator_header">操作&nbsp;&nbsp;<i class="el-icon-circle-plus add" @click="add"></i></div>
             </template> -->
             <template slot-scope="scope">
                <el-button
                  size="mini"
                  :disabled="isLoading"
                  @click="headerEdit(scope.$index, scope.row)">{{ scope.row.disabled ? '修改' : '保存' }}</el-button>
                <el-popconfirm
                  title="确定删除吗？"
                  @confirm="headerDelete(scope.$index, scope.row)"
                >
                  <el-button size="mini" slot="reference"  type="danger" :disabled="isLoading"
                  >删除</el-button>
                </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>
<script>
import {getApiInfoByPage, getApiParamsInfo, updateApiParamInfo, deleteApiInfoById, deleteApiParamInfoById} from '../api/service'
export default {
  props: {
    optionMap: {
      type: Object,
      default: {
        dict_is_check_param:[],
        dict_param_type: [],
        dict_request_method: []
      }
    }
  },
  data () {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10,
        totalPage:0,
        headerData:[],
        isLoading: false
      }
  },
  components: {},
  computed: {},
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    headerEdit(index, row) {
      // this.$set(this.headerData[index], 'disabled', !this.headerData[index].disabled)
      if(!row.disabled) {
        const param = {
          id: row.id,
          apiId: row.apiId,
          paramType:  row.paramType,
          paramName: row.paramName,
          paramValue: row.paramValue,
          isCheckParam: row.isCheckParam,
          disOrder: 1
        }
        this.isLoading = true
        updateApiParamInfo(param).then(res => {
          if(res.code == 200) {
            this.$message.success('操作成功')
            row.disabled = !row.disabled
          }
        }).finally(() => {
          this.isLoading = false
        })
      } else {
        row.disabled = !row.disabled
      }


    },
    add() {
      this.headerData.push({paramValue: '',isCheckParam:'', paramName: '', disabled: true})
    },
    getList() {
      let param = {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      }
      this.isLoading = true
      getApiInfoByPage(param).then(res => {
        this.totalPage = res.totalPage
        this.tableData = res.data
      }).finally(() => {
        this.isLoading = false
      })
    },
    rowClick(row) {
      getApiParamsInfo({apiId: row.id}).then(res => {
        if(res.code == 200) {
          const rows = res.data
          rows.forEach(item => {
            item.paramType = item.paramType.toString()
            item.disabled = true
          })
          this.headerData = rows
        }
      })
    },
    headerDelete(index, row) {
      this.headerData.splice(index, 1)
      this.isLoading = true
      deleteApiParamInfoById({id: row.id}).then(res => {
        if(res.code == 200) {
          this.$message.success('操作成功')
          this.getList()
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getList()
    },
    handleDelete(index, row) {
      this.isLoading = true
      deleteApiInfoById({id: row.id}).then(res => {
        if(res.code == 200) {
          this.$message.success('操作成功')
          this.getList()
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    handleView(index, row) {
      this.$emit('edit', 'view', row)
    },
    handleEdit(index, row) {
      this.$emit('edit', 'edit', row)
    }
  }
}
</script>
<style scoped>
.bottom {
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.table_one >>> .el-table__body-wrapper {
  height: calc(100vh - 450px);
  overflow-y: auto;
}
.table_two >>> .el-table__body-wrapper {
  height: 220px;
  overflow-y: auto;
}
.add {
  font-size: 26px;
  color: #409eff;
  cursor: pointer;
}
.operator_header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
