const { createApp } = Vue


const app = createApp({

    data() {
        return {

            randomEmail: [],

        }
    },


    methods: {

        getRandomEmail() {

            this.randomEmail = [];

            for (let i = 0; i < 10; i++) {

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {

                    this.randomEmail.push(response.data.response);

                    console.log(response.data.response)

                })

            }

        }

    },


    mounted() {



    }


})


app.mount('#app');