<template>
    <div class="card">
      <div class="card-title">
        <strong>{{stock.name}}</strong>
      </div>
      <div class="card-quantity"></div>
      <div class="card-funds">
        <strong>@ {{stock.price | currency}}</strong>
      </div>
      <div class="card-action">
        <div class="card-action-form">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
          </div>
          <div class="pull-right">
            <button class="btn btn-info" @click="buyStock" :disabled="insufficientFunds || quantity<=0">Buy</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['stock'],
    data: () => {
      return {
        quantity: 0
      }
    },
    // use computed to watch the store
    computed: {
      funds(){
        return this.$store.getters.funds;
      },
      insufficientFunds(){
        return this.quantity * this.stock.price > this.funds;
      }
    },
    methods: {

      // buy stock
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

</style>
