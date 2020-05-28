<template>
<div id="div_layout" >
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%',background:'#fff',padding:'0' }">
      <div class="logo" />
      <a-menu
        theme="white"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          文档
        </a-menu-item>
        <a-menu-item key="2">
          我的工作站
        </a-menu-item>
        <a-menu-item key="3">
          业务工作流
        </a-menu-item>
        <a-menu-item key="4">
          人事管理
        </a-menu-item>
        <a-menu-item key="5">
          组织管理
        </a-menu-item>
        <a-menu-item key="6">
          个人报销
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout  :style="{ padding: '0 0px', marginTop: '64px' }">
      <a-layout-sider  width="200" :style="{ background:'white',overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"  >
          <a-menu mode="inline" :default-selected-keys="[]" theme="white">
            <a-menu-item key="1">
            <a-icon type="user" />
            <span class="nav-text">新建申请</span>
            </a-menu-item>
            <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span class="nav-text">我的草稿</span>
            </a-menu-item>
            <a-menu-item key="3">
            <a-icon type="upload" />
            <span class="nav-text">我的待批</span>
            </a-menu-item>
            <a-menu-item key="4">
            <a-icon type="bar-chart" />
            <span class="nav-text">待我回复</span>
            </a-menu-item>
            <a-menu-item key="5">
            <a-icon type="cloud-o" />
            <span class="nav-text">待我确认</span>
            </a-menu-item>
            <a-menu-item key="6">
            <a-icon type="appstore-o" />
            <span class="nav-text">我已处理</span>
            </a-menu-item>
            <a-menu-item key="7">
            <a-icon type="team" />
            <span class="nav-text">取引相关数据查询</span>
            </a-menu-item>
        </a-menu>
        <!--
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :style="{ height: '100%', borderRight: 0 }"
        >

          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" />我的申请</span>
            <a-menu-item key="1">
              异常确认
            </a-menu-item>
            <a-menu-item key="2">
              加班申请
            </a-menu-item>
            <a-menu-item key="3">
              休假申请
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="sub2">
            <a-icon type="shop" />
            <span class="nav-text">考勤提交</span>
            </a-menu-item>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="notification" />数据查询</span>
            <a-menu-item key="5">
              考勤查询
            </a-menu-item>
            <a-menu-item key="6">
              有薪休假查询(中方)
            </a-menu-item>
            <a-menu-item key="7">
              有薪休假查询(外方)
            </a-menu-item>
            <a-menu-item key="8">
              有薪休假详细查询(中方)
            </a-menu-item>
            <a-menu-item key="9">
              有薪休假详细查询(外方)
            </a-menu-item>
            <a-menu-item key="10">
              异常查询
            </a-menu-item>
            <a-menu-item key="11">
              批量生成休假单查询
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="notification" />待我审批</span>
            <a-menu-item key="12">
              异常审批
            </a-menu-item>
            <a-menu-item key="13">
              加班审批
            </a-menu-item>
            <a-menu-item key="14">
              休假审批
            </a-menu-item>
            
          </a-sub-menu>
          <a-menu-item key="sub5">
            <a-icon type="shop" />
            <span class="nav-text">我已审批</span>
            </a-menu-item>
            <a-menu-item key="sub6">
            <a-icon type="shop" />
            <span class="nav-text">主数据管理</span>
            </a-menu-item>
            <a-menu-item key="sub7">
            <a-icon type="shop" />
            <span class="nav-text">考勤数据未导入</span>
            </a-menu-item>
            <a-menu-item key="sub8">
            <a-icon type="shop" />
            <span class="nav-text">薪资查询</span>
            </a-menu-item>
        </a-menu>
        -->
      </a-layout-sider>
      <a-layout style="padding: 0 20px 20px;marginLeft:200px" >
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '800px' }"
        >
          
          <Content/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  </div>
</template>
<script>

import Content from '@/components/Content.vue'

export default {
    name:"layout",
    components: {
    Content
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 15%;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

#div_layout {
  text-align: left;
}
</style>
