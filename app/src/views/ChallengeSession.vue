<template>
    <div class="challenge-session">
      <h1>{{ challenge.title }}</h1>
      <p>{{ challenge.description }}</p>
  
      <div class="code-editor">
        <!-- Pass code as prop and use @update:modelValue to catch changes -->
        <Editor :modelValue="code" @update:modelValue="updateCode" />
      </div>
  
      <div class="actions">
        <button @click="submitChallenge" class="btn btn-primary">Submit</button>
        <span v-if="status" class="status">{{ status }}</span>
      </div>
    </div>
  </template>
  
  <script>
  import Editor from "@/components/Editor.vue";
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router"; // to access route params
  
  export default {
    name: "ChallengeSession",
    components: {
      Editor,
    },
    data() {
      return {
        challenge: {},
        code: "", // Store the code here
        status: null,
      };
    },
    methods: {
      fetchChallenge() {
        // Ideally, fetch challenge details based on the route params (challenge ID)
        const route = useRoute();
        const challengeId = route.params.id; // assuming challenge ID is passed as a route param
        // Fetch data from an API or mock data
        this.challenge = {
          title: "Sample Challenge",
          description: "Write a function that returns the sum of two numbers.",
        };
      },
      submitChallenge() {
        // Logic to submit code and check if it's correct
        this.status = "Submitting...";
        // Simulate submission (replace with real API call)
        setTimeout(() => {
          this.status = "Challenge submitted!";
        }, 2000);
      },
      updateCode(newCode) {
        // Update the code when the editor's input changes
        this.code = newCode;
      },
    },
    mounted() {
      this.fetchChallenge();
    },
  };
  </script>
  
  <style scoped>
  .challenge-session {
    padding: 20px;
  }
  
  .code-editor {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .actions {
    margin-top: 20px;
  }
  
  .status {
    margin-left: 10px;
    color: green;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  