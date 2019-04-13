<template>
    <div>
        <h4 :style="{color: welcomeMessageColor}">Hi, i'm the Child</h4>
    </div>
</template>

<script>
    export default {
        name : 'HelloWorldChild',
        props: ['welcomeMessageColor'],
    }
</script>