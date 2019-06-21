<template>
    <div class="contact-us">
        第一页1113333
        <button @click="btn" class="btn">点击</button>
        <div>{{num}}</div>
    </div>
</template>
<script>
    import config from '@/config/config'
    export default {
        name: 'contactUs',
        components: {
           
        },
        data() {
            return {
                num:1
            }
        },
        created() {
           
        },
        mounted() {
        },
        methods: {
           btn(){
               this.num++;
           },
           getAjax(){
               this.$get(config.getTest).then(res => {
                    console.log('调用封装后的axios成功');
                    console.log(res)

                }).catch(err =>{
                    console.log(err,'错误了')
                });
           }
        }
    }
</script>

<style scoped>
    .contact-us{
        width: 100%;
        overflow: hidden;
    }
    .btn{
        color: orange;
    }
</style>

