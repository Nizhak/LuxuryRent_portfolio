<script>
import { Modal } from 'bootstrap'

export default {
    data() {
        return {
            modal: null
        }
    },
    mounted() {
        this.modal = new Modal('#alert'),
        this.checkSuccess()
    },
    methods: {
        checkSuccess() {
            if (!this.$cookies.get('isFirst')) {
                this.modal.show()
            }
        },
        success() {
            this.$cookies.set('isFirst', false, "7d")
            this.modal.hide()
        }
    }
}
</script>

<template>
<!-- Modal -->
<div class="modal fade" id="alert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Предупреждение</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Этот веб-сайт создан исключительно для демонстрации навыков и не имеет реальных бизнес-связей или данных. Вся информация и изображения вымышлены и предназначены исключительно для портфолио.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="this.success">Принять</button>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
    .alert {
        display: none;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 3%;
        left: auto;
        right: auto;
        width: 80%;

        &[visited=true] {
            display: flex;
        }
    }


</style>