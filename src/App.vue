<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        PostForm,
        PostList,
    },
    data() {
        return {
            posts: [],
            modalShow: false,

            // true если в процессе загрузки постов
            processLoadingPost: false,
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
        async fetchPosts() {
            try {
                this.processLoadingPost = true
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts?_limit=10'
                )
                console.log(response)
                this.posts = response.data
            } catch (e) {
                console.log(e)
            } finally {
                this.processLoadingPost = false
            }
        },
    },
    mounted() {
        this.fetchPosts()
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
        <div v-if="processLoadingPost">идет загрузка постов с бека...</div>
        <PostList
            v-if="!processLoadingPost"
            @remove="removePost"
            :posts="posts"
        />
    </div>
</template>
