const app=Vue.createApp({
    data(){
        return{
            todoList : [],
        };
    },
    methods:{
        addTodo(event){
            this.todoList.push({
                id : new Date().getTime(),
                text : event.target.value,
                completed : false,
            });
            event.target.value="";
        },
        removeItem(todoItem){
            this.todoList = this.todoList.filter((todo) => todo !== todoItem);
        },
    },
    computed :{
        completedItemCount(){
            return this.todoList.filter((t) => t.completed).length;
        },
        unCompletedItemCount(){
            return this.todoList.filter((t) => !t.completed).length;
        },
    },
   
}).mount("#app");