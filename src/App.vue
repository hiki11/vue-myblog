<template>
  <div id="app">
    <el-container>
      <!-- 头部导航栏 -->
      <!--background-color="#545c64"-->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect">
          <el-menu-item index="1">主页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">写文章</el-menu-item>
          <el-col :span="1" :offset="7">
            <el-button style="margin: 0px 0px 0px 0px" type="primary" size="mini">写文章</el-button>
          </el-col>
          <el-col :span="2.5" :offset="12">
            <el-button icon="el-icon-d-arrow-left" circle size="small"></el-button>
            <el-button icon="el-icon-video-play" circle size="small"></el-button>
            <el-button icon="el-icon-d-arrow-right" circle size="small"></el-button>
          </el-col>
        </el-menu>
      </el-header>
      <!-- 主体 -->
      <el-container>
        <!--侧边栏-->
        <el-aside width="200px">
          <el-row class="tac">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-aside>
        <el-container>
          <!--主题-->
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }, handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/');
            break;
          case '3':
            this.$router.push('/editor');
            break;
        }
      },
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        drawer: false,
      };
    },
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 720px;
    margin-left: 120px;
    margin-bottom: 20px;
  }
</style>
