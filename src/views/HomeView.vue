<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">

        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
          :default-active="$route.path" text-color="#fff" :collapse="isCollapse" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
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
            <el-icon>
              <setting />
            </el-icon>
            <span>积云官网</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div style="display: flex;justify-content: space-between;align-items: center; width: 170px;">
            <el-icon size="20" @click="isCollapse = !isCollapse" v-if="isCollapse">
              <Expand />
            </el-icon>
            <el-icon size="20" @click="isCollapse = !isCollapse" v-if="!isCollapse">
              <Fold />
            </el-icon>

            <el-breadcrumb separator="/">
              <el-breadcrumb-item >
                <a href="/">商品菜单</a>
              </el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{ item }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="display: flex;justify-content: space-between;align-items: center; width: 100px;">

            <el-icon @click="handleFullscreen()">
              <FullScreen />
            </el-icon>

            <el-dropdown>
              <span style="text-align: center;">
                用户信息
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>1</el-dropdown-item>
                  <el-dropdown-item>2</el-dropdown-item>
                  <el-dropdown-item>3</el-dropdown-item>
                  <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
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
import { useRoute } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
const handleFullscreen = () => {
  toggle()
}
// const arr = ref([])
const route = useRoute()
console.log(route.meta);

import { Expand, Fold, Location, Document, Menu as IconMenu, Setting, FullScreen } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
const isCollapse = ref(false)

</script>

<style scoped>
.el-aside {
  background-color: #D3DCE6;
  height: 100vh;
  transition: all 0.5s ease;
}

.el-header {
  background-color: #B3C0D1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.el-main {
  background-color: #E9EEF3;
  height: 90vh;
}
</style>