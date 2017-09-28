<template>
    <div class="header">
        <ul class="nav nav-pills pull-right">
            <tab-link link="/login" link-name="Log In" :current-tab=currentTab></tab-link>
            <tab-link link="/signup" link-name="Sign Up" :current-tab=currentTab></tab-link>
        </ul>
        <h3><a class="text-muted" style="text-decoration: none;" href="/">BLOCK2FA-NODE</a></h3>
    </div>
</template>

<script>
    import tabLink from '../assets/components/tab_link.vue';
    export default {
        data: function () {
            return {}
        },
        props: {
            currentTab: {
                type: String,
                required: false,
                default: 'Nope'
            }
        },
        components: {
            tabLink
        },
        name: 'page-header'
    }
</script>

<style lang="css">
    /* Everything but the jumbotron gets side spacing for mobile first views */

    .header {
        padding-right: 15px;
        padding-left: 15px;
    }

    /* Custom page header */

    .header {
        border-bottom: 1px solid #e5e5e5;
    }

    .header h3 {
        padding-bottom: 19px;
        margin-top: 0;
        margin-bottom: 0;
        line-height: 40px;
    }
</style>