<script>
    import axios from 'axios';
    import CardForm from '@/components/card/CardForm.vue'


    export default {
        data () {
            return {
            formData: {
                cardName: '',
                cardNumber: '',
                cardMonth: '',
                cardYear: '',
                cardCvv: ''
            }
            }
        },
        components: {
            CardForm,
        },
        methods: {
            updateCardNumber (val) {
            },
            updateCardName (val) {
            },
            updateCardMonth (val) {
            },
            updateCardYear (val) {
            },
            updateCardCvv (val) {
            },
            async checkPayment() {
                const responce = await axios.post("/payment", this.formData)
                console.log(responce);
                if (responce.status == 200) {
                    this.$router.push({
                        name: 'success',
                        query: { id: this.formData.id }
                    })
                }
            }
        }  
    }
</script>

<template>
    <div>
        <h2>Оплата аренды авто</h2>

        <h5 v-if="$route.query.id">Номер заказа: {{ $route.query.id }}.</h5>
        <div class="wrapper" id="app">
            <CardForm
            :form-data="formData"
            @input-card-number="updateCardNumber"
            @input-card-name="updateCardName"
            @input-card-month="updateCardMonth"
            @input-card-year="updateCardYear"
            @input-card-cvv="updateCardCvv"
            />
            <!-- backgroundImage="https://images.unsplash.com/photo-1572336183013-960c3e1a0b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" -->
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/PayPage.scss';
</style>