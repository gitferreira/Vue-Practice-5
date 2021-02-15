const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: "",
            displayed: true,
        }

    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask)
        },
        hid() {
            this.displayed = !this.displayed
            console.log(this.displayed)
        }
    }
})

app.mount("#assignment")