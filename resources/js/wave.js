document.addEventListener("DOMContentLoaded", () => {
  const svg = document.getElementById('topoSVG');
  console.log("SVG:", svg);

  const width = 800;
  const height = 600;
  const layers = 20;
  const spacing = 25;
  const paths = [];
  let offset = 0;
  let fadeStartTime = null;
  const fadeDuration = 10000;
  let fadeInProgress = false;

  function createPaths() {
    for (let i = 0; i < layers; i++) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      svg.appendChild(path);
      paths.push(path);
    }
  }

  function updatePaths(offset) {
    for (let i = 0; i < layers; i++) {
      const layerOffset = i * spacing;
      let d = "M 0 " + (layerOffset + 100);

      for (let x = 0; x <= width; x += 10) {
        const y =
          layerOffset +
          100 +
          Math.sin((x + offset + i * 30) * 0.01) * 35 +
          Math.cos((x + offset + i * 15) * 0.005) * 15;
        d += " L " + x + " " + y;
      }

      paths[i].setAttribute("d", d);
    }
  }

  function startFadeOut() {
    paths.forEach((path) => {
      path.style.opacity = '0';
    });
  }

  function resetPaths() {
    paths.forEach((path) => {
      path.style.opacity = '0.6';
    });
    offset = 0;
  }

  function animate(currentTime) {
    if (!fadeStartTime) {
      fadeStartTime = currentTime;
    }

    offset += 0.5;

    if (offset > width) {
      offset = -width;
    }

    updatePaths(offset);

    if (currentTime - fadeStartTime > fadeDuration && !fadeInProgress) {
      fadeInProgress = true;
      startFadeOut();

      setTimeout(() => {
        resetPaths();
        fadeStartTime = null;
        fadeInProgress = false;
      }, 3000);
    }

    requestAnimationFrame(animate);
  }

  createPaths();
  requestAnimationFrame(animate);
});