<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <span>{{ post.title }}</span>
            <small>{{ post.body }}</small>
        </li>
    </ul>
</template>

<script>

    const axios = require('axios/index');

    export default {
        data() {
            return {
                posts: [],
            };
        },

        name: 'Posts',

        created() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                this.posts = response.data;
            }).catch(error => console.log(error));
        },
    };
</script>