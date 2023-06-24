<script>
import CardAuto from "@/components/CardAuto.vue"


export default {
	components: {
		CardAuto,
	},
    data() {
        return {
            autos: [
                {
                    title: "Lamborghini Huracan Performante",
                    src: "/Lamborghini Huracan Performante.png",
                    counter: 4,
                    brand: "Lamborghini"
                },
                {
                    title: "Bugatti Divo",
                    src: "/bugatti Divo.png",
                    counter: 1,
                    brand: "Bugatti"
                },
                {
                    title: "Bugatti Veyron",
                    src: "/bugatti veyron.png",
                    counter: 1,
                    brand: "Bugatti"
                },
                {
                    title: "Mclaren",
                    src: "Mclaren.png",
                    counter: 0,
                    brand: "Mclaren"
                },
                {
                    title: "Lamborghini Huracan Performante",
                    src: "/Lamborghini Huracan Performante.png",
                    counter: 4
                },
                {
                    title: "Bugatti Divo",
                    src: "/bugatti Divo.png",
                    counter: 1
                },
                {
                    title: "Bugatti Veyron",
                    src: "/bugatti veyron.png",
                    counter: 1
                },
                {
                    title: "Mclaren",
                    src: "Mclaren.png",
                    counter: 0
                }
            ]
        }
    }
};
</script>


<template>
    <div class="view">
        <div class="available">
            <CardAuto v-for="auto in autos" :src="auto.src" :title="auto.title" :counter="auto.counter" price="10"/>
        </div>
    </div>
</template>


<style>
    #app > main > .view > .available {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1.5rem;
    }
</style>