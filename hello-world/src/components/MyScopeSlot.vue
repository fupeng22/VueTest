<template>
    <div>
        <!--只需要绑定数据即可-->
        <slot :items_="items"></slot>
    </div>
</template>

<script>
    export default {
        name: "MyScopeSlot",
        data: () => ({
            items: ['White','Black','Pink']
        })
    }
</script>

<style scoped>

</style>