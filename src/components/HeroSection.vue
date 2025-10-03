<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <div class="hero-text animate-fade-in">
        <h1>Full-Stack Developer & <span>AI Enthusiast</span></h1>
        <p>I create modern, responsive web applications with clean code and exceptional user experiences. Specializing in AI integration and modern web technologies.</p>
        <div>
          <a href="#projects" class="btn">View My Work</a>
          <a href="#contact" class="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div class="hero-image animate-fade-in delay-1">
        <div class="hero-image-wrapper glass-card">
          <img :src="profileImage" alt="Your Profile" class="profile-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '/src/assets/profile.jpeg'

export default {
  name: 'HeroSection',
  data() {
    return {
      profileImage
    }
  }
}
</script>

<style scoped>
.hero-image-wrapper {
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 2px solid var(--glass-border);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>