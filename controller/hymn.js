const vueApp = new Vue({
  el: "#hymn",
    data: {
      hymns: []
  },
  created() {
       axios
         .get("http://localhost:8000/api/catholic-hymns")
         .then((response) => {
           const catholicHymns = response.data.data;
           console.log(`GET list catholic hymns`, catholicHymns);
           // append to DOM
           this.hymns = catholicHymns;
         })
         .catch((error) => console.error(error));
  },
  methods: {},
});
