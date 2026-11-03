// =========================================================================
// SCRIPT INTERAKTIF WEBSITE ULANG TAHUN
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initDynamicContent();
  initParticles();
  initMusicPlayer();
  initSurpriseTrigger();
  initCakeCandle();
  initVirtualHug();
  initModal();
  initMiniGame();
  initSpinningCake();
});

// 1. POPULATE KONTEN SECARA DINAMIS DARI config.js
function initDynamicContent() {
  if (typeof CONFIG === "undefined") {
    console.error("Config file not loaded!");
    return;
  }

  // Set document title
  document.title = `Happy Birthday, ${CONFIG.girlfriendName}! 💖`;

  // Intro Screen
  setText("introGreeting", CONFIG.intro.greeting);
  setText("introMessage", CONFIG.intro.message);
  setText("introButtonText", CONFIG.intro.buttonText);

  // Hero Section
  setText("heroBadge", CONFIG.hero.badge);
  setText("heroTitle", CONFIG.hero.title);
  setText("heroGirlfriendName", CONFIG.girlfriendName);
  setText("heroSubtitle", CONFIG.hero.subtitle);

  // Cake Section
  setText("cakeTitle", CONFIG.cake.title);
  setText("cakeSubtitle", CONFIG.cake.subtitle);
  setText("cakeButtonText", CONFIG.cake.buttonText);
  setText("cakeWishAlert", CONFIG.cake.wishedMessage);

  // Letter Section
  setText("letterDate", CONFIG.letter.date);
  setText("letterSalutation", CONFIG.letter.salutation);
  setText("letterClosing", CONFIG.letter.closing);
  setText("letterSender", CONFIG.letter.sender);

  const paragraphsContainer = document.getElementById("letterParagraphs");
  if (paragraphsContainer && CONFIG.letter.paragraphs) {
    paragraphsContainer.innerHTML = CONFIG.letter.paragraphs
      .map(p => `<p class="leading-relaxed indent-4">${p}</p>`)
      .join("");
  }

  // Polaroid Photos Section
  const photosGrid = document.getElementById("photosGrid");
  if (photosGrid && CONFIG.photos) {
    const tilts = [-3, 2, -2, 3, -1.5, 2.5];
    photosGrid.innerHTML = CONFIG.photos.map((photo, index) => {
      const tilt = tilts[index % tilts.length];
      return `
        <div class="polaroid-frame rounded-md group" style="transform: rotate(${tilt}deg);" onclick="openPhotoModal('${photo.url}', '${photo.caption.replace(/'/g, "\\'")}', '${photo.date}')">
          <div class="washi-tape"></div>
          <div class="w-full aspect-square overflow-hidden rounded bg-stone-100 mb-3">
            <img src="${photo.url}" alt="${photo.caption}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=700'">
          </div>
          <div class="text-center px-1">
            <p class="font-handwriting text-lg text-stone-800 leading-tight">${photo.caption}</p>
            <p class="text-[11px] text-stone-400 mt-1 font-sans">${photo.date}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  // "Open When..." Cards
  const openWhenContainer = document.getElementById("openWhenContainer");
  if (openWhenContainer && CONFIG.openWhenCards) {
    openWhenContainer.innerHTML = CONFIG.openWhenCards.map((card, idx) => {
      return `
        <div class="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 cursor-pointer flex items-center gap-4 transition-all" onclick="openEnvelopeModal(${idx})">
          <div class="w-14 h-14 rounded-2xl bg-rose-100/90 text-rose-500 flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
            ${card.icon || "💌"}
          </div>
          <div class="flex-grow">
            <span class="text-[10px] font-bold uppercase tracking-wider text-rose-400 bg-rose-50 px-2 py-0.5 rounded-full inline-block mb-1">
              Open When
            </span>
            <h4 class="font-heading font-bold text-stone-800 text-base sm:text-lg">${card.title}</h4>
            <p class="text-xs text-stone-500 mt-0.5">${card.preview}</p>
          </div>
          <div class="text-rose-400 text-lg font-bold pr-1">
            💌
          </div>
        </div>
      `;
    }).join("");
  }

  // Reasons Why I Love You
  const reasonsGrid = document.getElementById("reasonsGrid");
  if (reasonsGrid && CONFIG.reasons) {
    reasonsGrid.innerHTML = CONFIG.reasons.map((reason, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      return `
        <div class="glass-card rounded-2xl p-4 flex items-start gap-3.5 hover:border-rose-300 transition-all">
          <span class="font-heading font-bold text-rose-400 text-sm bg-rose-50 rounded-lg px-2 py-1">${num}</span>
          <p class="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium pt-0.5">${reason}</p>
        </div>
      `;
    }).join("");
  }

  // Hug Section
  setText("hugTitle", CONFIG.hugSection.title);
  setText("hugSubtitle", CONFIG.hugSection.subtitle);

  // Mini Game Section
  if (CONFIG.minigame) {
    setText("gameBadge", CONFIG.minigame.badge);
    setText("gameTitle", CONFIG.minigame.title);
    setText("gameSubtitle", CONFIG.minigame.subtitle);
  }

  // Footer
  setText("footerNickname", CONFIG.girlfriendName);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.innerText = value;
}

// 2. MUSIK PLAYER LOGIC
let isPlaying = false;
const bgMusic = document.getElementById("bgMusic");
const musicSource = document.getElementById("musicSource");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const musicDisc = document.getElementById("musicDisc");
const playerSongTitle = document.getElementById("playerSongTitle");
const playerIcon = document.getElementById("playerIcon");
const floatingMusicPlayer = document.getElementById("floatingMusicPlayer");

function initMusicPlayer() {
  if (CONFIG.music && CONFIG.music.src) {
    musicSource.src = CONFIG.music.src;
    bgMusic.load();
    if (playerSongTitle) playerSongTitle.innerText = CONFIG.music.title || "Lagu Kita";
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener("click", toggleMusic);
  }
}

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicDisc.classList.remove("playing");
    playerIcon.innerText = "▶️";
  } else {
    bgMusic.play().then(() => {
      isPlaying = true;
      musicDisc.classList.add("playing");
      playerIcon.innerText = "⏸️";
    }).catch(err => {
      console.warn("Audio playback issue:", err);
    });
  }
}

// 3. OVERLAY GATE SURPRISE & MUSIC TRIGGER
function initSurpriseTrigger() {
  const startSurpriseBtn = document.getElementById("startSurpriseBtn");
  const introOverlay = document.getElementById("introOverlay");
  const mainContent = document.getElementById("mainContent");

  if (startSurpriseBtn) {
    startSurpriseBtn.addEventListener("click", () => {
      // Confetti burst
      fireConfettiCannon();

      // Start music
      toggleMusic();

      // Fade out intro overlay smoothly
      introOverlay.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => {
        introOverlay.classList.add("hidden");
        floatingMusicPlayer.classList.remove("hidden");
        mainContent.classList.remove("opacity-0");
      }, 700);
    });
  }
}

// 4. COUNTER HARI BERSAMA (ANNIVERSARY / DAYS TOGETHER COUNTER)
function initDaysCounter() {
  const startDate = new Date(CONFIG.anniversaryDate);

  function updateCounter() {
    const now = new Date();
    const diffTime = Math.max(0, now - startDate);

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
    const seconds = Math.floor((diffTime / 1000) % 60);

    const dEl = document.getElementById("daysCount");
    const hEl = document.getElementById("hoursCount");
    const mEl = document.getElementById("minutesCount");
    const sEl = document.getElementById("secondsCount");

    if (dEl) dEl.innerText = days;
    if (hEl) hEl.innerText = hours;
    if (mEl) mEl.innerText = minutes;
    if (sEl) sEl.innerText = seconds;
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

// 5. KUE ULANG TAHUN & TIUP LILIN
function initCakeCandle() {
  const blowCandleBtn = document.getElementById("blowCandleBtn");
  const candleFlame = document.getElementById("candleFlame");
  const candleSmoke = document.getElementById("candleSmoke");
  const cakeWishAlert = document.getElementById("cakeWishAlert");
  let isBlown = false;

  if (blowCandleBtn) {
    blowCandleBtn.addEventListener("click", () => {
      if (isBlown) return;
      isBlown = true;

      // Animasi api mati & asap mengepul
      candleFlame.classList.add("blown-out");
      candleSmoke.classList.add("active");

      // Confetti besar
      fireEpicCelebration();

      // Tampilkan ucapan
      setTimeout(() => {
        cakeWishAlert.classList.remove("hidden");
        blowCandleBtn.innerText = "Lilin Telah Ditiup! ✨";
        blowCandleBtn.classList.remove("from-amber-400", "to-rose-400");
        blowCandleBtn.classList.add("bg-stone-300", "cursor-default", "text-stone-600");
      }, 600);
    });
  }
}

// 6. CONFETTI ANIMATIONS
function fireConfettiCannon() {
  if (typeof confetti !== "function") return;

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  });
}

function fireEpicCelebration() {
  if (typeof confetti !== "function") return;

  const duration = 3.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 250);
}

// 7. PARTICLES BACKGROUND GENERATOR
function initParticles() {
  const container = document.getElementById("particleContainer");
  if (!container) return;

  const icons = ["✨", "🌸", "💕", "🤍", "💖", "⭐"];
  const particleCount = 18;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-particle";
    particle.innerText = icons[Math.floor(Math.random() * icons.length)];
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.fontSize = `${Math.random() * 14 + 14}px`;
    particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    container.appendChild(particle);
  }
}

// 8. VIRTUAL HUG BUTTON & FLOATING HEARTS
let hugCount = 0;
function initVirtualHug() {
  const sendHugBtn = document.getElementById("sendHugBtn");
  const hugCountEl = document.getElementById("hugCount");

  if (sendHugBtn) {
    sendHugBtn.addEventListener("click", (e) => {
      hugCount++;
      if (hugCountEl) hugCountEl.innerText = hugCount;

      // Spawn floating heart particle at click
      spawnFloatingHeart(e.clientX, e.clientY);

      // Mini confetti on milestone
      if (hugCount % 5 === 0 && typeof confetti === "function") {
        confetti({
          particleCount: 25,
          spread: 50,
          origin: {
            x: e.clientX / window.innerWidth,
            y: e.clientY / window.innerHeight
          }
        });
      }
    });
  }
}

function spawnFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart-particle";
  heart.innerText = ["💖", "💕", "🥰", "🌸", "✨"][Math.floor(Math.random() * 5)];
  heart.style.left = `${x - 12}px`;
  heart.style.top = `${y - 12}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}

// 9. MODAL LOGIC FOR ENVELOPES & PHOTOS
const customModal = document.getElementById("customModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalIcon = document.getElementById("modalIcon");
const modalCloseBtn = document.getElementById("modalCloseBtn");

function initModal() {
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }
  if (customModal) {
    customModal.addEventListener("click", (e) => {
      if (e.target === customModal) closeModal();
    });
  }
}

function openEnvelopeModal(idx) {
  const card = CONFIG.openWhenCards[idx];
  if (!card) return;

  modalIcon.innerText = card.icon || "💌";
  modalTitle.innerText = card.title;
  modalBody.innerHTML = `<p class="font-sans text-stone-700 leading-relaxed text-sm sm:text-base">${card.message}</p>`;

  customModal.classList.remove("hidden");

  // Mini celebration
  if (typeof confetti === "function") {
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.5 }
    });
  }
}

function openPhotoModal(url, caption, date) {
  modalIcon.innerText = "📸";
  modalTitle.innerText = caption;
  modalBody.innerHTML = `
    <div class="rounded-xl overflow-hidden shadow-sm mb-3">
      <img src="${url}" class="w-full h-auto max-h-[50vh] object-cover mx-auto" alt="${caption}">
    </div>
    <span class="text-xs text-rose-500 font-semibold uppercase tracking-wider">${date}</span>
  `;
  customModal.classList.remove("hidden");
}

function closeModal() {
  if (customModal) {
    customModal.classList.add("hidden");
  }
}

// =========================================================================
// 10. MINI GAME: DUO VALO AIM LAB
// =========================================================================

// Audio synthesizer via Web Audio API (No external sound files required)
function playPopSound(freq = 600) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.09);
  } catch (e) {}
}

function playVictorySound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.25);
    });
  } catch (e) {}
}

let gameScore = 0;
let gameTimeLeft = 20;
let gameTimerInterval = null;
let gameSpawnInterval = null;
let isGameRunning = false;

function initMiniGame() {
  const startGameBtn = document.getElementById("startGameBtn");
  const playAgainBtn = document.getElementById("playAgainBtn");
  const gameHighScoreEl = document.getElementById("gameHighScore");

  // Load High Score from LocalStorage
  const savedHighScore = localStorage.getItem("valoAimHighScore") || "0";
  if (gameHighScoreEl) {
    gameHighScoreEl.innerText = savedHighScore;
  }

  if (startGameBtn) {
    startGameBtn.addEventListener("click", startMiniGame);
  }
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", startMiniGame);
  }
}

function startMiniGame() {
  if (isGameRunning) return;
  isGameRunning = true;

  const duration = (CONFIG.minigame && CONFIG.minigame.duration) || 20;
  gameTimeLeft = duration;
  gameScore = 0;

  const gameTimerEl = document.getElementById("gameTimer");
  const gameScoreEl = document.getElementById("gameScore");
  const gameStartOverlay = document.getElementById("gameStartOverlay");
  const gameOverOverlay = document.getElementById("gameOverOverlay");
  const targetsContainer = document.getElementById("targetsContainer");

  if (gameTimerEl) gameTimerEl.innerText = `${gameTimeLeft}s`;
  if (gameScoreEl) gameScoreEl.innerText = "0";
  if (gameStartOverlay) gameStartOverlay.classList.add("hidden");
  if (gameOverOverlay) gameOverOverlay.classList.add("hidden");
  if (targetsContainer) targetsContainer.innerHTML = "";

  // Play start blip
  playPopSound(440);

  // Spawn first target immediately
  spawnTarget();

  // Spawning loop
  gameSpawnInterval = setInterval(() => {
    if (isGameRunning) {
      spawnTarget();
    }
  }, 750);

  // Timer countdown
  gameTimerInterval = setInterval(() => {
    gameTimeLeft--;
    if (gameTimerEl) gameTimerEl.innerText = `${gameTimeLeft}s`;

    if (gameTimeLeft <= 0) {
      finishMiniGame();
    }
  }, 1000);
}

function spawnTarget() {
  const container = document.getElementById("targetsContainer");
  if (!container || !isGameRunning) return;

  const targetsList = (CONFIG.minigame && CONFIG.minigame.targets) || [
    { emoji: "🎯", label: "Headshot!", points: 10 },
    { emoji: "💎", label: "Radiant!", points: 20 },
    { emoji: "🐣", label: "Wingman!", points: 15 },
    { emoji: "💖", label: "Love Boost!", points: 15 },
    { emoji: "🎂", label: "Birthday Cake!", points: 25 },
  ];

  // Pick random target type
  const targetData = targetsList[Math.floor(Math.random() * targetsList.length)];

  // Random position within 12% to 88% width, 15% to 85% height
  const leftPos = Math.floor(Math.random() * 76) + 12;
  const topPos = Math.floor(Math.random() * 70) + 15;

  const targetEl = document.createElement("div");
  targetEl.className = "game-target bg-white/95 border-2 border-rose-300 backdrop-blur-sm text-2xl active:scale-90 hover:scale-110 shadow-lg";
  targetEl.style.left = `${leftPos}%`;
  targetEl.style.top = `${topPos}%`;
  targetEl.innerHTML = `<span>${targetData.emoji}</span>`;

  // Handle click / tap
  const handleHit = (e) => {
    if (!isGameRunning) return;
    e.stopPropagation();
    e.preventDefault();

    // Sound effect
    const pitch = targetData.points >= 20 ? 800 : 550;
    playPopSound(pitch);

    // Update score
    gameScore += targetData.points;
    const gameScoreEl = document.getElementById("gameScore");
    if (gameScoreEl) gameScoreEl.innerText = gameScore;

    // Floating score text
    showFloatingScore(container, leftPos, topPos, `+${targetData.points} ${targetData.label}`);

    // If big target (Radiant/Cake), mini confetti at coordinates
    if (targetData.points >= 20 && typeof confetti === "function") {
      const rect = targetEl.getBoundingClientRect();
      confetti({
        particleCount: 15,
        spread: 40,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
      });
    }

    targetEl.remove();
  };

  targetEl.addEventListener("pointerdown", handleHit, { once: true });
  container.appendChild(targetEl);

  // Lifespan: target disappears after 1.8 seconds if not tapped
  setTimeout(() => {
    if (targetEl.parentNode) {
      targetEl.classList.add("disappearing");
      setTimeout(() => {
        if (targetEl.parentNode) targetEl.remove();
      }, 250);
    }
  }, 1800);
}

function showFloatingScore(container, left, top, text) {
  const scorePopup = document.createElement("div");
  scorePopup.className = "floating-score";
  scorePopup.style.left = `${left}%`;
  scorePopup.style.top = `${top}%`;
  scorePopup.innerText = text;
  container.appendChild(scorePopup);

  setTimeout(() => {
    if (scorePopup.parentNode) scorePopup.remove();
  }, 800);
}

function finishMiniGame() {
  isGameRunning = false;
  clearInterval(gameTimerInterval);
  clearInterval(gameSpawnInterval);

  const targetsContainer = document.getElementById("targetsContainer");
  if (targetsContainer) targetsContainer.innerHTML = "";

  // Check High Score
  let highScore = parseInt(localStorage.getItem("valoAimHighScore") || "0", 10);
  if (gameScore > highScore) {
    highScore = gameScore;
    localStorage.setItem("valoAimHighScore", String(highScore));
  }
  const gameHighScoreEl = document.getElementById("gameHighScore");
  if (gameHighScoreEl) gameHighScoreEl.innerText = highScore;

  // Reward calculation
  const rewards = (CONFIG.minigame && CONFIG.minigame.rewards) || [];
  let matchingReward = rewards[rewards.length - 1] || {
    badge: "🌸 DUO FAVORIT",
    message: "Keren banget mainnya!",
    voucher: "🎟️ VOUCHER: Peluk Hangat & Dicium Hari Ini! 💕"
  };

  for (const reward of rewards) {
    if (gameScore >= reward.minScore) {
      matchingReward = reward;
      break;
    }
  }

  // Populate Result
  const gameOverOverlay = document.getElementById("gameOverOverlay");
  const finalScoreEl = document.getElementById("finalScore");
  const rewardBadgeEl = document.getElementById("rewardBadge");
  const rewardMessageEl = document.getElementById("rewardMessage");
  const rewardVoucherBoxEl = document.getElementById("rewardVoucherBox");

  if (finalScoreEl) finalScoreEl.innerText = gameScore;
  if (rewardBadgeEl) rewardBadgeEl.innerText = matchingReward.badge;
  if (rewardMessageEl) rewardMessageEl.innerText = matchingReward.message;
  if (rewardVoucherBoxEl) rewardVoucherBoxEl.innerText = matchingReward.voucher;

  if (gameOverOverlay) gameOverOverlay.classList.remove("hidden");

  // Celebration
  playVictorySound();
  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.6 }
    });
  }
}

// =========================================================================
// 11. INTERACTIVE SPINNING CAKE (INTRO SCREEN)
// =========================================================================
function initSpinningCake() {
  const toy = document.getElementById("cakeSpinToy");
  const disc = document.getElementById("cakeDisc");
  const countEl = document.getElementById("cakeSpinCount");
  const reactionEl = document.getElementById("cakeSpinReaction");

  if (!toy || !disc) return;

  let currentRotation = 0;
  let velocity = 0;
  let spinCount = 0;
  let isDragging = false;
  let lastX = 0;
  let lastTime = 0;
  let animFrameId = null;

  const reactions = [
    { min: 0, max: 0, text: "👈 Coba tap atau geser kuenya!" },
    { min: 1, max: 4, text: "Wiii kuenya mulai muter! 🍰" },
    { min: 5, max: 9, text: "Kuenya pusing Delfi wkwk 😵‍💫" },
    { min: 10, max: 19, text: "WUSSHHH! Jangan kenceng-kenceng nanti terbang! 🚀🎂" },
    { min: 20, max: 34, text: "Kuenya mual tolonggg hahaha 😂💖" },
    { min: 35, max: 9999, text: "Delfi sang Ratu Pemutar Kue Handal! 🏆👑" },
  ];

  function updateReaction() {
    const r = reactions.find(item => spinCount >= item.min && spinCount <= item.max);
    if (r && reactionEl) {
      reactionEl.innerText = r.text;
    }
    if (countEl) countEl.innerText = spinCount;
  }

  function applySpin(deltaVelocity) {
    velocity += deltaVelocity;
    spinCount++;
    updateReaction();

    // Sound effect
    const freq = Math.min(1000, 480 + (spinCount * 20));
    playPopSound(freq);

    // Milestone confetti
    if ((spinCount === 10 || spinCount === 25 || spinCount === 50) && typeof confetti === "function") {
      const rect = disc.getBoundingClientRect();
      confetti({
        particleCount: 25,
        spread: 60,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        }
      });
    }

    if (!animFrameId) {
      runPhysicsLoop();
    }
  }

  function runPhysicsLoop() {
    const friction = 0.95; // Smooth deceleration

    function frame() {
      if (Math.abs(velocity) > 0.08) {
        currentRotation += velocity;
        velocity *= friction;
        disc.style.transform = `rotate(${currentRotation}deg)`;
        animFrameId = requestAnimationFrame(frame);
      } else {
        velocity = 0;
        animFrameId = null;
      }
    }
    animFrameId = requestAnimationFrame(frame);
  }

  // Click / Tap Event
  toy.addEventListener("click", () => {
    // Random direction or alternating spin with big impulse
    const dir = Math.random() > 0.5 ? 1 : -1;
    const impulse = dir * (Math.random() * 20 + 35);
    applySpin(impulse);
  });

  // Touch / Pointer Dragging support
  toy.addEventListener("pointerdown", (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastTime = Date.now();
    try {
      toy.setPointerCapture(e.pointerId);
    } catch (err) {}
  });

  toy.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const now = Date.now();
    const dt = now - lastTime || 16;
    const dx = e.clientX - lastX;
    currentRotation += dx * 1.5;
    disc.style.transform = `rotate(${currentRotation}deg)`;
    velocity = (dx / dt) * 15;
    lastX = e.clientX;
    lastTime = now;
  });

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    if (Math.abs(velocity) > 2) {
      spinCount++;
      updateReaction();
      playPopSound(600);
      runPhysicsLoop();
    }
  };

  toy.addEventListener("pointerup", endDrag);
  toy.addEventListener("pointercancel", endDrag);
}

