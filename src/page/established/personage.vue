<template>
	<div>
		<banner></banner>
		<div class="persMain">
			<el-row class="mtT25" :gutter="20">
				<!--数据为空判断-->
				<el-col :span="16" v-if="showdiv">
					<el-card  class="box-card havewidth newling">
			<div class="sssss">				{{kong}}</div>
						</el-card>
            
            <el-button class="mb45" type="primary" size="medium" @click="SetUp" >设立新公司</el-button>						
				</el-col>
				
				<el-col :span="16" v-else class="xunhuanBox">
					<div class="xunhuan mb15"  v-for="(value, index) in newres" :key="index" >
            
						<el-card class="box-card havewidth">
              
							<div slot="header" class="clearfix">
								<h3 class="T_bold">{{newres[index].checkCompanyName}}</h3>
							</div>
							<div class="pl">
								<i class="el-icon-info xin" v-if="value.examineStatus==1003"></i>
								<i class="el-icon-info xxin"  v-if="value.examineStatus==1004"></i>
								<p class="nj">{{newres[index].examineStatusStr}} 
                  <span  v-if="value.examineStatus!=1005">,</span>
                  <span
								@click="step(newres[index].id,newres[index].examineStatus)"
								 class="ch">{{newres[index].examineStr}}</span></p>
							</div>	
						</el-card>
					</div>			
            <el-button class="mb45" type="primary" size="medium" @click="SetUp" >设立新公司</el-button>		
				</el-col>
				<!--左边列表渲染结束-->	  
				<el-col :span="8">
					<el-card class="box-card have">
						<div slot="header" class="clearfix">
							<span>公告</span>
							<el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
						</div>
						<div class="text item newcard">
							<p>【重要】9月27日，捷园宝客户端全新上线</p>
							<p>【升级】9月30日，设立系统改版升级通知</p>
							<p>【重要】关于井冈山政府合作红头文件</p>
							<p>【重要】9月27日，捷园宝客户端全新上线</p>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import banner from "../../components/establish/banner";
import { person } from "../../api/sheli.js";
export default {
  data() {
    return {
      newres: "",
      msg: "", //显示消息
      zhuangtai: "请尽快", // 设立申请审核中
      qing: "请", //设立申请有误
      kong: "暂未设立公司",
      showdiv: false, //模块隐藏
      logo: false,
      tlogo: false
    };
  },
  computed: {},
  methods: {
    SetUp(v) {
      this.$router.push({
        path: "/myCenter"
      });
    },
    step(v, status) {
      console.log(status);
      if (status == 1001) {
        this.$router.push({
          path: "/myCenter",
          query: {
            id: v,
        stat:1001
          }
        });
      } else {
        if (status == 1003) {
          console.log(1213212);
          
          this.$router.push({
            path: "/myCenter",
            query: {
              id: v,
              stat:1003
            }
          });
        } else {
          this.$router.push({
            path: "/schedule",
            query: {
              id: v
            }
          });
        }
      }
    }
  },
  components: {
    banner
  },
  async created() {
    //页面刷新时进行加载
    person()
      .then(res => {
        if (res.state == 0) {
          if ((res.resultInfo.length != 0) | res.reultInfo) {
            //判断reultInfo不为空
            this.newres = res.resultInfo;
            //不为空进行判断
            //						console.log(this.newres.examineStatus)
            //						this.newres[0].examineStatus = 1004
            //						if(this.newres[0].examineStatus == 1001) { //设立申请审核中    请尽快寄送相关
            //							this.msg ="请尽快寄送相关资料" //进行拼接
            //						}
            if (this.newres[0].examineStatus == 1002) {
              //							this.msg = "查看进度" //设立中
            }
            if (this.newres[0].examineStatus == 1003) {
              //设立申请信息有误
              //							this.msg = "请重新提交"
              this.logo = true;
            }
            if (this.newres[0].examineStatus == 1004) {
              //设立完成
              //							this.msg = "查看设立信息"
              this.logo = true;
            }
          } else {
            //如果为空  渲染暂未设立公司
            //						this.newres = [];
            this.showdiv = true;
          }
        }
      })
      .catch(function() {
        //请求失败
      });
  }
};
</script>
<style scoped>
.el-card__body {
  line-height: 362px !important;
  text-align: center !important;
}
.persMain {
  width: 1200px;
  margin: auto;
}

.statusBar {
  height: 287px;
  padding: 55px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(121, 121, 121);
  border-radius: 0px;
}

.statusBar h3 {
  line-height: 72px;
}

.statusBar span {
  color: #0099ff;
}

.depict {
  border: 0 !important;
}

.statusBtn {
  height: 60px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  font-size: 14px;
  border-radius: 5px;
  background-color: #0099ff;
  color: white;
  margin-top: 8px;
}

.news {
  height: 233px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(121, 121, 121, 1);
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  overflow: hidden;
  padding: 15px;
}

.newsConter {
  line-height: 25px;
}

.newsBtn {
  border: 0;
  background: inherit;
  margin-top: 25px;
  color: #0099ff;
  position: absolute;
  left: 1108px;
  top: 3px;
}

.xr {
  width: 300px;
  height: 150px;
  background-color: darkkhaki;
}

.newstyle {
  height: 400px;
  background-color: darkgreen;
}
/*公告样式开始*/

.newcard {
  height: 160px;
  padding-top: 16px;
}

.newcard p {
  margin-bottom: 24px;
}

.el-card__body {
  height: 300px;
}

.havewidth {
  height: 360px;
}

.csle {
  color: #0099ff;
  margin-top: 30px;
}
.xin {
  color: red;
  position: absolute;
  left: -19px;
  top: 0px;
  margin-right: 10px;
}
.xxin {
  color: #0099ff;
  position: absolute;
  left: -19px;
  top: 0px;
}

.pl {
  position: relative;
  left: 14px;
}
.nj {
  margin-left: 7px;
}
.ch {
  color: #0099ff;
}
.sssss {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
}
</style>