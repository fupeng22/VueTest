<template>
    <table>
        <slot name="headers">
            <tr>
                <th v-for="h in headers" :key="h">{{h}}</th>
            </tr>
        </slot>
        <!--这里的插槽prop绑定了当前的数据   :items="i"  -->
        <slot name="items" v-for="i in items" :items="i">
            <tr :key="i[itemKey]" :title="i[itemKey]">
                <td v-for="j in i" :key="j">{{j}}</td>
            </tr>
        </slot>
    </table>
</template>

<script>
    export default {
        name: "MyTable",
        // 自定义属性
        props: ["headers","items","itemKey"],
    }
</script>

<style scoped>
    table{
        width: 200px;
        margin: 25px auto;
        border-collapse: collapse;
        border: 1px solid #ddd;
    }
    table tr,table td,table th{
        border-collapse: collapse;
        border: 1px solid #ddd;
        padding: 8px 10px;
    }
</style>