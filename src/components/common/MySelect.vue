<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            // () => [] - функция, которая возвращает пустой массив
            // в данном случае, это нужно для того, чтобы каждый раз
            // при создании компонента, не создавался новый массив
            // а использовался один и тот же
            // https://ru.vuejs.org/v2/guide/components-props.html#%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E
            // https://ru.vuejs.org/v2/guide/computed.html#%D0%9E%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B9
            // КОММЕНТ СГЕНЕРЕН КОМАЙЛОТОМ, НЕ ДОВЕРЯТЬ 100%
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
}
</script>

<template>
    <select v-modal="modelValue" @change="changeOption">
        <option disabled value="">выберите из списка</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
