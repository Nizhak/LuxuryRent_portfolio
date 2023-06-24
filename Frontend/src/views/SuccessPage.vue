<script>
    export default {
        data() {
            return {
                auto: {
                    title: "Lamborghini Huracan Performante",
                    src: "/Lamborghini Huracan Performante.png",
                    counter: 4,
                    carNumber: "a340xx126"
                }
            }
        }
    }
</script>

<template>
    <div class="success">
        <h1>Успешно</h1>
    </div>
    <div>
        <h4>Автомобиль "{{ auto.title }}" готов и ждет вас у нашего офиса. </h4>
        <h4>Номер автомобиля "{{ auto.carNumber }}"</h4>
    </div>
    <div class="img">
        <img :src="auto.src" :alt="auto.title">
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