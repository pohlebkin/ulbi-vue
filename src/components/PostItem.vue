<script>
export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div>
        <div class="post">
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
