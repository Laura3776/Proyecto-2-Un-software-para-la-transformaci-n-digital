const allowedOrigins = new Set(["Servidor", "Red", "Aplicacion", "IoT", "Usuario"]);
const allowedSeverity = new Set(["Baja", "Media", "Alta", "Critica"]);
const allowedPriority = new Set(["Baja", "Media", "Alta", "Critica"]);
const allowedCategory = new Set(["General", "Red", "Aplicacion", "Seguridad", "Hardware"]);
const allowedTeams = new Set(["N1", "N2", "Infra", "OT"]);

function sanitize(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

export function validateIncidentInput(formData) {
  const titulo = sanitize(formData.get("titulo"));
  const descripcion = sanitize(formData.get("descripcion"));
  const origen = sanitize(formData.get("origen"));
  const severidad = sanitize(formData.get("severidad"));
  const categoria = sanitize(formData.get("categoria")) || "General";
  const prioridad = sanitize(formData.get("prioridad")) || "Media";
  const equipo = sanitize(formData.get("equipo"));
  const adjunto = sanitize(formData.get("adjunto"));

  if (titulo.length < 4) {
    return { ok: false, message: "El titulo debe tener al menos 4 caracteres." };
  }
  if (descripcion.length < 10) {
    return { ok: false, message: "La descripcion debe tener al menos 10 caracteres." };
  }
  if (!allowedOrigins.has(origen)) {
    return { ok: false, message: "Selecciona un origen valido." };
  }
  if (!allowedSeverity.has(severidad)) {
    return { ok: false, message: "Selecciona una severidad valida." };
  }
  if (!allowedPriority.has(prioridad)) {
    return { ok: false, message: "Selecciona una prioridad valida." };
  }
  if (!allowedCategory.has(categoria)) {
    return { ok: false, message: "Selecciona una categoria valida." };
  }
  if (!allowedTeams.has(equipo)) {
    return { ok: false, message: "Selecciona un equipo valido." };
  }

  return {
    ok: true,
    value: { titulo, descripcion, origen, severidad, categoria, prioridad, equipo, adjunto }
  };
}

export function normalizeImportedIncident(raw) {
  if (!raw || typeof raw !== "object") {
    return null;
  }
  const titulo = sanitize(raw.titulo);
  const descripcion = sanitize(raw.descripcion);
  const origen = sanitize(raw.origen);
  const severidad = sanitize(raw.severidad);
  const categoria = sanitize(raw.categoria) || "General";
  const prioridad = sanitize(raw.prioridad) || "Media";
  const equipo = sanitize(raw.equipo) || "N1";
  const estadoSet = new Set([
    "Nueva",
    "En analisis",
    "En progreso",
    "Pendiente de informacion",
    "Resuelta",
    "Cerrada"
  ]);
  const estado = estadoSet.has(raw.estado) ? raw.estado : "Nueva";

  if (
    !titulo ||
    !descripcion ||
    !allowedOrigins.has(origen) ||
    !allowedSeverity.has(severidad) ||
    !allowedCategory.has(categoria) ||
    !allowedPriority.has(prioridad)
  ) {
    return null;
  }

  return {
    id: sanitize(raw.id) || crypto.randomUUID(),
    titulo,
    descripcion,
    origen,
    severidad,
    categoria,
    prioridad,
    equipo: allowedTeams.has(equipo) ? equipo : "N1",
    reportanteId: sanitize(raw.reportanteId) || "u-reportante-1",
    asignadoA: sanitize(raw.asignadoA) || "",
    adjunto: sanitize(raw.adjunto),
    estado,
    creadaEn: new Date(raw.creadaEn || Date.now()).toISOString(),
    cerradaEn: raw.cerradaEn ? new Date(raw.cerradaEn).toISOString() : null,
    timeline: Array.isArray(raw.timeline) ? raw.timeline : []
  };
}
