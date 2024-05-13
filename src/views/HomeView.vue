<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        :collapse="isCollapse"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>商品菜单</span>
          </template>
            <el-menu-item index="/arr">商品分类</el-menu-item>
            <el-menu-item index="/goods">商品列表</el-menu-item>
            <el-menu-item index="/index">商品管理</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/vite">
          <el-icon><icon-menu /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/list">
          <el-icon><setting /></el-icon>
          <span>积云官网</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <el-icon size="20" @click="isCollapse = !isCollapse" v-if="isCollapse"><Expand /></el-icon>
            <el-icon size="20" @click="isCollapse = !isCollapse" v-if="!isCollapse"><Fold /></el-icon>
          </div>
          <div>右边</div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {Expand,Fold,Location,Document,Menu as IconMenu,Setting} from '@element-plus/icons-vue'
const isCollapse = ref(false)

</script>

<style scoped>
.el-aside{
  background-color: #D3DCE6;
  height: 100vh;

}

.el-header{
  background-color: #B3C0D1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.el-main{
  background-color: #E9EEF3;
  height: 90vh;
}
</style>