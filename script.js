document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("content").style.display = "block";

  // Start typing
  const text = `"i don't know when this world was borned, but I feel like a whole new world was born the moment you were." 🌍💖
"everyone says memories are happen in every life, but for me, just meeting you became the most beautiful memory of all." ✨💖
"When I see your mischievous acts and child things expressions then you look just like a little baby who was born just now." 👶💫
"MADHU You are like the golden doll that walks on Earth, just like the moon that shines beautifully in the sky." 🌙
Just like the sunshine in July, you light up every life you enter ☀️
Born in the rain of July, you were made to bring happiness into everyone's life 💃
On this day, may you receive sweet surprises and endless love. 🍹🌸`;

  const target = document.getElementById("typing");
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      const char = text.charAt(index);
      target.innerHTML += char === '\n' ? '<br>' : char;
      index++;
      setTimeout(typeChar,60);
    } else {
      target.style.borderRight = "none";
    }
  }

  typeChar();

  // Play music
  const audio = document.getElementById("Music");
  audio.play().catch((e) => {
    console.log("Autoplay blocked:", e);
  });
});
