<template>
  <div class="card">
    <div class="card-title">
      <strong>{{stock.name}}</strong>
    </div>
    <div class="card-quantity">
      <strong>{{ stock.quantity }}</strong>
    </div>
    <div class="card-funds">
      <strong>@ {{stock.price | currency}}</strong>
    </div>
    <div class="card-action">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="quantity<=0">Sell</button>
        </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props: ['stock'],
    data: () => {
      return {
        quantity: 0,
      }
    },
    methods: {
      ...mapActions({ sellStockAction: 'sellStock' }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }

        // use mapActions as alternative to dispatch
        this.sellStockAction(order);
        // which is the same as:
        // this.$store.dispatch('sellStock',order);
        this.quantity = 0;
      }
    }
  }
</script>
