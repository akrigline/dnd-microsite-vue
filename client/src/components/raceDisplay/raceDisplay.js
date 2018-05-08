// import axios from 'axios'
export default {
  computed: {
    raceDetails () {
      return this.$store.state.creator.raceDetails
    }
  }
  // methods: {
  //   async getRaceDetails () {
  //     if (this.$store.getters.raceUrl === null) {
  //       return false
  //     }
  //     axios
  //       .get(this.$store.getters.raceUrl)
  //       .then(response => {
  //         this.raceDetails = response.data
  //       })
  //   }
  // }
}
