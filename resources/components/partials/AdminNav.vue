<template>
    <nav>
        <ul class="list-unstyled">
            <li>
                <a href="#" @click="toggleClasses('.sidenav', 'mini')">
                    <i class="fa fa-bars"></i> ###
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: "admin-nav",
        props: [],
        data() {
            return {};
        },
        methods: {
            toggleClasses(elem, classes) {
                console.log($(elem, document), classes);
                $(elem).toggleClass(classes);
            }
        }
    }

</script>
<style lang="scss" scoped>
    nav {
        min-height: 50px;
        width: auto;
    }

</style>
