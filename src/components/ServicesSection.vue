<template>
  <section id="services" class="services">
    <div class="container">
      <h2 class="section-title">My <span>Services</span></h2>
      <div class="services-grid">
        <div class="service-card animate-fade-in">
          <div class="service-icon">
            <i class="fas fa-laptop-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>Custom web applications built with Laravel and Vue.js, tailored to your specific business needs.</p>
        </div>
        <div class="service-card animate-fade-in delay-1">
          <div class="service-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Responsive Design</h3>
          <p>Websites that look great and work perfectly on all devices, from desktops to smartphones.</p>
        </div>
        <div class="service-card animate-fade-in delay-2">
          <div class="service-icon">
            <i class="fas fa-server"></i>
          </div>
          <h3>API Development</h3>
          <p>RESTful API design and implementation with Laravel for web and mobile applications.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection'
}
</script>   