<template>
    <div class="some-globally-inherited-style">
        <h1>{{ title }}</h1>
        <p>{{ welcomeMessage }}</p>
        <p>Welcome message: <input type="text" v-model="welcomeMessage"></p>
        <p>Color of child title: <input type="text" v-model="welcomeMessageColor"></p>
        <HelloWorldChild :welcomeMessageColor="welcomeMessageColor"/>
    </div>
</template>

<script>

    import HelloWorldChild from './components/HelloWorldChild';
    import moment from 'moment';

    export default {
        data() {
            return {
                title: 'Hello World. (' + moment().format("MMM Do YY") + ')',
                welcomeMessage: 'Welcome to Vue',
                welcomeMessageColor: '#ff0000',
            };
        },

        name: 'HelloWorld',
        components: {HelloWorldChild},
        /*
            There are a few life cycle hooks, but created() is the most commonly used
        */
        created() {
            // Make an initial AJAX request to update some data maybe?
        },
        methods: {
            customConsoleLog(message) {
                console.log(Date.now() +' '+ message);
            }
        },
        computed: {
            test(){
                return console.log("CIao");
            }
        }
    };
</script>

<style lang="scss" scoped>
    h1 {
        //color: $blue; // you must enable sass-loader in webpack.config.js
        color: red;
    }
</style>