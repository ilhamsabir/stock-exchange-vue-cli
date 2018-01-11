<template>
  <div class="listing-wrapper">
    <div class="listing-header">
      <div class="toolbar">
          <div class="toolbar-title">
            <h2>Stock</h2>
          </div>
      </div>
    </div>
    <div class="listing">
      <div class="listing-subheader">
        <div class="card">
          <div class="card-title">
            <strong>Name</strong>
          </div>
          <div class="card-quantity"></div>
          <div class="card-funds">
            <strong>Price</strong>
          </div>
          <div class="card-action">
            <strong>Action</strong>
          </div>
        </div>
      </div>
      <div class="listing-body">
        <!-- <Stock v-for="stock in stocks" :stock="stock"></Stock> -->
        <Stock v-for="stock in stocks" :stock="stock" :key="stock.id"></Stock>
      </div>
    </div>
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  export default {
    components: {
      Stock
    },
    data() {
      return {

      }
    },
    computed: {
      stocks() {
        const dataStocks = this.$store.getters.stocks
        return dataStocks
      }
    }
  }
</script>
<style>
  .toolbar {
    margin-bottom: 2rem;
    display: flex;
  }

  .toolbar-title {
    flex: 0 0 15rem;
  }

  .toolbar-title h2 {
    font-weight: 300;
    color: #4C515D;
  }

  .toolbar-action {
    margin-top: 2rem;
    flex: 0 0 30rem;
    align-items: center;
  }

  .listing-subheader .toolbar {
    width: 100%;
  }

  .listing-subheader .card {
    margin-bottom: .5rem;
    padding: .5rem !important;
    border: 0px solid !important;
    background: transparent;
  }

  .listing-subheader .card strong {
    color: #8e8e8e;
  }

  .card {
    display: flex;
    margin-bottom: 1rem;
    float: left;
    width: 100%;
    /*min-height: 450px;*/
    padding: 1em;
    background: #fff;
    border: 1px solid rgba(177,186,204,0.4);
  }

  .card:hover {

    /*margin: 1px 1rem 1rem 0rem;*/
    /*padding-left: 2.0625rem;*/
    /*padding-right: 2.0625rem;*/
    /*z-index: 5;*/
    position: relative;
    border-radius: 3px !important;
    border: 1px solid rgba(177,186,204,0.4);
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

  }

  .card-title {
    flex: 0 0 30rem;
  }

  .card-funds {
    flex: 0 0 30rem;
  }

  .card-action {
    flex: 1;
  }

  .input-group-addon.info {
      color: #ccc;
      background-color: #fff;
      border-color: #ccc;
  }

  .search-icon-input {
    border-right: 0px;
  }

  .search-icon-input:focus {
      border-color: #ccc;
      outline: 0;
      -webkit-box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 0px rgba(102,175,233,.6);
      box-shadow: inset 0 0px 0px rgba(0,0,0,.075), 0 0 0px rgba(102,175,233,.6);
  }

</style>
