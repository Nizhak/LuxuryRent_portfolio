<script>
import axios from "axios"
import CardAuto from "@/components/CardAuto.vue"

export default {
	components: {
		CardAuto,
	},
    data() {
        return {
            autos: Array
        }
    },
    mounted() {
        axios
        .get('/all')
        .then(response => this.autos = response.data)
        .catch(error => console.log(error));
    }
};
</script>


<template>
    <div class="view">
        <h2>Все автомобили</h2>
        <div class="available">
            <CardAuto v-for="auto in autos" :id="auto._id" :src="auto.src" :title="auto.title" :counted="auto.countedounted" :price="auto.price" />
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