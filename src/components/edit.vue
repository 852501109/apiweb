!<!--
* @description
* @fileName setting.vue
* @author chenwenquan
* @date 2024/07/17 14:25:30
!-->
<template>
  <div class="container">
    <el-form :disabled="filter==='view'" class="form" ref="form" :model="form" label-width="80px" style="width:100%">
      <el-form-item label="接口地址:">
        <el-input placeholder="请输入内容" v-model="form.url" style="width:100%">
          <template slot="prepend">{{ optionMap.url_prefix }}</template>
           <!-- <template slot="append"><div class="api__append" @click="send"><i class="el-icon-check append_check"></i></div></template> -->
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
      <!-- <el-form-item label="参数配置:">
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

          </el-table-column>
          <el-table-column
            prop="value"
            label="参数值">
            <template slot-scope="scope">
              <el-input placeholder="请输入" :disabled="scope.row.disabled" v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            header-align="center"
            width="200"
            >
             <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">{{ scope.row.disabled ? '编辑' : '保存' }}</el-button>

                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item> -->
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
import {updateApiInfo} from '../api/service'
export default {
  props: {
    filter: {
      type: String,
      default: ''
    },
    optionMap: {
      type: Object,
      default: {
        dict_is_check_param:[],
        dict_param_type: [],
        dict_request_method: []
      }
    },
    currentRow: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: {
        url: '',
        method: '',
        responseData:'',
        isParamValid: false
      },
      tableData: [
        {value: 'value1', name: 'key1', disabled: true},
        {value: 'value2', name: 'key2', disabled: true},
        {value: 'value3', name: 'key3', disabled: true},
        {value: 'value4', name: 'key4', disabled: true},
      ]
    }
  },
  components: {},
  computed: {},
  mounted() {},
  created() {
      console.log('this.currentRow', this)
      this.form = {
        url: this.currentRow.apiName,
        method: this.currentRow.requestMethod.toString(),
        responseData:this.currentRow.returnData,
        isParamValid: this.currentRow.isCheckParam == 1
      }
  },
  methods: {
    send() {
      if(!this.form.url) {
        this.$message({
          message: '请先配置接口地址',
          type: 'warning'
        });
      }
    },
    submit() {
      return new Promise(resolve => {
        const param = {
            "id": this.currentRow.id,
            "apiName": this.form.url,
            "requestMethod": Number(this.form.requestMethod),
            "isCheckParam": this.form.isParamValid ? 1:0,
            "returnData": this.form.responseData
        }
        updateApiInfo(param).then(() => {
          resolve('ok')
        })
      })
    },
    cancel() {
      this.$emit('back')
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
.container {
  padding: 21px
}

.bottom {
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.param_valid {
  display: flex;
  justify-content: flex-start;
}
.container >>> .el-checkbox__inner {
  border: 1px solid #a9a9a9;
}
</style>
