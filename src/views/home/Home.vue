<template>
    <div class="main">
        <roll-notification/>
        <el-skeleton :loading="loading" animated>
            <template #template>
                <el-skeleton-item
                    variant="image"
                    style="height: 400px"
                />
            </template>
            <template #default>
                <el-carousel height="400px">
                    <el-carousel-item v-for="carousel in carouselList" :key="carousel.id">
                        <a :href="carousel.link"><el-image :src="carousel.img" class="carousel"/></a>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </el-skeleton>
        <el-row class="board">
            <Board title="通知" :data="notificationList" target="notification" :loading="loading"/>
            <Board title="新闻" :data="newsList" target="news" :loading="loading"/>
        </el-row>
    </div>
</template>

<script setup>
import Board from "@/views/home/Board.vue";
import RollNotification from "@/views/home/RollNotification.vue";
import {computed, inject, onMounted, ref} from "vue";

const $api = inject('$api');

// 存储轮播图信息
const carouselList = ref();

// 获取轮播图信息
async function getCarouselList() {
    const result = await $api.home.requestCarouselList();
    if (result.result === "1") {
        carouselList.value = result.data;
    } else {
        ElMessage({
            message: result.message || '获取轮播图信息失败，可刷新重试',
            type: 'warning'
        });
    }
}

// 存储通知信息
const notificationList = ref();
// 获取通知信息
async function getNotificationList() {
    const result = await $api.home.requestNotificationList();
    if (result.result === "1") {
        notificationList.value = result.data;
    } else {
        ElMessage({
            message: result.message || '获取通知信息失败，可刷新重试',
            type: 'warning'
        });
    }
}

// 存储新闻数据
const newsList = ref();
// 获取新闻数据
async function getNewsList() {
    const result = await $api.home.requestNewsList();
    if (result.result === "1") {
        newsList.value = result.data;
    } else {
        ElMessage({
            message: result.message || '获取新闻数据失败，可刷新重试',
            type: 'warning'
        });
    }
}
// 是否处于加载状态
const loading = computed(()=>!carouselList.value || !notificationList.value || !newsList.value);

onMounted(async ()=>{
    await getCarouselList();
    await getNotificationList();
    await getNewsList();
});
</script>

<style scoped>
.main {
    width: 70%;
    margin: 0 auto;
}

.board {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}

.carousel {
    height: 100%;
    width: 100%;
}
</style>