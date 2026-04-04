  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  // Set actual drawing size
  const width = 380;
  const height = 480;
  canvas.width = width;
  canvas.height = height;

  const fontSize = 13;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  ctx.font = `${fontSize}px monospace`;

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < drops.length; i++) {
      const char = Math.random() > 0.5 ? "1" : "0";
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Occasional brighter character
      if (Math.random() < 0.035 && drops[i] > 1) {
        ctx.fillStyle = "#b6ffb6";
        ctx.fillText(char, x, y - fontSize);
      }

      ctx.fillStyle = "#0f0";
      ctx.fillText(char, x, y);

      if (y > height || Math.random() > 0.995) {
        drops[i] = 0;
      }
      drops[i] += 0.11;
    }

    requestAnimationFrame(draw);
  }

  draw();