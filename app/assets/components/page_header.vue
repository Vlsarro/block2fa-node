<template>
    <div class="header">
        <ul class="nav nav-pills pull-right">
            <li><a href="/login">Log In</a></li>
            <li><a href="/signup">Sign Up</a></li>
        </ul>
        <h3><a class="text-muted" style="text-decoration: none;" href="/">BLOCK2FA-NODE</a></h3>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        name: 'page_header'
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