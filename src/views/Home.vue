<template>
  <div class="home">
    <h1>Adopt a pet that needs a good home.</h1>
    <b-btn @click="togglePetForm">Add Pet</b-btn>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="petName" label="Pet name:" label-for="petName">
        <b-form-input
          id="petNameInput"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="petBreed" label="Breed:" label-for="petBreedInput">
        <b-form-input
          id="petBreedInput"
          v-model="form.breed"
          required
          placeholder="Enter breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="petGender">
        <b-form-radio
          id="maleCheckbox"
          v-model="form.gender"
          name="male"
          value="male"
        >male
        </b-form-radio>
        <b-form-radio
          id="femaleCheckbox"
          v-model="form.gender"
          name="female"
          value="female"
        >female
        </b-form-radio>
      </b-form-group>

      <b-form-group id="speciesSelect" label="Species:" label-for="speciesSelect">
        <b-form-select
          id="speciesSelect"
          v-model="form.species"
          :options="['dogs', 'cats']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="petAge" label="Pet age:" label-for="petAgeInput">
        <b-form-input
          id="petAgeInput"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      form: {
        name: '',
        breed: '',
        gender: null,
        age: 0,
        species: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, breed, gender, age, name } = this.form
      const payload = {
        species,
        pet: {
          name,
          breed,
          gender,
          age
        }
      }
      this.addPet(payload)
      this.form = {
        name: '',
        breed: '',
        gender: null,
        age: 0,
        species: null
      }
    }
  }
}
</script>
