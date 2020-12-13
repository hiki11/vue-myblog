<template>
  <!--卡片文章-->
  <!--list-style: none是去除li前面的黑点-->
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto; list-style: none">
    <li style="width: 800px;margin-left: 80px">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgs" :key="item">
          <!--style="height: 600px;"-->
          <el-image
            :src="item"
            :fit="fill"></el-image>
        </el-carousel-item>
      </el-carousel>
    </li>
    <li v-for="i in count" class="infinite-list-item">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>卡片名称{{i}}</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </li>
  </ul>

</template>

<script>
  /*导入图片*/
  import homeImg1 from "../assets/indexImgs/1.png";
  import homeImg2 from "../assets/indexImgs/2.png";
  import homeImg3 from "../assets/indexImgs/3.jpg";
  import homeImg4 from "../assets/indexImgs/4.png";

  export default {
    name: "Index",
    methods: {
      load() {
        if (this.count < 6) {
          this.count += 2
        }
      },
    },
    data() {
      return {
        count: 0,
        imgs: [homeImg1, homeImg2, homeImg3, homeImg4],
      }
    },
  }
</script>

<style scoped>
  /* 轮播图样式 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
