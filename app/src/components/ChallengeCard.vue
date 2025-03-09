<template>
    <div class="card challenge-card">
        <div class="card-header">
            <h3>{{ challenge.title }}</h3>
        </div>
        <div class="card-body">
            <p>{{ challenge.description }}</p>
        </div>
        <div class="card-footer">
            <div class="status-container">
                <div v-if="challenge.completed" class="status completed">
                    <span>Completed</span>
                </div>
                <div v-else class="status ongoing">
                    <span>Ongoing</span>
                </div>
            </div>
            <div v-if="!challenge.completed" class="start-button-container">
                <router-link :to="{ name: 'challenge-session', params: { id: challenge.id } }">
                    <button @click="startChallenge" class="btn btn-primary">Start Challenge</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        challenge: Object, // The challenge data passed down from parent
    },
    methods: {
        startChallenge() {
            console.log(`Starting challenge: ${this.challenge.title}`);
        },
    },
};
</script>

<style scoped>
.challenge-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.challenge-card:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.card-header {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    text-align: center;
}

.card-header h3 {
    margin: 0;
    font-size: 1.25rem;
}

.card-body {
    padding: 16px;
    font-size: 1rem;
    color: #555;
}

.card-footer {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
}

.status-container {
    display: flex;
    align-items: center;
}

.status {
    font-size: 0.875rem;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 12px;
    text-transform: uppercase;
}

.completed {
    background-color: #4caf50;
    color: white;
}

.ongoing {
    background-color: #ff9800;
    color: white;
}

.start-button-container {
    display: flex;
    justify-content: flex-end;
}

.btn {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:hover {
    background-color: #0056b3;
}
</style>