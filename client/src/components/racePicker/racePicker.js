import axios from 'axios'
export default {
  props: {
  },
  data: () => ({
    'raceList': [],
    'selected': null
  }),
  created: function () {
    axios
      .get(`races`)
      .then(response => {
        this.raceList = response.data.results
      })
  }
}
