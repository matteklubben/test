// =========================================================
// KONFIGURATION & SPARNING FÖR VINKÄLLARENS ESCAPE ROOM
// Ändra siffrorna nedan så de matchar ert fysiska hänglås!
// =========================================================
const VAULT_CONFIG = {
  digit1: "7",   // Siffra 1 (låses upp efter Akt 1)
  digit2: "4",   // Siffra 2 (låses upp efter Akt 2)
  digit3: "9"    // Siffra 3 (låses upp efter Akt 3)
};

const STORAGE_KEY = "vinkallaren_escape_progress_v3";

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { page: null, unlocked: 0 };
    return JSON.parse(raw);
  } catch (e) {
    return { page: null, unlocked: 0 };
  }
}

function saveProgress(pageFile, unlockedCount) {
  try {
    const current = getProgress();
    const bestUnlocked = Math.max(current.unlocked || 0, unlockedCount || 0);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      page: pageFile,
      unlocked: bestUnlocked,
      updatedAt: Date.now()
    }));
  } catch (e) {
    // Ignorera om localStorage är blockerat
  }
}

function resetProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

function renderHUD(actLabel, unlockedCount) {
  const hud = document.getElementById("hud");
  if (!hud) return;

  const saved = getProgress();
  const effectiveUnlocked = Math.max(unlockedCount || 0, saved.unlocked || 0);

  const d1 = effectiveUnlocked >= 1 ? VAULT_CONFIG.digit1 : "?";
  const d2 = effectiveUnlocked >= 2 ? VAULT_CONFIG.digit2 : "?";
  const d3 = effectiveUnlocked >= 3 ? VAULT_CONFIG.digit3 : "?";

  hud.innerHTML = `
    <span class="act-badge">${actLabel}</span>
    <div class="code-slots" aria-label="Upplåsta siffror">
      <div class="code-slot ${effectiveUnlocked >= 1 ? 'unlocked' : ''}">${d1}</div>
      <div class="code-slot ${effectiveUnlocked >= 2 ? 'unlocked' : ''}">${d2}</div>
      <div class="code-slot ${effectiveUnlocked >= 3 ? 'unlocked' : ''}">${d3}</div>
    </div>
  `;
}
