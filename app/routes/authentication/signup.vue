<template>
    <div class="container">
        <page-header :current-tab=currentTab></page-header>
        <h4>Signing</h4>
        <p>Please sign the challenge in the box below using the private key of your Ethereum address you want to
            identify yourself with. Copy the text, open your wallet, choose your Ethereum address,
            select the sign message function, paste the text into the message input and sign.
            After it is done, copy and paste the signature into the signature field below.
        </p>
        <pre>Static non-generated challenge string</pre>
        <form action="/signup" method="post">
            <input type="hidden" name="_csrf" :value="csrfToken">
            <div class="form-group">
                <label for="ethaddress">Ethereum address</label>
                <input class="form-control" name="ethaddress" id="ethaddress" type="text"
                       placeholder="Enter your ethereum address" />
            </div>
            <div class="form-group">
                <label for="ethaddress">Signature</label>
                <input class="form-control" name="signature" id="signature" type="text"
                       placeholder="Enter your signature" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" name="password" id="password" type="password"
                       placeholder="Enter desired password"/>
            </div>
            <input class="btn btn-success" type="submit" value="Sign up"/>
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
