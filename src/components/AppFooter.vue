<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    methods: {
        removeCookie() {
            this.$cookies.remove('isFirst')
            location.reload()
            
        },
    }
}
</script>
<template>
    <div>
        <h5><RouterLink to="/">LuxuryRent</RouterLink></h5>
        <button v-if="this.$route.query.dev" type="button" class="btn btn-primary" @click="this.removeCookie">Очистить Cookie</button>
    </div>
    <nav>
        <h5>Навигация</h5>
        <ul>
            <li><RouterLink to="/">Главная</RouterLink></li>
            <li><RouterLink to="/auto-available">Доступные автомобили</RouterLink></li>
        </ul>
    </nav>
</template>

<style>
    #app > footer > div {
        display: flex;
        flex-wrap: wrap;
    }
    
    #app > footer > div > * {
        margin: 0 5%;
    }

    #app > footer nav > ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
</style>