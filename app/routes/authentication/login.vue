<template>
    <div class="container">
        <page-header :current-tab=currentTab></page-header>
        <h3>Login page ({{message}})</h3>
        <form action="/login" method="post">
            <input type="hidden" name="_csrf" :value="csrfToken">
            <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" name="username" id="username" type="text" placeholder="Your username" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" name="password" id="password" type="password" placeholder="Your password"/>
            </div>
            <input class="btn btn-success" type="submit" value="Log In"/>
        </form>
    </div>
</template>

<script>
    import pageHeader from '../assets/components/page_header.vue';
    export default {
        data: function () {
            return {
            }
        },
        components: {
            pageHeader
        },
    }
</script>

<style lang="css">

</style>
