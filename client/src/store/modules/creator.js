import axios from 'axios'
const trimUrl = url => url.replace('http://www.dnd5eapi.co/api/', '')

const creatorModule = {
  state: {
    race: null,
    raceDetails: null,
    languageSelections: [],
    proficiencySelections: []
  },
  mutations: {
    changeRace (state, payload) {
      state.race = payload
    },
    changeRaceDetails (state, payload) {
      state.raceDetails = payload
    },
    changeLanguageSelection (state, payload) {
      state.languageSelections = payload
    },
    changeProficiencySelection (state, payload) {
      state.proficiencySelections = payload
    }
  },
  actions: {
    getRaceDetails (context, payload) {
      context.commit('changeRace', payload)
      const raceObj = JSON.parse(payload)
      axios
        .get(trimUrl(raceObj.url))
        .then(response => {
          context.commit('changeRaceDetails', response.data)
        })
    }
  },
  getters: {
    raceUrl: state => {
      const raceObj = JSON.parse(state.race)
      if (raceObj && raceObj.url) {
        return trimUrl(raceObj.url)
      }
      return null
    }
  }
}

export default creatorModule
