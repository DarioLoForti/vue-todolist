const {createApp} = Vue;

createApp({
    data(){
        return{
            logo: "https://hiringplatform.boolean.careers/images/logo.png",
            title: "Todo List",
            todo_list: [
                {
                    text: "Andare dal commercialista",
                    done: false
                },
                {
                    text: "Partecipare call",
                    done: false
                },
                {
                    text: "Finire progetto",
                    done: false
                },
                {
                    text: "Fare fattura progetto",
                    done: false
                },
                {
                    text: "Chiamare cliente",
                    done: false
                },
            ]
    
        }

    },
    methods: {
        toggleDone(index){
            this.todo_list[index].done = !this.todo_list[index].done;
        }
    },

}).mount("#app");