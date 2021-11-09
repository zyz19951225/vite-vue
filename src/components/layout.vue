 <template>
    <div>
        <el-menu
            :default-openeds="['3']"
            class="el-menu-vertical-demo"
            default-active="2"
            active-text-color="#ffd04b"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <message />
                    </el-icon>音乐馆
                </template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <IconMenu />
                    </el-icon>我的音乐
                </template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>分类歌单
                </template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import { Message, Menu as IconMenu, Setting } from '@element-plus/icons'
 </script>
<style scoped>
.el-menu-vertical-demo {
    height: 100%;
}
</style>