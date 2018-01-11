<template>
  <div class="listing-wrapper">
    <!-- listing header -->
    <div class="listing-header">
      <div class="toolbar">
          <div class="toolbar-title">
            <h2>Portfolio</h2>
          </div>
      </div>
    </div>

    <!-- listing have datas -->
    <div class="listing" v-if="dataPortfolios.length >= 1">
      <div class="listing-subheader">
        <div class="card">
          <div class="card-title">
            <strong>Name</strong>
          </div>
          <div class="card-quantity">
            <strong>Quantity</strong>
          </div>
          <div class="card-funds">
            <strong>Price</strong>
          </div>
          <div class="card-action">
            <strong>Action</strong>
          </div>
        </div>
      </div>
      <div class="listing-body">
        <Stock v-for="stock in dataPortfolios" :stock="stock" :key="stock.id"></Stock>
      </div>
    </div>

    <!-- listing no data -->
    <div class="listing" v-if="dataPortfolios.length <= 0">
      <Nodata></Nodata>
    </div>
  </div>  
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';
  import Nodata from './../NoData.vue';

  export default {
    components: {
      Stock,
      Nodata
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    },
    computed: {
      // assign state.portfolio to variable stocks
      // ...mapGetters({stocks: 'portfolio'})
      // the above is the same as:
      dataPortfolios() {
        const dataPortofolio = this.$store.getters.portfolio;
        return dataPortofolio
      }
    },
  }
</script>

<style>
.card-quantity {
  flex: 0 0 20rem;
}
</style>
