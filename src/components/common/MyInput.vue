<script>
export default {
    name: 'MyInput',
    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<template>
    <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<style scoped>
.input {
    width: 100%;
    padding: 10px 15px;
    margin-top: 15px;
    border: 2px solid teal;
}
</style>
