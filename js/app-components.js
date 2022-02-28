Vue.component('item', {

    props: {

        item: {
            type: Object,
            default: {name: 'item', price: 1.00, description: ''},
        },
    },

    data()  {
        return {
            value: 0,
        }
    },

    template: `
        <b-card>
            <b-card-title>
                {{item.name}}
            </b-card-title>
            <b-card-img v-if="item.image" :src="item.image">
                
            </b-card-img>
            <b-card-body>
                <b-card-text>
                {{item.description}}
                </b-card-text>
                <b-card-text>
                $ {{item.price}}
                </b-card-text>
            </b-card-body>
            <b-form-spinbutton v-model="value" min="0" max="100"></b-form-spinbutton>
            <b-button @click="$emit('add-to-cart', value, item)">Add To Cart</b-button>
        </b-card>
    `

})

Vue.component('itemList', {
    props: {
        itemList: {
          type: Array
        },
    },

    methods: {
        addItem: function (value, item){
            this.$emit('add-to-cart', value, item)
        }
    },

    template: `
        <b-row>
            <template v-for="item in itemList">
                <b-col cols="3">
                    <item :item="item" @add-to-cart="addItem"></item>
                </b-col>
            </template>
        </b-row>
    `
})

Vue.component('confirmationItem', {
    props: {

        item: {
            type: Object,
            default: {name: 'item', price: 1.00, description: '', value: 0},
        },



    },

    template: `
        <b-card>
            <b-card-title>
                {{item.name}}
            </b-card-title>
            <b-card-img v-if="item.image" :src="item.image">
                
            </b-card-img>
            <b-card-body>
                <b-card-text>
                {{item.description}}
                </b-card-text>
                <b-card-text>
                {{item.price}}
                </b-card-text>
                <b-card-text>
                {{item.value}}
                </b-card-text>
            </b-card-body>
        </b-card>
    `
})