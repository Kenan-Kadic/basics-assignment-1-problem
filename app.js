const app = Vue.createApp({
    data()  {
        return {
        myName: 'Kenan Kadic',
        myAge:  '38',
        vueLink: 'https://media-exp1.licdn.com/dms/image/C4E03AQHEIHBILc9DvA/profile-displayphoto-shrink_200_200/0/1634938191289?e=1647475200&v=beta&t=9pZQh6QZ_uk82THzYgakY9C7eyMT_dtRpeFU7ZMOFQE',
        aMessage: 'the number is 0.5 or smaller'
        };
    },
    methods: {
        randomNumber() {
        let random = (Math.random());
        if (random > 0.5) {
        return random;

        } else {
        return this.aMessage;
        }
        }
    }
});

app.mount('#assignment');