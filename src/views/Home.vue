<template>
  <div class="home">
    <h1>Adopt a pet that needs a good home.</h1>
    <b-btn>Add Pet</b-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false
    }
  },
  methods: {
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    }
  }
}
</script>
