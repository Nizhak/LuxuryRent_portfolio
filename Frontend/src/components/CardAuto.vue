<script>

    export default {
        data() {
            return {
                duration: 1
            }
        },
        props: {
            id: Number,
            title: String,
            body: String,
            src: String,
            counter: Number,
            link: String,
            price: Number
        }
    }
</script>

<template>
    <div class="card p-1" style="width: 22.5%;">
        <div class="card-img-top">
            <img :src="src" :alt="title">
        </div>
        <div class="card-body">
            <h6 class="card-title">{{ title }}</h6>
            <p class="card-text" v-if="body">{{ body }}</p>
            <div>
                <p v-if="counter == 1"><strong>Доступно 1 авто.</strong></p>
                <p v-else-if="counter != 0">Доступны {{ counter }} авто.</p>
                <p v-else-if="counter == 0">Нет доступных авто</p>
                <p v-if="price">{{ price }}руб. за 1 сутки</p>
                <button :disabled="(counter == 0)" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;" data-bs-toggle="modal" data-bs-target="#booking">Арендовать</button>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="booking" tabindex="-1" aria-labelledby="Аренда" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Бронирование</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="full-name" class="form-label">ФИО</label>
                    <input type="full-name" class="form-control" id="full-name" aria-describedby="emailHelp" required>
                </div>
                <div class="mb-3">
                    <label for="driver-license" class="form-label">Номер водительского удостоверения</label>
                    <input type="driver-license" :minlength="10" class="form-control" id="driver-license" required>
                </div>
                <div class="mb-3">
                    <label for="duration" class="form-label">Количество дней</label>
                    <input type="number" :min="1" v-model="duration" class="form-control" id="duration" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email адрес</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
                </div>
                <div class="mb-3">
                    <label for="tel" class="form-label">Номер телефона</label>
                    <input type="tel" :minlength="12" class="form-control" id="tel" placeholder="+79xxxxxxxxx" required         >
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
            <button type="button" data-bs-dismiss="modal" @click="$router.push({
                name: 'payment'
            })" class="btn btn-primary">К оплате {{ price * duration }} Руб.</button>
        </div>
    </div>
    </div>
    </div>
</template>

<style>
    #app > main .card {
        aspect-ratio: 1 / 1.25;
    }
    #app > main .card .card-img-top {
        width: 100%;
        aspect-ratio: 1 / .75;
    }
    #app > main .card img {
        object-fit: contain; width: 100%; height: 100%;
    }
    #app > main .card > .card-body {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
    }
    #app > main .card > .card-body > .card-title {
        width: 100%;
    }
</style>    