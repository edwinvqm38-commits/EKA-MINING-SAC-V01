window.SUPABASE_CONFIG = {
  url: 'https://roubcedszvrllvfkztiz.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdWJjZWRzenZybGx2Zmt6dGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODkyNTksImV4cCI6MjA5MDQ2NTI1OX0.vPQOAZnA7KkXgNK3CZSVeQDvwtXwACHlK2kEMf6zelg',
  table: 'cotizaciones',
  primaryKey: 'id',
  editable: true,
  orderBy: {
    column: 'created_at',
    ascending: false,
  },
  columns: [],
  requirementsSource: 'requerimientos_log',
  requirementDetailsSource: 'vw_requerimiento_items_detalle',
  requirementDetailsStageSource: '',
  expedienteEvidenceBucket: 'requerimientos',
  expedienteEvidencePathPrefix: 'expediente',
  // URL pública de producción para links compartibles en correos.
  // Si queda vacía, la app intentará usar el origen actual solo cuando no sea localhost.
  appPublicUrl: 'https://eka-mining-sac-v01.vercel.app/index.html',
  workflowEmailDelivery: {
    mode: 'n8n-webhook',
    webhookUrl: 'https://prinessrl.app.n8n.cloud/webhook/opsia-rq-review',
    webhookToken: 'f8K2mP9xR4vL7qT1nW6zA3cY8uH5eB2',
    timeoutMs: 15000,
  },
}
