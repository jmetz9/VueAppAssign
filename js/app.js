const app = new Vue({
    el: '#app',

    data: function(){
        return {
            cart: [],
            list: [{name: 'Paper', price: 5, description: 'description'},
                {name: 'Phone', price: 400, description: 'description'},
                {name: 'Phone', price: 400, description: 'description'}],
        }
    },

    methods: {
       addItem: function (value, item){

           if(this.cart.includes(i => i === item)){
               this.cart[this.cart.indexOf(i => i === item)].value += value;
           }
           else{
               this.cart.push({name: item.name, price: item.price, description: item.description, value: value});
           }
           console.log(this.cart)
       }
    }

});