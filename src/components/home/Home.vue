<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img
            src="../../assets/logo.png"
            alt=""
          >
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col
          :span="8"
          class="col3"
        >
          恭喜上海前端43期月薪10万
          <a
            href="#"
            @click.prevent="logout"
          >退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 800
        })
        this.$router.push('/login')
      }).catch(() => {
        // 点击取消走catch
        this.$message({
          type: 'info',
          message: '取消退出',
          duration: 800
        })
      })
    }
  }
}
</script>

<style scoped lang='less'>
.el-header {
  background-color: #b3c1cd;
  padding: 0;
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .col3 {
    line-height: 60px;
    text-align: right;
    padding-right: 30px;
    a {
      color: #daa520;
      text-decoration: none;
    }
  }
}
.el-container {
  height: 100%;
  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: #eaeef1;
  }
}
</style>
