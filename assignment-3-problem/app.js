const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            text:'',
        }
    },
    methods:{
        increase(num){
            this.counter = this.counter + num;

        },
    },
    watch:{
        counter(value){
            if(value > 37){
                return this.text = 'Too much!';
            }else if(value < 37){
                this.text = 'Not There yet';
            }
            const that = this;
            setTimeout(function(){
                that.counter = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');   