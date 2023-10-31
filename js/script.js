const{createApp}=Vue;

createApp({
    data(){
        return{
            tasks:[
                {
                    id: 1,
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    id: 2,
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    id: 3,
                    text: 'Fare i compiti',
                    done: false
                },
            ],
        }
    },
    methods: {
        removeTask(i){
            this.tasks.splice(i, 1)
        },
        addTask(){
            this.lastId++;
            const newTask = {
                id: this.lastId,
                text: this.todoText,
                done: false
            }
            this.tasks.unshift(newTask)
            this.todoText=''
        },
    }
}).mount('#app');