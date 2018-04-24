import ClassCard from '@/components/classCard/ClassCard.vue'
import axios from 'axios'

export default {
  components: {
    ClassCard
  },
  data: () => ({
    classList: []
  }),
  created: function () {
    axios
      .get('classes')
      .then(response => {
        this.classList = response.data.results
      })
  }
}
