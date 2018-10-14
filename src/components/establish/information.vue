imgUrl<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <div class="taton">
      <el-row class="mb15">
        <el-col :span="2"><div class="libName">姓名：</div></el-col>
        <el-col :span="22">
          <el-form-item prop="inputName">
            <el-input placeholder="请输入内容" v-model="ruleForm.inputName" maxlength=10  clearable  @keyup.native="proving1($event,'inputName')">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mb15">
        <el-col :span="2"><div class="libName">身份证号码：</div></el-col>
        <el-col :span="22">
          <el-form-item prop="inputUserId">
            <el-input v-model="ruleForm.inputUserId"
            maxlength=18
             placeholder="请输入内容" @keyup.native="proving1($event,'inputUserId')"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
  
      <el-row class="mb15">
        <el-col :span="2"><div class="libName">手机号码：</div></el-col>
        <el-col :span="22">
          <el-form-item prop="inputIhone">
            <el-input placeholder="请输入内容"
             maxlength=11
             v-model="ruleForm.inputIhone" clearable @keyup.native="proving1($event,'inputIhone')">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
  
      <el-row class="mb15">
        <el-col :span="2"><div class="libName">学历：</div></el-col>
        <el-col :span="22">
          <el-form-item prop="value">
            <el-select class="select-input" v-model="ruleForm.value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="mb15">
        <el-col :span="2"> <div class="libName">现居地址：</div></el-col>
        <el-col :span="22">
          <el-form-item prop="address">
           <div class="borderList"> 
             <el-input placeholder="请输入内容"
              type="textarea"
              resize="none"
              autosize
              maxlength=50
              v-model="ruleForm.address" clearable @keyup.native="proving1($event,'address')">
             </el-input>  
            </div>
          </el-form-item>
        </el-col>
      </el-row>
      </div>

      <el-row class="mtT55">
        <el-col :span="8">
          <p class="mb15 picTitle">身份证正面照：</p>
          <div class="picBox">
            <el-form-item prop="stencil">
              <div class="uploadImg">
                <!-- {{stencil.imageUrl}} -->
                <el-upload :action="fileUpload" class="avatar-uploader" 
                :show-file-list="false" :on-success="handleAvatarSuccess" 
                :before-upload="beforeAvatarUpload"
                >
                  <img v-if="stencil.imageUrl" style="width:100%;" :src="stencil.imageUrl">
                  <!-- <div v-if="stencil.imageUrl" :style="{width:'400px',height:'220px',background:'url('+stencil.imageUrl+') center center no-repeat',backgroundSize:'100%'}"></div> -->
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png格式文件，文件不能超过10MB</div>
                </el-upload>
              </div>
              <el-input v-model="ruleForm.stencil" class="hidden"></el-input>
            </el-form-item>
            <div class="picBtn" v-show="stencil.picStatus">
              <i class="R el-icon-zoom-in" @click="handlePictureCardPreview"></i>
            </div>
          </div>
          <el-dialog :visible.sync="stencil.dialogVisible">
            <img width="100%" :src="stencil.dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
  
        <el-col :span="8" class="R">
          <p class="mb15 picTitle">身份证反面照：</p>
          <div class="picBox">
            <el-form-item prop="stenci2">
               <div class="uploadImg">
              <el-upload :action="fileUpload" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess2" :before-upload="beforeAvatarUpload">
                <img v-if="stenci2.imageUrl" style="width:100%;" :src="stenci2.imageUrl"> 
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png格式文件，文件不能超过10MB</div>
              </el-upload>
               </div>
              <el-input v-model="ruleForm.stenci2" class="hidden"></el-input>
            </el-form-item>
            <div class="picBtn" v-show="stenci2.picStatus">
              <i class="R el-icon-zoom-in" @click="handlePictureCardPreview2"></i>
            </div>
          </div>
          <el-dialog :visible.sync="stenci2.dialogVisible">
            <img width="100%" :src="stenci2.dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
      </el-row>
  
      <el-row class="mtT55">
        <el-col :span="8">
          <p class="mb15 picTitle">手持身份证正面照：</p>
          <div class="picBox">
            <el-form-item prop="stenci3">
               <div class="uploadImg">
              <el-upload :action="fileUpload" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess3" :before-upload="beforeAvatarUpload">
                <img v-if="stenci3.imageUrl" style="width:100%;" :src="stenci3.imageUrl">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png格式文件，文件不能超过10MB</div>
              </el-upload>
               </div>
              <el-input v-model="ruleForm.stenci3" class="hidden"></el-input>
            </el-form-item>
            <div class="picBtn" v-show="stenci3.picStatus">
              <i class="R el-icon-zoom-in" @click="handlePictureCardPreview3"></i>
            </div>
          </div>
          <el-dialog :visible.sync="stenci3.dialogVisible">
            <img width="100%" :src="stenci3.dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
  
        <el-col :span="8" class="R">
          <p class="mb15 picTitle">手持身份证反面照：</p>
          <div class="picBox">
            <el-form-item prop="stenci4">
               <div class="uploadImg">
              <el-upload :action="fileUpload" class="avatar-uploader" :show-file-list="false" :on-success="handleAvatarSuccess4" :before-upload="beforeAvatarUpload">
                <img v-if="stenci4.imageUrl" style="width:100%;" :src="stenci4.imageUrl">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">只能上传jpeg/jpg/png格式文件，文件不能超过10MB</div>
              </el-upload>
               </div>
              <el-input v-model="ruleForm.stenci4" class="hidden"></el-input>
            </el-form-item>
            <div class="picBtn" v-show="stenci4.picStatus">
              <i class="R el-icon-zoom-in" @click="handlePictureCardPreview4"></i>
            </div>
          </div>
          <el-dialog :visible.sync="stenci4.dialogVisible">
            <img width="100%" :src="stenci4.dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
      </el-row>
  
      <el-row class="mtT55">
        <el-col :span="24">
          <p class="mb15 picTitle">身份证复印件签字视频：</p>
          <div class="picBox vid">
            <el-form-item prop="stenci5">
            <!-- action必选参数, 上传的地址{{videoForm.Video}} -->
              <el-upload class="avatar-uploader el-upload--text"
                :action="fileUpload" :show-file-list="false"
                :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" 
                :on-progress="uploadVideoProcess"
                >
                  <video width="718" height="400"
                   v-if="stenci5.imageUrl !='' && videoFlag == false"
                   controls="true" controlslist="nodownload" 
                    :src="stenci5.imageUrl">您的浏览器不支持视频播放</video>
                  <i v-else-if="stenci5.imageUrl =='' && videoFlag == false" class="el-icon-plus avatar-uploader-icon" ></i>
                 <el-button class="uploaderBtn" type="primary" >{{uploaderBtnTxt}}</el-button>
              
             
              </el-upload>
              <el-input v-model="ruleForm.stenci5" class="hidden"></el-input>
              <P class="text">只能上传mp4/avi/wmv/mov格式文件，文件不能超过50MB</P>
          </el-form-item>
          </div>
        </el-col>
          <el-row  class="R mb45 jj"> 
        <el-col :span="24"><el-button type="primary"   @click="submitForm('ruleForm')" >下一步</el-button></el-col>
      </el-row>
      </el-row>
    </el-form>
  
  
  
  </div >
</template>
<script>
import { fileUpload } from "../../api/env.js";
import {
  person,
  saveUserInfo,
  getNews,
  getRandomCompany,
  getInfo
} from "../../api/sheli";
export default {
  created: function(params) {
    var id = this.$route.query.id;
    if (id) {
      this.ruleForm.id = id;
      console.log("被驳回");
      this.getInfo(id);
    } else {
      return;
    }
  },

  methods: {
    getInfo(id) {
      getInfo({ id: id }).then(res => {
        if (res.state == 0) {
          let imgUrl = res.resultInfo.imgUrl;
          let fileUrl = res.resultInfo.fileUrl;
          var ItemCompanyArr = res.resultInfo.ItemCompanyArr,
            applyFile = res.resultInfo.applyFile,
            establishApplyVO = res.resultInfo.establishApplyVO;
          this.establishApplyVO(establishApplyVO);
          this.applyFile(applyFile, imgUrl, fileUrl);
          this.ItemCompanyArr(ItemCompanyArr);
        }
      });
    },
    ItemCompanyArr(v) {
      this.ruleForm.v = v;
    },

    establishApplyVO(v) {
      this.ruleForm.inputName = v.legalName;
      this.ruleForm.inputUserId = v.legalCard;
      this.ruleForm.inputIhone = v.phoneNumber;
      this.ruleForm.value = v.education.toString();
      this.ruleForm.address = v.address;
    },
    applyFile(res, imgUrl, fileUrl) {
      this.ruleForm.stencilList.idCardFrontFileId = res.idCardFrontFileId; // ID
      this.ruleForm.stencil = res.frontFileName; //文件名
      this.ruleForm.stencilList.frontFileFormat = res.frontFileFormat; //文件格式
      // var fiilNum = res.idCardFrontFileId.substring(0, 3);
      this.stencil.picStatus = true;
      this.stencil.imageUrl =
        fileUrl + "/file/download/" + res.idCardFrontFileId + "/123456";
      //  alert( imgUrl+fiilNum+'/'+res.idCardFrontFileId)

      this.ruleForm.stenci2List.idCardFrontFileId = res.idCardReverseFileId; // ID
      this.ruleForm.stenci2 = res.reverseFileName; //文件名
      this.ruleForm.stenci2List.frontFileFormat = res.reverseFileFormat; //文件格式
      // var fiilNum = res.idCardReverseFileId.substring(0, 3);
      this.stenci2.picStatus = true;
      this.stenci2.imageUrl =
        fileUrl + "/file/download/" + res.idCardReverseFileId + "/123456";

      this.ruleForm.stenci3List.idCardFrontFileId = res.handheldFrontFileId; // ID
      this.ruleForm.stenci3 = res.hfFileName; //文件名
      this.ruleForm.stenci3List.frontFileFormat = res.hfFileFormat; //文件格式
      // var fiilNum = res.handheldFrontFileId.substring(0, 3);
      this.stenci3.picStatus = true;
      this.stenci3.imageUrl =
        fileUrl + "/file/download/" + res.handheldFrontFileId + "/123456";

      this.ruleForm.stenci4List.idCardFrontFileId = res.handheldReverseFileId; // ID
      this.ruleForm.stenci4 = res.hrFileName; //文件名

      this.ruleForm.stenci4List.frontFileFormat = res.hrFileFormat; //文件格式
      // var fiilNum = res.handheldReverseFileId.substring(0, 3);
      this.stenci4.picStatus = true;
      this.stenci4.imageUrl =
        fileUrl + "/file/download/" + res.handheldReverseFileId + "/123456";

      this.ruleForm.stenci5List.idCardFrontFileId = res.videoFileId; // ID
      this.ruleForm.stenci5 = res.videoFileFormat; //文件名
      this.ruleForm.stenci5List.frontFileFormat = res.videoFileFormat; //文件格式

      this.stenci5.imageUrl =
        fileUrl + "/file/download/" + res.videoFileId + "/123456";
      //http://fileserver.jieshui8.org/file/download/4950d3104e9ce019c50104bf500ee8eb/164e5da68d7b9a1a2f532b87d9ba817e
    },

    beforeUploadVideo(file) {
      const isLt10M = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/wmv",
          "video/mp4",
          "video/mov",
          "video/avi",
          "video/x-ms-wmv",
          "video/quicktime"
        ].indexOf(file.type) == -1
      ) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过50MB哦!");
        return false;
      }
    },
    uploadVideoProcess(event, res) {},
    handleVideoSuccess(file, res) {
      //获取上传图片地址
      this.videoFlag = false;
      if (res.status == "success") {
        this.ruleForm.stenci5List.videoFileId = file.fileId; // ID
        this.ruleForm.stenci5 = file.fileName; //文件名
        this.ruleForm.stenci5List.videoFileFormat = file.extName; //文件格式

        this.stenci5.imageUrl = URL.createObjectURL(res.raw);
        this.uploaderBtnTxt='重新上传'
      } else {
        this.$message.error("视频上传失败，请重新上传！");
      }
    },

    submitForm(formName, stencil) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit("childByValue");
          this.$root.Bus.$emit("eventName", this.ruleForm);
        } else {
          return false;
        }
      });
    },
    proving1(e, v) {
      if (e.keyCode == 32) {
        // this.ruleForm[v] = this.ruleForm[v].replace(/\s/g, "");
        this.ruleForm[v] = this.ruleForm[v].replace(/(^\s*)|(\s*$)/g, "");
      }

      if (v == "inputIhone") {
        this.ruleForm[v] = this.ruleForm[v].replace(/[^\.\d]/g, "");
        this.ruleForm[v] = this.ruleForm[v].replace(".", "");
      }
    },

    //图片上传1

    handleAvatarSuccess(res, file) {
      this.ruleForm.stencilList.idCardFrontFileId = res.fileId; // ID
      this.ruleForm.stencil = res.fileName; //文件名
      this.ruleForm.stencilList.frontFileFormat = res.extName; //文件格式

      this.stencil.imageUrl = URL.createObjectURL(file.raw);
      this.stencil.picStatus = true;
    },
    handlePictureCardPreview(file) {
      this.stencil.dialogImageUrl = this.stencil.imageUrl;
      this.stencil.dialogVisible = true;
    },

    //图片上传2
    handleAvatarSuccess2(res, file) {
      this.ruleForm.stenci2List.idCardReverseFileId = res.fileId; // ID
      this.ruleForm.stenci2 = res.fileName; //文件名
      this.ruleForm.stenci2List.reverseFileFormat = res.extName; //文件格式

      this.stenci2.imageUrl = URL.createObjectURL(file.raw);
      this.stenci2.picStatus = true;
    },
    handlePictureCardPreview2(file) {
      this.stenci2.dialogImageUrl = this.stenci2.imageUrl;
      this.stenci2.dialogVisible = true;
    },
    //图片上传3
    handleAvatarSuccess3(res, file) {
      this.ruleForm.stenci3List.handheldFrontFileId = res.fileId; // ID
      this.ruleForm.stenci3 = res.fileName; //文件名
      this.ruleForm.stenci3List.hfFileFormat = res.extName; //文件格式

      this.stenci3.imageUrl = URL.createObjectURL(file.raw);
      this.stenci3.picStatus = true;
    },
    handlePictureCardPreview3(file) {
      this.stenci3.dialogImageUrl = this.stenci3.imageUrl;
      this.stenci3.dialogVisible = true;
    },
    //图片上传4
    handleAvatarSuccess4(res, file) {
      this.ruleForm.stenci4List.handheldReverseFileId = res.fileId; // ID
      this.ruleForm.stenci4 = res.fileName; //文件名
      this.ruleForm.stenci4List.hrFileFormat = res.extName; //文件格式

      this.stenci4.imageUrl = URL.createObjectURL(file.raw);
      this.stenci4.picStatus = true;
    },
    handlePictureCardPreview4(file) {
      this.stenci4.dialogImageUrl = this.stenci4.imageUrl;
      this.stenci4.dialogVisible = true;
    },

    beforeAvatarUpload(file) {
      const isLt10M = file.size / 1024 / 1024 < 50;
      if (["image/jpeg", "image/jpg", "image/png"].indexOf(file.type) == -1) {
        this.$message.error("请上传正确的图片格式");
        return false;
      }
      if (!isLt10M) {
        this.$message.error("上传图片大小不能超过 10MB!");
        return false;
      }
    }
  },

  data() {
    //姓名
    var checkName = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入姓名"));
      } else if (value.length > 10) {
        callback(new Error("最多输入10位，超出无法输入"));
      } else {
        var reg = /^[\u2E80-\u9FFF]+$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("仅支持中文!"));
        }
      }
    };
    //身份证号验证
    var checkuserId = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入身份证号码"));
      } else if (value.length > 18) {
        callback(new Error("身份证号码  最大长度18位"));
      } else {
        var reg = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确身份证号！"));
        }
      }
    };
    //手机号验证
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入手机号码"));
      } else if (value.length > 11) {
        callback(new Error("手机号最大长度11位"));
      } else {
        var reg = /^1[3|4|5|6|7|8|9]\d{9}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号！"));
        }
      }
    };
    //地址
    var checkAddress = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入现居地址"));
      } else if (value.length > 50) {
        callback(new Error("地址最大长度11位"));
      } else {
        var reg = /[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("仅支持输入中文、字母、数字和常用符号"));
        }
      }
    };
    return {
      //图片上传
      fileUpload,
      uploaderBtnTxt:'请上传视频',
      videoUploadPercent: "",
      videoFlag: false,
      videoForm: {
        Video: "",
        videoUploadId: ""
      },
      ruleForm: {
        id: "",
        inputName: "",
        inputUserId: "",
        inputIhone: "",
        value: "",
        address: "",
        stencilList: {},
        stenci2List: {},
        stenci3List: {},
        stenci4List: {},
        stenci5List: {},
        stencil: "",
        stenci2: "",
        stenci3: "",
        stenci4: "",
        stenci5: ""
      },
      stencil: {
        picStatus: false,
        imageUrl: "",
        dialogImageUrl: "",
        dialogVisible: false
      },
      stenci2: {
        picStatus: false,
        imageUrl: "",
        dialogImageUrl: "",
        dialogVisible: false
      },
      stenci3: {
        picStatus: false,
        imageUrl: "",
        dialogImageUrl: "",
        dialogVisible: false
      },
      stenci4: {
        picStatus: false,
        imageUrl: "",
        dialogImageUrl: "",
        dialogVisible: false
      },
      stenci5: {
        picStatus: false,
        imageUrl: "",
        dialogImageUrl: "",
        dialogVisible: false
      },

      rules: {
        //姓名
        inputName: [
          { validator: checkName, required: true, trigger: ["blur", "blur"] }
        ],
        //身份证
        inputUserId: [
          { validator: checkuserId, required: true, trigger: ["blur", "blur"] }
        ],

        inputIhone: [
          { validator: checkPhone, required: true, trigger: ["blur", "blur"] }
        ],

        value: [
          {
            required: true,
            message: "请选择学历",
            trigger: "change"
          }
        ],

        address: [
          { validator: checkAddress, required: true, trigger: ["blur", "blur"] }
        ],

        stencil: [
          {
            required: true,
            message: "请上传身份证正面照",
            trigger: "change"
          }
        ],

        stenci2: [
          {
            required: true,
            message: "请上传身份证反面照",
            trigger: "change"
          }
        ],
        stenci3: [
          {
            required: true,
            message: "请上传手持身份证正面照",
            trigger: "change"
          }
        ],
        stenci4: [
          {
            required: true,
            message: "请上传手持身份证反面照",
            trigger: "change"
          }
        ],

        stenci5: [
          {
            required: true,
            message: "请上传身份证复印件签字视频",
            trigger: "change"
          }
        ]
      },

      options: [
        {
          value: "1006",
          label: "本科以上"
        },
        {
          value: "1005",
          label: "本科"
        },
        {
          value: "1004",
          label: "专科"
        },
        {
          value: "1003",
          label: "高中"
        },
        {
          value: "1002",
          label: "初中"
        },
        {
          value: "1001",
          label: "小学及小学以下"
        }
      ]
    };
  }
};
</script>
<style scoped>
.bg-purple {
  line-height: 40px;
}

.select-input {
  width: 100%;
}

.libName {
  line-height: 40px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  border: 1px solid #dcdfe6;

  font-size: 28px;

  color: #8c939d;

  width: 178px;

  height: 178px;

  line-height: 178px;

  text-align: center;
}

.avatar {
  width: 178px;

  height: 178px;

  display: block;
}

.picBox {
  position: relative;
}

.picBtn {
  position: absolute;
  top: 0px;
  right: 0;
  color: white;
  font-size: 22px;
  padding: 10px 10px;
}
.text {
  position: absolute;
  bottom: -85px;
  font-size: 12px;
  color: #606266;
}
</style>
