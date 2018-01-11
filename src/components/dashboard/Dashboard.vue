<template>
  <div class="">
    <div class="dashboard clearfix">
      <div class="dashboard">
        <h1>Stock Trading Demo Vuex App</h1>
        <h5>You may Save & Load your data</h5>
      </div>
      <h5>Click 'End Day' to simulate the closing price</h5>
    </div>
    <div class="dashboard">
      <div class="col-md-6 dashboard-col">
        <div class="card">
          <div class="card-title">
            Stocks
          </div>
          <div class="card-body">
            <div class="stock-card dropzone">
              <div class="list-item stocks-item" v-for="stock in myList" :stock="stock" :key="stock.id">{{stock.name}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 dashboard-col">
        <div class="card">
          <div class="card-title">
            Portofolio
          </div>
          <div class="card-body">
            <div class="stock-card dropzone dragArea" v-model="myList">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import draggable from 'vuedraggable'

  export default {
    props: ['stock'],
    components: {
        draggable,
    },
    computed: {
      funds(){
        return this.$store.getters.funds;
      },
      stocks() {
        const dataStocks = this.$store.getters.stocks
        return dataStocks
      },
      myList: {
       get() {
           return this.$store.getters.stocks
       },
       set(value) {
           // this.$store.commit('updateList', value)
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          }

          this.$store.dispatch('buyStock', order);
           // this.quantity = 0;
        }
      }
    },
    created() {
      this.getStoreData()
    },
    updated() {
      // this.checkMove()
      this.$nextTick(function () {
        // this.handleDrag()
        // this.handleSortable()
      })
    },
    methods: {
      getStoreData() {
        // console.log('this get',this.$store.getters.stocks)

      },

      checkMove(event) {
        console.log(event)

      }


      // handleDrag() {
      //   let drag = {
      //     cursor: 'move',
      //     helper: 'clone',
      //     revert: false,
      //     connectToSortable: ".dropzone",
      //   }
      //
      //   $('.stocks-item').draggable(drag)
      // },
      //
      // handleSortable() {
      //   let sorts = {
      //     connectWith: '.dropzone',
      //     revert: false,
      //     placeholder: "drop-placeholder",
      //     appendTo: ".dropzone",
      //     // handle: ".handle",
      //     // scroll: false,
      //     // helper: (event, ui) => {
      //     //   const elementName = ui.get(0).dataset.element
      //     //   const elementIcon = ui.get(0).dataset.iconclass
      //     //   return helperHTML(elementName, elementIcon)
      //     // },
      //     // stop: (event, ui) => this.handleSortableStop(event, ui)
      //   }
      //
      //   $('.dropzone').sortable(sorts)
      // }
    }
  }
</script>
<style>
  .dashboard {
    /*display: flex;*/
    /*flex-grow:*/
  }

  .dashboard-col {
    margin-top: 5px;
    padding-right: 15px;
    padding-left: 0px !important;
  }

  .dashboard-col .card {

    display: block;
    margin-bottom: 1rem;
    float: left;
    width: 100%;
    /*min-height: 450px;*/
    padding: 1em;
    background: #fff;
    border: 1px solid rgba(177,186,204,0.4);
    border-radius: 0px;
  }

  .dashboard-col .stock-card {
    max-height: 40rem;
    overflow: auto;
    overflow-y: scroll;
  }

  .dashboard-col .card .card-title {
    width: 100%;
    float: left;
  }

  .dashboard-col .card .card-body {
    width: 100%;
    float: left;
  }

  .dashboard-col .card .card-body .list-item {
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #d8d8d8;
    background: #f1f1f1;
    padding: 1rem;
  }

  .dashboard-card-header {
    width: 100%;
    float: left;
  }

  .stocks-item {
    z-index: 10000;
    cursor: grab;
  }

  .drop-placeholder {
    margin-top: 1rem;
    width: 100%;
    background-color: rgba(0, 105, 255, .6);
    background-image: repeating-linear-gradient(135deg, transparent, transparent 12px, rgba(0, 0, 0, .1) 0, rgba(0, 0, 0, .1) 24px);
    border: 1px dashed #0069ff;
    height: 5rem;
  }
</style>
