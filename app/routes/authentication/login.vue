<template>
    <div class="container">
        <page_header></page_header>
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
