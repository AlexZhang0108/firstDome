<template>
  <div class="boxBorder">
   <!-- <el-form-item  prop="TrafModeObj"> -->
    <div v-for="(item, index) in list" :key="index">
  
      <el-row>
        <el-col class="gridContent" :span="6">
          <el-select v-model="siteValue" class="borderInit" placeholder="请选择">
            <el-option v-for="item in site" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        
     
      <!-- keyup(list[item-1],[item-1]) -->
        <el-col class="gridContent" :span="6" ref="checkPromat">
          <el-input class="gridTxt borderInit" v-model="list[index]"
           maxlength=4
           v-on:change="change(list[index],index)"
           placeholder="请输入内容" :value="list[index]" >
           
          </el-input>
        </el-col>
  
        <el-col class="gridContent " :span="6">
          <el-select v-model="CompanyNameValue" class="borderInit" placeholder="请选择">
            <el-option v-for="item in CompanyName" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
  
        <el-col class="gridContent" :span="6">
          <el-select v-model="NatureValue" class="borderInit" placeholder="请选择">
            <el-option v-for="item in Nature" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  
    <el-row class="R mb15 mtT55">
      <el-button type="primary"  @click="lastBtn">上一步</el-button>
      <el-button type="primary" @click="nextBtn" v-if="disabledStatus">下一步</el-button>
      <el-button type="primary" @click="nextBtn" v-else disabled="disabled">下一步</el-button>
    </el-row>
  <!-- </el-form-item> -->
  </div>
</template>

<script>
import { getRandomCompany, saveUserInfo, editSave } from "../../api/sheli";

export default {
  // 当前实例创建完成就监听这个事件
  created() {
    this.$root.Bus.$on("eventName", value => {
      this.print(value);
    });
  },
  mounted: function(params) {
    getRandomCompany({}).then(res => {
      if (res.state == 0) {
        let data = res.resultInfo;
        this.list = data;
      } else {
        this.$notify.error({
          title: "错误",
          message: "请求失败"
        });
      }
    });
  },

  methods: {
    print(value) {
      if (value.v) {
        this.id = value.id;
        this.Ajax = 1;
        let array = value.v;
        let arr = [];
        array.forEach(j => {
          arr.push(j.nameTwo);
        });
        this.list = arr;
      } else {
        this.Ajax = 0;
      }
      this.ruleForm = value;
    },
    lastBtn() {
      this.$emit("companyBtn", "last");
    },
    change(v, i) {
      this.$refs.checkPromat[i].$children[0].$refs.input.value = this.$refs.checkPromat[i].$children[0].$refs.input.value.replace(/\s+/g, "");
      this.list[i] = this.$refs.checkPromat[i].$children[0].$refs.input.value.replace(/\s+/g, "");
      if (v.length < 2) {
        this.$alert("请输入2~4个汉字", "提示", {
          dangerouslyUseHTMLString: true
        }).then(({ value }) => {
          this.$refs.checkPromat[i].$children[0].$refs.input.focus()
        });
      } else {
        var reg = /^[\u2E80-\u9FFF]+$/;
        if (reg.test(v)) {
          return;
        } else {
          this.$alert("请输入2~4个汉字", "提示", {
            dangerouslyUseHTMLString: true
          }).then(({ value }) => {
          this.$refs.checkPromat[i].$children[0].$refs.input.focus()
        });
        }
      }
    },
    //校验
    jiaoyan(arr) {
      var flag = arr.every((item, index, array) => {
        var reg = /^[\u2E80-\u9FFF]+$/;
        this.index = index;
         this.$refs.checkPromat[index].$children[0].$refs.input.focus()
        return item.length >= 2 && reg.test(item);
      });
      return flag;
    },

    //下一步
    nextBtn() {
      var arr = this.list;
      this.jiaoyan(arr);
      if (this.jiaoyan(arr)) {
      } else {
       
        this.$alert("请输入2~4个汉字", "提示", {
          dangerouslyUseHTMLString: true
        });
        return false
      }

      var dataList = this.ruleForm;

      let companyList = [];
      this.list.forEach((item, index) => {
        var obj = {};
        obj.nameFirst = "360000";
        obj.nameTwo = item;
        obj.nameThree = "1001";
        obj.nameLast = "1001";
        companyList.push(obj);
      });
      let params = {
        tempCompanyNames: companyList,
        corporation: dataList.inputName, //  法人姓名
        idCard: dataList.inputUserId, //  身份证号码
        tel: dataList.inputIhone, //  手机号
        education: dataList.value, //  学历
        address: dataList.address, //  现居住地址

        idCardFrontFileId: dataList.stencilList.idCardFrontFileId, //	身份证正面id
        frontFileFormat: dataList.stencilList.frontFileFormat, //	身份证正面文件类型
        frontFileName: dataList.stencil, //  身份证正面文件名称

        idCardReverseFileId: dataList.stenci2List.idCardReverseFileId, //	身份证反面id
        reverseFileFormat: dataList.stenci2List.reverseFileFormat, //	身份证反面文件类型
        reverseFileName: dataList.stenci2, //  身份证反面文件名称

        handheldFrontFileId: dataList.stenci3List.handheldFrontFileId, //	手持身份证正面照id
        hfFileFormat: dataList.stenci3List.hfFileFormat, //	手持身份证正面照文件类型
        hfFileName: dataList.stenci3, //	手持身份证正面照文件名称

        handheldReverseFileId: dataList.stenci4List.handheldReverseFileId, //	手持身份证反面照id
        hrFileFormat: dataList.stenci4List.hrFileFormat, //	手持身份证反面照文件类型
        hrFileName: dataList.stenci4, //	手持身份证反面照文件名称

        videoFileId: dataList.stenci5List.videoFileId, //	身份证复印件签字视频id
        videoFileFormat: dataList.stenci5List.videoFileFormat, //	身份证复印件签字视频文件类型
        ideoFileName: dataList.stenci5 //	身份证复印件签字视频文件名称
      };

      this.saveUserInfo(params);
      this.disabledStatus = false;
    },

    saveUserInfo(params) {
      if (this.Ajax == 0) {
        console.log("这是新增");
        saveUserInfo(params).then(res => {
          if (res.state == 0) {
            this.$emit("companyBtn", "next");
            this.disabledStatus = true;
          } else {
            this.disabledStatus = true;
          }
        });
      } else if (this.Ajax == 1) {
        console.log("这是驳回");
        params.applyId = this.id * 1;
        editSave(params).then(res => {
          if (res.state == 0) {
            this.$emit("companyBtn", "next");
            this.disabledStatus = true;
          } else {
            this.disabledStatus = true;
          }
        });
      }
    }
  },

  // 在组件销毁时别忘了解除事件绑定
  beforeDestroy() {
    this.$root.Bus.$off("eventName");
  },
  data() {
    return {
      index: "",
      id: "",
      disabledStatus: true,
      ruleForm: {},
      list: [],
      listValue: [],
      items: 10,
      Ajax: 0,
      site: [
        {
          value: "360000",
          label: "江西"
        }
      ],
      CompanyName: [
        {
          value: "1001",
          label: "企业管理咨询"
        }
      ],
      Nature: [
        {
          value: "1001",
          label: "工作室"
        }
      ],
      siteValue: "360000",
      CompanyNameValue: "1001",
      NatureValue: "1001"
    };
  }
};
</script>

<style>
.order {
  display: inline-block;
  width: 64px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  border-right: 1px solid #e8e8ee;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.gridContent {
  border-bottom: 1px solid #e8e8ee;
  height: 53px;
  line-height: 53px;
  text-align: center;
}

.gridTxt {
  width: 217px;
  border: 0px;
  text-align: center;
}

.boxBorder {
  border-top: 1px solid #e8e8ee;
}

.el-gg {
  border: 0 !important;
}


 .colordisplay {
        display: inline;
        background: red;
        border: 1px solid blue
    }


</style>