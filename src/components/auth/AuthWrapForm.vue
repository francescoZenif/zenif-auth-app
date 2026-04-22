<template>
  <div class="bg-black text-white min-h-screen flex items-center justify-center  ">

    <div class="max-w-[450px] w-full m-5 gradient-content">
      <slot> </slot>
    </div>
          <div class="gradient"></div>
  </div>
</template>

<style scoped>
.gradient-content{
  position: relative;
  z-index: 2;
}
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;

  background-color: #000;
  /*  background-image:
   radial-gradient(at 96% 8%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%),
    radial-gradient(at 32% 8%, hsl(120, 2%, 9%) 0px, transparent 50%),
    radial-gradient(at 64% 88%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%);
 */

    background-image: 
    radial-gradient(at 96% 8%,  hsl(76.43, 100%, 16.47%) 0px, transparent 50%), 
    radial-gradient(at 32% 8%, hsl(0, 0%, 0%) 0px, transparent 50%), 
    radial-gradient(at 64% 88%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%),
    radial-gradient(at 39% 83%, hsl(0, 0%, 0%) 0px, transparent 50%), 
    radial-gradient(at 30% 21%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), 
    radial-gradient(at 66% 54%, hsl(0, 0%, 0%) 0px, transparent 50%), 
    radial-gradient(at 74% 47%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%);  

    
  background-size: 200% 200%;
  animation: move-bg 10s linear infinite;
}

@keyframes move-bg {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
