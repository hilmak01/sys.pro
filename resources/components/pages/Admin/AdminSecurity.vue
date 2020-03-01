<template>
    <div class="admin-page">
        <div class="">
            <div class="view">
                <datatable
                    :columns="permissions.columns"
                    :data="permissions.rows"
                ></datatable>
            </div>
            <div class="add">
                <form action="/security/admin/permissions">
                    <fieldset>
                        <legend>Permissions</legend>
                        <div class="">
                            <input type="text" />
                        </div>
                        <div>
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <form action="/security/admin/roles">
            <fieldset>
                <legend>Roles</legend>
                <div class="">
                    <input type="text" />
                </div>
                <div>
                    <button type="submit" class="btn">Submit</button>
                </div>
            </fieldset>
        </form>
        <form action="/security/admin/groups">
            <fieldset>
                <legend>Groups</legend>
                <div class="">
                    <input type="text" />
                </div>
                <div>
                    <button type="submit" class="btn">Submit</button>
                </div>
            </fieldset>
        </form>
        <form action="/security/admin/groups">
            <fieldset>
                <legend>Users</legend>
                <div class="">
                    <input type="text" />
                </div>
                <div>
                    <button type="submit" class="btn">Submit</button>
                </div>
            </fieldset>
        </form>
        <form action="/security/admin/groups">
            <fieldset>
                <legend>...</legend>
                <div class="">
                    <input type="text" />
                </div>
                <div>
                    <button type="submit" class="btn">Submit</button>
                </div>
            </fieldset>
        </form>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "admin-security",
    data() {
        return {};
    },
    methods: {
        // this.$store.dispatch("getPermissions");
        ...mapActions(["getPermissions"])
    },
    computed: {
        ...mapGetters(["Permissions"]),
        permissions() {
            return {
                columns: [
                    { label: "id", field: "id" },
                    { label: "Name", field: "name" },
                    { interpolate: true }
                ],
                rows: this.Permissions
            };
        }
    }
};
</script>
<style>
.admin-page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
}

@media screen and (max-width: 768px) {
    .admin-page {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 480px) {
    .admin-page {
        grid-template-columns: 1fr;
    }
}
</style>
