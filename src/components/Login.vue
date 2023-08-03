<template>
    login
</template>
<script>
import { users } from '../assets/user';

export default {
    data() {
        return {
            username: '',
            password: '',
            isLoggedIn: 'true'
        };
    },
    methods: {
        login() {
            const foundUser = users.find(user => user.username == this.username && user.password == this.password && user.isLoggedIn == true);
            if (foundUser) {
                alert('Login berhasil!');
                this.$router.push('/produk');
                // Anda dapat melakukan navigasi ke halaman lain jika login berhasil
            } else {
                alert('Username atau password salah');
            }
        },
    },
};
</script>

