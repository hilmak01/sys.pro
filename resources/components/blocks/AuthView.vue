<template>
    <transition name="fade">
        <form method="post" :action="action" @submit.prevent="checkLogin">
            <alert-box :message="message" :errors="errors"></alert-box>
            <fieldset>
                <div class="form-group" v-if="authType == 'register'">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" placeholder="Full Name" aria-describedby="name"
                        v-model="name" @blur="clearError" />
                    <small id="nameError" class="text-muted errors"
                        v-if="errors && errors.name">{{ errors.name.join("; ") }}</small>
                </div>
                <div class="form-group">
                    <label for="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email Address" aria-describedby="email"
                        v-model="email" @blur="clearError" />
                    <small id="emailError" class="text-muted errors"
                        v-if="errors && errors.email">{{ errors.email.join("; ") }}</small>
                </div>
                <div class="form-group" v-if="authType != 'email'">
                    <label for=" password"></label>
                    <input type="password" name="password" id="password"
                        :placeholder="authType == 'login' ? 'Password' : 'Strong Password'" aria-describedby="password"
                        v-model="password" @blur="clearError" />
                    <small id="passwordError" class="text-muted errors"
                        v-if="errors && errors.password">{{ errors.password.join("; ") }}</small>
                </div>
                <div class="form-group" v-if="authType == 'register'">
                    <label for="password_confirmation"></label>
                    <input type="password" name="password_confirmation" id="password_confirmation"
                        placeholder="Confirm Password" aria-describedby="password_confirmation"
                        v-model="password_confirmation" />
                    <small id="password_confirmationError" class="text-muted errors"
                        v-if="errors && errors.password_confirmation">{{ errors.password_confirmation.join("; ") }}</small>
                </div>
                <div class="form-group" v-if="authType == 'login'">
                    <label for="password_confirmation"></label>
                    <input type="checkbox" name="remember" id="remember" aria-describedby="remember"
                        v-model="remember" />
                    Remember me
                    <small id="rememberError" class="text-muted errors"
                        v-if="errors && errors.remember">{{ errors.remember.join("; ") }}</small>
                </div>
                <div class="d-flex space-between">
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                    <span v-if="authType == 'login'">
                        <a href="#" @click.prevent="doAuth('register')">Register</a>
                        <span> | </span>
                        <a href="#" @click.prevent="doAuth('email')">Forgot?</a>
                    </span>
                    <a href="#" v-if="authType != 'login'" @click.prevent="doAuth('login')">Login</a>
                </div>
            </fieldset>
        </form>
    </transition>
</template>
<script>
    import {
        mapActions
    } from "vuex";
    export default {
        name: "auth-view",
        props: ["type"],
        data() {
            return {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                remember: false,
                message: "",
                errors: [],
                authType: this.type
            };
        },
        computed: {
            action() {
                if (this.authType != 'email')
                    return `/security/${this.authType}`;
                return `/security/password/${this.authType}`;
            }
        },
        methods: {
            clearError(elem) {
                let errorField = $(elem.target)
                    .next(".errors")
                    .attr("id");
                if (!errorField) return;

                errorField = errorField.replace(/Error/g, '');
                if (!this.errors[errorField]) return;

                this.errors[errorField] = null;
                console.log(this.errors);
            },
            checkLogin(form) {
                let self = this,
                    formResult = this.$store.dispatch("postLogin", form);
                self.errors = [];
                formResult
                    .then(res => window.location.reload())
                    .catch(err => {
                        let errRes = err.response.data;
                        self.message = errRes.message;
                        self.errors = errRes.errors || {};
                    });
            },
            doAuth(type) {
                this.errors = [];
                this.message = null;
                this.authType = type;
            },
            ...mapActions(["postLogin"])
        }
    };

</script>
