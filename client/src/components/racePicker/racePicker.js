import axios from 'axios'
export default {
  props: {
  },
  data: () => ({
    'raceList': []
  }),
  created: function () {
    axios
      .get(`races`)
      .then(response => {
        this.raceList = response.data.results.map(result => ({
          name: result.name,
          value: JSON.stringify(result)
        }))
      })
  },
  computed: {
    changeRace: {
      get () {
        return this.$store.state.creator.race
      },
      set (value) {
        this.$store.dispatch('getRaceDetails', value)
      }
    }
  }
}
