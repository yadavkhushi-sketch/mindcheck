

/* ════════════════════
(function spawnPollen() {
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement('div');
    dot.className = 'pol';
    const size = 3 + Math.random() * 7;
    dot.style.cssText = [
      'width:'              + size + 'px',
      'height:'             + size + 'px',
      'left:'               + (Math.random() * 100) + '%',
      'top:'                + (40 + Math.random() * 55) + '%',
      'animation-duration:' + (14 + Math.random() * 18) + 's',
      'animation-delay:'    + (Math.random() * 14) + 's'
    ].join(';');
    document.body.appendChild(dot);
  }
})();


/* ══════════════════════════════════════
   2.  GROUND FLOWERS (SVG, body-level)
══════════════════════════════════════ */
(function buildGroundFlowers() {
  const bar = document.getElementById('groundBar');
  const cos = (deg) => Math.cos(deg * Math.PI / 180);
  const sin = (deg) => Math.sin(deg * Math.PI / 180);
  const r   = (n)   => Math.round(n);

  /* SVG builders */
  function tulip(c1, c2, s) {
    const h = r(s * 1.6);
    return `<svg width="${s}" height="${h}" viewBox="0 0 40 64" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="40" x2="20" y2="64" stroke="#5c9e6a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M20 50 Q12 46 10 42" fill="none" stroke="#5c9e6a" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M20 40 Q8 30 10 16 Q15 4 20 6 Q25 4 30 16 Q32 30 20 40Z" fill="${c1}"/>
      <path d="M20 40 Q14 32 14 22 Q14 14 20 12 Q20 12 20 40Z" fill="${c2}" opacity="0.4"/>
    </svg>`;
  }

  function daisy(petalCol, s) {
    const h = r(s * 1.4);
    const petals = [0,45,90,135,180,225,270,315].map(a =>
      `<ellipse cx="${r(20+cos(a)*13)}" cy="${r(20+sin(a)*13)}" rx="5" ry="8"
        fill="${petalCol}" opacity="0.9"
        transform="rotate(${a} ${r(20+cos(a)*13)} ${r(20+sin(a)*13)})"/>`
    ).join('');
    return `<svg width="${s}" height="${h}" viewBox="0 0 40 56" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="28" x2="20" y2="56" stroke="#5c9e6a" stroke-width="2.5" stroke-linecap="round"/>
      ${petals}
      <circle cx="20" cy="20" r="6" fill="#fde047"/>
    </svg>`;
  }

  function lavender(s) {
    const h = r(s * 1.7);
    return `<svg width="${s}" height="${h}" viewBox="0 0 40 68" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="38" x2="20" y2="68" stroke="#5c9e6a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M20 38 Q12 30 14 22 Q16 14 20 16 Q24 14 26 22 Q28 30 20 38Z" fill="#c4b5fd"/>
      <path d="M20 30 Q12 22 14 14 Q16  6 20  8 Q24  6 26 14 Q28 22 20 30Z" fill="#ddd6fe"/>
      <path d="M20 22 Q14 16 15 10 Q17  4 20  5 Q23  4 25 10 Q26 16 20 22Z" fill="#c4b5fd"/>
    </svg>`;
  }

  function sunflower(s) {
    const h = r(s * 1.5);
    const petals = [0,45,90,135,180,225,270,315].map(a =>
      `<ellipse cx="${r(20+cos(a)*13)}" cy="${r(20+sin(a)*13)}" rx="4" ry="8"
        fill="#fbbf24"
        transform="rotate(${a} ${r(20+cos(a)*13)} ${r(20+sin(a)*13)})"/>`
    ).join('');
    return `<svg width="${s}" height="${h}" viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="28" x2="20" y2="60" stroke="#5c9e6a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M20 56 Q12 52 11 46" fill="none" stroke="#5c9e6a" stroke-width="1.8" stroke-linecap="round"/>
      ${petals}
      <circle cx="20" cy="20" r="7" fill="#92400e"/>
      <circle cx="20" cy="20" r="4" fill="#6b2d0a"/>
    </svg>`;
  }

  /* flower variety pool */
  const pool = [
    () => tulip('#f9a8d4', '#f472b6', 28 + (Math.random()*10|0)),
    () => tulip('#fdd9b5', '#fb923c', 26 + (Math.random()*10|0)),
    () => tulip('#bae6fd', '#60a5fa', 28 + (Math.random()* 8|0)),
    () => tulip('#a7f3d0', '#34d399', 26 + (Math.random()* 8|0)),
    () => tulip('#fef08a', '#facc15', 24 + (Math.random()* 8|0)),
    () => daisy('#ffffff',            26 + (Math.random()* 8|0)),
    () => daisy('#fdd9b5',            24 + (Math.random()* 8|0)),
    () => daisy('#f9a8d4',            24 + (Math.random()* 8|0)),
    () => lavender(24 + (Math.random()* 8|0)),
    () => sunflower(24 + (Math.random()* 8|0)),
  ];

  for (let i = 0; i < 24; i++) {
    const wrap = document.createElement('div');
    wrap.className = 'flower-wrap';
    const rot = (-7 + Math.random() * 14).toFixed(1);
    const op  = (0.65 + Math.random() * 0.35).toFixed(2);
    const sp  = (3 + Math.random() * 3).toFixed(1);
    const dl  = (Math.random() * 4).toFixed(1);
    const dir = Math.random() > 0.5 ? 'L' : 'R';
    wrap.style.cssText = `transform:rotate(${rot}deg);opacity:${op};animation:sway${dir} ${sp}s ease-in-out ${dl}s infinite`;
    wrap.innerHTML = pool[Math.floor(Math.random() * pool.length)]();
    bar.appendChild(wrap);
  }
})();


/* ══════════════════════════════════════
   3.  FALLING PETALS (rAF-based)
══════════════════════════════════════ */
const QUOTES = [
  "you're doing better than you think 🌿",
  "rest is also progress ✨",
  "one breath at a time 🍃",
  "it's okay to not be okay 💚",
  "small steps still count 🌱",
  "you survived every hard day so far 🌸",
  "be gentle with yourself today 🤍",
  "growth takes time, like a tree 🌳",
  "your feelings are valid 💚",
  "today was enough 🍃",
  "you matter more than your grades 🌿",
  "drink some water, okay? 💧",
  "you're allowed to take a break ☁️",
  "you're not alone in this 🌻",
  "this too shall pass 🌈",
  "proud of you for showing up 🌸",
];

const PETAL_COLORS = [
  '#f9a8d4','#fdd9b5','#c4b5fd','#fef08a',
  '#bae6fd','#a7f3d0','#fca5a5','#fdba74','#d9f99d','#fbcfe8'
];

function spawnPetal() {
  const size  = 14 + Math.random() * 18;
  const startX = Math.random() * window.innerWidth;
  const color  = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
  const quote  = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  const speed      = 0.6 + Math.random() * 0.8;
  const drift      = (Math.random() - 0.5) * 0.5;
  const rotSpeed   = (Math.random() - 0.5) * 2;
  const wobbleFreq = 0.01 + Math.random() * 0.02;

  const el = document.createElement('div');
  el.className = 'petal';
  el.style.cssText = `width:${size}px;height:${size}px;left:${startX}px;top:-60px;opacity:0.9`;
  el.innerHTML = `
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="16" rx="9" ry="14" fill="${color}" opacity="0.88"/>
    </svg>
    <div class="ptip">${quote}</div>
  `;
  el.addEventListener('click', (e) => showFQ(quote, e.clientX, e.clientY));
  document.body.appendChild(el);

  let x = startX, y = -60, rot = 0, frame = 0;

  function step() {
    frame++;
    y += speed;
    x += drift + Math.sin(frame * wobbleFreq) * 0.4;
    rot += rotSpeed;
    el.style.left      = x + 'px';
    el.style.top       = y + 'px';
    el.style.transform = `rotate(${rot}deg)`;

    /* fade in / fade out based on screen position */
    const vh = window.innerHeight;
    if      (y < vh * 0.1)  el.style.opacity = '0';
    else if (y < vh * 0.15) el.style.opacity = String((y - vh*0.1) / (vh*0.05));
    else if (y > vh * 0.85) el.style.opacity = String(1 - (y - vh*0.85) / (vh*0.15));
    else                     el.style.opacity = '0.88';

    if (y < window.innerHeight + 80) {
      requestAnimationFrame(step);
    } else {
      el.remove();
    }
  }
  requestAnimationFrame(step);
}

/* schedule next petal */
function schedulePetal() {
  spawnPetal();
  setTimeout(schedulePetal, 900 + Math.random() * 1300);
}
schedulePetal();


/* ══════════════════════════════════════
   4.  FLOATING QUOTE BUBBLES
══════════════════════════════════════ */
function showFQ(txt, x, y) {
  const el = document.createElement('div');
  el.className = 'fq';
  el.textContent = txt;
  el.style.left = Math.min(x - 90, window.innerWidth - 230) + 'px';
  el.style.top  = (y - 56) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2700);
}

/* auto-pop a random quote every ~16 s */
(function autoQuote() {
  setTimeout(() => {
    showFQ(
      QUOTES[Math.floor(Math.random() * QUOTES.length)],
      120 + Math.random() * (window.innerWidth - 240),
      120 + Math.random() * (Math.min(window.innerHeight, 600) - 140)
    );
    autoQuote();
  }, 16000 + Math.random() * 10000);
})();


/* ══════════════════════════════════════
   5.  QUIZ STATE
══════════════════════════════════════ */
let currentQuestion = 1;

const WEIGHTS = {
  q1: 15, q2: 15, q3: 10, q4: 8,
  q5: 10, q6: 12, q7: 10, q8: 8, q9: 7, q10: 15
};

let sc = {
  q1: null, q2: null, q3: null, q4: null,
  q5: 5,    q6: null, q7: null, q8: null, q9: null, q10: 5
};


/* ══════════════════════════════════════
   6.  SCREEN NAVIGATION
══════════════════════════════════════ */
function startQ() {
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('quiz').style.display    = 'block';
  window.scrollTo(0, 0);
}

function goHome() {
  resetQuiz();
  document.getElementById('res').style.display     = 'none';
  document.getElementById('quiz').style.display    = 'none';
  document.getElementById('welcome').style.display = 'block';
  window.scrollTo(0, 0);
}

function restart() {
  resetQuiz();
  document.getElementById('res').style.display  = 'none';
  document.getElementById('quiz').style.display = 'block';
  window.scrollTo(0, 0);
}

function resetQuiz() {
  currentQuestion = 1;
  sc = { q1:null, q2:null, q3:null, q4:null, q5:5, q6:null, q7:null, q8:null, q9:null, q10:5 };
  document.querySelectorAll('.qb').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.opt').forEach(b => b.classList.remove('sel'));
  document.getElementById('q1').classList.add('active');
  document.getElementById('pb').style.width      = '10%';
  document.getElementById('pl').textContent      = 'Question 1 of 10';
  document.getElementById('backBtn').style.display = 'none';
  document.getElementById('nextBtn').textContent = 'Next →';
  document.getElementById('hugNote').style.display = 'none';
}


/* ══════════════════════════════════════
   7.  QUIZ INTERACTIONS
══════════════════════════════════════ */
function pick(id, value, btn) {
  sc[id] = value;
  document.getElementById(id)
    .querySelectorAll('.opt')
    .forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
}

function syncSl(sliderId, valueId, v) {
  const emojis = ['😞','😟','😕','😕','😐','😌','🙂','😊','😄','🌟','⭐'];
  document.getElementById(valueId).textContent = emojis[+v] + ' ' + v + ' / 10';
  const pct = (+v / 10) * 100;
  document.getElementById(sliderId).style.background =
    `linear-gradient(to right,#5c9e6a 0%,#5c9e6a ${pct}%,#cfe8c4 ${pct}%,#cfe8c4 100%)`;
}

function nextQ() {
  const qId = 'q' + currentQuestion;
  /* validate — sliders (q5, q10) always have a value */
  if (currentQuestion !== 5 && currentQuestion !== 10 && sc[qId] === null) {
    const el = document.getElementById(qId);
    el.style.outline = '2.5px solid #f472b6';
    setTimeout(() => el.style.outline = '', 700);
    return;
  }
  /* capture slider values */
  if (currentQuestion === 5)  sc.q5  = +document.getElementById('sl5').value;
  if (currentQuestion === 10) sc.q10 = +document.getElementById('sl10').value;

  if (currentQuestion < 10) {
    document.getElementById('q' + currentQuestion).classList.remove('active');
    currentQuestion++;
    document.getElementById('q' + currentQuestion).classList.add('active');
    updateProgress();
    document.getElementById('backBtn').style.display = currentQuestion > 1 ? 'block' : 'none';
    if (currentQuestion === 10) document.getElementById('nextBtn').textContent = '🌸 See my results!';
    window.scrollTo(0, 0);
  } else {
    showResults();
  }
}

function prevQ() {
  if (currentQuestion > 1) {
    document.getElementById('q' + currentQuestion).classList.remove('active');
    currentQuestion--;
    document.getElementById('q' + currentQuestion).classList.add('active');
    updateProgress();
    document.getElementById('backBtn').style.display = currentQuestion > 1 ? 'block' : 'none';
    document.getElementById('nextBtn').textContent = currentQuestion === 10 ? '🌸 See my results!' : 'Next →';
  }
}

function updateProgress() {
  document.getElementById('pb').style.width      = (currentQuestion / 10 * 100) + '%';
  document.getElementById('pl').textContent      = 'Question ' + currentQuestion + ' of 10';
}


/* ══════════════════════════════════════
   8.  RESULTS
══════════════════════════════════════ */
function showResults() {
  /* calculate weighted score */
  let total = 0, maxTotal = 0;
  for (let i = 1; i <= 10; i++) {
    const key = 'q' + i;
    const raw = sc[key] !== null ? sc[key] : 5;
    const w   = WEIGHTS[key];
    total    += (raw / 10) * w;
    maxTotal += w;
  }
  const finalScore = Math.round((total / maxTotal) * 100);

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('res').style.display  = 'block';
  window.scrollTo(0, 0);

  /* animate score counter */
  let displayed = 0;
  const counter = setInterval(() => {
    displayed = Math.min(displayed + 2, finalScore);
    document.getElementById('sn').textContent = displayed;
    if (displayed >= finalScore) clearInterval(counter);
  }, 18);

  /* determine zone */
  const ring = document.getElementById('sring');
  const bdg  = document.getElementById('bdg');
  let badgeClass, badgeText, message, tip, ringColor;

  if (finalScore >= 70) {
    badgeClass = 'bg'; badgeText = "🌿 You're doing well!"; ringColor = '#6ee7b7';
    message = "Genuinely happy to hear that 🌸 You're doing such a good job taking care of yourself. Keep it up — you deserve every bit of this good day.";
    tip = getPersonalTip('well');
  } else if (finalScore >= 40) {
    badgeClass = 'bo'; badgeText = "☁️ Slightly stressed"; ringColor = '#fde047';
    message = "Hey, you're managing — and that takes real effort. 🤍 A little stress is normal, but you're allowed to slow down. You don't have to carry it all at once.";
    tip = getPersonalTip('okay');
  } else {
    badgeClass = 'bl'; badgeText = "🫂 You might need a little support"; ringColor = '#f9a8d4';
    message = "This week sounds heavy. Please know that reaching out isn't weakness — it's one of the bravest things you can do. You matter so much. 💙";
    tip = getPersonalTip('support');
    document.getElementById('hugNote').style.display = 'block';
  }

  ring.style.borderColor = ringColor;
  bdg.className          = 'badge ' + badgeClass;
  bdg.textContent        = badgeText;
  document.getElementById('rmsg').textContent   = message;
  document.getElementById('tipTxt').textContent = tip;

  saveScore(finalScore);
  drawMoodChart();
}

function getPersonalTip(zone) {
  /* personalised tips based on specific answers */
  if (sc.q3 !== null && sc.q3 <= 4)
    return 'You skipped meals today — please have something to eat before you sleep. Even a banana counts. Your body needs fuel. 🍌';
  if (sc.q1 !== null && sc.q1 <= 4)
    return 'Your sleep was low. Try sleeping 30 minutes earlier tonight. Turn your screen off an hour before bed. Rest is healing. 🌙';
  if (sc.q4 !== null && sc.q4 <= 3)
    return 'You haven\'t talked to anyone much today. Send one "hey, how are you?" to someone. Even tiny connection helps a lot. 💬';

  const tips = {
    well: [
      'Write down 3 things you\'re grateful for — even tiny ones. This keeps the good energy going! 🌸',
      'Go for a 10-minute walk and notice 3 beautiful things outside. You\'ve earned fresh air! 🌿',
      'Do something kind for yourself today — a warm drink, a favourite song, five guilt-free minutes. ☕',
    ],
    okay: [
      'Try the 4-7-8 breath: inhale 4 counts, hold 7, exhale 8. Do three rounds. It actually works. 🌬️',
      'Step away from your screen for 10 minutes. Your brain needs micro-breaks to reset properly. 📵',
      'Write one stressful thing down, then one tiny step you can take on it. Small steps always count. ✏️',
    ],
    support: [
      'Please reach out to someone today — a friend, or iCall (9152987821). You don\'t have to carry this alone. 🫂',
      'Give yourself permission to rest fully today — guiltlessly. Rest is not laziness. It is survival. 🛏️',
      'Try the 4-7-8 breathing below first. Then drink a full glass of water. Be gentle with yourself now. 💧',
    ],
  };
  const arr = tips[zone];
  return arr[Math.floor(Math.random() * arr.length)];
}


/* ══════════════════════════════════════
   9.  LOCALSTORAGE + MOOD CHART
══════════════════════════════════════ */
function saveScore(score) {
  const today   = new Date().toISOString().split('T')[0];
  let history   = JSON.parse(localStorage.getItem('mc_history') || '[]');
  history       = history.filter(e => e.date !== today);  // replace today if exists
  history.push({ date: today, score });
  if (history.length > 7) history = history.slice(-7);    // keep last 7 days
  localStorage.setItem('mc_history', JSON.stringify(history));
}

function drawMoodChart() {
  const history = JSON.parse(localStorage.getItem('mc_history') || '[]');
  const labels  = history.map(e => {
    const d = new Date(e.date);
    return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' });
  });
  const data     = history.map(e => e.score);
  const ptColors = data.map(s => s >= 70 ? '#5c9e6a' : s >= 40 ? '#fbbf24' : '#f472b6');

  new Chart(document.getElementById('moodChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['Today'],
      datasets: [{
        label: 'Wellness Score',
        data:  data.length  ? data  : [50],
        borderColor:          '#5c9e6a',
        backgroundColor:      'rgba(92,158,106,0.1)',
        pointBackgroundColor: ptColors,
        pointBorderColor:     '#fff',
        pointBorderWidth:     2,
        pointRadius:          7,
        pointHoverRadius:     10,
        fill:    true,
        tension: 0.4,
        borderWidth: 2.5,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => 'Score: ' + ctx.parsed.y + '/100' } }
      },
      scales: {
        y: {
          min: 0, max: 100,
          grid: { color: 'rgba(92,158,106,0.12)' },
          ticks: {
            stepSize: 25,
            callback: v => v === 0 ? '😞' : v === 25 ? 'Low' : v === 50 ? 'Okay' : v === 75 ? 'Good' : '🌟'
          }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Nunito', size: 12 } }
        }
      }
    }
  });
}