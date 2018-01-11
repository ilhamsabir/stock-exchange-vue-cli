<template>
  <div class="no-data">
    <div class="icon">
      <i class="fa fa-database"></i>
    </div>
    <div class="title">
      No data available
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
.no-data {
  border: 1px dashed #ddd;
  padding: 1rem;
  min-height: 300px;
}
.no-data .icon {
  margin-top: 10rem;
  text-align: center;
  font-weight: 600;
  font-size: 5.6rem;
  color: #b1b1b1;
}
.no-data .title {
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem;
  color: #b1b1b1;
}
</style>
