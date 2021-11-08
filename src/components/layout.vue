 <template>
    <div>
        <el-menu
            :default-openeds="['3']"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            active-text-color="#ffd04b"
            background-color="#545c64"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <message />
                    </el-icon>音乐馆
                </template>
                    <el-menu-item index="1-1">Option 1</el-menu-item>
                    <el-menu-item index="1-2">Option 2</el-menu-item>
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                <el-sub-menu index="1-4">
                    <template #title>Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <icon-menu />
                    </el-icon>我的音乐
                </template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="2-1">Option 1</el-menu-item>
                    <el-menu-item index="2-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="2-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>分类歌单
                </template>
                <el-menu-item-group>
                    <template #title>Group 1</template>
                    <el-menu-item index="3-1">Option 1</el-menu-item>
                    <el-menu-item index="3-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="3-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="3-4">
                    <template #title>Option 4</template>
                    <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import { Message, Menu, Setting } from '@element-plus/icons'
</script>
<style scoped>
</style>