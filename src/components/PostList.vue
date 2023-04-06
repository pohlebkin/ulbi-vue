<script>
import PostItem from '@/components/PostItem.vue'

export default {
    name: 'PostList',
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
}
</script>

<template>
    <div v-if="posts.length > 0">
        <h2>посты</h2>
        <PostItem
            @remove="$emit('remove', post)"
            :key="post.id"
            :post="post"
            v-for="post in posts"
        />
    </div>
    <h2 v-else style="color: red">постов нет</h2>
</template>
