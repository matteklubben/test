// =========================================================
// KONFIGURATION FÖR VINKÄLLARENS ESCAPE ROOM
// Ändra siffrorna nedan så de matchar ert fysiska hänglås!
// =========================================================
const VAULT_CONFIG = {
  digit1: "7",   // Siffra 1 (låses upp efter Akt 1)
  digit2: "4",   // Siffra 2 (låses upp efter Akt 2)
  digit3: "9"    // Siffra 3 (låses upp efter Akt 3)
};

function renderHUD(actLabel, unlockedCount) {
  const hud = document.getElementById("hud");
  if (!hud) return;

  const d1 = unlockedCount >= 1 ? VAULT_CONFIG.digit1 : "?";
  const d2 = unlockedCount >= 2 ? VAULT_CONFIG.digit2 : "?";
  const d3 = unlockedCount >= 3 ? VAULT_CONFIG.digit3 : "?";

  hud.innerHTML = `
    <span class="act-badge">${actLabel}</span>
    <div class="code-slots" aria-label="Upplåsta siffror">
      <div class="code-slot ${unlockedCount >= 1 ? 'unlocked' : ''}">${d1}</div>
      <div class="code-slot ${unlockedCount >= 2 ? 'unlocked' : ''}">${d2}</div>
      <div class="code-slot ${unlockedCount >= 3 ? 'unlocked' : ''}">${d3}</div>
    </div>
  `;
}
