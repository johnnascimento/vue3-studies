

const toDoList = {
    data() {
        return {
            title: 'To Do List',
            toDoItems: [
                {
                    done: true,
                    title: 'Learn HTML, CSS and JavaScript'
                },
                {
                    done: true,
                    title: 'Learn the basics of Vue JS'
                },
                {
                    done: false,
                    title: 'Complete Vue JS Challenge with excellence'
                },
            ],
            newItem: {
                done: false,
                title: ''
            }
        }
    },

    methods: {
        addItem: function() {
            if (this.newItem.title && this.newItem.title.length) {
                this.toDoItems.push(this.newItem);
                this.newItem = {};
            }
        },

        clearAll: function() {
            this.toDoItems = [];
        },

        removeItem: function(item, idx) {
            this.toDoItems.splice(idx, 1);
        }
    }
};

Vue.createApp(toDoList).mount('#app');