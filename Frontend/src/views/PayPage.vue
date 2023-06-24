<script>
    import dayJs from 'dayjs'
    export default {
        props: {
            id: Number,
            price: Number
        }
    }
</script>

<template>
    <div>
        <h2>Оплата аренды авто</h2>
        <h5 v-if="$route.query.id">Номер заказа: {{ $route.query.id }}.</h5>
        <form>
                <div class="mb-3">
                    <label for="card-number" class="form-label">Номер кредитной карты</label>
                    <input type="card-number" :minlength="16" :maxlength="16" class="form-control" id="card-number" required>
                </div>
                <div class="mb-3">
                    <label for="time-of-action" class="form-label">Действует до</label>
                    <input type="date" class="form-control" id="time-of-action" required>
                </div>
                <div class="mb-3">
                    <label for="name-owner-card" class="form-label">Имя держателя карты</label>
                    <input type="name-owner-card" :min="1" v-model="duration" class="form-control" id="name-owner-card" required>
                </div>
                <div class="mb-3">
                    <label for="CVV" class="">CVV код</label>
                    <input type="password" minlength="3" maxlength="3" class="form-control" id="CVV" required>
                </div>
                <h5 v-if="$route.query.price">Итоговая стоимость {{ $route.query.price }} Руб.</h5> 
                <button type="button" @click="$router.push({
                    name: 'success'
                })" class="btn btn-primary">Оплатить</button>
            </form>
    </div>
</template>

<style>

</style>