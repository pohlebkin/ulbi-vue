<script>
export default {
    name: 'MyModal',
    props: {
        title: {
            type: String,
            default: 'Modal Title',
        },
        show: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false)
        },
    },
}
</script>

<template>
    <div class="modal" v-if="show" @click="closeModal">
        <div class="modal__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
}

.modal__content {
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    min-width: 300px;
    min-height: 100px;
    overflow: auto;
}
</style>
