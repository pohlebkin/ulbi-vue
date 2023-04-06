<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    name: 'App',
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'title1', body: 'body1' },
                { id: 2, title: 'title2', body: 'body2' },
                { id: 3, title: 'title3', body: 'body3' },
            ],
            modalShow: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.modalShow = false
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        },
        showModal() {
            this.modalShow = true
        },
    },
}
</script>

<template>
    <div class="app">
        <MyBtn @click="showModal"
            >добавить пост (показать модальное окно)</MyBtn
        >
        <MyModal v-model:show="modalShow">
            <PostForm @create="createPost" />
        </MyModal>
        <PostList @remove="removePost" :posts="posts" />
    </div>
</template>
