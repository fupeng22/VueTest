<template>
    <li>{{dataList.text}}</li>
</template>

<script>
    export default {
        name: "MyList",
        // props是vue的一个特性，props 可以是数组或对象，用于接收来自父组件的数据
        props: ['dataList']
    }
</script>

<style scoped>

</style>