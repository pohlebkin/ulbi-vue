<script>
export default {
    name: 'PostList',
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
}
</script>

<template>
    <div>
        <div class="post" v-for="post in posts">
            <div><b>название</b> {{ post.title }}</div>
            <div><b>описание</b> {{ post.body }}</div>
        </div>
    </div>
</template>

<style scoped>
.post {
    border: 2px solid teal;
    padding: 15px;
    margin-top: 15px;
}
</style>
