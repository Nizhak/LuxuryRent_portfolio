<script>
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
    <div>
        <h5><RouterLink to="/">LuxuryRent</RouterLink></h5>
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