const memories = {
  cat: {
    title: "Cat",
    tag: "play / trigger",
    text: "The cat rarely waits. It moves before being guided, as if it remembers what comes next. Small disruptions follow its path: a nudge, a fall, a shift in balance. The system does not rely on control. Sometimes, it relies on play.",
  },
  flower: {
    title: "Flower",
    tag: "care / growth",
    text: "The plant keeps leaning toward the light, even when no one is watching. Its leaves hold a quiet persistence, repeating a gesture of care that does not need to be spoken. Some forms of love remain visible simply because they continue.",
  },
  pan: {
    title: "Pan",
    tag: "routine / warmth",
    text: "The pan holds warmth longer than expected. When disturbed, it begins a small chain of actions — a sound, a shift, a sequence across the room. It does not recreate the past. It only preserves the rhythm of a familiar morning.",
  },
  teddy: {
    title: "Teddy Bear",
    tag: "memory / gift",
    text: "The toy remains where it was last held. Soft, unchanged, carrying the shape of small hands that are no longer here. Some objects are not meant to move. They are meant to stay, and in staying, they remember.",
  },
};

const panel = document.querySelector(".panel");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const memoryTag = document.getElementById("memoryTag");
const objects = document.querySelectorAll(".obj");

const stage = document.getElementById("stage");

function setMemory(key) {
  const item = memories[key];
  if (!item) return;

  stage.classList.add("active-glow");

  setTimeout(() => {
    stage.classList.remove("active-glow");
  }, 400);

  objects.forEach((obj) => {
    obj.classList.toggle("active", obj.dataset.key === key);
  });

  panel.classList.add("is-switching");

  const activeObj = document.querySelector(`.obj[data-key="${key}"]`);
  if (activeObj) {
    activeObj.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)" },
        { transform: "translate(-50%, -50%) scale(2.05)" },
        { transform: "translate(-50%, -50%) scale(1.95)" },
      ],
      {
        duration: 320,
        easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    );
  }

  window.setTimeout(() => {
    memoryTitle.textContent = item.title;
    memoryText.textContent = item.text;
    memoryTag.textContent = item.tag;

    panel.classList.remove("is-switching");
  }, 160);
}

objects.forEach((obj) => {
  obj.addEventListener("click", () => {
    setMemory(obj.dataset.key);
  });
});
