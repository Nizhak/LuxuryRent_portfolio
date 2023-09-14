<script>
import { RouterLink } from 'vue-router';


</script>
<template>
    <h3><RouterLink to="/">LuxuryRent</RouterLink></h3>
    <nav>
        <ul>
            <li><RouterLink to="/">Главная</RouterLink></li>
            <li><RouterLink to="/auto-available">Авто</RouterLink></li>
        </ul>
    </nav>
</template>

<style lang="scss">
    #app > header > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 9px;
        padding-top: 5px;
    }

    #app > header > .container nav {
        width: 20%;
        @media (max-width: 769px) {
            width: 35%;
        }
    }
    #app > header > .container nav ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #app > header > .container nav a.router-link-active {
        text-decoration: underline;
    }

    #app > header > .container h3 {
        margin: 0;
    }
</style>