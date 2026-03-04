const STORAGE_KEY = "smartlog_incidents_v1";

export function loadIncidents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveIncidents(incidents) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(incidents));
}

export function clearIncidents() {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportIncidents(incidents) {
  const payload = {
    version: 1,
    generatedAt: new Date().toISOString(),
    incidents
  };
  return JSON.stringify(payload, null, 2);
}

export function importIncidentsFromText(text) {
  const parsed = JSON.parse(text);
  if (!parsed || !Array.isArray(parsed.incidents)) {
    throw new Error("Formato JSON invalido");
  }
  return parsed.incidents;
}
