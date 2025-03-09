<template>
  <div class="landing-page">
    <section class="main-section">
      <h1>Welcome to devForge</h1>
      <p>Boost your coding skills with daily challenges!</p>
      <button class="start-btn" @click="goToChallenges">Start Now</button>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-card" v-for="(feature, index) in features" :key="index">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      features: [
        {
          title: "Daily Challenges",
          description: "Solve coding challenges and improve your skills every day."
        },
        {
          title: "Leaderboard",
          description: "Compete with other users and climb the rankings."
        },
        {
          title: "Track Progress",
          description: "Keep track of your coding streak and achievements."
        }
      ]
    };
  },
  methods: {
    goToChallenges() {
      this.$router.push("/challenges");
    }
  }
};
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
}

.main-section {
  text-align: center;
  margin-top: 2rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.start-btn {
  background-color: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 1rem;
}

.start-btn:hover {
  background-color: #45a049;
}

.features {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.feature-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin: 0 1rem;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
}

.feature-card p {
  color: #555;
}
</style>
