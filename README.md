# Puffin — Tiny, cute desktop companion 😋

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

[Report a Bug](https://github.com/Mixxy-Studio/TomaNote/issues) | [Request a Feature](https://github.com/Mixxy-Studio/TomaNote/issues)

[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/dftp930)

</div>

# puffin 🫧

> A tiny, cute desktop companion that lives on your screen.  
> Built with **Tauri** + **CSS** — no sprites, just pure bubbly personality.

Puffin is a floating bubble companion that reacts to your clicks, your activity… and maybe your mood.  
Simple, minimal, and a little bit alive 💗

---

## ✨ Current features

- 🫧 **3 emotional states** — `iddle` (neutral), `happy` (excited), `bored` (needs attention)
- 🎨 **Pure CSS character** — No sprites, no images. Every expression is drawn with CSS
- ⏱️ **Auto mood changes** — Gets bored if you ignore it, happy when you interact
- 🧲 **Draggable** — Move it anywhere you like

---

## 🚀 Tech stack

| Layer    | Technology                                |
| -------- | ----------------------------------------- |
| Frontend | HTML5 + CSS3 (animations, keyframes)      |
| Logic    | Vanilla JavaScript (ES6+)                 |
| Desktop  | **Tauri** (Rust backend, small footprint) |
| Build    | Vite                                      |

---

## 🎮 State machine

User inactive (15s) ──▶ bored
▲ │
│ ▼
happy ◀── click ─── iddle
▲ │
└───── auto ─────────┘
(every 10s)

### Facial expressions (all CSS)

| State   | Eyes         | Mouth             |
| ------- | ------------ | ----------------- |
| `iddle` | Normal ● ●   | Straight line ─── |
| `happy` | Squeezed ◔ ◔ | Big smile ∪       |
| `bored` | Droopy ○ ○   | Frown ∩           |

---

## 🧠 For AI agents (context)

**Purpose:**  
Demonstrate how to create a lightweight, stateful desktop mascot without raster graphics.

**Key implementation patterns:**

- State management via CSS classes
- Inactivity detection with timers
- Transparent, frameless Tauri window
- No external UI libraries — pure DOM + CSS

**Relevant files:**

- `src/styles.css` — All visual states + animations
- `src/main.js` — Finite state machine + event handlers
- `src-tauri/tauri.conf.json` — Overlay window config

**Extensibility points:**

- Add new states by creating CSS classes (e.g., `state-sleep`, `state-excited`)
- Swap face features by modifying pseudo-elements or adding SVG
- Integrate with system events (idle timer, audio levels, notifications)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/puffin
cd puffin

# Install dependencies
npm install

# Run in development mode
npm run tauri dev

# Build for production
npm run tauri build
```

## 🎨 Customization

**Add a new emotion**

1. Add CSS class: .state-sleep .mouth { ... }
2. Add to states array in main.js
3. Trigger with mascot.setState('sleep')

**Change bubble color**
Edit background property in .bubble selector

**Modify inactivity timeout**
Change 15000 (ms) in setupInactivityDetection()

## 🐞 Current limitations

- Single bubble (no multiple companions… yet)
- No sound effects
- No persistent position memory across app restarts
- Windows/Linux only (macOS needs permission tweaks for overlay)

## 🗺️ Roadmap (ideas)

- Sound effects for mood changes
- Dragging with inertia
- Right-click context menu
- Multiple bubble colors (user selectable)
- System idle API integration (instead of custom timer)
- Speech bubble with random messages
- Follows mouse on double-click
- Mini-games (pop the bubble, catch the fly)

## 🤝 Contributing

PRs welcome! Ideas:

- More facial expressions (surprised, angry, love)
- Seasonal themes (snow on bubble, flower crown)
- Plugin system for community-made states

[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/dftp930)

## 📄 License

MIT — go ahead, make your own digital pet 🐱

## 💬 Why "Puffin"?

Because puffins are round, cute, and a little bit clumsy — just like this bubble.
Also, "puff" sounds like a soft bubble pop. Puff! 🫧
