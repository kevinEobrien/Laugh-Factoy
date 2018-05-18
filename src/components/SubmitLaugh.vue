<template>
  <div class="submit-card">
      <h2>Submit a laugh</h2>
    <form id="form-input" v-on:submit.prevent="submitLaugh">
      <label for="name">Name</label>
      <input id=nameinput type="text" v-model="submission.name">
      <label for="description">Description</label>
      <input id=descriptionInput type="text" v-model="submission.description">
       <select @change="chooseMethod" name="method">
          <option value="Placeholder">Select a submission method</option>
          <option value="Record">Record Your Laugh</option>
          <option value="ChooseFile">Choose Audio Laugh to Upload</option>
          <option value="URL">Link to a laugh URL</option>
      </select> 
      <label v-show="url" for="laughlink">Link to your laugh</label>
      <input v-show="url" id=link type="text" v-model="submission.laughlink">
      <button v-show="mic">Record Your Laugh</button>
      <form v-show="findFile" id="uploadForm" @submit.prevent="uploadLaugh">
        <h2>{{this.post}}</h2>
        <label for="image">Add Your Laugh Here</label>
        <input type="file" name="audio" id="audio">
          <input  type="submit" name="submit" id="submit" value="Upload">
      </form>
      <input  id="submit" type="submit" value="Submit">
    </form>
    <button @click="startStop" v-show="recordButton">Play Button</button>
    <button @click="recordAudio" >Mic Test</button>
  </div>
</template>
<script>
export default {
  name: "SubmitLaugh",
  props: ["laughs", "getListings"],
  data() {
    return {
      audioChunks: [],
      recordButton: false,
      record: false,
      url: false,
      findFile: false,
      mic: false,
      submission: {
        name: "",
        description: "",
        laughlink: "",
        likes: 0
      },
      apiURL: "https://vast-wildwood-21026.herokuapp.com/"
    };
  },
  methods: {
    submitLaugh() {
      fetch(this.apiURL, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.submission)
      }).then(response => response.json());
      this.submission.name = "";
      this.submission.description = "";
      this.submission.laughlink = "";
      this.submission.likes = 0;
    },
    uploadLaugh(event) {
      console.log(event);
      fetch("https://vast-wildwood-21026.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.submission.laughlink = response.audioUrl))
        .then(() => alert("Laugh Uploaded. Don't forget to submit it 😉"));
    },
    startStop() {
      this.record = !this.record;
    },
    useRecorder(stream) {
      let mediaRecorder = new MediaRecorder(stream);
      let start = () => mediaRecorder.start();
      let stop = () => mediaRecorder.stop();
      if ((record = true)) {
        start();
      } else if ((record = false)) {
        stop();
      }
      mediaRecorder.onstop = function(event) {
        console.log("data available after MediaRecorder.stop() called.");
        mediaRecorder.ondataavailable = function(event) {
          this.audioChunks.push(event.data);
        };
        let audioBlob = new Blob(this.audioChunks);
        this.uploadLaugh(audioBlob);
        console.log(
          "If it spit out a link it shoul be here => ",
          this.submission.laughlink
        );
      };
    },
    recordAudio() {
      this.recordButton = true;
      let stream = navigator.mediaDevices.getUserMedia({
        audio: true
      });
      this.useRecorder(stream);
    },
    chooseMethod() {
      let select = document.querySelector("select");
      if (select.value === "URL") {
        this.url = true;
        this.findFile = false;
        this.mic = false;
      } else if (select.value === "ChooseFile") {
        this.findFile = true;
        this.url = false;
        this.mic = false;
      } else if (select.value === "Record") {
        this.mic = true;
        this.findFile = false;
        this.url = false;
      }
    }
  }
};
</script>
<style scoped>
.submit-card {
  background-color: white;
  border-radius: 20px;
}
div {
  margin: 3rem 5rem 1rem 5rem;
  border: 4px;
  background-color: white;
  border-radius: 20px;
}
label {
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px black;
}
#submit {
  font-family: Tahoma, sans-serif;
  font-size: 2rem;
  height: 3rem;
  border-radius: 10px;
}
</style>

