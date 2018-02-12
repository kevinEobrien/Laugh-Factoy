<template>
  <div>
      <h2>Submit a laugh</h2>
    <form id='form-input' v-on:submit.prevent='submitLaugh'>
      <label for='name'>Name</label>
      <input id=nameinput type='text' v-model='submission.name'>
      <label for='description'>Description</label>
      <input id=descriptionInput type='text' v-model='submission.description'>
      <label for='laughlink'>Link to your laugh</label>
      <input id=link type='text' v-model='submission.laughlink'>
      <input id='submit' type='submit' value='Submit'>
    </form>
  </div>
</template>
<script>
export default{
  name: 'SubmitLaugh',
  props: ['apiURL', 'laughs', 'getListings'],
  data() {
    return {
      submission: {
        name: '',
        description: '',
        laughlink: '',
        likes: 0
      }
    }
  },
  methods: {
    submitLaugh() {
    //   if (event.target['nameinput'].value.length > 0 && event.target['descriptioninput'].value.length > 0 && event.target['link'].value.length > 0
    //   ) {
      fetch(this.apiURL, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.submission)
      })
        .then(response => response.json())
        .then(() => {
          this.getListings()
        })
      //   } else {
      //     console.log('Please complete all fields before       submitting.')
      //   }
      this.submission.name = ''
      this.submission.description = ''
      this.submission.laughlink = ''
      this.submission.likes = 0
    }
  }
}
</script>
