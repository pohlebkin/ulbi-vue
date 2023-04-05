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
    <div>
        <h2>посты</h2>
        <PostItem :post="post" v-for="post in posts" />
    </div>
</template>
