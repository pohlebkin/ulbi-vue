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
        <transition-group name="post-list">
            <PostItem
                @remove="$emit('remove', post)"
                :key="post.id"
                :post="post"
                v-for="post in posts"
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red">постов нет</h2>
</template>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: all 0.4s ease;
}
</style>
