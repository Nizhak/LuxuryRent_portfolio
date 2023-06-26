<script>
import axios from 'axios';

    export default {
        data() {
            return {
                data: {
                    auto: {  }
                },
            }
        },
        methods: {
            async watchAuto() {
                if (this.$route.query.id) {
                    console.log(this.$route.query.id);
                    const response = await axios.post("/myauto", {
                        id: this.$route.query.id
                    })
                    console.log(response);
                    this.data = response.data
                }
            }
        },
        mounted() {
            this.watchAuto()
        }
    }
</script>

<template>
    <div class="success">
        <h1>Успешно</h1>
    </div>
    <div>
        <h4 v-if="data.auto.title">Автомобиль "{{ data.auto.title }}" готов и ждет вас у нашего офиса. </h4>
        <h4 v-if="data.carNumber">Номер автомобиля "{{ data.carNumber }}"</h4>
    </div>
    <div class="img">
        <img v-if="data.auto.src" :src="data.auto.src" :alt="data.auto.title">
    </div>
    
</template>

<style>
    #app > main > .success {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #app > main > .img img {
        object-fit: contain; width: 100%; height: 100%;
    }


</style>