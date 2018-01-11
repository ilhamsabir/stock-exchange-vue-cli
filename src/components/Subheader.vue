<template>
  <div class="main-wrapper">
    <div class="main-subheader">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="subheader-cash">
              <strong>Cash: {{ funds | currency }}</strong>
            </div>
          </div>
          <div class="col-md-6">
            <div class="subheader-action">
              <button class="btn btn-sm btn-ghost-main" name="button" @click="endDay">End day</button>
              <button class="btn btn-sm btn-ghost-main" name="button" @click="toggleModal('SAVE')"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
              <button class="btn btn-sm btn-ghost-main" name="button" @click="toggleModal('LOAD')"><i class="fa fa-refresh" aria-hidden="true"></i> Load</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal save data -->
    <Modal
      :isShowModal="isShowModal"
      :toggleModal="toggleModal"
      :modalType="modalType"
      :collections="collections"
      :errorCollectionName="errorCollectionName"
      :selectDataToLoad="selectDataToLoad"
      :saveData="saveData"
    />

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import axios from 'axios'
import * as Helper from './../helper/helper.js'
import Api from './../helper/api.js'
import * as moment from 'moment'
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      collectionName: '',
      errorCollectionName: false,
      collections: false,
      isShowModal: false,
      modalType: 'SAVE',
    }
  },
  mounted() {

  },
  computed: {
    ...mapGetters(['stocks','portfolio','funds'])
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      loadDataAction: 'loadData'
    }),

    // end day
    endDay() {
      // this.randomizeStocks();
      this.$store.dispatch('randomizeStocks');
    },

    // toggle modal
    toggleModal(type) {
      // show modal
      this.isShowModal = !this.isShowModal

      switch (type) {
        case "SAVE":
            this.modalType = "SAVE"
          break;
        case "LOAD":
            this.modalType = "LOAD"

            // execute function fetch
            this.fetchCollectionData()
          break;
        default:

      }
    },

    // save data
    saveData() {
      // defined url api
      const url = Helper.getUrlPrefix() +'/'+ Api.Collection.post
      // defined header for CORS
      const header = Helper.headerContent()
      // defined data to store
      const data = {
        name: this.collectionName,
        funds: this.funds,
        portfolio: JSON.stringify(this.portfolio),
        date: moment().format('l')
      }

      // check collection name
      if(data.name.length > 0) {
        axios({
          method: 'post',
          url: url,
          header: header,
          data: data
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("error save", error);
        });

        // close modal save
        this.toggleModal()
      }
      else {
        // show error label on collection name
        this.errorCollectionName = true
      }

      // clear collection name
      this.collectionName = ''

    },

    // load data
    selectDataToLoad(id) {
      // defined collections by var data
      const data = this.collections

      // loop collections
      for (var i = 0; i < data.length; i++) {
        // defined data[i] with item
        const item = data[i]
        // check selected location by id
        if (item.id == id) {
          // defined new var
          const order = {
            name: item.name,
            funds: item.funds,
            portfolio: JSON.parse(item.portfolio)
          }
          // dispatch portofolio by selected portfolio
          this.$store.dispatch('loadPortofolio', order);

          // close modals
          this.toggleModal()
        }
      }
    },

    // fetch data from collection
    fetchCollectionData() {
      // defined api
      const url = Helper.getUrlPrefix() +'/'+ Api.Collection.get
      // proced to request data
      axios.get(url)
      .then(response => {
        // defined order from response data
        this.collections = response.data
      })
      .catch(e => {
       this.errors.push(e)
      })
    },
  },
}
</script>

<style>
  .error {
    color: red;
    margin-top: 3rem;
    font-size: 1.2rem;
  }
  .main-subheader {
    background-color: #FFF;
    padding: 0 1.3rem;
    display: flex;
    align-items: center;
    border-bottom: .1rem solid #D7D7D7;
    min-height: 6rem;
  }

  .subheader-cash {
    margin-top: 1.8rem;
  }

  .subheader-cash strong {
    /*padding: 1rem;*/
    align-items: center;
    font-size: 1.7rem;
  }

  .subheader-action i {
    margin-right: .5rem;
  }

  .subheader-action {
    padding: 1rem;
    float: right;
  }

  .btn-ghost-main {
    border: 1.4px solid;
    border-color: #1c2260;
    background-color: transparent;
    padding: 0 1.6rem!important;
    line-height: 2.5;
    color: #1c2260;
    font-weight: 600;
  }

  .btn-ghost-main:hover {
    color: #fff;
    background: #1c2260;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .list-collection-item {
    margin-bottom: 1rem;
    padding: 1rem 0 1rem 1rem;
    border: 1px solid #ddd;
    border-radius: 3px;
  }

  .list-collection-item:hover {
    background: #f5f5f5;
  }
</style>
