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
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id)
        },
    },
}
</script>

<template>
    <div class="app">
        <h1>посты</h1>
        <PostForm @create="createPost" />
        <PostList @remove="removePost" :posts="posts" />
    </div>
</template>
