<script>
import MyBtn from '@/components/common/MyBtn.vue'

export default {
    name: 'PostForm',
    components: {
        MyBtn,
    },
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

.input {
    width: 100%;
    padding: 10px 15px;
    margin-top: 15px;
    border: 2px solid teal;
}
</style>
