
<div class="slider">
	<div class="slider__track">
	  <label for="slider" class="sr-only">Slider</label>
	  <input
		tabindex="0"
		type="range"
		id="slider"
		min="20"
		max="100"
		step="1"
	  />
	  <div class="slider__fill"></div>
	  <div class="slider__indicator"></div>
	</div>
  </div>
  
<style>
	
@layer normalize, base, demo, slider, animation, debug;

@layer debug {
  [data-reveal='true'] .slider input {
    opacity: 1;
    translate: 0 -150%;
    outline-color: red;
    background: hsl(10 80% 50% / 0.2);
  }

  .slider input {
    outline: 2px dashed #0000;
    transition-property: opacity, outline-color, background, translate;
    transition-duration: 0.5s;
  }

  .slider [type='range']::-webkit-slider-runnable-track {
    height: 100%;
    width: 100%;
    background: hsl(10 80% 50% / 0.25);
  }

  .slider [type='range']::-moz-range-track {
    height: 100%;
    width: 100%;
    background: hsl(10 80% 50% / 0.25);
  }

  .slider ::-webkit-slider-thumb {
    width: var(--height);
    height: var(--height);
  }

  .slider ::-moz-range-thumb {
    width: var(--height);
    height: var(--height);
  }
}

@layer animation {
  :root {
    @media (hover: hover) {
      --transition: 0.625s;
      --ease: linear(
        0 0%,
        0.5007 7.21%,
        0.7803 12.29%,
        0.8883 14.93%,
        0.9724 17.63%,
        1.0343 20.44%,
        1.0754 23.44%,
        1.0898 25.22%,
        1.0984 27.11%,
        1.1014 29.15%,
        1.0989 31.4%,
        1.0854 35.23%,
        1.0196 48.86%,
        1.0043 54.06%,
        0.9956 59.6%,
        0.9925 68.11%,
        1 100%
      );
    }
    /* --transition: 0s;
    --ease: ease; */
  }
  @property --slider-complete {
    initial-value: 0;
    inherits: true;
    syntax: '<integer>';
  }

  .slider {
    position: relative;
  }

  .slider__indicator,
  .slider__fill::after,
  .track {
    transition: translate var(--transition) var(--ease);
  }

  .slider__indicator {
    translate: calc((var(--slider-complete) * 1cqi) - 50%) -50%;
  }
  .slider__fill::after {
    translate: calc(var(--slider-complete) * 1cqi) 0%;
  }

  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    .slider {
      timeline-scope: --thumb;
      animation: progress both linear;
      animation-direction: reverse;
      animation-timeline: --thumb;
      animation-range: contain;
    }
    @keyframes progress {
      to {
        --slider-complete: 100;
      }
    }
    .slider input {
      overflow: hidden;
    }
    .slider ::-webkit-slider-thumb {
      view-timeline: --thumb inline;
    }
  }
}

@layer slider {
  .slider {
    --width: 400;
    --height: 2.625rem;
    display: flex;
    border-radius: 12px;
    color: white;
    width: calc(var(--width) * 1px);
    max-width: calc(100vw - 2rem);
    align-items: center;
  }

  .slider__track {
    flex: 1;
    height: var(--height);
    position: relative;
    container-type: inline-size;
  }

  .slider__fill {
    height: 100%;
    border-radius: 12px;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    translate: 0 -50%;
    clip-path: inset(0 0 0 0 round 12px);
    pointer-events: none;
    background: color-mix(in oklch, canvas, canvasText 15%);
  }

  .slider__fill::after {
    content: '';
    width: 120%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: color-mix(in oklch, canvas, canvasText 75%);
    clip-path: inset(0 0 0 0 round 12px);
    transform: translateX(-100%);
  }

  .slider__indicator {
    pointer-events: none;
    height: 100%;
    aspect-ratio: 1;
    background: white;
    position: absolute;
    top: 50%;
    left: 0;
    translate: calc(((100cqi - 100%) / 10) * 10) -50%;
    outline: 2px solid hsl(0 0% 50%);
  }

  .slider__indicator::after {
    content: '';
    height: 50%;
    width: 4px;
    background: hsl(0 0% 50%);
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 4px;
  }

  .slider__label {
    font-size: 13px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
  }

  .slider input {
    width: 100%;
  }

  .slider [type='range'] {
    height: var(--height);
    outline: none;
  }

  .slider:has(:focus-visible) {
    outline: 2px solid red;
    outline-offset: 4px;
  }

  .slider [type='range']:hover {
    cursor: -webkit-grab;
  }

  .slider [type='range']:active {
    cursor: -webkit-grabbing;
  }

  .slider [type='range'] {
    opacity: 0;
  }
}

@layer base {
  html {
    color-scheme: light dark;
  }

  [data-theme='dark'] {
    color-scheme: dark;
  }

  [data-theme='light'] {
    color-scheme: light;
  }

  :root {
    --font-size-min: 16;
    --font-size-max: 20;
    --font-ratio-min: 1.2;
    --font-ratio-max: 1.33;
    --font-width-min: 375;
    --font-width-max: 1500;
  }

  :where(.fluid) {
    --fluid-min: calc(
      var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0))
    );
    --fluid-max: calc(
      var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0))
    );
    --fluid-preferred: calc(
      (var(--fluid-max) - var(--fluid-min)) /
        (var(--font-width-max) - var(--font-width-min))
    );
    --fluid-type: clamp(
      (var(--fluid-min) / 16) * 1rem,
      ((var(--fluid-min) / 16) * 1rem) -
        (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
        (var(--fluid-preferred) * var(--variable-unit, 100vi)),
      (var(--fluid-max) / 16) * 1rem
    );
    font-size: var(--fluid-type);
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    background: light-dark(#fff, #000);
    display: grid;
    place-items: center;
    min-height: 100svh;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
      Helvetica, Arial, sans-serif, system-ui;
  }

  body::before {
    --size: 45px;
    --line: color-mix(in lch, canvasText, transparent 70%);
    content: '';
    height: 100vh;
    width: 100vw;
    position: fixed;
    background: linear-gradient(
          90deg,
          var(--line) 1px,
          transparent 1px var(--size)
        )
        50% 50% / var(--size) var(--size),
      linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
        var(--size) var(--size);
    mask: linear-gradient(-20deg, transparent 50%, white);
    top: 0;
    transform-style: flat;
    pointer-events: none;
    z-index: -1;
  }

  .bear-link {
    color: canvasText;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 48px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    opacity: 0.8;
  }

  :where(.x-link, .bear-link):is(:hover, :focus-visible) {
    opacity: 1;
  }

  .bear-link svg {
    width: 75%;
  }

  /* Utilities */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
}

</style>
