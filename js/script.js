const {createApp} = Vue;

createApp({
    data(){
        return{
            logo: "https://hiringplatform.boolean.careers/images/logo.png",
            title: "Todo List",
            inputText:"",
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
        },

        deleteList(index){
            this.todo_list.splice(index,1);
        },

        addList(){
            let obj = {
                text: this.inputText,
                done: false
            }

            this.todo_list.push(obj);
            this.inputText = "";
        }
    }

}).mount("#app");