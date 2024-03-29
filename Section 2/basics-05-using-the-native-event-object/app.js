const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:'',
      // fullname:''
    };
  },
  watch:{
    counter(value){
      const that = this;
      if(value > 50){
        setTimeout(function(){
          that.counter = 0;
        }, 2000);
        // this.counter = 0;
      }
    }
    // name(value){
    //   if (value === ''){
    //     this.fullname= '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if (value === ''){
    //     this.fullname= '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname(){
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Maisuradze';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
