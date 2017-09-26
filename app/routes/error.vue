<template>
    <div class="container error-page">
        <page_header></page_header>
        <h3>{{title}}</h3>
        <p>The page you're looking for is in another framework</p>
    </div>
</template>

<script>
    import page_header from '../assets/components/page_header.vue';
    export default {
        data: function () {
            return {}
        },
        components: {
            page_header
        },
    }
</script>

<style lang="css">

</style>
