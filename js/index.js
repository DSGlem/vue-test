
let app = new Vue({
    el: '#app',
    data: {
        message: "Hello pizdyk!!"
    }
})

let app2 = new Vue({
    el: '#app-2',
    data: {
        message: "Loaded in " + new Date().toLocaleString()
    }
})

let app3 = new Vue({
    el:'#app-3',
    data: {
        seen: true
    }
})

let app4 = new Vue ({
    el: '#app-4',
    data: {
        todos: [
            { text: 'ololo'},
            { text: '???'},
            { text: 'swap swap'}
        ]
    }
})

app4.todos.push({ text: 'wtf?'})

let app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'DSG',
        message_1: 'GSD'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
            
        },
        reverseMessage1: function () {
            this.message_1 = this.message_1.split('').reverse().join('');
        }
    }

})