<script>
import axios from "axios"
import CardAuto from "@/components/CardAuto.vue"


export default {
	components: {
		CardAuto,
	},
    data () {
        return {
            autos: {}
        }
    },
    mounted() {
        axios
        .get('/all')
        .then(response => this.autos = response.data.splice(0, 4))
        .catch(error => { if (process.env.Node_ENV == "development")  console.log(error)});
    }
};
</script>


<template>
    <div class="home">
       <h1>Аренда крутых авто</h1>
       <img src="/lamborgini.png" alt="Auto">
    </div>
    <div class="preview">
        <h2>Доступные автомобили</h2>
        <div class="available">
            <CardAuto v-for="auto in autos" :id="auto._id" :price="auto.price" :src="auto.src" :title="auto.title" :counted="auto.counted" />
        </div> 
        <div class="d-flex justify-content-center p-3">
            <RouterLink to="/auto-available" class="btn btn-primary">Посмотреть ещё</RouterLink>
        </div>
    </div>
    <div class="about">
        <h2>О нас</h2>
        <p>LuxuryRent — компания с 10-летним стажем, специализирующаяся на аренде премиальных автомобилей. Мы предлагаем широкий выбор высококлассных автомобилей для аренды, чтобы удовлетворить самые взыскательные потребности наших клиентов.</p>
        <h4>Наши услуги:</h4>
        <ul>
            <li>Спортивные автомобили</li>
            <li>Роскошные седаны</li>
            <li>Престижные внедорожники</li>
            <li>Уникальные автомобили</li>
        </ul>
        <h4>Основные преимущества:</h4>
        <ol>
            <li>Богатый выбор автомобилей</li>
            <li>Качество и надежность</li>
            <li>Индивидуальный подход</li>
            <li>Профессионализм и опытный персонал</li>
        </ol>
        <p>LuxuryRent — ваш идеальный партнер в аренде премиальных автомобилей. Путешествуйте с комфортом и стилем, наслаждайтесь роскошью и уверенностью на дороге с нами!</p>
    </div>
</template>


<style>
    #app > main > .home {
        background-size: contain;
        background-position: center center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: calc(100vh - (1.3rem + .6vw + 14px));
    }
    #app > main .home img {
        height: 100%;
        width: auto;

    }
    #app > main > .preview > .available {
        display: flex;
        justify-content: space-between;
    }
</style>