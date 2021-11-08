<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store';
//初始基数
const count = ref(0) 
//通过vuex获取数据
const store = useStore()
const showCount = computed(() => {
  return store.getters['getCount']
})

const addCount = () => {
  store.commit('setCount', ++count.value)
}
//数据清零
const countlast = ()=>{
  store.commit('setCount', 0)
  count.value = 0
}
//输入框
const input=ref('')

</script>

<template>
  <h1>{{ showCount }}</h1>
  <el-row>
    <el-col :span='12'> <el-input v-model="input" placeholder="Please input" /></el-col>
    <el-col :span='12'>你好</el-col>
  </el-row>
 
  
  <button type="button" @click="addCount()">新增</button>
  <p>{{count}}</p>
  <el-button type="primary" @click="countlast()">归零</el-button>
  <p>
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
</style>
