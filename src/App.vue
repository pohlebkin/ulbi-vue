<script>
export default {
    data() {
        return {
            posts: [
                { id: 1, title: 'title1', body: 'body1' },
                { id: 2, title: 'title2', body: 'body2' },
                { id: 3, title: 'title3', body: 'body3' },
            ],
            title: '',
            body: '',
        }
    },
    methods: {
        creatrePost() {
            this.posts.push({
                id: Date.now(),
                title: this.title,
                body: this.body,
            })
            this.title = ''
            this.body = ''
        },
    },
}
</script>

<template>
    <div class="app">
        <form @submit.prevent>
            <h4>создание поста</h4>
            <input
                v-model="title"
                class="input"
                type="text"
                placeholder="название"
            />
            <input
                v-model="body"
                class="input"
                type="text"
                placeholder="описание"
            />
            <button class="btn" @click="creatrePost">добавить</button>
        </form>
        <div>
            <div class="post" v-for="post in posts">
                <div><b>название</b> {{ post.title }}</div>
                <div><b>описание</b> {{ post.body }}</div>
            </div>
        </div>
    </div>
</template>
