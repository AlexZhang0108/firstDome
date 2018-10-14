<template>
  <div class="container">
  
    <banner></banner>
    <div class="mainConter">
      <p class="depict mtT25 mb15">设立申请</p>

      <el-steps :active="activeNum" simple class="mb15">
        <el-step title="法人信息" icon="el-icon-edit"></el-step>
        <el-step title="公司名称" icon="el-icon-tickets"></el-step>
        <el-step title="邮寄材料" icon="el-icon-message"></el-step>
      </el-steps>

  
      <information v-show="informationStatus" v-on:childByValue="childByValue"></information>
      <company v-show="companyStatus" v-on:companyBtn="companyBtn"></company>
      <OfflineData v-show="OfflineDataStatus"></OfflineData>


    </div>
  </div>
</template>

<script>
import banner from "../../components/establish/banner";
import information from "../../components/establish/information";
import company from "../../components/establish/company";
import OfflineData from "../../components/establish/OfflineData";

export default {
  name: "myCenter",
  created: function(params) {
    var id = this.$route.query.id;
    var stat = this.$route.query.stat;
    if (id) {
      
      if (stat == 1003) {
         this.activeNum = 0;
        this.informationStatus = true;
        this.companyStatus = false;
        this.OfflineDataStatus = false;
        
      } else {
       
        this.activeNum = 2;
        this.informationStatus = false;
        this.companyStatus = false;
        this.OfflineDataStatus = true;
      }
    } else {
      return;
    }
  },
  data() {
    return {
      activeNum: 0,
      name: "",
      informationStatus: true,
      companyStatus: false,
      OfflineDataStatus: false,
      lastBtn: false,
      nextBtn: true
    };
  },

  methods: {
    childByValue: function(childValue) {
      this.activeNum = 1;
      this.informationStatus = false;
      this.companyStatus = true;
      this.OfflineDataStatus = false;
    },
    companyBtn: function(companyBtn) {
      if (companyBtn == "last") {
        this.activeNum = 1;
        this.informationStatus = true;
        this.companyStatus = false;
        this.OfflineDataStatus = false;
      } else {
        this.activeNum = 2;
        this.informationStatus = false;
        this.companyStatus = false;
        this.OfflineDataStatus = true;
      }
    }
  },

  components: {
    banner,
    information,
    company,
    OfflineData
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  min-width: 1200px;
}
</style>
