<template>
    <ul class="fa-ul sidenav">
        <li class="list-item">
            <a href="/security/admin/" class="item-link">
                <i class="fa fa-lg fa-li fa-dashboard"></i>
                <span class="item">Dashboard</span>
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "side-nav",
        props: [],
        data() {
            return {}
        },
        methods: {

        }
    }

</script>
<style lang="scss">
    .sidenav {
        transition: 0.5s all;
        max-width: 100px;

        .list-item {
            padding: 0.25rem 0.5rem;

            .item-link {
                display: flex;
                align-items: center;
                align-content: center;
                color: white;
            }

            .item {}
        }

        &.mini {
            .list-item {
                .item {
                    display: none;
                }
            }
        }
    }

</style>
