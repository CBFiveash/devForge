<template>
    <div class="challenges-list">
      <h2>Available Challenges</h2>
      <div v-if="challenges.length === 0">
        <p>No challenges available at the moment. Check back later!</p>
      </div>
      <div v-else>
        <ChallengeCard
          v-for="challenge in challenges"
          :key="challenge.id"
          :challenge="challenge"
        />
      </div>
    </div>
  </template>
  
  <script>
  import ChallengeCard from '@/components/ChallengeCard.vue';
  
  export default {
    components: {
      ChallengeCard,
    },
    data() {
      return {
        challenges: [
          { id: 1, title: 'Challenge 1', description: 'Solve the first challenge', completed: false },
          { id: 2, title: 'Challenge 2', description: 'Complete the second challenge', completed: false },
          { id: 3, title: 'Challenge 3', description: 'Solve the third challenge', completed: true },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .challenges-list {
    max-width: 900px;
    margin: 0 auto;
    padding: 16px;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: #333;
    text-align: center;
  }
  
  p {
    text-align: center;
    font-size: 1.1rem;
    color: #777;
  }
  
  </style>
  