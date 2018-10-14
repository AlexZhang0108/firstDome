<template>
	<div class="schedule_box">
		<banner></banner>
		<div class="mainConter">
			<p class="depict mb15">设立进度</p>
            <div class="depictVertical" style="height: 500px; margin-left:120px;position: absolute;">
				<el-steps direction="vertical" :active="active" align-center>
						<!--核名中-->			
					<el-step :title="hemingm"></el-step>  
					<!--工商注册-->
					<el-step :title="gongshang"></el-step>
					<!--银行开户-->
					<el-step :title="yinhang"></el-step>
					<!--税务阶段-->
					<el-step :title="shuiwu"></el-step>
									
				</el-steps>
				<!--工商注册中   模块显示-->
				<h3 class="showcompanyname" v-show="this.active==2||this.active==3||this.active==4||this.active==5">{{newdata.checkCompanyName}}</h3>
				<!--<h3>{{value.checkCompanyName}}</h3>-->
				
			  <!--核名完成时间显示-->
			   <span class="hemingTime" v-show="this.active==2||this.active==3||this.active==4||this.active==5">{{newdata.nuclearNameTi}}</span>
			  
				<!--工商注册完成时间显示-->
				<span class="gongshangzhuceTime" v-show="this.active==3||this.active==4||this.active==5">{{newdata.commercialRegisterTi}}</span>
				
				<!--银行开户完成时间显示-->
				<span class="yinhangkaihuwanchengTime" v-show="this.active==4||this.active==5">{{newdata.bankAccountTi}}</span>
				
				<!--税务阶段完成时间显示-->
				<span class="shuiwujieduanwanchengTime" v-show="this.active==5">{{newdata.taxTi}}</span>

				<!--银行开户中步骤   工商展示图片 -->
				<el-row :gutter="20" class="psp vb" v-show="this.active==3||this.active==4||this.active==5">   
					<el-col :span="4" v-for="(item,index) in newdata.commercialRegisterPic" :key="index" > 
						<div class="grid-content bg-purple havepadding">
							<img :src="item.fileId" class="imgsize">
						</div>
					</el-col>
				</el-row>

				<!--税务阶段    银行开户展示图片-->
				<!--<el-row :gutter="50" class="Tax" v-show="inTax&&showPic">-->
			<el-row :gutter="20" class="Tax vb"     v-show="this.active==4||this.active==5">
					 <el-col :span="4"  v-for="(item,index) in  newdata.bankAccountPic"  :key="index">
						<div class="grid-content bg-purple havepadding">
							 <img :src="item.fileId" class="imgsize">
						</div>
					</el-col>
			</el-row>
				
				
				<!--税务完成阶段     展示图片-->
				<el-row :gutter="20" class="bank vb" v-show="this.active==5" >
					<el-col :span="4" v-for="(item,index) in newdata.taxPic" :key="index" >
						<div class="grid-content bg-purple havepadding">
							<img :src="item.fileId" class="imgsize">
						</div>
					</el-col>
					   <div class="anniu">
					   	<p class="newhavecolor">设立已完成，请确认完工信息</p>
						   <el-button type="primary" size="medium" @click="index">确定</el-button>
					</div>
				</el-row>

			</div>
		</div>
	</div>
</template>

<script>
import banner from "../../components/establish/banner";
import { getEstablishProcess, confirm } from "../../api/sheli.js";

export default {
  name: "schedule",
  data() {
    return {
      shuiwu: "税务阶段",
      yinhang: "银行开户",
      gongshang: "工商注册",
      hemingm: "核名中",
      newdata: "",
      active: 0,
      id: ""   //传递的id
    };
  },
  mounted() {
   getEstablishProcess({ applyId: this.id }).then(res => {
      if (res.state == 0) {
        //请求成功
        if (res.resultInfo.length != 0 || res.resultInfo) {
          //判断是否为空  如果不为空
          this.newdata = res.resultInfo;

          if (this.newdata.establishStatus == 1003) {
            //银行开户条件
            this.active = 3; //3代表银行开户条件
            //工商注册中
            this.gongshang = "工商注册完成";
            //核名完成
            this.hemingm = "核名完成";
            //银行开户
            this.yinhang = "银行开户中";
            //税务阶段完成
            this.shuiwu = "税务阶段完成";
          } else if (this.newdata.establishStatus == 1001) {
            //核名中 条件

            this.active = 1;
            //工商注册显示
            this.gongshang = "工商注册";
            //核名完成
            this.hemingm = "核名中";
            //银行开户
            this.yinhang = "银行开户";
            //税务阶段
            this.shuiwu = "税务阶段";
          } else if (this.newdata.establishStatus == 1002) {
            //工商注册条件

            this.active = 2; //工商注册
            //工商注册中
            this.gongshang = "工商注册中";
            //核名完成
            this.hemingm = "核名完成";
            //银行开户
            this.yinhang = "银行开户";
            //税务阶段完成
            this.shuiwu = "税务阶段完成";
          } else if (this.newdata.establishStatus == 1004) { 
            //税务阶段
            this.active = 4;

            //工商注册中
            this.gongshang = "工商注册中";
            //核名完成
            this.hemingm = "核名完成完成";
            //银行开户
            this.yinhang = "银行开户完成";
            //税务阶段完成
            this.shuiwu = "税务阶段";
          } else { 
            //税务阶段完成 状态1005
//          if (this.newdata.establishStatus == 1005) {
              this.active = 5; //完成阶段

              //工商注册中
              this.gongshang = "工商注册完成";
              //核名完成
              this.hemingm = "核名完成";
              //银行开户
              this.yinhang = "银行开户完成";
              //税务阶段完成
              this.shuiwu = "税务阶段完成";
//          }
          }
        } else {
          //如果为空
          this.newdata = [];
        }
      } else {
        //请求失败
      }
    });
  },
  beforeDestroy: function(params) {
    this.id=''; 
  },

  components: {
    banner
  },
  methods: {
    //点击确定按钮发送请求
    queding() {
      confirm({ applyId: this.id }).then(res => {});
    },
    index(v) {//点击确定按钮回到个人中心 
      confirm({ applyId: this.id }).then(res => {});
      this.$router.push({
        path: "/personage",
        query: { //路由传参
          id: v
        }
      });
    }
  },
  created() { //页面进行加载时  接受传过来的参数
	//设立流程
	 var id = this.$route.query.id;
    this.id = this.$route.query.id;
    
  }
};
</script>
<style>
.schedule_box .depictVertical {
  height: 300px;
  width: 700px;
  margin: 50px auto;
}



.schedule_box .bg {
  background-color: darkcyan;
}
/*工商注册图片样式*/

.schedule_box .psp {
  position: absolute;
  left: 34px;
  top: 154px;
}

.schedule_box .bank {
  position: absolute;
  left: 34px;
  top: 405px;
}
.schedule_box .Tax {
  position: absolute;
  left: 34px;
  top: 280px;
}
.schedule_box .anniu {
  width: 300px;
  position: absolute;
  left: 13px;
  top: 124px;
}
.schedule_box .gbc {
  color: red;
  background-color: #409eff;
  width: 400px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.schedule_box .showcompanyname {
  position: absolute;
  left: 34px;
  top: 49px;
}
.schedule_box .havecolor {
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #0099ff;
  margin-top: 10px;
  color: white;
  border-radius: 5px;
}
.schedule_box .newhavecolor {
  color: #ff0000;
  font-size: 14px;
}
.schedule_box .hemingTime {
  position: absolute;
  top: 3px;

  left: -49px;
}
.schedule_box .gongshangzhuceTime {
  left: -49px;
  position: absolute;
  top: 128px;
}
.schedule_box .yinhangkaihuwanchengTime {
  position: absolute;
  left: -49px;
  top: 254px;
}
.schedule_box .shuiwujieduanwanchengTime {
  position: absolute;
  left: -49px;
  top: 380px;
}
.schedule_box .imgsize {
  width: 85px;
  height: 76px;
}
.schedule_box .havepadding {
  padding-right: 92px;
  
}
.schedule_box .vb {
  margin-left: -25px !important;
  margin-right: 192px !important;
}
.schedule_box .el-col-4 {
    width: 19.66% !important;
}


.schedule_box .el-step__head.is-process ,
.schedule_box .el-step__title.is-process{
	    color: #c0c4cc !important;
	    border-color: #c0c4cc !important; 
	
}


</style>