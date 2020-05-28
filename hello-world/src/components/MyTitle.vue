<template>
<div>
    <h3>{{blog.title}}</h3>
    <!--$emit('enlarge-text') 自定义事件，click的时候触发父组件的enlarge-text事件，下同-->
    <button v-on:click="$emit('enlarge-text',scale)">放大</button>
    <button v-on:click="$emit('shrink-text',scale)">缩小</button>
    <p>{{blog.content}}</p>
    </div>
</template>

<script>
    export default {
        name: "MyTitle",
        props: ['blog'],
        data:()=>({
            scale:0.1
        })
    }
</script>

<style scoped>

</style>