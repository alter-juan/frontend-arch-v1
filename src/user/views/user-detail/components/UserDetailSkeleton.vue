<template>
  <div class="profile-container">
    <div class="profile-pic skeleton-loader">
      <!-- Placeholder para la imagen de perfil -->
    </div>
    <div class="profile-info">
      <div class="name skeleton-loader" />
      <div class="email skeleton-loader" />
      <div class="bio skeleton-loader" />
    </div>
  </div>
</template>
  
  <style scoped>
  .profile-container {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  .profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .profile-info .name,
  .profile-info .email,
  .profile-info .bio {
    height: 20px;
    margin-bottom: 10px;
  }
  
  .skeleton-loader {
    background-color: #ccc;
    animation: pulse 1s infinite ease-in-out;
  }
  
  @keyframes pulse {
    0% {
      background-color: #ccc;
    }
    50% {
      background-color: #ddd;
    }
    100% {
      background-color: #ccc;
    }
  }
  </style>