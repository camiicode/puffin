import { invoke } from "@tauri-apps/api/core";

const mascot = document.getElementById("mascot");
const closeBtn = document.getElementById("close-btn");

mascot.addEventListener("mousedown", async () => {
  await invoke("start_drag");
});

closeBtn.addEventListener("click", async (e) => {
  e.stopPropagation();
  await invoke("close_app");
});

class BubbleMascot {
  constructor() {
    this.states = ["iddle", "happy", "bored"];
    this.currentState = "iddle";
    this.bubbleElement = document.getElementById("bubble");
    this.stateIndicator = document.getElementById("stateIndicator");

    this.init();
  }

  init() {
    // Establecer estado inicial
    this.setState("iddle");

    // Click para cambiar estado (demo)
    this.bubbleElement.addEventListener("click", () => {
      this.nextState();
    });

    // Cambio automático cada 10 segundos
    setInterval(() => {
      this.randomState();
    }, 10000);

    // Detectar inactividad para estado bored
    this.setupInactivityDetection();
  }

  setState(state) {
    if (!this.states.includes(state)) return;

    // Remover clases de estado anteriores
    this.states.forEach((s) => {
      this.bubbleElement.classList.remove(`state-${s}`);
    });

    // Agregar nueva clase
    this.bubbleElement.classList.add(`state-${state}`);
    this.currentState = state;

    // Actualizar indicador
    if (this.stateIndicator) {
      this.stateIndicator.textContent = `Estado: ${state.toUpperCase()}`;
    }

    // Emitir evento para Tauri (opcional)
    this.emitToTauri(state);

    console.log(`Estado cambiado a: ${state}`);
  }

  nextState() {
    const currentIndex = this.states.indexOf(this.currentState);
    const nextIndex = (currentIndex + 1) % this.states.length;
    this.setState(this.states[nextIndex]);

    // Resetear timer de inactividad al interactuar
    this.resetInactivityTimer();
  }

  randomState() {
    const randomIndex = Math.floor(Math.random() * this.states.length);
    this.setState(this.states[randomIndex]);
  }

  setupInactivityDetection() {
    let inactivityTimer;
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (this.currentState !== "bored") {
          this.setState("bored");
        }
      }, 15000); // 15 segundos de inactividad
    };

    // Resetear en cualquier interacción
    ["click", "mousemove", "keypress"].forEach((event) => {
      document.addEventListener(event, resetTimer);
    });

    resetTimer();
    this.resetInactivityTimer = resetTimer;
  }

  emitToTauri(state) {
    // Para comunicación con backend Tauri
    if (window.__TAURI__) {
      // Emitir evento al backend
      console.log(`[Tauri] Estado: ${state}`);
      // Puedes usar emit() si configuras eventos
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  window.mascot = new BubbleMascot();
});
