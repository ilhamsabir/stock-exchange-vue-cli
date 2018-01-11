<template>
  <!-- modal save data -->
  <div class="" v-if="isShowModal === true">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header" v-if="modalType === 'SAVE'">
                Save data
              </slot>
              <slot name="header" v-else-if="modalType === 'LOAD'">
                Load data
              </slot>
            </div>

            <!-- save data -->
            <div class="modal-body" v-if="modalType === 'SAVE'">
              <slot name="body">
                <div class="form-group">
                  <label for="name" class="cols-sm-2 control-label">Collection name</label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <input type="text" class="form-control" name="name" v-model="collectionName"  placeholder="Your collection name"/>
                      <span class="error" v-show="errorCollectionName">Required </span>
                    </div>
                  </div>
                </div>
              </slot>
            </div>

            <!-- load data -->
            <div class="modal-body" v-else-if="modalType === 'LOAD'">
              <slot name="body">
                <div class="" v-for="item in collections" :key="item.id">
                  <div class="list-collection-item" @click="selectDataToLoad(item.id)">
                    {{ item.name }}
                  </div>
                </div>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="btn btn-deafult" @click="toggleModal">Cancel</button>
                <button class="btn btn-sm btn-ghost-main" v-if="modalType === 'SAVE'" @click="saveData">Save</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: [
    'isShowModal',
    'toggleModal',
    'modalType',
    'collections',
    'saveData',
    'selectDataToLoad',
    'errorCollectionName',
  ],
  data() {
    return {
      collectionName: '',
    }
  },
}
</script>

<style lang="css">
</style>
