import axios from 'axios'

export default {
  props: {
    name: String,
    index: Number
  },
  data: () => ({
    'hit_die': null,
    'proficiencies': [],
    'saving_throws': []
  }),
  created: function () {
    axios
      .get(`classes/${this.index + 1}`)
      .then(response => {
        this.hit_die = response.data.hit_die
        this.proficiencies = response.data.proficiencies
        this.saving_throws = response.data.saving_throws
      })
  }
}
