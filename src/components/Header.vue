<template>
  <nav class="navbar navbar-inverse navbar-fixed-top navbar-main-bg">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">Stock Trader</a>
        </div>
        <div class="collapse navbar-collapse" >
          <ul class="nav navbar-nav">
            <router-link to="/dashboard" activeClass="active" tag="li"><a>Dashboard</a></router-link>
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
              <a href="#" class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Account <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  export default {
    data () {
      return {
        isDropdownOpen: false
      }
    },
    // computed: {
    //   ...mapGetters(['stocks','portfolio','funds'])
    // },
    // methods: {
    //   ...mapActions({
    //     randomizeStocks: 'randomizeStocks',
    //     loadDataAction: 'loadData'
    //   }),
    //   endDay() {
    //     this.randomizeStocks();
    //   },
    //   saveData() {
    //     const data = {
    //       funds: this.funds,
    //       stocks: this.stocks,
    //       portfolio: this.portfolio
    //     }
    //     this.$http.put('data.json',data);
    //   },
    //   loadData() {
    //     this.loadDataAction();
    //   }
    // }
  }
</script>

<style>
.navbar-main-bg {
  background-color: #1c2260
}

.navbar-main-bg .navbar-brand {
  color: #ffffff;
}

.navbar-main-bg .navbar-nav>li>a {
  color: #ffffff;
}

.navbar-main-bg .navbar-nav>li>a:focus,
.navbar-main-bg .navbar-nav>li>a:hover {
  color: #fff;
  background-color: transparent;
}

.navbar-main-bg .navbar-nav>.open>a,
.navbar-main-bg .navbar-nav>.open>a:focus,
.navbar-main-bg .navbar-nav>.open>a:hover {
    color: #fff;
    background-color: #09175f;
}

.navbar-inverse .navbar-nav>.active>a,
.navbar-inverse .navbar-nav>.active>a:focus,
.navbar-inverse .navbar-nav>.active>a:hover {
    color: #fff;
    background-color: #09175f;
}
</style>
