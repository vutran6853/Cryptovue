import { Bar } from 'vue-chartjs'
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Bars',
  extends: Bar,
  props: ['props'],
  data() {
    return {
      data1: this.$store.getters.getHistoryData
    }
  },
  mounted () {

    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: this.historyDATA.map((value) => value.close)
        }
      ]
    })
  },

  computed: {
    ...mapGetters({ 
      coinDATA: 'getCoinInfo',
      historyDATA: 'getHistoryData'  
    })
  },

  created() {
    console.log(this)
  }
}