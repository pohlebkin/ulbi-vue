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
            selectedSort: '',
            sortOptions: [
                { name: 'по названию', value: 'title' },
                { name: 'по описанию', value: 'body' },
            ],

            searchQuery: '', // поисковй запрос
            pageCurrent: 1, // текущая страница в пагинации
            limit: 10, // лимит постов на одной странице
            totalPages: 0, // максимальное количество страниц
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
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        params: {
                            _limit: this.limit,
                            _page: this.pageCurrent,
                        },
                    }
                )
                console.log(response)
                this.posts = response.data

                // получаем максимальное количество страниц
                // получаем количество постов с бека
                // делим на лимит
                // x-total-count - это заголовок, который мы получаем с бека
                // в нем хранится максимальное количество постов
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                )
            } catch (e) {
                console.log(e)
            } finally {
                this.processLoadingPost = false
            }
        },
        changePage(pageNumber) {
            this.pageCurrent = pageNumber
            this.fetchPosts()
        },
    },
    mounted() {
        this.fetchPosts()
    },
    computed: {
        sortedPosts() {
            if (this.selectedSort) {
                return [...this.posts].sort((post1, post2) =>
                    post1[this.selectedSort].localeCompare(
                        post2[this.selectedSort]
                    )
                )
            }
            return this.posts
        },
        // одно компьютед свойство зависит от другого
        // одно компьютед свойство использует другое компьютед свойство
        sortedAndSearchPosts() {
            return this.sortedPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            )
        },
    },
}
</script>

<template>
    <div class="app">
        <MyInput v-model="searchQuery" placeholder="поиск..." />
        <div class="app__btns">
            <MyBtn @click="showModal"
                >добавить пост (показать модальное окно)</MyBtn
            >
            <MySelect v-model="selectedSort" :options="sortOptions"></MySelect>
        </div>
        <MyModal v-model:show="modalShow">
            <PostForm @create="createPost" />
        </MyModal>
        <div v-if="processLoadingPost">идет загрузка постов с бека...</div>
        <PostList
            v-if="!processLoadingPost"
            @remove="removePost"
            :posts="sortedAndSearchPosts"
        />
        <div class="page__wrapper" v-if="totalPages > 1">
            <!-- аналогично можно по условию биндить инлайн стили -->
            <div
                class="page__item"
                :class="{
                    'page--current': pageCurrent === pageNumber,
                }"
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>
