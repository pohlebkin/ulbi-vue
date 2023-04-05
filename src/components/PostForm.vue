<script>
export default {
    name: 'PostForm',
    data() {
        return {
            post: {
                id: '',
                title: '',
                body: '',
            },
        }
    },
    methods: {
        creatrePost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                id: '',
                title: '',
                body: '',
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent>
        <h4>создание поста</h4>
        <input
            v-model="post.title"
            class="input"
            type="text"
            placeholder="название"
        />
        <input
            v-model="post.body"
            class="input"
            type="text"
            placeholder="описание"
        />
        <button class="btn" @click="creatrePost">добавить</button>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column; /* главная ось вертикально */
}

.input {
    width: 100%;
    padding: 10px 15px;
    margin-top: 15px;
    border: 2px solid teal;
}

.btn {
    align-self: flex-end; /* по кравому краю */
    margin-top: 15px;
    padding: 10px 15px;
    background: white;
    color: teal;
    border: 2px solid teal;
}
</style>
