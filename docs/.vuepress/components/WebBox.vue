<template>
    <div class="web-box">
        <div
            v-for="item in webList"
            :key="item.title"
            @click="goNewPage(item)"
        >{{ item.title }}</div>
    </div>
</template>
<script>
export default {
    name: 'WebBox',
    data() {
        return {
            webList: [{
                title: 'HTML',
                path: 'HTML/one.html'
            }, {
                title: 'CSS',
                path: 'CSS/'
            }, {
                title: 'JavaScript',
                path: 'JavaScript/'
            }]
        }
    },
    methods: {
        goNewPage(item) {
            window.location.href = item.path;
        }
    }
}
</script>
<style>
.web-box {
    width: 100%;
    display: flex;
}
.web-box >div {
    width: 200px;
    height: 100px;
    font-size: 18px;
    line-height: 100px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 6px 0 #e8edf7;
    margin-right: 28px;
    text-align: center;
    cursor: pointer;
}
.web-box >div:hover {
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 0 12px 0 #bdcded;
}
</style>
