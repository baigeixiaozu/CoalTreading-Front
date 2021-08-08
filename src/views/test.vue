<template>
</template>

<script>
export default {
    created(){
        console.log(this.$store)
        this.$store.commit("set_token", 456);
    }
}
</script>

<style>
</style>
