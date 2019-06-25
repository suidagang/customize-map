<template>
    <div id="multicheck">
       
    </div>
</template>
<style scoped type="text/css">
    .check-item {
        display: inline-block;
        padding-right: 14px;
        font-size: 14px;
    }
</style>
<script>
    export default {
        name: 'multicheck',
        props: {
            // source: {
            //     type: Array
            // },
            // busValue: {
            //     type: String
            // }
        },
        data() {
            return {
                ttVal: this.busValue
            }
        },
  
    }
</script>