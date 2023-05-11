const app = Vue.createApp({
    data(){
        return{
            userOne: '',
            userTwo: '',
            confirmedUserOne: '',
            confirmedUserTwo: '',
        };
    },
    methods:{
        someAlert(){
            alert('Hi, My name is Baia and I am learning VueJs');
        },
        setUserOne(event){
            this.userOne = event.target.value; 
          }, 
        setUserTwo(event){
            this.userTwo = event.target.value; 
        },
        confirmInputOne(){
            this.confirmedUserOne = this.userOne;
        },
        confirmInputTwo(){
            this.confirmedUserTwo = this.userTwo;
        },
    }
});

app.mount('#assignment');