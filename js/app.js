const app = new Vue({
    el: '#app',

    data: function(){
        return {
            cart: [],
            list: [{name: 'Paper', price: 5, description: 'A sheet of paper.'},
                {name: 'Phone', price: 400, description: 'The latest and most high end phone.'},
                {name: 'Trash', price: .1, description: 'Trash. Thats it.'},
                {name: 'Boat', price: 2000000, description: 'A luxury Cruise Liner for you and your best friends'}],
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