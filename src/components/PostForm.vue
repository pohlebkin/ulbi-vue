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
        <MyInput v-model="post.title" placeholder="название" />
        <MyInput v-model="post.body" placeholder="описание" />
        <MyBtn style="align-self: flex-end" class="btn" @click="creatrePost"
            >добавить</MyBtn
        >
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column; /* главная ось вертикально */
}
</style>
