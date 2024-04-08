<template>
  <Teleport to="body">
    <div class="login-loader">
      <svg
        class="ring-loader"
        viewBox="25 25 50 50"
        stroke-width="5"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
        />
      </svg>
    </div>
  </Teleport>
</template>

<style>
.login-loader {
  position: fixed;
  inset: 0;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: hsla(0, 0%, 14%, 0.5);
}

.ring-loader {
  --uib-size: 60px;
  --uib-speed: 2s;
  --uib-color: var(--color-background-complementary, #82d39d);

  height: var(--uib-size);
  width: var(--uib-size);
  vertical-align: middle;
  transform-origin: center;
  animation: rotate var(--uib-speed) linear infinite;
}

.ring-loader circle {
  fill: none;
  stroke: var(--uib-color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes stretch {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }

  100% {
    stroke-dashoffset: -124px;
  }
}
</style>