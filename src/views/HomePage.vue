<script>
import axios from "axios"
import CardAuto from "@/components/CardAuto.vue"
import Alert from "@/components/alert.vue"


export default {
	components: {
		CardAuto,
        Alert,
	},
    data () {
        return {
            autos: []
        }
    },
    mounted() {
        axios
        .get('/all')
        .then(response => this.autos = response.data.splice(0, 4))
        .catch(error => { if (process.env.Node_ENV == "development")  console.log(error)});
    },
    methods: {
        isEmpty(obj) {
        for (let key in obj) {
            // если тело цикла начнет выполняться - значит в объекте есть свойства
            return false;
        }
        return true;
        }
    }
};
</script>


<template>
    <Alert/>
    <div class="home">
       <h1>Аренда крутых авто</h1>
       <img src="/lamborgini.png" alt="Auto">
    </div>
    <div class="preview">
        <h2>Доступные автомобили</h2>
        <div v-if="!isEmpty(autos)" class="available">
            <CardAuto v-for="auto in autos" :id="auto._id" :price="auto.price" :src="auto.src" :title="auto.title" :counted="auto.counted" />
        </div> 
        <div class="d-flex justify-content-center p-3">
            <RouterLink v-if="!isEmpty(autos)" to="/auto-available" class="btn btn-primary">Посмотреть ещё</RouterLink>
            <h2 v-else>Нет в наличии</h2>
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


<style lang="scss">
    #app > header {
        position: fixed;
        width: 100%;
    }
    #app > main > .home {
        background-size: contain;
        background-position: center center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100vh;

        img {
            max-height: 100%;
            max-width: 50%;

        }

        @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
            h1 {
                margin: 3rem 0 0.5rem;
                text-align: center;
                width: 100%;
            }
            img {
                height: auto;
                width: auto;
                max-height: 95%;
                max-width: 100%;
            }
        }
    }
    #app > main > .preview > .available {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }
</style>