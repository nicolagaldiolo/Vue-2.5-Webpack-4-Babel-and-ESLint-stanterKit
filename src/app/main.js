import Vue from 'vue';
import HelloWorld from './HelloWorld';
import Posts from './Posts';

new Vue({
 render: h => h(HelloWorld)
}).$mount('#app');

new Vue({
 render: h => h(Posts)
}).$mount('#app2');