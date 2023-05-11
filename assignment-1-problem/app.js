const app = Vue.createApp({
    data(){
        return{
            name: 'Baia',
            age: 22,
            randomNum: Math.random(0, 1),
            image:'https://i.pinimg.com/originals/bf/45/94/bf4594133b8b0f26c0571403a117cc02.png',
            value: 'Baia'
        }
    }
});

app.mount('#assignment');