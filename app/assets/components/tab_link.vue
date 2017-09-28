<template>
    <li v-bind:class="{ active: currentTab === link }">
        <a :href=link>{{ linkName }}</a>
    </li>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: ['link', 'linkName', 'currentTab'],
        name: 'tab-link'
    }
</script>

<style lang="css">

</style>