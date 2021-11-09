<template>
    <el-container class="container">
        <el-aside width="200px" class="asside"><Layout/></el-aside>
        <el-container>
            <el-header class="header" >Header</el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Layout from '../components/layout.vue'
</script>
<style lang="scss" scoped>
.container {
    height: 100%;
    .asside{
        background:rgb(214, 181, 181) ;
    }
    .header{
        background-color: aqua;
    }
    .main{
        background-color: beige;
    }

}
</style>