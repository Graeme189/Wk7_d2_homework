import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      rateObjects: null,
      base: null,
      chosenRate: null,
      valueToConvert: null,

    }, // data brackets
    mounted() {
      this.fetchCurrencies();
    },
    computed: {
        convertFromEuros: function () {
        const formattedAmount = this.valueToConvert * this.chosenRate;
          return formattedAmount.toFixed(2)
        }
    },
    methods: {
      fetchCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.rateObjects = data.rates
          this.base = data.base
        });
      }, 
    }
  })
})
