members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
                fname: 'John',
                lname: 'Doe',
                instrument: 'Electric Guitar'
            }
        }
    },

    methods: {
        addMember: function() {
            if (this.newMember.fname.length && this.newMember.lname.length && this.newMember.instrument.length) {
                this.members.push(this.newMember);
                this.newMember = {
                    fname: 'John',
                    lname: 'Doe',
                    instrument: 'Electric Guitar'
                };
            }
        }
    },

};

Vue.createApp(handlingForms).mount('#app');
