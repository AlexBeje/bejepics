<template>
  <div class="common-layout">
    <el-container>
      <el-header class="h-aut o">
        <BejePicsHeader />
      </el-header>
      <el-main><slot /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
