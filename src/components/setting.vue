!<!--
* @description
* @fileName setting.vue
* @author chenwenquan
* @date 2024/07/17 14:25:30
!-->
<template>
  <div class="container" v-loading="isLoading">
    <el-form ref="form" :model="form" label-width="80px" style="width:100%">
      <el-form-item label="接口地址:">
        <el-input placeholder="请输入内容" v-model="form.url" style="width:100%">
          <template slot="prepend">{{optionMap.url_prefix }}</template>
           <template slot="append"><div class="api__append" @click="send"><i class="el-icon-check append_check"></i></div></template>
        </el-input>
      </el-form-item>
      <el-form-item label="请求方式:">
          <el-select v-model="form.method" style="width:100%">
            <el-option :value="i.key" :label="i.value" :key="n" v-for="(i, n) in optionMap.dict_request_method"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="参数校验:">
        <div class="param_valid"><el-checkbox v-model="form.isParamValid" :indeterminate="false"></el-checkbox></div>
      </el-form-item>
      <el-form-item label="参数配置:">
        <el-table
          :data="tableData"
          border

          style="width: 100%">
           <el-table-column
            type="index"
            align="center"
            label="序号"
            header-align="center"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="参数名"
          >
            <template slot-scope="scope">
              <el-input placeholder="请输入" :disabled="scope.row.disabled" v-model="scope.row.name"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="value"
            label="参数值">
            <template slot-scope="scope">
              <el-input placeholder="请输入" :disabled="scope.row.disabled" v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="dict_param_type"
            label="参数位置">
            <template slot-scope="scope">
              <el-select placeholder="选择" :disabled="scope.row.disabled" v-model="scope.row.dict_param_type">
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
             <template slot="header">
                <div class="operator_header">操作&nbsp;&nbsp;<i class="el-icon-circle-plus add" @click="add"></i></div>
             </template>
             <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">{{ scope.row.disabled ? '修改' : '保存' }}</el-button>
                <el-popconfirm
                  title="确定删除吗？"
                  @confirm="handleDelete(scope.$index, scope.row)"
                >
                  <el-button size="mini" slot="reference"  type="danger"
                  >删除</el-button>
                </el-popconfirm>

            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="返回数据:">
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 10}"
          v-model="form.responseData">
          </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {addApiInfo} from '../api/service'
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
      form: {
        url: '',
        method: '',
        responseData:'',
        isParamValid: false,
      },
      isLoading: false,
      tableData: [
      ],
    }
  },
  components: {},
  computed: {},
  mounted() {

  },
  methods: {
    add() {
      this.tableData.push({value: '',dict_param_type:'', name: '', disabled: false})
    },
    send() {
      if(!this.form.url) {
        this.$message({
          message: '请先配置接口地址',
          type: 'warning'
        });
        return
      }
      if(!this.form.method) {
        this.$message({
          message: '请选择接口方法',
          type: 'warning'
        });
        return
      }
      if(this.form.isParamValid && this.tableData.length === 0) {
        this.$message({
            message: '参数校验不为空时，参数必填',
            type: 'warning'
          });
          return
      }
      if(this.tableData.some(item => !item.name)) {
          this.$message({
            message: '参数名不可为空',
            type: 'warning'
          });
          return
        }
        if(this.tableData.some(item => !item.value)) {
          this.$message({
            message: '参数值不可为空',
            type: 'warning'
          });
          return
        }
        if(this.tableData.some(item => !item.dict_param_type)) {
          this.$message({
            message: '参数位置不可为空',
            type: 'warning'
          });
          return
        }
      let param = {
          "apiName": this.form.url,
          "requestMethod": this.form.method,
          "isCheckParam": this.form.isParamValid ? this.optionMap.dict_is_check_param.find(item => item.value === '是').key : this.optionMap.dict_is_check_param.find(item => item.value === '否').key,
          "returnData": this.form.responseData,
          "params": this.tableData.map((item, index) => {
            return {
                  "paramType": item.dict_param_type,
                  "paramName": item.name,
                  "paramValue": item.value,
                  "isCheckParam": 0,
                  "disOrder": index+1
              }
          })
      }
      this.isLoading = true
      addApiInfo(param).then(res=> {
        if(res.code === 200) {
          this.$message.success('操作成功')
           setTimeout(() => {
              let openUrl = this.optionMap.url_prefix + this.form.url
              if(this.form.method == 0) window.open(openUrl)
            }, 500)
        } else {
          this.$message.error(res.data)
        }

      }).finally(() => {
        this.isLoading = false
      })
    },
    handleEdit(index, row) {
      this.tableData[index].disabled = !this.tableData[index].disabled
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.api__append {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #409eff;
    color: #fff;
    cursor: pointer;
}
.container >>> .el-input-group__append {
    padding: 0;
    width: 50px;
    height: 100%;
}
.container >>>  .el-input-group--append {
  height: 100%;
}
.param_valid {
  display: flex;
  justify-content: flex-start;
}
.container >>> .el-checkbox__inner {
  border: 1px solid #a9a9a9;
}
.container {
  padding: 21px
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
