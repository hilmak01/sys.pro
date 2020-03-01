<template>
    <div class="message" v-if="message" :class="classList">
        <span class="left" v-if="errors"><i class="fa fa-exclamation-triangle"></i></span>
        <span class="center" v-if="message">{{ message }}</span>
        <span class="right" v-if="errors" @click="closeAlert"><i class="fa fa-times"></i></span>
    </div>
</template>
<script>
    export default {
        name: "alert-box",
        props: ['message', 'errors'],
        data() {
            return {}
        },
        computed: {
            classList() {
                if (this.errors) return 'errors';
                if (this.message) return 'success';
                return 'hidden';
            }
        },
        methods: {
            closeAlert() {
                this.errors = {};
                this.message = null;
            }
        }

    }

</script>

<style lang="scss">
    .message {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;

        &.errors {
            background: pink;
        }

        &.success {
            background: lightgreen;
        }

        .center {
            padding: 0 0.5rem;
        }


    }

</style>
