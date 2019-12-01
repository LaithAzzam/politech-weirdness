export default {
  searchTerm: {
    field: 'searchTerm',
    label: 'Search Term',
    placeholder: 'Tom Cruise, Tubesocks, Glitter Glue',
    type: 'text',
    required: true,
    validateOnBlur: true,
    validate: (value) => {
      if (!value) return 'Oh come on... Anything!'
    }
  }
}
