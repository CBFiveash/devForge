<template>
    <footer class="footer">
        <p>&copy; 2025 devForge. All rights reserved.</p>
        <p>
            <a href="https://github.com/CBFiveash/devForge" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://github.com/CBFiveash" target="_blank" rel="noopener noreferrer">Contact</a>
        </p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: relative;
    bottom: 0;
    width: 100%;
}

.footer a {
    color: #ddd;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}
</style>