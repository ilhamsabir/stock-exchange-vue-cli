<template>
  <div>
    <AppHeader></AppHeader>
    <div class="main-wrapper">
      <AppSubheader></AppSubheader>
      <div class="main-container">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <transition name="slide" mode="out-in">
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Subheader from './components/Subheader.vue';

export default {
  components: {
    'AppHeader': Header,
    'AppSubheader': Subheader
  },
  created(){
    // Vue instance is created in the lifecycle
    this.$store.dispatch('initStocks');
  }
}
</script>

<style>
body {
  padding-top: 30px;
  background: #f8f8f8;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-out {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-30px); opacity: 0; }
}

.main-wrapper {
  margin-top: 2rem;
}

.main-container{
  margin-top: 2rem;
}

</style>
