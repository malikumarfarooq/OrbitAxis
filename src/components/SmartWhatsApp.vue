<template>
  <!-- Smart Floating WhatsApp Button -->
  <div class="smart-whatsapp">
    <!-- Main Floating Button -->
    <div 
      class="whatsapp-float"
      :class="{ 'is-open': showOptions }"
      @click="toggleOptions"
    >
      <!-- SVG WhatsApp Icon -->
      <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.453"/>
      </svg>
      <div class="notification-dot" v-if="!showOptions"></div>
    </div>

    <!-- Contact Options Panel -->
    <transition name="slide-up">
      <div v-if="showOptions" class="whatsapp-options-panel">
        <div class="panel-header">
          <h4>Contact via WhatsApp</h4>
          <button @click="closeOptions" class="close-btn">&times;</button>
        </div>
        
        <div class="options-list">
          <div 
            v-for="option in contactOptions" 
            :key="option.id"
            class="option-item"
            @click="initiateChat(option)"
          >
            <div class="option-icon">{{ option.icon }}</div>
            <div class="option-content">
              <div class="option-title">{{ option.title }}</div>
              <div class="option-desc">{{ option.description }}</div>
            </div>
          </div>
        </div>

        <!-- Custom Message Input -->
        <div class="custom-message">
          <textarea 
            v-model="customMessage"
            placeholder="Or type your own message..."
            rows="3"
          ></textarea>
          <button 
            @click="sendCustomMessage"
            :disabled="!customMessage.trim()"
            class="send-custom-btn"
          >
            Send Custom Message
          </button>
        </div>
      </div>
    </transition>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <span>Opening WhatsApp...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state
const showOptions = ref(false);
const loading = ref(false);
const customMessage = ref('');

// Your WhatsApp number (format: 1234567890 without + or spaces)
const phoneNumber = '+923057081054'; // ⚠️ REPLACE WITH YOUR ACTUAL NUMBER!

// Professional contact options
const contactOptions = [
  {
    id: 1,
    icon: '💼',
    title: 'Project Discussion',
    description: 'I have a project in mind',
    message: 'Hello! I visited your portfolio and I have a project I\'d like to discuss with you.'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Collaboration',
    description: 'Let\'s work together',
    message: 'Hi! I\'m impressed with your work and would like to explore collaboration opportunities.'
  },
  {
    id: 3,
    icon: '💬',
    title: 'Quick Chat',
    description: 'General inquiry',
    message: 'Hello! I saw your portfolio and would like to connect with you.'
  },
  {
    id: 4,
    icon: '⏰',
    title: 'Schedule Call',
    description: 'Set up a meeting',
    message: 'Hi! I\'d like to schedule a call to discuss potential work. What times work for you?'
  }
];

// Toggle options panel
const toggleOptions = () => {
  showOptions.value = !showOptions.value;
};

// Close options panel
const closeOptions = () => {
  showOptions.value = false;
};

// Open WhatsApp with selected message
const initiateChat = async (option) => {
  await openWhatsApp(option.message);
  closeOptions();
};

// Send custom message
const sendCustomMessage = async () => {
  if (customMessage.value.trim()) {
    await openWhatsApp(customMessage.value);
    customMessage.value = '';
    closeOptions();
  }
};

// Main function to open WhatsApp
const openWhatsApp = async (message) => {
  loading.value = true;
  
  try {
    // Format the phone number (remove any non-digit characters)
    const formattedNumber = phoneNumber.replace(/\D/g, '');
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
  } finally {
    // Short loading state for better UX
    setTimeout(() => {
      loading.value = false;
    }, 1000);
  }
};

// Close panel when clicking outside
const handleClickOutside = (event) => {
  const whatsappElement = document.querySelector('.smart-whatsapp');
  if (whatsappElement && !whatsappElement.contains(event.target)) {
    closeOptions();
  }
};

// Add event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.smart-whatsapp {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

/* Main Floating Button */
.whatsapp-float {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 3px solid white;
}

/* SVG Icon */
.whatsapp-icon {
  width: 28px;
  height: 28px;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
}

.whatsapp-float.is-open {
  transform: rotate(45deg);
  background: linear-gradient(135deg, #128C7E, #075E54);
}

/* Notification Dot */
.notification-dot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 12px;
  height: 12px;
  background: #FF4081;
  border-radius: 50%;
  border: 2px solid white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

/* Options Panel */
.whatsapp-options-panel {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Panel Header */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #075E54, #128C7E);
  color: white;
}

.panel-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Options List */
.options-list {
  padding: 8px 0;
}

.option-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #f0f0f0;
}

.option-item:hover {
  background-color: #f8f9fa;
}

.option-item:last-child {
  border-bottom: none;
}

.option-icon {
  font-size: 20px;
  margin-right: 12px;
  width: 32px;
  text-align: center;
}

.option-content {
  flex: 1;
}

.option-title {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
}

.option-desc {
  font-size: 12px;
  color: #666;
}

/* Custom Message */
.custom-message {
  padding: 16px 20px;
  border-top: 1px solid #f0f0f0;
}

.custom-message textarea {
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  resize: vertical;
  margin-bottom: 12px;
  font-family: inherit;
}

.custom-message textarea:focus {
  outline: none;
  border-color: #25D366;
  box-shadow: 0 0 0 2px rgba(37, 211, 102, 0.1);
}

.send-custom-btn {
  width: 100%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.send-custom-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.send-custom-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 2000;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Animations */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .smart-whatsapp {
    bottom: 16px;
    right: 16px;
  }
  
  .whatsapp-float {
    width: 56px;
    height: 56px;
  }
  
  .whatsapp-icon {
    width: 24px;
    height: 24px;
  }
  
  .whatsapp-options-panel {
    width: 280px;
    right: -10px;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .whatsapp-float,
  .option-item,
  .send-custom-btn {
    transition: none;
  }
  
  .notification-dot {
    animation: none;
  }
}
</style>