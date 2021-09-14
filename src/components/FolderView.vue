<template>
  <div class="container">
    <p 
      class="folder" 
      @click="this.isFolderOpened = !this.isFolderOpened"
      :class="this.isFolderOpened ? 'opened' : null"
    >
      {{name}}
    </p>

    <div class="wrapper"  v-if="this.isFolderOpened">
      <template v-for="folder in folders">
        <FolderView :name="folder.name" :folders="folder.folders" :files="folder.files"/>
      </template>

      <template v-for="file in files">
        <FileView :name="file.name" :isOpened="this.isFolderOpened"/>
      </template>
    </div>
  </div>
</template>

<script>
import FileView from "./FileView"; 

export default {
  name: 'FolderView',
  components: {FileView},

  props: {
    name: { type: String },
    folders: { type: Array },
    files: { type: Array },

    isOpened: {
      type: Boolean
    }
  },

  data() {
    return {
      isFolderOpened: false,
    }
  },

  mounted() {
      let containers = document.querySelectorAll('.container')

      containers.forEach(container => {
        container.classList.contains('last') ?
        container.classList.remove('last') : null
      })

      containers[containers.length - 1].classList.add('last')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .folder{
    position: relative;
    padding: 10px;
    padding-left: 30px;
    margin: 0;
    margin-bottom: 5px;
    
    background-color: skyblue;
    color: black;

    cursor: pointer;
    z-index: 10;

    transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover,
    &:focus {
      background-color: #498fab;
      color: white;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%) rotate(-90deg);
      content: '';

      width: 15px;
      height: 15px;

      background-image: url('../assets/icons/icon-arr-down.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;

      transition: transform 0.3s ease;
    }

    &.opened::before {
      transform: translateY(-50%) rotate(0deg);
    }
  }

  .container {
    position: relative;
  }

  .wrapper {
    padding-left: 30px;
    position: relative;

    .folder::after {
      position: absolute;
      top: 50%;
      left: -17px;
      width: 17px;
      height: 1px;
      content: '';
      background-color: black;
    }

    .container::before {
      position: absolute;
      top: -13px;
      left: -18px;
      width: 1px;
      height: 33px;
      content: '';
      background-color: black;
    }

    .container:not(.last)::after {
      position: absolute;
      top: 0;
      left: -18px;
      width: 1px;
      height: 100%;
      content: '';
      background-color: black;
    }
  }
</style>
