<template lang="html">
  <a href="https://api.whatsapp.com/send?phone=551143956747&text=Ol%C3%A1%2C%20poderiam%20me%20ajudar%3F" target="_blank">
    <div id="whats-app-chat">
        <img class="animate__pulse" width="70%" src="@/assets/img/wpp.png" rel="preload" alt="">
    </div>
  </a>
</template>

<style lang="css" scoped>
  #whats-app-chat{
    bottom: 15px;
    cursor: pointer;
    padding: 10px;
    display: flex;
    right: 15px;
    border-radius: 50%;
    position: fixed;
    cursor: pointer;
    z-index: 99;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    visibility: visible;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-align: center;
    background-color: #18c161;
    height: 75px;
    width: 75px;
    box-shadow: 0 0 35px green;
    animation: pulse-green 2s infinite !important;
  }
  #whats-app-chat img{
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
  @keyframes pulse-green {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 25px rgba(51, 217, 178, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
  }

</style>
