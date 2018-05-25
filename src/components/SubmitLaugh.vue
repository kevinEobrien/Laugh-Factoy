<template>
  <div class="submit-card">
      <h2>Submit a laugh</h2>
    <form id="form-input" >
      <label for="name">Name</label>
      <input id=nameinput type="text" v-model="submission.name">
      <label for="description">Description</label>
      <input id=descriptionInput type="text" v-model="submission.description">
      <div class="custom-select">
        <select @change.prevent="chooseMethod" name="method">
          <option value="Placeholder">Select a submission method</option>
          <option value="Record">Record Your Laugh</option>
          <option class="s-page-button" value="ChooseFile">Choose Audio Laugh to Upload</option>
          <option value="URL">Link to a laugh URL</option>
        </select>
      </div> 
      <label v-show="url" for="laughlink">Link to your laugh</label>
      <input v-show="url" id=link type="text" v-model="submission.laughlink">
      <form v-show="findFile" id="uploadForm" @submit.prevent="uploadLaugh">
        <h2>{{this.post}}</h2>
        <label for="image">Add Your Laugh Here</label>
        <input type="file" name="audio" id="audio">
          <input  class="s-page-button" type="submit" name="submit" id="submit" value="Upload">
      </form>
      <img v-show="mic" src="https://media.giphy.com/media/qRhgtheyqGnPW/giphy.gif" width="480" height="361" frameBorder="0">
      <br>
       <button class="s-page-button" id="recordLight" @click="stopRecorder" v-show="recordButton">Stop Recording</button>
      <button class="s-page-button" v-show="mic" @click.prevent="recordAudio">Record</button>
      <audio v-show="mic" controls></audio>
      <button class="s-page-button" v-show="readyForUpload" @click="uploadR">Upload Recording</button>
      <input  @click.prevent="submitLaugh" class="s-page-button" type="submit" value="Submit">
    </form>
  </div>
</template>
<script>
export default {
  name: "SubmitLaugh",
  props: ["laughs"],
  data() {
    return {
      audioURL: "",
      audioBlob: undefined,
      mediaRecorder: {},
      audioChunks: [],
      readyForUpload: false,
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
    getListings() {
      return fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.laughs = response.laughs.sort();
        });
    },
    submitLaugh() {
      if (
        this.submission.laughlink === "" ||
        this.submission.name === "" ||
        this.submission.description === ""
      ) {
        alert(
          "Please be sure you have filled out a name, description, and provided a laugh in order to submit."
        );
      } else {
        fetch(this.apiURL, {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify(this.submission)
        }).then(response => response.json());
        this.submission.name = "";
        this.submission.description = "";
        this.submission.laughlink = "";
        this.submission.likes = 0;
        this.readyForUpload = false;
        this.audioURL = "";
        console.log("gets to end of function");
        this.getListings();
        this.$route.router.go("/laughlist");
      }
    },
    uploadLaugh(event) {
      console.log("no R");
      event.stopPropagation();
      fetch("https://vast-wildwood-21026.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.submission.laughlink = response.audioUrl))
        .then(() => alert("Laugh Uploaded. Don't forget to submit it 😉"));
    },
    uploadR(event) {
      event.stopPropagation();
      let formData = new FormData();
      formData.append("audio", this.audioBlob);
      fetch("https://vast-wildwood-21026.herokuapp.com/upload", {
        method: "POST",
        body: formData,
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
        .then(() => alert("Laugh Uploaded. Don't forget to submit it 😉"));
    },
    stopRecorder() {
      this.mediaRecorder.stop();
      let recordLight = document.querySelector("#recordLight");
      recordLight.style.background = "";
      recordLight.style.color = "";
      this.mediaRecorder.onstop = () => {
        console.log("data available after MediaRecorder.stop() called.");
        this.recordButton = false;
        this.readyForUpload = true;
        URL.revokeObjectURL(this.audioUrl);
      };
    },
    recordAudio() {
      if (navigator.mediaDevices) {
        console.log("getUserMedia supported.");
      }
      this.recordButton = true;
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false
        })
        .then(stream => {
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.start();
          let recordLight = document.querySelector("#recordLight");
          recordLight.style.background = "red";
          recordLight.style.color = "black";
          this.mediaRecorder.ondataavailable = event => {
            let audioChunks = [];
            audioChunks.push(event.data);
            this.audioBlob = new Blob(audioChunks, {
              type: "audio/wav; codecs=opus"
            });

            let newURL = URL.createObjectURL(this.audioBlob);
            let audio = document.querySelector("audio");
            this.audioURL = newURL;
            audio.src = this.audioURL;
            audioChunks = [];
          };
        });
    },
    chooseMethod() {
      let select = document.querySelector("select");
      if (select.value === "URL") {
        this.url = true;
        this.findFile = false;
        this.mic = false;
        this.readyForUpload = false;
      } else if (select.value === "ChooseFile") {
        this.findFile = true;
        this.url = false;
        this.mic = false;
        this.readyForUpload = false;
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
.s-page-button {
  font-family: Tahoma, sans-serif;
  font-size: 2rem;
  height: 3rem;
  border-radius: 10px;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* remove default arrow */
  background-image: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-c-128.png")
    no-repeat right;
  font-size: 2rem;
}
</style>

