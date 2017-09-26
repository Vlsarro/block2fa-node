<template>
    <div class="container">
        <page_header></page_header>
        <div class="jumbotron">
            <p>This is home page</p>
        </div>
    </div>
</template>

<script>
    import page_header from '../assets/components/page_header.vue';
    export default {
        data: function () {
            return {
            }
        },
        components: {
            page_header
        },
    }
</script>

<style lang="css">

</style>
