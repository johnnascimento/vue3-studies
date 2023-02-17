

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
    },
    updated() {
      localStorage.setItem('toDoList', JSON.stringify(this.toDoItems));
    },
    mounted() {
     const lsList = localStorage.getItem('toDoList');
      
     if (lsList.length) {
        this.toDoItems = JSON.parse(lsList);
      }
    }
};

Vue.createApp(toDoList).mount('#app');