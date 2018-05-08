// import axios from 'axios'
export default {
  computed: {
    raceDetails () {
      return this.$store.state.creator.raceDetails
    },
    changeLanguage: {
      get () {
        return this.$store.state.creator.languageSelections
      },
      set (value) {
        this.$store.commit('changeLanguageSelection', value)
      }
    },
    changeProficiency: {
      get () {
        return this.$store.state.creator.proficiencySelections
      },
      set (value) {
        this.$store.commit('changeProficiencySelection', value)
      }
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
