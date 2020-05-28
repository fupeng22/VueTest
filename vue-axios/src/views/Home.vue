<template>
    <div class="home">
        <h1>{{globalName}}</h1>
        <div>
            <button @click="changeStatus">更改状态</button>
        </div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <h1>{{ msg }}</h1>

        <h3>{{$common.name}}</h3>
        <p>{{myAge}}</p>

    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        computed: {
            // 从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
            globalName: function () {
                return this.$store.state.name;
            },
            myAge: function () {
                return this.$common.getAge(1994);
            }
        },
        methods:{
            // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation;你不能直接调用一个 mutation handler,要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
            changeStatus: function () {
                this.$store.commit('setName',{
                    name: '阿猫阿狗'
                });
            }
        }
    }
</script>