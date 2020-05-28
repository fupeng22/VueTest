<template>
    <div>
        <a-layout>
            <a-layout-header>
                <h1 style="color: #fff;">个人主页
                    <a-button type="primary" style="float: right;margin-top: 15px;"><router-link to="/">Home</router-link></a-button>
                </h1>
            </a-layout-header>
            <a-layout-content>
                <a-row>
                    <a-col :span="12" :offset="6">
                        <img src="../assets/bg.jpg"/>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-footer style="background-image: linear-gradient(-90deg, rgb(230, 100, 101), rgb(179, 154, 228));"></a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "UserHome",
        data: () => ({
            likes: 0,
            dislikes: 0,
            action: null,
            moment
        }),
        methods: {
            like() {
                this.likes = 1;
                this.dislikes = 0;
                this.action = 'liked';
            },
            dislike() {
                this.likes = 0;
                this.dislikes = 1;
                this.action = 'disliked';
            },
        },
    }
</script>

<style scoped>

</style>