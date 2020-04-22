export default {
  animalCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  catArray: (state) => {
    return state.pets.filter(pet => {
      return pet.species === 'cat'
    })
  }
}
