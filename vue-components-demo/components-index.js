
Vue.component("button-counter",{

    data:function () {
        return{
            count : 0
        }
    },
    template:'<button v-on:click ="count++">You clicked me {{ count }} times.</button>'
});

new Vue({el:"#component-demo"});

Vue.component("blog-title",{
    props:['title'],
    template:'<h3>{{title}}</h3>'
});

new Vue({el:"#props-demo"});
