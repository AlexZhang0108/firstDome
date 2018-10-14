<template>
 
    <div>
        <p class="offineTite mb15">请尽快将以下材料，快递至我司，工作人员会在收到资料后第一时间确认并为您办理公司设立业务！</p>
         <el-row>   
                    <el-col :span="24">
                  <ul class="MaterialList clearfix">
                    <li>法人身份证原件</li>
                    <li>法人身份证复印件（须有法人签字）</li>
                  
                    <li>签字材料模板  <a href="http://fileserver.jieshui8.com/file/download/a73902b5a72227fd2b182ba274c016f6/c0cb4845c56e352bedcfe4c6f8d50d96" download="签字模板"><span class="R pint">打印</span></a> </li>
                  </ul> 
                  </el-col>
          </el-row>
                <p class="mtT25">收件信息:</p>
                <el-row>
                    <el-col class="offineFoot" :span="24">
                        <p><span class="InfoBar">收件人：</span>上海普道财务咨询有限公司</p>
                        <p><span class="InfoBar">联系电话： </span>18647471642</p>
                        <p> <span class="InfoBar">收件地址： </span>上海市浦东新区盛荣路88弄(盛大天地源创谷)3号楼8层</p>
                    </el-col>
                </el-row>
        </div>
    
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.offineTite {
  color: #ff0000;
  font-size: 14px;
  text-align: left;
}
.grid-content {
  border: 1px solid #e8e8ee;
  line-height: 69px;
  text-align: center;
}
.bg-purple {
  display: inline-block;
  width: 69px;
}
.pint {
  font-family: "Arial Normal", "Arial";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  color: #e62827;
  display: inline-block;
  margin-right: 50px;
  border: 0;
  background: inherit;
  cursor: pointer;
}
.offineFoot {
  margin: 15px 0;
  background-color: rgba(242, 242, 242, 1);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  padding: 25px;
}
.offineFoot p {
  line-height: 29px;
}
.InfoBar {
  width: 100px;
  display: inline-block;
}
.MaterialList {
  float: left;
  border-top: 1px solid #e8e8e8;
  width: 100%;
  font-size: 14px;
  color: #606266;
}
.MaterialList li {
  line-height: 50px;
  border-bottom: 1px solid #e8e8e8;
}
</style>