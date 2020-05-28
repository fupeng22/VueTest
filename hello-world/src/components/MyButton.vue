<template>
    <button @click="count++">You clicked me {{ count }} times</button>
</template>

<script>
    export default {
        name: "MyButton",
        data: () => ({
            count: 0
        })
    }
</script>

<style scoped>

</style>