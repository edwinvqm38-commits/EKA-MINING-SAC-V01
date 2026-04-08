const navItems = document.querySelectorAll('.nav-item')
const views = document.querySelectorAll('.content-view')
const title = document.getElementById('viewTitle')
const sidebar = document.getElementById('sidebar')
const menuToggle = document.getElementById('menuToggle')
const authShell = document.getElementById('authShell')
const authForm = document.getElementById('authForm')
const authStatus = document.getElementById('authStatus')
const authTabs = document.getElementById('authTabs')
const authEmailInput = document.getElementById('authEmailInput')
const authNameField = document.getElementById('authNameField')
const authNameInput = document.getElementById('authNameInput')
const authPasswordInput = document.getElementById('authPasswordInput')
const authPasswordField = document.getElementById('authPasswordField')
const authHint = document.getElementById('authHint')
const authGoogleButton = document.getElementById('authGoogleButton')
const authSubmitButton = document.getElementById('authSubmitButton')
const authResetButton = document.getElementById('authResetButton')
const adminButton = document.getElementById('adminButton')
const logoutButton = document.getElementById('logoutButton')
const quotationsNavItem = document.querySelector('.nav-item[data-view="quotations-log"]')
const requirementsNavItem = document.querySelector('.nav-item[data-view="requirements-log"]')
const requirementDetailsNavItem = document.querySelector('.nav-item[data-view="requirements-detail"]')
const resourcesNavItem = document.querySelector('.nav-item[data-view="resources"]')
const suppliersNavItem = document.querySelector('.nav-item[data-view="suppliers"]')

const tableHead = document.getElementById('logTableHead')
const tableBody = document.getElementById('logTableBody')
const logTableColgroup = document.getElementById('logTableColgroup')
const quotationsTable = document.getElementById('quotationsTable')
const syncStatus = document.getElementById('syncStatus')
const columnsButton = document.getElementById('columnsButton')
const refreshButton = document.getElementById('refreshButton')
const newRecordButton = document.getElementById('newRecordButton')
const columnManager = document.getElementById('columnManager')
const columnManagerList = document.getElementById('columnManagerList')
const resetColumnsButton = document.getElementById('resetColumnsButton')

const requirementsTableHead = document.getElementById('requirementsTableHead')
const requirementsTableBody = document.getElementById('requirementsTableBody')
const requirementsTableColgroup = document.getElementById('requirementsTableColgroup')
const requirementsTable = document.getElementById('requirementsTable')
const requirementsSyncStatus = document.getElementById('requirementsSyncStatus')
const requirementsRefreshButton = document.getElementById('requirementsRefreshButton')
const newRequirementButton = document.getElementById('newRequirementButton')

const requirementsDetailTableHead = document.getElementById('requirementsDetailTableHead')
const requirementsDetailTableBody = document.getElementById('requirementsDetailTableBody')
const requirementsDetailColgroup = document.getElementById('requirementsDetailColgroup')
const requirementsDetailTable = document.getElementById('requirementsDetailTable')
const requirementsDetailStatus = document.getElementById('requirementsDetailStatus')
const requirementsDetailRefreshButton = document.getElementById('requirementsDetailRefreshButton')
const requirementsDetailContext = document.getElementById('requirementsDetailContext')
const requirementsDetailPagerSummary = document.getElementById('requirementsDetailPagerSummary')
const requirementsDetailPageIndicator = document.getElementById('requirementsDetailPageIndicator')
const requirementsDetailPrevPage = document.getElementById('requirementsDetailPrevPage')
const requirementsDetailNextPage = document.getElementById('requirementsDetailNextPage')
const requirementsDetailPageSize = document.getElementById('requirementsDetailPageSize')
const resourcesStatus = document.getElementById('resourcesStatus')
const resourcesForm = document.getElementById('resourcesForm')
const resourcesFormReset = document.getElementById('resourcesFormReset')
const resourcesRefreshButton = document.getElementById('resourcesRefreshButton')
const resourcesSearch = document.getElementById('resourcesSearch')
const resourcesTableHead = document.getElementById('resourcesTableHead')
const resourcesTableBody = document.getElementById('resourcesTableBody')
const adminUsersStatus = document.getElementById('adminUsersStatus')
const adminUsersRefreshButton = document.getElementById('adminUsersRefreshButton')
const adminUsersTableHead = document.getElementById('adminUsersTableHead')
const adminUsersTableBody = document.getElementById('adminUsersTableBody')

const recordModal = document.getElementById('recordModal')
const modalBackdrop = document.getElementById('modalBackdrop')
const closeModalButton = document.getElementById('closeModalButton')
const cancelModalButton = document.getElementById('cancelModalButton')
const recordForm = document.getElementById('recordForm')
const recordFormGrid = document.getElementById('recordFormGrid')
const catalogManagerPanel = document.getElementById('catalogManagerPanel')
const modalTitle = document.getElementById('modalTitle')
const saveRecordButton = document.getElementById('saveRecordButton')
const requirementsExplorerModal = document.getElementById('requirementsExplorerModal')
const requirementsExplorerBackdrop = document.getElementById('requirementsExplorerBackdrop')
const closeRequirementsExplorerButton = document.getElementById('closeRequirementsExplorerButton')
const requirementsExplorerTitle = document.getElementById('requirementsExplorerTitle')
const requirementsExplorerEyebrow = document.getElementById('requirementsExplorerEyebrow')
const requirementsExplorerContent = document.getElementById('requirementsExplorerContent')
const requirementEntryModal = document.getElementById('requirementEntryModal')
const requirementEntryBackdrop = document.getElementById('requirementEntryBackdrop')
const closeRequirementEntryButton = document.getElementById('closeRequirementEntryButton')
const cancelRequirementEntryButton = document.getElementById('cancelRequirementEntryButton')
const requirementEntryTitle = document.getElementById('requirementEntryTitle')
const requirementEntryForm = document.getElementById('requirementEntryForm')
const requirementEntryStatus = document.getElementById('requirementEntryStatus')
const requirementCodeInput = document.getElementById('requirementCodeInput')
const requirementQuotationInput = document.getElementById('requirementQuotationInput')
const requirementCostCenterInput = document.getElementById('requirementCostCenterInput')
const requirementDescriptionInput = document.getElementById('requirementDescriptionInput')
const requirementClientInput = document.getElementById('requirementClientInput')
const requirementUnitInput = document.getElementById('requirementUnitInput')
const requirementDateInput = document.getElementById('requirementDateInput')
const requirementDeliveryInput = document.getElementById('requirementDeliveryInput')
const requirementServiceInput = document.getElementById('requirementServiceInput')
const requirementRequesterInput = document.getElementById('requirementRequesterInput')
const requirementAreaInput = document.getElementById('requirementAreaInput')
const requirementStateInput = document.getElementById('requirementStateInput')
const adminPermissionsModal = document.getElementById('adminPermissionsModal')
const adminPermissionsBackdrop = document.getElementById('adminPermissionsBackdrop')
const closeAdminPermissionsButton = document.getElementById('closeAdminPermissionsButton')
const cancelAdminPermissionsButton = document.getElementById('cancelAdminPermissionsButton')
const adminPermissionsForm = document.getElementById('adminPermissionsForm')
const adminPermissionsTitle = document.getElementById('adminPermissionsTitle')
const adminPermissionsStatus = document.getElementById('adminPermissionsStatus')
const adminPermissionsModules = document.getElementById('adminPermissionsModules')
const adminPermissionsPresets = document.getElementById('adminPermissionsPresets')
const adminPermissionsSummary = document.getElementById('adminPermissionsSummary')
const adminPermissionsGeneral = document.getElementById('adminPermissionsGeneral')
const adminPermissionsLinked = document.getElementById('adminPermissionsLinked')
const adminPermissionsFields = document.getElementById('adminPermissionsFields')

const viewTitles = {
  dashboard: 'Dashboard',
  'quotations-log': 'Log de Cotizaciones',
  'requirements-log': 'Log de Requerimientos',
  'requirements-detail': 'Detalle de Requerimientos',
  resources: 'Recursos',
  admin: 'Administrador',
  suppliers: 'Proveedores',
}

const config = window.SUPABASE_CONFIG || null
const primaryKey = config?.primaryKey || 'id'
const visibilityStorageKey = `eka-column-visibility-${config?.table || 'default'}`
const quotationWidthStorageKey = `eka-column-widths-${config?.table || 'default'}`
const requirementsWidthStorageKey = 'eka-column-widths-requirements'
const requirementDetailsWidthStorageKey = 'eka-column-widths-requirements-detail'
const requirementModalVisibilityStorageKey = 'eka-column-visibility-requirement-modal'
const quotationLinkedVisibilityStorageKey = 'eka-column-visibility-quotation-linked'
const selectCatalogStorageKey = 'eka-select-catalogs'
const cacheDatabaseName = 'eka-dashboard-cache'
const cacheStoreName = 'datasets'
const resourcesCatalogCacheKey = 'resources-catalog::local'
const requirementLocalItemsCacheKey = 'requirements-detail-local::custom-items'

let supabaseClient = null
let columns = Array.isArray(config?.columns) ? [...config.columns] : []
let records = []
let currentEditingId = null
let visibleColumnKeys = []
let activeFilters = {}
let activeSort = { key: '', direction: 'asc' }
let columnWidths = loadStoredMap(quotationWidthStorageKey)

let requirementsRecords = []
let requirementsActiveFilters = {}
let requirementsSort = { key: 'cotizacion_codigo', direction: 'asc' }
let selectedRequirementKey = ''
let requirementsColumnWidths = loadStoredMap(requirementsWidthStorageKey)
let requirementDetailsRecords = []
let requirementDetailsColumns = []
let requirementDetailsActiveFilters = {}
let requirementDetailsSort = { key: 'descripcion', direction: 'asc' }
let requirementDetailsColumnWidths = loadStoredMap(requirementDetailsWidthStorageKey)
let requirementDetailsPage = 1
let requirementDetailsPageSizeValue = Number(requirementsDetailPageSize?.value || 200)
let requirementModalItems = []
let requirementModalColumns = []
let requirementModalFilters = {}
let requirementModalSort = { key: 'item', direction: 'asc' }
let requirementModalVisibleColumnKeys = []
let requirementModalColumnManagerOpen = false
let requirementModalResourcePickerOpen = false
let requirementModalResourceSearch = ''
let activeRequirementRecord = null
let quotationLinkedRecord = null
let quotationLinkedRequirements = []
let quotationLinkedFilters = {}
let quotationLinkedSort = { key: 'fecha_rq', direction: 'desc' }
let quotationLinkedVisibleColumnKeys = []
let quotationLinkedColumnManagerOpen = false
let activeRequirementEntryContext = null
let activeExplorerMode = ''
let explorerActiveTab = 'summary'
let explorerExpedienteContextKey = ''
let explorerTrackingEvents = []
let explorerTrackingState = 'idle'
let explorerTrackingError = ''
let explorerEvidenceRecords = []
let explorerEvidenceState = 'idle'
let explorerEvidenceError = ''
let explorerLegacyAttachmentRecords = []
let explorerTrackingComposerMode = ''
let explorerEvidenceComposerOpen = false
let resourcesRecords = []
let resourcesSearchTerm = ''
let editingResourceId = null
let customRequirementItems = []
let activeResize = null
let pendingDeepLinkRequirementKey = ''
let optionCatalogs = {}
let deletedCatalogOptions = {}
let activeCatalogFieldKey = ''
let editingCatalogOptionValue = ''
let authSession = null
let currentUserProfile = null
let authListenerAttached = false
let authMode = 'login'
let adminUsersRecords = []
const adminUsersFilters = {
  full_name: '',
  email: '',
  role: '',
  active: '',
}
let activePermissionsUserId = ''
let activePermissionsProfile = null
let activePermissionsModule = 'quotations'

const quotationPermissionDefaultState = {
  access: true,
  show_refresh_button: true,
  show_columns_button: true,
  show_new_button: false,
  show_edit_button: true,
  show_eye_button: true,
  open_edit_modal: true,
  save_edits: false,
  show_linked_detail_button: true,
  show_linked_new_requirement: false,
  show_linked_columns_button: true,
  show_linked_export_excel_button: true,
  show_linked_share_button: true,
  editable_fields: [],
}

const quotationPermissionGeneralOptions = [
  { key: 'access', label: 'Acceso a Log de Cotizaciones', description: 'Permite entrar y ver la pestaña.' },
  { key: 'show_refresh_button', label: 'Botón Actualizar', description: 'Muestra el botón de recarga de datos.' },
  { key: 'show_columns_button', label: 'Botón Columnas', description: 'Permite abrir el selector de columnas visibles.' },
  { key: 'show_new_button', label: 'Botón Nuevo registro', description: 'Muestra la creación de una nueva cotización.' },
  { key: 'show_edit_button', label: 'Botón Editar', description: 'Muestra el botón para abrir la ficha de la cotización.' },
  { key: 'show_eye_button', label: 'Icono Ojo', description: 'Permite ver requerimientos vinculados a la cotización.' },
  { key: 'open_edit_modal', label: 'Abrir ficha de cotización', description: 'Permite abrir el formulario, aunque sea en modo lectura.' },
  { key: 'save_edits', label: 'Guardar cambios', description: 'Permite guardar cambios dentro del formulario.' },
]

const quotationPermissionLinkedOptions = [
  { key: 'show_linked_detail_button', label: 'Botón Detalle del RQ', description: 'Abre el detalle del requerimiento desde el ojo.' },
  { key: 'show_linked_new_requirement', label: 'Botón Nuevo requerimiento', description: 'Permite crear un RQ desde la cotización.' },
  { key: 'show_linked_columns_button', label: 'Botón Columnas', description: 'Muestra la gestión de columnas en la vista relacionada.' },
  { key: 'show_linked_export_excel_button', label: 'Botón Exportar Excel', description: 'Permite exportar la tabla vinculada.' },
  { key: 'show_linked_share_button', label: 'Botón Compartir', description: 'Permite compartir el enlace de la vista relacionada.' },
]

const adminAssignableRoles = [
  { value: 'consulta', label: 'Lectura' },
  { value: 'comercial', label: 'Editor' },
  { value: 'admin', label: 'Administrador' },
]

const adminPermissionModules = [
  { key: 'quotations', label: 'Log de Cotizaciones', description: 'Acceso, botones y columnas editables.', ready: true },
  { key: 'requirements', label: 'Log de Requerimientos', description: 'Mismo esquema por RQ y agrupaciones.', ready: true },
  { key: 'details', label: 'Detalle de Requerimientos', description: 'Control detallado por items y adjuntos.', ready: true },
  { key: 'resources', label: 'Recursos', description: 'Catálogo, imágenes y reutilización.', ready: true },
  { key: 'suppliers', label: 'Proveedores', description: 'Seguimiento comercial y permisos de consulta.', ready: true },
]

const quotationPermissionPresets = [
  { key: 'blocked', label: 'Sin acceso', tone: 'muted' },
  { key: 'reader', label: 'Lectura', tone: 'soft' },
  { key: 'editor', label: 'Editor', tone: 'info' },
  { key: 'full', label: 'Completo', tone: 'accent' },
]

const requirementsPermissionDefaultState = {
  access: true,
  show_refresh_button: true,
  show_new_button: false,
  show_detail_button: true,
  open_detail_modal: true,
}

const requirementsPermissionGeneralOptions = [
  { key: 'access', label: 'Acceso a Log de Requerimientos', description: 'Permite entrar al módulo y ver la tabla agrupada.' },
  { key: 'show_refresh_button', label: 'Botón Actualizar', description: 'Muestra el botón para recargar requerimientos.' },
  { key: 'show_new_button', label: 'Botón Nuevo requerimiento', description: 'Permite registrar un nuevo requerimiento.' },
  { key: 'show_detail_button', label: 'Botón Detalle', description: 'Muestra el acceso al detalle de cada RQ.' },
  { key: 'open_detail_modal', label: 'Abrir detalle del RQ', description: 'Permite abrir la vista completa del requerimiento seleccionado.' },
]

const requirementDetailsPermissionDefaultState = {
  access: true,
  show_refresh_button: true,
  show_new_requirement_button: false,
  show_add_resource_button: false,
  show_columns_button: true,
  show_download_html_button: true,
  show_export_excel_button: true,
  show_export_pdf_button: true,
  show_print_button: true,
  show_share_button: true,
}

const requirementDetailsPermissionGeneralOptions = [
  { key: 'access', label: 'Acceso a Detalle de Requerimientos', description: 'Permite entrar al tablero general de items.' },
  { key: 'show_refresh_button', label: 'Botón Actualizar', description: 'Permite refrescar el detalle general.' },
  { key: 'show_columns_button', label: 'Botón Columnas', description: 'Permite administrar columnas en el detalle del RQ.' },
  { key: 'show_share_button', label: 'Botón Compartir', description: 'Permite compartir el enlace del requerimiento.' },
]

const requirementDetailsPermissionSecondaryOptions = [
  { key: 'show_new_requirement_button', label: 'Botón Nuevo requerimiento', description: 'Permite crear un nuevo requerimiento desde el detalle.' },
  { key: 'show_add_resource_button', label: 'Botón Agregar recurso', description: 'Permite agregar recursos existentes al RQ.' },
  { key: 'show_download_html_button', label: 'Botón Descargar HTML', description: 'Permite generar la ficha HTML del requerimiento.' },
  { key: 'show_export_excel_button', label: 'Botón Exportar Excel', description: 'Permite exportar el detalle a Excel.' },
  { key: 'show_export_pdf_button', label: 'Botón Exportar PDF', description: 'Permite imprimir/exportar el detalle a PDF.' },
  { key: 'show_print_button', label: 'Botón Imprimir', description: 'Permite abrir la impresión del requerimiento.' },
]

const resourcesPermissionDefaultState = {
  access: true,
  show_refresh_button: true,
  show_form: false,
  save_edits: false,
  show_edit_button: true,
  show_delete_button: false,
}

const resourcesPermissionGeneralOptions = [
  { key: 'access', label: 'Acceso a Recursos', description: 'Permite entrar al catálogo de recursos.' },
  { key: 'show_refresh_button', label: 'Botón Actualizar', description: 'Permite recargar el catálogo local.' },
  { key: 'show_form', label: 'Mostrar formulario', description: 'Permite ver el formulario de alta/edición de recursos.' },
  { key: 'save_edits', label: 'Guardar recursos', description: 'Permite crear o actualizar recursos.' },
  { key: 'show_edit_button', label: 'Botón Editar', description: 'Muestra la edición de recursos existentes.' },
  { key: 'show_delete_button', label: 'Botón Eliminar', description: 'Permite eliminar recursos del catálogo.' },
]

const suppliersPermissionDefaultState = {
  access: true,
}

const suppliersPermissionGeneralOptions = [
  { key: 'access', label: 'Acceso a Proveedores', description: 'Permite entrar al módulo de proveedores.' },
]

const modulePermissionConfigs = {
  quotations: {
    label: 'Log de Cotizaciones',
    description: 'Acceso, botones y columnas editables.',
    defaultState: quotationPermissionDefaultState,
    generalOptions: quotationPermissionGeneralOptions,
    secondaryOptions: quotationPermissionLinkedOptions,
    secondaryTitle: 'Vista relacionada de cotización',
    secondaryDescription: 'Permisos dentro del icono del ojo y la tabla de requerimientos vinculados.',
    fieldKeys: () => getQuotationEditableFieldKeys(),
    fieldTitle: 'Columnas editables',
    fieldDescription: 'Si puede editar, aquí eliges exactamente qué campos podrá modificar.',
  },
  requirements: {
    label: 'Log de Requerimientos',
    description: 'Acceso al log agrupado y acciones del RQ.',
    defaultState: requirementsPermissionDefaultState,
    generalOptions: requirementsPermissionGeneralOptions,
  },
  details: {
    label: 'Detalle de Requerimientos',
    description: 'Permisos del tablero general y del modal de detalle.',
    defaultState: requirementDetailsPermissionDefaultState,
    generalOptions: requirementDetailsPermissionGeneralOptions,
    secondaryOptions: requirementDetailsPermissionSecondaryOptions,
    secondaryTitle: 'Acciones del detalle',
    secondaryDescription: 'Controla botones y acciones dentro del detalle del RQ.',
  },
  resources: {
    label: 'Recursos',
    description: 'Catálogo, formulario y acciones de recursos.',
    defaultState: resourcesPermissionDefaultState,
    generalOptions: resourcesPermissionGeneralOptions,
  },
  suppliers: {
    label: 'Proveedores',
    description: 'Acceso básico al módulo comercial.',
    defaultState: suppliersPermissionDefaultState,
    generalOptions: suppliersPermissionGeneralOptions,
  },
}

const fallbackRecords = [
  {
    id: 1,
    cotizacion: '#COT-2841',
    f_oc: '2026-04-05',
    oc: 'OC-9012',
    descripcion: 'Servicio de perforación diamantina',
    observacion: 'Incluye movilización y supervisión',
    prioridad: 'Alta',
    tipo_servicio: 'Servicio integral',
    status_cot: 'Aprobada',
    solicitado: 'Luis Rojas',
    correo: 'lrojas@cliente.com',
    cliente: 'Minera Horizonte',
    unidad_minera: 'Toromocho',
    responsable: 'Ana Torres',
    fecha_invitacion: '2026-04-03',
    fecha_confirmacion: '2026-04-04',
    fecha_visita_tec: '2026-04-04',
    fecha_consultas: '2026-04-05',
    fecha_abs_consultas: '2026-04-05',
    fecha_entrega: '2026-04-06',
    oferta_sol: 185000,
    oferta_usd: 49865,
    tc: 3.71,
    status_oferta: 'Ganada',
  },
  {
    id: 2,
    cotizacion: '#COT-2840',
    f_oc: '2026-04-05',
    oc: 'OC-9010',
    descripcion: 'Mantenimiento de equipos auxiliares',
    observacion: 'Falta confirmar alcance final',
    prioridad: 'Media',
    tipo_servicio: 'Soporte técnico',
    status_cot: 'En revisión',
    solicitado: 'Paola Vega',
    correo: 'pvega@andes.com',
    cliente: 'Andes Drilling',
    unidad_minera: 'Cerro Verde',
    responsable: 'Carlos Ruiz',
    fecha_invitacion: '2026-04-02',
    fecha_confirmacion: '2026-04-03',
    fecha_visita_tec: '2026-04-04',
    fecha_consultas: '2026-04-05',
    fecha_abs_consultas: '2026-04-05',
    fecha_entrega: '2026-04-07',
    oferta_sol: 92500,
    oferta_usd: 24933,
    tc: 3.71,
    status_oferta: 'Pendiente',
  },
]

const requirementsColumns = [
  { key: 'rq_codigo', label: 'N° RQ', type: 'text' },
  { key: 'centro_costos', label: 'CENTRO COSTOS', type: 'text' },
  { key: 'cotizacion_codigo', label: 'COTIZACIÓN', type: 'text' },
  { key: 'descripcion_cotizacion', label: 'DESCRIPCIÓN COTIZACIÓN', type: 'text' },
  { key: 'cliente', label: 'CLIENTE', type: 'text' },
  { key: 'unidad', label: 'UNIDAD / TRABAJO', type: 'text' },
  { key: 'fecha_rq', label: 'FECHA RQ', type: 'date' },
  { key: 'fecha_entrega', label: 'FECHA ENTREGA', type: 'date' },
  { key: 'tipo_servicio', label: 'TIPO SERVICIO', type: 'text' },
  { key: 'solicitante', label: 'SOLICITANTE', type: 'text' },
  { key: 'area', label: 'ÁREA', type: 'text' },
  { key: 'estado', label: 'ESTADO', type: 'text', tag: true },
  { key: 'revision_estado', label: 'REVISAR', type: 'text', tag: true },
  { key: 'cantidad_items', label: 'ITEMS', type: 'number' },
]

const requirementDetailsColumnDefinitions = [
  { key: 'item', label: 'ITEM', type: 'number' },
  { key: 'area', label: 'ÁREA', type: 'text' },
  { key: 'tipo_servicio', label: 'TIPO DE SERVICIO', type: 'text', tag: true },
  { key: 'cliente', label: 'CLIENTE', type: 'text' },
  { key: 'unidad', label: 'UNIDAD', type: 'text' },
  { key: 'solicitante', label: 'SOLICITANTE', type: 'text' },
  { key: 'cotizacion_codigo', label: 'COTIZACIÓN', type: 'text' },
  { key: 'centro_costos', label: 'CENTRO COSTOS', type: 'text' },
  { key: 'fecha_rq', label: 'FECHA RQ', type: 'date' },
  { key: 'rq_codigo', label: 'N° RQ', type: 'text' },
  { key: 'tipo', label: 'TIPO', type: 'text', tag: true },
  { key: 'tipo_flag', label: 'TIPO FLAG', type: 'text' },
  { key: 'codigo', label: 'CODIGO', type: 'text' },
  { key: 'descripcion', label: 'DESCRIPCIÓN', type: 'text' },
  { key: 'ficha_tecnica', label: 'FICHA TECNICA', type: 'text' },
  { key: 'observacion', label: 'OBSERVACIÓN', type: 'text' },
  { key: 'fotos', label: 'FOTOS', type: 'text' },
  { key: 'und', label: 'UND', type: 'text' },
  { key: 'cant_rq', label: 'CANT RQ', type: 'number' },
  { key: 'ajuste', label: 'AJUSTE', type: 'number' },
  { key: 'atencion_real', label: 'ATENCION REAL', type: 'number' },
  { key: 'cant_stock', label: 'CANT. STOCK', type: 'number' },
  { key: 'compra', label: 'COMPRA', type: 'number' },
  { key: 'costo_unitario_dolar', label: 'COSTO UNITARIO DÓLAR', type: 'number' },
  { key: 'costo_unitario_soles', label: 'COSTO UNITARIO SOLES', type: 'number' },
  { key: 'tc', label: 'TC', type: 'number' },
  { key: 'factor_eq_herr', label: 'FACTOR EQ. Y HERR.', type: 'number' },
  { key: 'pu_soles_sin_igv', label: 'P.U. SOLES SIN IGV', type: 'number' },
  { key: 'costo_total_presupuestado_s', label: 'COSTO TOTAL PRESUPUESTADO [S/]', type: 'number' },
  { key: 'costo_total_presupuestado_usd', label: 'COSTO TOTAL PRESUPUESTADO [USD]', type: 'number' },
  { key: 'moneda', label: 'MONEDA', type: 'text', tag: true },
  { key: 'fecha_coti', label: 'FECHA DE COTI', type: 'date' },
  { key: 'estado', label: 'ESTADO', type: 'text', tag: true },
  { key: 'a_suministrar', label: 'A SUMINISTRAR', type: 'text' },
  { key: 'ficha_tecnica_a_suministrar', label: 'FICHA TECNICA A SUMINISTRAR', type: 'text' },
  { key: 'estado_proveedor', label: 'ESTADO // PROVEEDOR', type: 'text', tag: true },
  { key: 'condicion_pago', label: 'CON. PAGO', type: 'text' },
  { key: 'tiempo_entrega', label: 'TIEMPO DE ENTREGA', type: 'text' },
  { key: 'vb_tecnico', label: 'V.B. TECNICO', type: 'text', tag: true },
  { key: 'f_aprob_tecnico', label: 'F.APROB. TECNICO', type: 'date' },
  { key: 'vb_economico', label: 'V.B. ECONOMICO', type: 'text', tag: true },
  { key: 'f_aprob_economico', label: 'F.APROB. ECONOMICO', type: 'date' },
  { key: 'vb_gerencia', label: 'V.B. GERENCIA', type: 'text', tag: true },
  { key: 'f_aprob_gerencia', label: 'F.APROB. GERENCIA', type: 'date' },
  { key: 'logistica_compra', label: 'LOGISTICA COMPRA', type: 'text', tag: true },
  { key: 'f_compra', label: 'F. COMPRA.', type: 'date' },
  { key: 'oc', label: 'OC', type: 'text' },
  { key: 'f_entrega', label: 'F. ENTREGA', type: 'date' },
  { key: 'guia_remision', label: 'GUIA DE REMISIÓN', type: 'text' },
  { key: 'archivo_guia', label: 'ARCHIVO GUIA', type: 'text' },
  { key: 'fuente', label: 'FUENTE', type: 'text', tag: true },
]

const requirementsFallbackRecords = [
  {
    rq_codigo: 'RQ-CJM30-(001-002)_2023',
    centro_costos: '4515388534',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2022-123',
    descripcion_cotizacion: 'INSTALACION DE CONTACTOR DE HORNO DEMAG H001B',
    cliente: 'NEXA',
    unidad: 'REFINERIA CAJAMARQUILLA',
    fecha_rq: '2023-12-23',
    fecha_entrega: '2023-12-30',
    tipo_servicio: 'MATERIALES',
    solicitante: 'NERY MONTEZA',
    area: 'MANTENIMIENTO',
    estado: 'REGISTRADO',
    cantidad_items: 2,
  },
  {
    rq_codigo: 'RQ-CJM30-003_2023',
    centro_costos: '4515388534',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2022-123',
    descripcion_cotizacion: 'INSTALACION DE CONTACTOR DE HORNO DEMAG H001B',
    cliente: 'NEXA',
    unidad: 'REFINERIA CAJAMARQUILLA',
    fecha_rq: '2024-02-07',
    fecha_entrega: '2024-02-15',
    tipo_servicio: 'HERRAMIENTAS',
    solicitante: 'NERY MONTEZA',
    area: 'OPERACIONES',
    estado: 'REGISTRADO',
    cantidad_items: 7,
  },
  {
    rq_codigo: 'RQ-CJM30-004_2023',
    centro_costos: '4515388534',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2022-123',
    descripcion_cotizacion: 'INSTALACION DE CONTACTOR DE HORNO DEMAG H001B',
    cliente: 'NEXA',
    unidad: 'REFINERIA CAJAMARQUILLA',
    fecha_rq: '2023-12-07',
    fecha_entrega: '2023-12-14',
    tipo_servicio: 'MATERIALES',
    solicitante: 'NERY MONTEZA',
    area: 'PINTURA',
    estado: 'OBSERVADO',
    cantidad_items: 3,
  },
  {
    rq_codigo: 'RQ-CJM30-005_2023',
    centro_costos: '4515388534',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2022-123',
    descripcion_cotizacion: 'INSTALACION DE CONTACTOR DE HORNO DEMAG H001B',
    cliente: 'NEXA',
    unidad: 'REFINERIA CAJAMARQUILLA',
    fecha_rq: '2024-02-09',
    fecha_entrega: '2024-02-18',
    tipo_servicio: 'MATERIALES',
    solicitante: 'NERY MONTEZA',
    area: 'ALMACÉN',
    estado: 'BORRADOR',
    cantidad_items: 2,
  },
  {
    rq_codigo: 'RQ-CJM30-006_2023',
    centro_costos: '4515388534',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2022-123',
    descripcion_cotizacion: 'INSTALACION DE CONTACTOR DE HORNO DEMAG H001B',
    cliente: 'NEXA',
    unidad: 'REFINERIA CAJAMARQUILLA',
    fecha_rq: '2024-03-14',
    fecha_entrega: '2024-03-20',
    tipo_servicio: 'CONSUMIBLES',
    solicitante: 'NERY MONTEZA',
    area: 'PRODUCCIÓN',
    estado: 'REGISTRADO',
    cantidad_items: 4,
  },
  {
    rq_codigo: 'RQ-UMSR-2401-02',
    centro_costos: '4400020802',
    cotizacion_codigo: 'FOR-EKA-PRO-3_2023-237',
    descripcion_cotizacion: 'Serv. Estandarización Sala de Chancado San Rafael U.M. San Rafael',
    cliente: 'MINSUR',
    unidad: 'U.M. SAN RAFAEL',
    fecha_rq: '2024-08-22',
    fecha_entrega: '2024-08-29',
    tipo_servicio: 'GASTOS GENERALES',
    solicitante: 'ALEX YUCRA',
    area: 'ADMINISTRACIÓN',
    estado: 'REGISTRADO',
    cantidad_items: 1,
  },
]

const resourceColumns = [
  { key: 'codigo', label: 'CÓDIGO', type: 'text' },
  { key: 'descripcion', label: 'DESCRIPCIÓN', type: 'text' },
  { key: 'categoria', label: 'CATEGORÍA', type: 'text', tag: true },
  { key: 'unidad', label: 'UNIDAD', type: 'text' },
  { key: 'moneda', label: 'MONEDA', type: 'text', tag: true },
  { key: 'costo_unitario', label: 'COSTO UNITARIO', type: 'number' },
  { key: 'proveedor', label: 'PROVEEDOR', type: 'text' },
  { key: 'observacion', label: 'OBSERVACIÓN', type: 'text' },
]

const defaultResourceCatalog = [
  {
    id: 'resource-default-1',
    codigo: 'MAT-001',
    descripcion: 'Cable THHN 4 AWG',
    categoria: 'MATERIAL',
    unidad: 'M',
    moneda: 'PEN',
    costo_unitario: 18.5,
    proveedor: 'Proveedor eléctrico base',
    imagen_url: '',
    observacion: 'Recurso inicial de referencia',
  },
  {
    id: 'resource-default-2',
    codigo: 'EQ-001',
    descripcion: 'Plataforma tijera eléctrica',
    categoria: 'EQUIPO',
    unidad: 'DÍA',
    moneda: 'PEN',
    costo_unitario: 420,
    proveedor: 'Rental operativo',
    imagen_url: '',
    observacion: 'Equipo reutilizable',
  },
  {
    id: 'resource-default-3',
    codigo: 'MO-001',
    descripcion: 'Técnico electricista',
    categoria: 'MANO DE OBRA',
    unidad: 'HH',
    moneda: 'PEN',
    costo_unitario: 32,
    proveedor: 'Cuadrilla interna',
    imagen_url: '',
    observacion: 'Base para recursos humanos',
  },
]

const managedSelectFieldDefinitions = {
  prioridad: { label: 'Prioridad', kind: 'simple' },
  tipo_servicio: { label: 'Tipo de servicio', kind: 'simple' },
  status_cot: { label: 'Status Cot', kind: 'simple' },
  solicitado_por: {
    label: 'Solicitado Por',
    kind: 'contact',
    aliases: ['solicitado'],
    emailField: 'correo_solicitante',
    phoneField: 'telefono_solicitante',
  },
  cliente: { label: 'Cliente', kind: 'simple' },
  unidad_minera: { label: 'Unidad Minera', kind: 'simple' },
  responsable_tecnico: {
    label: 'Responsable Tecnico',
    kind: 'contact',
    emailField: 'correo_responsable_tecnico',
    phoneField: 'telefono_responsable_tecnico',
  },
  responsable_economico: {
    label: 'Responsable Economico',
    kind: 'contact',
    emailField: 'correo_responsable_economico',
    phoneField: 'telefono_responsable_economico',
  },
  status_oferta: { label: 'Status Oferta', kind: 'simple' },
}

function getQuotationEditableFieldKeys(sourceColumns = columns) {
  return sourceColumns
    .filter((column) => !column.readonly && column.key !== 'analisis_economico_url')
    .map((column) => column.key)
}

function getModulePermissionConfig(moduleKey = 'quotations') {
  return modulePermissionConfigs[moduleKey] || modulePermissionConfigs.quotations
}

function getAdminModulePermissions(moduleKey = 'quotations') {
  return buildModulePermissionsPreset(moduleKey, 'full')
}

function normalizeModulePermissions(moduleKey = 'quotations', rawPermissions = {}, profile = currentUserProfile) {
  if (profile?.role === 'admin') {
    return getAdminModulePermissions(moduleKey)
  }

  const config = getModulePermissionConfig(moduleKey)
  const source = rawPermissions && typeof rawPermissions === 'object' ? rawPermissions : {}
  const normalized = { ...config.defaultState }
  const editableKeys = new Set(typeof config.fieldKeys === 'function' ? config.fieldKeys() : [])

  Object.keys(config.defaultState).forEach((key) => {
    if (key === 'editable_fields') {
      return
    }
    if (typeof source[key] === 'boolean') {
      normalized[key] = source[key]
    }
  })

  if ('editable_fields' in config.defaultState) {
    normalized.editable_fields = Array.isArray(source.editable_fields)
      ? source.editable_fields.filter((key) => editableKeys.has(key))
      : []
  }

  if (!normalized.access) {
    Object.keys(normalized).forEach((key) => {
      if (key === 'access') {
        return
      }
      if (typeof normalized[key] === 'boolean') {
        normalized[key] = false
      }
    })
  }

  if ('show_edit_button' in normalized && !normalized.show_edit_button) {
    normalized.open_edit_modal = false
    if ('save_edits' in normalized) {
      normalized.save_edits = false
    }
  }

  if ('open_edit_modal' in normalized && !normalized.open_edit_modal && 'save_edits' in normalized) {
    normalized.save_edits = false
  }

  if ('show_detail_button' in normalized && !normalized.show_detail_button) {
    normalized.open_detail_modal = false
  }

  if ('show_form' in normalized && !normalized.show_form && 'save_edits' in normalized) {
    normalized.save_edits = false
  }

  if ('editable_fields' in normalized && normalized.save_edits && !normalized.editable_fields.length) {
    normalized.editable_fields = typeof config.fieldKeys === 'function' ? config.fieldKeys() : []
  }

  return normalized
}

function getCurrentModulePermissions(moduleKey = 'quotations', profile = currentUserProfile) {
  const rawPermissions = profile?.metadata?.permissions?.[moduleKey] || {}
  return normalizeModulePermissions(moduleKey, rawPermissions, profile)
}

function getCurrentQuotationPermissions(profile = currentUserProfile) {
  return getCurrentModulePermissions('quotations', profile)
}

function userCanAccessQuotations(profile = currentUserProfile) {
  return getCurrentQuotationPermissions(profile).access
}

function userCanAccessModule(moduleKey, profile = currentUserProfile) {
  return getCurrentModulePermissions(moduleKey, profile).access
}

function userCanCreateQuotations(profile = currentUserProfile) {
  const permissions = getCurrentQuotationPermissions(profile)
  return permissions.access && permissions.show_new_button && permissions.save_edits
}

function getQuotationReadableActionLabel() {
  return getCurrentQuotationPermissions().save_edits ? 'Editar' : 'Ver'
}

function applyQuotationUiPermissions() {
  const permissions = getCurrentQuotationPermissions()
  const canAccess = permissions.access

  if (quotationsNavItem) {
    quotationsNavItem.hidden = !canAccess
  }

  if (columnsButton) {
    columnsButton.hidden = !canAccess || !permissions.show_columns_button
  }

  if (refreshButton) {
    refreshButton.hidden = !canAccess || !permissions.show_refresh_button
  }

  if (newRecordButton) {
    newRecordButton.hidden = !canAccess || !permissions.show_new_button
  }

  if (!canAccess && document.getElementById('view-quotations-log')?.classList.contains('is-visible')) {
    setActiveView('dashboard')
  }
}

function applyAuxiliaryModuleUiPermissions() {
  const requirementsPermissions = getCurrentModulePermissions('requirements')
  const detailsPermissions = getCurrentModulePermissions('details')
  const resourcesPermissions = getCurrentModulePermissions('resources')
  const suppliersPermissions = getCurrentModulePermissions('suppliers')

  if (requirementsNavItem) {
    requirementsNavItem.hidden = !requirementsPermissions.access
  }

  if (requirementsRefreshButton) {
    requirementsRefreshButton.hidden = !requirementsPermissions.access || !requirementsPermissions.show_refresh_button
  }

  if (newRequirementButton) {
    newRequirementButton.hidden = !requirementsPermissions.access || !requirementsPermissions.show_new_button
  }

  if (requirementDetailsNavItem) {
    requirementDetailsNavItem.hidden = !detailsPermissions.access
  }

  if (requirementsDetailRefreshButton) {
    requirementsDetailRefreshButton.hidden = !detailsPermissions.access || !detailsPermissions.show_refresh_button
  }

  if (resourcesNavItem) {
    resourcesNavItem.hidden = !resourcesPermissions.access
  }

  if (resourcesRefreshButton) {
    resourcesRefreshButton.hidden = !resourcesPermissions.access || !resourcesPermissions.show_refresh_button
  }

  if (resourcesForm) {
    const controls = resourcesForm.querySelectorAll('input, select, textarea, button')
    controls.forEach((control) => {
      if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement || control instanceof HTMLButtonElement)) {
        return
      }

      if (control === resourcesFormReset || control === resourcesForm.querySelector('#resourcesFormSubmit')) {
        return
      }

      control.disabled = !resourcesPermissions.access || !resourcesPermissions.show_form || !resourcesPermissions.save_edits
    })
  }

  if (resourcesFormReset) {
    resourcesFormReset.hidden = !resourcesPermissions.access || !resourcesPermissions.show_form
    resourcesFormReset.disabled = !resourcesPermissions.access || !resourcesPermissions.show_form
  }

  const resourcesFormSubmit = resourcesForm?.querySelector('#resourcesFormSubmit')
  if (resourcesFormSubmit instanceof HTMLButtonElement) {
    resourcesFormSubmit.hidden = !resourcesPermissions.access || !resourcesPermissions.show_form || !resourcesPermissions.save_edits
    resourcesFormSubmit.disabled = !resourcesPermissions.access || !resourcesPermissions.show_form || !resourcesPermissions.save_edits
  }

  if (suppliersNavItem) {
    suppliersNavItem.hidden = !suppliersPermissions.access
  }

  const activeProtectedViews = [
    ['requirements-log', requirementsPermissions.access],
    ['requirements-detail', detailsPermissions.access],
    ['resources', resourcesPermissions.access],
    ['suppliers', suppliersPermissions.access],
  ]

  const blockedActiveView = activeProtectedViews.find(([viewId, allowed]) => document.getElementById(`view-${viewId}`)?.classList.contains('is-visible') && !allowed)
  if (blockedActiveView) {
    setActiveView('dashboard')
  }
}

function setFieldReadOnlyState(fieldElement, readOnly) {
  if (!fieldElement) {
    return
  }

  fieldElement.disabled = readOnly
  const fieldContainer = fieldElement.closest('.field')
  if (fieldContainer) {
    fieldContainer.classList.toggle('field--readonly', readOnly)
  }
}

function applyQuotationFormPermissions(record = null) {
  const permissions = getCurrentQuotationPermissions()
  const isCreateMode = !record?.[primaryKey]
  const editableFieldKeys = new Set(permissions.editable_fields)
  const canPersist = isCreateMode
    ? permissions.access && permissions.show_new_button && permissions.save_edits
    : permissions.access && permissions.show_edit_button && permissions.open_edit_modal && permissions.save_edits

  columns.forEach((column) => {
    if (column.readonly || column.key === 'analisis_economico_url') {
      return
    }

    const fieldElement = recordForm?.elements?.[column.key]
    if (!(fieldElement instanceof HTMLInputElement || fieldElement instanceof HTMLSelectElement || fieldElement instanceof HTMLTextAreaElement)) {
      return
    }

    const canEditField = canPersist && editableFieldKeys.has(column.key)
    setFieldReadOnlyState(fieldElement, !canEditField)

    const manageButton = recordFormGrid?.querySelector(`[data-action="manage-select-options"][data-field-key="${column.key}"]`)
    if (manageButton instanceof HTMLButtonElement) {
      manageButton.hidden = !canEditField
      manageButton.disabled = !canEditField
    }
  })

  if (saveRecordButton) {
    saveRecordButton.hidden = !canPersist
    saveRecordButton.disabled = !canPersist
    saveRecordButton.textContent = isCreateMode ? 'Guardar' : 'Guardar cambios'
  }

  if (cancelModalButton) {
    cancelModalButton.textContent = canPersist ? 'Cancelar' : 'Cerrar'
  }

  if (modalTitle) {
    modalTitle.textContent = isCreateMode
      ? canPersist
        ? 'Nuevo registro'
        : 'Vista de registro'
      : canPersist
        ? 'Editar registro'
        : 'Ver registro'
  }
}

function setActiveView(viewKey) {
  if (currentUserProfile) {
    const protectedViewMap = {
      admin: currentUserProfile?.role === 'admin' && currentUserProfile?.active ? '__allowed__' : '',
      'quotations-log': 'quotations',
      'requirements-log': 'requirements',
      'requirements-detail': 'details',
      resources: 'resources',
      suppliers: 'suppliers',
    }

    const requiredModule = protectedViewMap[viewKey]
    if ((viewKey === 'admin' && requiredModule !== '__allowed__') || (requiredModule && requiredModule !== '__allowed__' && !userCanAccessModule(requiredModule))) {
      viewKey = 'dashboard'
    }
  }

  navItems.forEach((item) => {
    item.classList.toggle('is-active', item.dataset.view === viewKey)
  })

  views.forEach((view) => {
    view.classList.toggle('is-visible', view.id === `view-${viewKey}`)
  })

  if (title) {
    title.textContent = viewTitles[viewKey] || 'Panel'
  }

  if (viewKey === 'admin') {
    void loadAdminUsers()
  }

  if (viewKey === 'requirements-detail') {
    selectedRequirementKey = ''
    requirementDetailsActiveFilters = {}
    requirementDetailsPage = 1
    buildRequirementDetailsHead()
    renderRequirementDetailsTable()
  }

  sidebar.classList.remove('is-open')
  document.body.classList.remove('menu-open')
}

function initializeSupabase() {
  const hasCredentials =
    config &&
    config.url &&
    config.anonKey &&
    !config.url.includes('PEGA_AQUI') &&
    !config.anonKey.includes('PEGA_AQUI')

  if (!hasCredentials || !window.supabase) {
    return null
  }

  return window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

function updateAuthStatus(message = '', tone = 'info') {
  if (!authStatus) {
    return
  }

  authStatus.textContent = message
  authStatus.dataset.tone = tone
  authStatus.classList.toggle('is-visible', Boolean(message))
}

function applyAuthMode(mode = 'login') {
  authMode = mode
  authTabs?.querySelectorAll('[data-auth-mode]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.authMode === mode)
  })

  authNameField?.classList.toggle('is-hidden', mode !== 'register')
  authPasswordField?.classList.toggle('is-hidden', mode === 'reset')

  if (authPasswordInput) {
    authPasswordInput.required = mode !== 'reset'
    authPasswordInput.autocomplete = mode === 'login' ? 'current-password' : 'new-password'
    authPasswordInput.placeholder =
      mode === 'register' ? 'Crea una contraseña temporal' : 'Ingresa tu contraseña'
  }

  if (authNameInput) {
    authNameInput.required = mode === 'register'
  }

  if (authSubmitButton) {
    authSubmitButton.textContent =
      mode === 'login' ? 'Ingresar' : mode === 'register' ? 'Solicitar acceso' : 'Enviar enlace'
  }

  if (authHint) {
    authHint.textContent =
      mode === 'login'
        ? 'Usa tu cuenta aprobada. Si tu correo pertenece a EKA Mining SAC, también puedes ingresar con Google.'
        : mode === 'register'
          ? 'Puedes registrarte con correo corporativo o personal. Tu acceso quedará pendiente hasta que Edwin lo apruebe.'
          : 'Te enviaremos un enlace a tu correo para restablecer la contraseña de forma segura.'
  }

  if (authGoogleButton) {
    authGoogleButton.style.display = mode === 'reset' ? 'none' : 'inline-flex'
  }

  updateAuthStatus('')
}

function showAuthShell(message = '', tone = 'info') {
  authShell?.classList.remove('is-hidden')
  document.body.classList.add('auth-locked')
  applyAuthMode(authMode || 'login')
  updateAuthStatus(message, tone)
}

function hideAuthShell() {
  authShell?.classList.add('is-hidden')
  document.body.classList.remove('auth-locked')
  updateAuthStatus('')
}

function setSidebarUserState() {
  const email = authSession?.user?.email || ''
  const displayName = currentUserProfile?.full_name || email || 'Administrador'
  const roleLabel = currentUserProfile?.role ? ` · ${String(currentUserProfile.role).toUpperCase()}` : ''
  const canSeeAdmin = currentUserProfile?.role === 'admin' && currentUserProfile?.active

  if (adminButton) {
    adminButton.textContent = canSeeAdmin ? 'Administrador' : `${displayName}${roleLabel}`
    adminButton.hidden = !canSeeAdmin
  }

  if (logoutButton) {
    logoutButton.disabled = !authSession?.user
  }

  applyQuotationUiPermissions()
  applyAuxiliaryModuleUiPermissions()
}

async function loadCurrentUserProfile() {
  if (!supabaseClient?.auth) {
    return null
  }

  const userId = authSession?.user?.id
  if (!userId) {
    return null
  }

  const { data, error } = await supabaseClient
    .from('user_profiles')
    .select('user_id, email, full_name, role, active, metadata')
    .eq('user_id', userId)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data || null
}

function resetAppData() {
  records = []
  requirementsRecords = []
  requirementDetailsRecords = []
  requirementModalItems = []
  quotationLinkedRequirements = []
  customRequirementItems = []
  adminUsersRecords = []

  if (columns.length) {
    buildTableHead()
  }
  renderTable()

  buildRequirementsHead()
  renderRequirementsTable()

  requirementDetailsColumns = []
  buildRequirementDetailsHead()
  renderRequirementDetailsTable()
  renderAdminUsersTable()

  updateStatus('Inicia sesión para cargar cotizaciones.', 'warning')
  updateRequirementsStatus('Inicia sesión para cargar requerimientos.', 'warning')
  updateRequirementDetailsStatus('Inicia sesión para cargar el detalle de requerimientos.', 'warning')
  updateAdminUsersStatus('Inicia sesión como administrador para gestionar accesos.', 'warning')
}

function updateAdminUsersStatus(message, tone = 'info') {
  if (!adminUsersStatus) {
    return
  }

  adminUsersStatus.textContent = message
  adminUsersStatus.dataset.tone = tone
}

function updateAdminPermissionsStatus(message, tone = 'info') {
  if (!adminPermissionsStatus) {
    return
  }

  adminPermissionsStatus.textContent = message
  adminPermissionsStatus.dataset.tone = tone
}

function buildPermissionToggleMarkup(option, checked) {
  return `
    <label class="permission-toggle">
      <input type="checkbox" name="${option.key}" ${checked ? 'checked' : ''} />
      <span class="permission-toggle__content">
        <strong>${escapeHtml(option.label)}</strong>
        <small>${escapeHtml(option.description)}</small>
      </span>
    </label>
  `
}

function renderAdminPermissionsModal() {
  if (!adminPermissionsForm || !activePermissionsProfile) {
    return
  }

  const moduleConfig = getModulePermissionConfig(activePermissionsModule)
  const moduleChipConfig = adminPermissionModules.find((module) => module.key === activePermissionsModule) || adminPermissionModules[0]
  const permissions = getCurrentModulePermissions(activePermissionsModule, activePermissionsProfile)
  const editableFields = new Set(Array.isArray(permissions.editable_fields) ? permissions.editable_fields : [])
  const canConfigureFields = true
  const fieldKeys = typeof moduleConfig.fieldKeys === 'function' ? moduleConfig.fieldKeys() : []
  const generalSection = adminPermissionsGeneral?.closest('.permissions-section')
  const linkedSection = adminPermissionsLinked?.closest('.permissions-section')
  const fieldsSection = adminPermissionsFields?.closest('.permissions-section')
  const linkedTitle = linkedSection?.querySelector('.permissions-section__header strong')
  const linkedDescription = linkedSection?.querySelector('.permissions-section__header small')
  const fieldsTitle = fieldsSection?.querySelector('.permissions-section__header strong')
  const fieldsDescription = fieldsSection?.querySelector('.permissions-section__header small')

  if (adminPermissionsTitle) {
    adminPermissionsTitle.textContent = `${moduleChipConfig.label} · ${activePermissionsProfile.full_name || activePermissionsProfile.email || 'usuario'}`
  }

  if (adminPermissionsModules) {
    adminPermissionsModules.innerHTML = adminPermissionModules
      .map((module) => {
        const classes = [
          'permissions-module-chip',
          module.key === activePermissionsModule ? 'is-active' : '',
          module.ready ? '' : 'is-disabled',
        ]
          .filter(Boolean)
          .join(' ')

        return `
          <button
            class="${classes}"
            type="button"
            data-action="select-permissions-module"
            data-module-key="${escapeHtml(module.key)}"
            ${module.ready ? '' : 'disabled'}
            title="${escapeHtml(module.description)}"
          >
            <span>${escapeHtml(module.label)}</span>
            <small>${module.ready ? 'Configurable' : 'Próximo'}</small>
          </button>
        `
      })
      .join('')
  }

  if (adminPermissionsPresets) {
    adminPermissionsPresets.innerHTML = `
      <div class="permissions-presets__label">Plantillas rápidas</div>
      <div class="permissions-presets__actions">
        ${quotationPermissionPresets
          .map(
            (preset) => `
              <button
                class="permissions-preset-chip permissions-preset-chip--${preset.tone}"
                type="button"
                data-action="apply-module-permissions-preset"
                data-preset-key="${escapeHtml(preset.key)}"
              >
                ${escapeHtml(preset.label)}
              </button>
            `,
          )
          .join('')}
      </div>
    `
  }

  if (adminPermissionsSummary) {
    adminPermissionsSummary.innerHTML = `
      <article class="rq-summary__card"><span>Correo</span><strong>${escapeHtml(activePermissionsProfile.email || '-')}</strong></article>
      <article class="rq-summary__card"><span>Rol base</span><strong>${escapeHtml(String(activePermissionsProfile.role || 'consulta').toUpperCase())}</strong></article>
      <article class="rq-summary__card"><span>Estado</span><strong>${activePermissionsProfile.active ? 'Activo' : 'Pendiente'}</strong></article>
      <article class="rq-summary__card"><span>Modo</span><strong>${permissions.save_edits || permissions.show_new_button || permissions.show_form || permissions.show_add_resource_button ? 'Edición controlada' : 'Lectura controlada'}</strong></article>
    `
  }

  if (adminPermissionsGeneral) {
    adminPermissionsGeneral.innerHTML = (moduleConfig.generalOptions || [])
      .map((option) => buildPermissionToggleMarkup(option, permissions[option.key]))
      .join('')
  }

  if (adminPermissionsLinked) {
    adminPermissionsLinked.innerHTML = (moduleConfig.secondaryOptions || [])
      .map((option) => buildPermissionToggleMarkup(option, permissions[option.key]))
      .join('')
  }

  if (adminPermissionsFields) {
    adminPermissionsFields.innerHTML = fieldKeys
      .map((fieldKey) => {
        const column = columns.find((entry) => entry.key === fieldKey)
        const checked = editableFields.has(fieldKey)
        return `
          <label class="permission-field ${canConfigureFields ? '' : 'is-disabled'}">
            <input type="checkbox" name="editable_fields" value="${escapeHtml(fieldKey)}" ${checked ? 'checked' : ''} ${canConfigureFields ? '' : 'disabled'} />
            <span>${escapeHtml(column?.label || toLabel(fieldKey))}</span>
          </label>
        `
      })
      .join('')
  }

  if (generalSection) {
    generalSection.style.display = moduleConfig.generalOptions?.length ? '' : 'none'
  }

  if (linkedSection) {
    linkedSection.style.display = moduleConfig.secondaryOptions?.length ? '' : 'none'
  }

  if (linkedTitle) {
    linkedTitle.textContent = moduleConfig.secondaryTitle || 'Opciones adicionales'
  }

  if (linkedDescription) {
    linkedDescription.textContent = moduleConfig.secondaryDescription || 'Acciones complementarias del módulo.'
  }

  if (fieldsSection) {
    fieldsSection.style.display = fieldKeys.length ? '' : 'none'
  }

  if (fieldsTitle) {
    fieldsTitle.textContent = moduleConfig.fieldTitle || 'Campos editables'
  }

  if (fieldsDescription) {
    fieldsDescription.textContent = moduleConfig.fieldDescription || 'Define qué campos podrá editar el usuario.'
  }
}

function openAdminPermissionsModal(profile) {
  if (!profile || currentUserProfile?.role !== 'admin') {
    return
  }

  activePermissionsUserId = profile.user_id
  activePermissionsProfile = profile
  activePermissionsModule = 'quotations'
  renderAdminPermissionsModal()
  updateAdminPermissionsStatus('Ajusta los permisos por módulo para este usuario. Puedes cambiar de pestaña y aplicar plantillas rápidas.', 'info')
  adminPermissionsModal?.classList.remove('is-hidden')
  document.body.classList.add('menu-open')
}

function closeAdminPermissionsModal() {
  adminPermissionsModal?.classList.add('is-hidden')
  document.body.classList.remove('menu-open')
  activePermissionsUserId = ''
  activePermissionsProfile = null
}

function collectAdminModulePermissions() {
  const moduleConfig = getModulePermissionConfig(activePermissionsModule)
  const formData = new FormData(adminPermissionsForm)
  const nextPermissions = {
    ...moduleConfig.defaultState,
  }

  if ('editable_fields' in moduleConfig.defaultState) {
    nextPermissions.editable_fields = formData.getAll('editable_fields').map((value) => String(value))
  }

  ;(moduleConfig.generalOptions || []).forEach((option) => {
    nextPermissions[option.key] = formData.get(option.key) === 'on'
  })

  ;(moduleConfig.secondaryOptions || []).forEach((option) => {
    nextPermissions[option.key] = formData.get(option.key) === 'on'
  })

  return normalizeModulePermissions(activePermissionsModule, nextPermissions, activePermissionsProfile)
}

async function saveAdminModulePermissions() {
  if (!supabaseClient || currentUserProfile?.role !== 'admin' || !activePermissionsProfile) {
    return
  }

  const nextPermissions = collectAdminModulePermissions()
  const moduleConfig = getModulePermissionConfig(activePermissionsModule)
  const nextMetadata = {
    ...(activePermissionsProfile.metadata && typeof activePermissionsProfile.metadata === 'object' ? activePermissionsProfile.metadata : {}),
    permissions: {
      ...((activePermissionsProfile.metadata && activePermissionsProfile.metadata.permissions) || {}),
      [activePermissionsModule]: nextPermissions,
    },
  }

  updateAdminPermissionsStatus(`Guardando permisos de ${moduleConfig.label}...`, 'info')

  const { error } = await supabaseClient
    .from('user_profiles')
    .update({ metadata: nextMetadata })
    .eq('user_id', activePermissionsUserId)

  if (error) {
    updateAdminPermissionsStatus(`No se pudo guardar permisos: ${error.message}`, 'danger')
    return
  }

  adminUsersRecords = adminUsersRecords.map((profile) =>
    profile.user_id === activePermissionsUserId ? { ...profile, metadata: nextMetadata } : profile,
  )
  activePermissionsProfile = { ...activePermissionsProfile, metadata: nextMetadata }

  if (authSession?.user?.id === activePermissionsUserId) {
    currentUserProfile = { ...currentUserProfile, metadata: nextMetadata }
    applyQuotationUiPermissions()
    applyAuxiliaryModuleUiPermissions()
    buildTableHead()
    renderTable()
  }

  renderAdminUsersTable()
  updateAdminPermissionsStatus('Permisos guardados correctamente.', 'success')
  updateAdminUsersStatus(`Permisos de ${moduleConfig.label} actualizados para ${activePermissionsProfile.email || 'el usuario'}.`, 'success')
}

function getAdminRoleLabel(role) {
  return adminAssignableRoles.find((option) => option.value === role)?.label || String(role || 'Lectura')
}

function buildModulePermissionsPreset(moduleKey = 'quotations', presetKey = 'reader') {
  const config = getModulePermissionConfig(moduleKey)
  const editableFields = typeof config.fieldKeys === 'function' ? config.fieldKeys() : []

  const presetMap = {
    quotations: {
      blocked: { ...quotationPermissionDefaultState, access: false, editable_fields: editableFields },
      reader: {
        ...quotationPermissionDefaultState,
        access: true,
        show_refresh_button: true,
        show_columns_button: true,
        show_new_button: false,
        show_edit_button: true,
        show_eye_button: true,
        open_edit_modal: true,
        save_edits: false,
        show_linked_detail_button: true,
        show_linked_new_requirement: false,
        show_linked_columns_button: true,
        show_linked_export_excel_button: true,
        show_linked_share_button: true,
        editable_fields: editableFields,
      },
      editor: {
        ...quotationPermissionDefaultState,
        access: true,
        show_refresh_button: true,
        show_columns_button: true,
        show_new_button: true,
        show_edit_button: true,
        show_eye_button: true,
        open_edit_modal: true,
        save_edits: true,
        show_linked_detail_button: true,
        show_linked_new_requirement: true,
        show_linked_columns_button: true,
        show_linked_export_excel_button: true,
        show_linked_share_button: true,
        editable_fields: editableFields,
      },
      full: {
        ...quotationPermissionDefaultState,
        access: true,
        show_refresh_button: true,
        show_columns_button: true,
        show_new_button: true,
        show_edit_button: true,
        show_eye_button: true,
        open_edit_modal: true,
        save_edits: true,
        show_linked_detail_button: true,
        show_linked_new_requirement: true,
        show_linked_columns_button: true,
        show_linked_export_excel_button: true,
        show_linked_share_button: true,
        editable_fields: editableFields,
      },
    },
    requirements: {
      blocked: { ...requirementsPermissionDefaultState, access: false },
      reader: { ...requirementsPermissionDefaultState, access: true, show_refresh_button: true, show_new_button: false, show_detail_button: true, open_detail_modal: true },
      editor: { ...requirementsPermissionDefaultState, access: true, show_refresh_button: true, show_new_button: true, show_detail_button: true, open_detail_modal: true },
      full: { ...requirementsPermissionDefaultState, access: true, show_refresh_button: true, show_new_button: true, show_detail_button: true, open_detail_modal: true },
    },
    details: {
      blocked: { ...requirementDetailsPermissionDefaultState, access: false },
      reader: { ...requirementDetailsPermissionDefaultState, access: true, show_refresh_button: true, show_new_requirement_button: false, show_add_resource_button: false, show_columns_button: true, show_download_html_button: true, show_export_excel_button: true, show_export_pdf_button: true, show_print_button: true, show_share_button: true },
      editor: { ...requirementDetailsPermissionDefaultState, access: true, show_refresh_button: true, show_new_requirement_button: true, show_add_resource_button: true, show_columns_button: true, show_download_html_button: true, show_export_excel_button: true, show_export_pdf_button: true, show_print_button: true, show_share_button: true },
      full: { ...requirementDetailsPermissionDefaultState, access: true, show_refresh_button: true, show_new_requirement_button: true, show_add_resource_button: true, show_columns_button: true, show_download_html_button: true, show_export_excel_button: true, show_export_pdf_button: true, show_print_button: true, show_share_button: true },
    },
    resources: {
      blocked: { ...resourcesPermissionDefaultState, access: false },
      reader: { ...resourcesPermissionDefaultState, access: true, show_refresh_button: true, show_form: false, save_edits: false, show_edit_button: false, show_delete_button: false },
      editor: { ...resourcesPermissionDefaultState, access: true, show_refresh_button: true, show_form: true, save_edits: true, show_edit_button: true, show_delete_button: false },
      full: { ...resourcesPermissionDefaultState, access: true, show_refresh_button: true, show_form: true, save_edits: true, show_edit_button: true, show_delete_button: true },
    },
    suppliers: {
      blocked: { ...suppliersPermissionDefaultState, access: false },
      reader: { ...suppliersPermissionDefaultState, access: true },
      editor: { ...suppliersPermissionDefaultState, access: true },
      full: { ...suppliersPermissionDefaultState, access: true },
    },
  }

  const source = presetMap[moduleKey] || presetMap.quotations
  return normalizeModulePermissions(moduleKey, source[presetKey] || source.reader, activePermissionsProfile)
}

function getFilteredAdminUsersRecords() {
  return adminUsersRecords.filter((profile) => {
    const matchesName = !adminUsersFilters.full_name || String(profile.full_name || '').toLowerCase().includes(adminUsersFilters.full_name)
    const matchesEmail = !adminUsersFilters.email || String(profile.email || '').toLowerCase().includes(adminUsersFilters.email)
    const matchesRole = !adminUsersFilters.role || String(profile.role || '') === adminUsersFilters.role
    const matchesActive =
      !adminUsersFilters.active ||
      (adminUsersFilters.active === 'active' ? Boolean(profile.active) : !profile.active)

    return matchesName && matchesEmail && matchesRole && matchesActive
  })
}

function renderAdminUsersTable() {
  if (!adminUsersTableHead || !adminUsersTableBody) {
    return
  }

  adminUsersTableHead.innerHTML = `
    <tr>
      <th><div class="sort-button sort-button--static"><span>NOMBRE</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>CORREO</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>ROL</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>ESTADO</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>REGISTRO</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>ACCESO</span><span class="sort-button__icon">↕</span></div></th>
      <th><div class="sort-button sort-button--static"><span>PERMISOS</span><span class="sort-button__icon">↕</span></div></th>
    </tr>
    <tr class="log-table__filters-row">
      <th><div class="filter-shell"><input class="column-filter" data-admin-filter="full_name" type="text" placeholder="Buscar" value="${escapeHtml(adminUsersFilters.full_name)}" /></div></th>
      <th><div class="filter-shell"><input class="column-filter" data-admin-filter="email" type="text" placeholder="Buscar" value="${escapeHtml(adminUsersFilters.email)}" /></div></th>
      <th>
        <div class="filter-shell">
          <select class="column-filter column-filter--select" data-admin-filter="role">
            <option value="">Todos</option>
            ${adminAssignableRoles
              .map(
                (option) =>
                  `<option value="${escapeHtml(option.value)}" ${adminUsersFilters.role === option.value ? 'selected' : ''}>${escapeHtml(option.label)}</option>`,
              )
              .join('')}
          </select>
        </div>
      </th>
      <th>
        <div class="filter-shell">
          <select class="column-filter column-filter--select" data-admin-filter="active">
            <option value="">Todos</option>
            <option value="active" ${adminUsersFilters.active === 'active' ? 'selected' : ''}>Activos</option>
            <option value="pending" ${adminUsersFilters.active === 'pending' ? 'selected' : ''}>Pendientes</option>
          </select>
        </div>
      </th>
      <th><div class="filter-shell"><span class="table-filter-placeholder"></span></div></th>
      <th><div class="filter-shell"><span class="table-filter-placeholder"></span></div></th>
      <th><div class="filter-shell"><span class="table-filter-placeholder"></span></div></th>
    </tr>
  `

  const filteredUsers = getFilteredAdminUsersRecords()

  if (!filteredUsers.length) {
    adminUsersTableBody.innerHTML = '<tr><td class="empty-table" colspan="7">No hay usuarios registrados para mostrar.</td></tr>'
    return
  }

  adminUsersTableBody.innerHTML = filteredUsers
    .map((profile) => {
      const isCurrentUser = profile.user_id === authSession?.user?.id
      const createdAt = formatDateTime(profile.created_at)
      return `
        <tr>
          <td>${escapeHtml(profile.full_name || '-')}</td>
          <td>${escapeHtml(profile.email || '-')}</td>
          <td>
            <label class="admin-role-cell">
              <select class="admin-role-select" data-action="change-user-role" data-user-id="${escapeHtml(profile.user_id)}" ${isCurrentUser ? 'disabled' : ''}>
                ${adminAssignableRoles
                  .map(
                    (option) =>
                      `<option value="${escapeHtml(option.value)}" ${String(profile.role || 'consulta') === option.value ? 'selected' : ''}>${escapeHtml(option.label)}</option>`,
                  )
                  .join('')}
              </select>
            </label>
          </td>
          <td><span class="tag tag--${profile.active ? 'success' : 'warning'}">${profile.active ? 'ACTIVO' : 'PENDIENTE'}</span></td>
          <td>${escapeHtml(createdAt || '-')}</td>
          <td>
            <label class="admin-switch">
              <input data-action="toggle-user-active" data-user-id="${escapeHtml(profile.user_id)}" type="checkbox" ${profile.active ? 'checked' : ''} ${isCurrentUser ? 'disabled' : ''} />
              <span class="admin-switch__track"></span>
              <span class="admin-switch__label">${profile.active ? 'On' : 'Off'}</span>
            </label>
          </td>
          <td>
            <button class="table-action" type="button" data-action="edit-user-quotations-permissions" data-user-id="${escapeHtml(profile.user_id)}">
              Permisos
            </button>
          </td>
        </tr>
      `
    })
    .join('')
}

async function loadAdminUsers() {
  if (!supabaseClient || currentUserProfile?.role !== 'admin') {
    adminUsersRecords = []
    renderAdminUsersTable()
    updateAdminUsersStatus('Solo el administrador general puede gestionar usuarios.', 'warning')
    return
  }

  updateAdminUsersStatus('Consultando usuarios registrados...', 'info')

  const { data, error } = await supabaseClient
    .from('user_profiles')
    .select('user_id, email, full_name, role, active, metadata, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    adminUsersRecords = []
    renderAdminUsersTable()
    updateAdminUsersStatus(`No se pudo cargar usuarios: ${error.message}`, 'danger')
    return
  }

  adminUsersRecords = Array.isArray(data) ? data : []
  renderAdminUsersTable()
  const pendingCount = adminUsersRecords.filter((profile) => !profile.active).length
  updateAdminUsersStatus(
    pendingCount
      ? `${adminUsersRecords.length} usuario(s) cargados. ${pendingCount} pendiente(s) de aprobación.`
      : `${adminUsersRecords.length} usuario(s) cargados. No hay pendientes.`,
    pendingCount ? 'warning' : 'success',
  )
}

async function updateAdminUserAccess(userId, active) {
  if (!supabaseClient || currentUserProfile?.role !== 'admin') {
    return
  }

  updateAdminUsersStatus(active ? 'Aprobando usuario...' : 'Desactivando usuario...', 'info')

  const { error } = await supabaseClient
    .from('user_profiles')
    .update({ active })
    .eq('user_id', userId)

  if (error) {
    updateAdminUsersStatus(`No se pudo actualizar el acceso: ${error.message}`, 'danger')
    await loadAdminUsers()
    return
  }

  adminUsersRecords = adminUsersRecords.map((profile) =>
    profile.user_id === userId ? { ...profile, active } : profile,
  )
  renderAdminUsersTable()
  const affected = adminUsersRecords.find((profile) => profile.user_id === userId)
  updateAdminUsersStatus(
    active
      ? `Acceso aprobado para ${affected?.email || 'el usuario'}.`
      : `Acceso desactivado para ${affected?.email || 'el usuario'}.`,
    active ? 'success' : 'warning',
  )
}

async function updateAdminUserRole(userId, role) {
  if (!supabaseClient || currentUserProfile?.role !== 'admin') {
    return
  }

  const normalizedRole = adminAssignableRoles.some((option) => option.value === role) ? role : 'consulta'
  updateAdminUsersStatus(`Actualizando rol a ${getAdminRoleLabel(normalizedRole)}...`, 'info')

  const { error } = await supabaseClient
    .from('user_profiles')
    .update({ role: normalizedRole })
    .eq('user_id', userId)

  if (error) {
    updateAdminUsersStatus(`No se pudo actualizar el rol: ${error.message}`, 'danger')
    await loadAdminUsers()
    return
  }

  adminUsersRecords = adminUsersRecords.map((profile) =>
    profile.user_id === userId ? { ...profile, role: normalizedRole } : profile,
  )

  if (authSession?.user?.id === userId) {
    currentUserProfile = { ...currentUserProfile, role: normalizedRole }
    setSidebarUserState()
  }

  renderAdminUsersTable()
  const affected = adminUsersRecords.find((profile) => profile.user_id === userId)
  updateAdminUsersStatus(`Rol actualizado a ${getAdminRoleLabel(normalizedRole)} para ${affected?.email || 'el usuario'}.`, 'success')
}

async function loadSecureDatasets() {
  await loadResourcesCatalog()
  fillResourcesForm()
  await loadRecords()
  await loadRequirementsRecords()
  await loadRequirementDetails()
  if (currentUserProfile?.role === 'admin') {
    await loadAdminUsers()
  }
  pendingDeepLinkRequirementKey = readRequirementDeepLink()
  await tryOpenRequirementFromDeepLink()
}

async function applyAuthSession(session) {
  authSession = session || null

  if (!authSession?.user) {
    currentUserProfile = null
    setSidebarUserState()
    closeModal()
    closeRequirementsExplorer()
    closeRequirementEntryModal()
    resetAppData()
    showAuthShell('Ingresa con tu usuario de Supabase para continuar.', 'info')
    return
  }

  try {
    currentUserProfile = await loadCurrentUserProfile()
  } catch (error) {
    currentUserProfile = null
    setSidebarUserState()
    showAuthShell(`No se pudo validar tu perfil: ${error.message}`, 'danger')
    return
  }

  if (!currentUserProfile?.active) {
    currentUserProfile = currentUserProfile || null
    setSidebarUserState()
    const userEmail = String(authSession?.user?.email || '').trim().toLowerCase()
    const isPrimaryAdmin = userEmail === 'edwin.qm@outlook.com'
    showAuthShell(
      isPrimaryAdmin
        ? 'Tu cuenta existe, pero tu perfil admin todavía no está activo en user_profiles. Ejecuta el seed de administrador y vuelve a ingresar.'
        : 'Cuenta pendiente de aprobación por el administrador.',
      'danger',
    )
    return
  }

  setSidebarUserState()
  hideAuthShell()
  await loadSecureDatasets()
}

async function initializeAuth() {
  if (!supabaseClient?.auth) {
    initializeSelectCatalogs()
    loadResourcesCatalog().then(() => fillResourcesForm())
    loadRecords()
    loadRequirementsRecords()
    loadRequirementDetails().then(() => {
      pendingDeepLinkRequirementKey = readRequirementDeepLink()
      void tryOpenRequirementFromDeepLink()
    })
    return
  }

  if (!authListenerAttached) {
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      void applyAuthSession(session)
    })
    authListenerAttached = true
  }

  const {
    data: { session },
  } = await supabaseClient.auth.getSession()

  await applyAuthSession(session)
}

function toLabel(key) {
  return String(key)
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase()
}

function inferType(key, value) {
  if (/(^fecha_|_at$|_date$|^date_)/i.test(key)) {
    return 'date'
  }

  if (/(correo|email)/i.test(key)) {
    return 'email'
  }

  if (typeof value === 'number') {
    return 'number'
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return 'date'
  }

  return 'text'
}

function inferStep(key) {
  if (/(tipo_cambio|_usd|_sol|monto|precio|importe|costo)/i.test(key)) {
    return '0.01'
  }

  return undefined
}

function inferTag(key) {
  return /(status|estado|prioridad|avance)/i.test(key)
}

function getManagedSelectFieldKey(columnKey) {
  if (managedSelectFieldDefinitions[columnKey]) {
    return columnKey
  }

  if (columnKey === 'solicitado') {
    return 'solicitado_por'
  }

  return ''
}

function isManagedSelectField(columnKey) {
  return Boolean(getManagedSelectFieldKey(columnKey))
}

function getDefaultVisibleColumnKeys(nextColumns) {
  return nextColumns.filter((column) => !column.readonly).map((column) => column.key)
}

function loadColumnKeys(storageKey, nextColumns) {
  if (typeof window === 'undefined') {
    return getDefaultVisibleColumnKeys(nextColumns)
  }

  const saved = window.localStorage.getItem(storageKey)
  if (!saved) {
    return getDefaultVisibleColumnKeys(nextColumns)
  }

  try {
    const parsed = JSON.parse(saved)
    const allowed = new Set(nextColumns.map((column) => column.key))
    const filtered = Array.isArray(parsed) ? parsed.filter((key) => allowed.has(key)) : []
    return filtered.length ? filtered : getDefaultVisibleColumnKeys(nextColumns)
  } catch {
    return getDefaultVisibleColumnKeys(nextColumns)
  }
}

function loadVisibleColumnKeys(nextColumns) {
  return loadColumnKeys(visibilityStorageKey, nextColumns)
}

function persistVisibleColumnKeys() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(visibilityStorageKey, JSON.stringify(visibleColumnKeys))
}

function persistRequirementModalVisibleColumnKeys() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(requirementModalVisibilityStorageKey, JSON.stringify(requirementModalVisibleColumnKeys))
}

function loadStoredMap(storageKey) {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) || '{}')
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

function persistStoredMap(storageKey, value) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(storageKey, JSON.stringify(value))
}

function loadSelectCatalogState() {
  if (typeof window === 'undefined') {
    return { catalogs: {}, deleted: {} }
  }

  try {
    const parsed = JSON.parse(window.localStorage.getItem(selectCatalogStorageKey) || '{}')
    return {
      catalogs: parsed && typeof parsed.catalogs === 'object' ? parsed.catalogs : {},
      deleted: parsed && typeof parsed.deleted === 'object' ? parsed.deleted : {},
    }
  } catch {
    return { catalogs: {}, deleted: {} }
  }
}

function persistSelectCatalogState() {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(
    selectCatalogStorageKey,
    JSON.stringify({
      catalogs: optionCatalogs,
      deleted: deletedCatalogOptions,
    }),
  )
}

function normalizeCatalogEntries(fieldKey, entries = []) {
  const definition = managedSelectFieldDefinitions[fieldKey] || { kind: 'simple' }
  if (definition.kind === 'contact') {
    return entries
      .map((entry) => {
        if (typeof entry === 'string') {
          return { value: entry.trim(), email: '', phone: '' }
        }
        const value = String(entry?.value ?? entry?.name ?? '').trim()
        const email = String(entry?.email ?? '').trim()
        const phone = String(entry?.phone ?? '').trim()
        return value ? { value, email, phone } : null
      })
      .filter(Boolean)
      .sort((a, b) => a.value.localeCompare(b.value, 'es', { sensitivity: 'base' }))
  }

  return entries
    .map((entry) => {
      const value = String(typeof entry === 'string' ? entry : entry?.value ?? '').trim()
      return value ? { value } : null
    })
    .filter(Boolean)
    .sort((a, b) => a.value.localeCompare(b.value, 'es', { sensitivity: 'base' }))
}

function getBaseCatalogEntries(fieldKey) {
  const definition = managedSelectFieldDefinitions[fieldKey] || { kind: 'simple' }
  const fieldCandidates = [fieldKey, ...(Array.isArray(definition.aliases) ? definition.aliases : [])]
  const sourceRecords = records.length ? records : fallbackRecords
  const registry = new Map()

  sourceRecords.forEach((record) => {
    fieldCandidates.forEach((candidateKey) => {
      const rawValue = String(record?.[candidateKey] ?? '').trim()
      if (!rawValue) {
        return
      }

      if (definition.kind === 'contact') {
        registry.set(rawValue, {
          value: rawValue,
          email: String(record?.[definition.emailField] ?? '').trim(),
          phone: String(record?.[definition.phoneField] ?? '').trim(),
        })
      } else {
        registry.set(rawValue, { value: rawValue })
      }
    })
  })

  return normalizeCatalogEntries(fieldKey, [...registry.values()])
}

function initializeSelectCatalogs() {
  const stored = loadSelectCatalogState()
  optionCatalogs = stored.catalogs
  deletedCatalogOptions = stored.deleted

  Object.keys(managedSelectFieldDefinitions).forEach((fieldKey) => {
    const deletedSet = new Set(Array.isArray(deletedCatalogOptions[fieldKey]) ? deletedCatalogOptions[fieldKey] : [])
    const baseOptions = getBaseCatalogEntries(fieldKey).filter((entry) => !deletedSet.has(entry.value))
    const storedOptions = normalizeCatalogEntries(fieldKey, Array.isArray(optionCatalogs[fieldKey]) ? optionCatalogs[fieldKey] : [])
    const mergedMap = new Map()
    ;[...baseOptions, ...storedOptions].forEach((entry) => {
      if (entry?.value) {
        mergedMap.set(entry.value, entry)
      }
    })
    optionCatalogs[fieldKey] = [...mergedMap.values()].sort((a, b) => a.value.localeCompare(b.value, 'es', { sensitivity: 'base' }))
    deletedCatalogOptions[fieldKey] = [...deletedSet]
  })

  persistSelectCatalogState()
}

function getCatalogEntries(fieldKey) {
  return normalizeCatalogEntries(fieldKey, Array.isArray(optionCatalogs[fieldKey]) ? optionCatalogs[fieldKey] : [])
}

function getCatalogOptions(fieldKey) {
  return getCatalogEntries(fieldKey).map((entry) => entry.value)
}

function findCatalogEntry(fieldKey, value) {
  const normalizedValue = String(value ?? '').trim()
  return getCatalogEntries(fieldKey).find((entry) => entry.value === normalizedValue) || null
}

function buildCacheKey(scope, source) {
  return `${scope}::${source || 'default'}`
}

function openCacheDatabase() {
  if (typeof window === 'undefined' || !window.indexedDB) {
    return Promise.resolve(null)
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(cacheDatabaseName, 1)

    request.onupgradeneeded = () => {
      const database = request.result
      if (!database.objectStoreNames.contains(cacheStoreName)) {
        database.createObjectStore(cacheStoreName, { keyPath: 'key' })
      }
    }

    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function readCachedDataset(cacheKey) {
  const database = await openCacheDatabase()
  if (!database) {
    return null
  }

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(cacheStoreName, 'readonly')
    const store = transaction.objectStore(cacheStoreName)
    const request = store.get(cacheKey)

    request.onsuccess = () => resolve(request.result || null)
    request.onerror = () => reject(request.error)
  })
}

async function writeCachedDataset(cacheKey, recordsToStore) {
  const database = await openCacheDatabase()
  if (!database) {
    return
  }

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(cacheStoreName, 'readwrite')
    const store = transaction.objectStore(cacheStoreName)
    const payload = {
      key: cacheKey,
      records: Array.isArray(recordsToStore) ? recordsToStore : [],
      updatedAt: new Date().toISOString(),
    }

    const request = store.put(payload)
    request.onsuccess = () => resolve(payload)
    request.onerror = () => reject(request.error)
  })
}

function formatCacheTimestamp(value) {
  if (!value) {
    return ''
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleString('es-PE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function createLocalId(prefix = 'local') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function updateResourcesStatus(message, tone = 'info') {
  if (!resourcesStatus) {
    return
  }

  resourcesStatus.textContent = message
  resourcesStatus.dataset.tone = tone
}

function getFilteredResourcesRecords() {
  const term = resourcesSearchTerm.trim().toLowerCase()
  if (!term) {
    return [...resourcesRecords]
  }

  return resourcesRecords.filter((record) =>
    [record.codigo, record.descripcion, record.categoria, record.proveedor, record.observacion]
      .map((value) => String(value ?? '').toLowerCase())
      .some((value) => value.includes(term)),
  )
}

function renderResourcesTable() {
  if (!resourcesTableHead || !resourcesTableBody) {
    return
  }

  const permissions = getCurrentModulePermissions('resources')

  resourcesTableHead.innerHTML = `
    <tr>
      ${resourceColumns.map((column) => `<th>${column.label}</th>`).join('')}
      <th>ACCIONES</th>
    </tr>
  `

  const filtered = getFilteredResourcesRecords()
  if (!permissions.access) {
    resourcesTableBody.innerHTML = `<tr><td class="empty-table" colspan="${resourceColumns.length + 1}">No tienes acceso a Recursos.</td></tr>`
    return
  }

  if (!filtered.length) {
    resourcesTableBody.innerHTML = `<tr><td class="empty-table" colspan="${resourceColumns.length + 1}">No hay recursos para los filtros actuales.</td></tr>`
    return
  }

  resourcesTableBody.innerHTML = filtered
    .map(
      (record) => `
        <tr>
          ${resourceColumns.map((column) => `<td>${formatCellValue(record[column.key], column)}</td>`).join('')}
          <td class="actions-cell">
            ${
              permissions.show_edit_button
                ? `<button class="table-action" type="button" data-action="edit-resource" data-resource-id="${record.id}">Editar</button>`
                : ''
            }
            ${
              permissions.show_delete_button
                ? `<button class="table-action table-action--clear" type="button" data-action="delete-resource" data-resource-id="${record.id}">Eliminar</button>`
                : ''
            }
            ${!permissions.show_edit_button && !permissions.show_delete_button ? '<span class="cell-text cell-empty">-</span>' : ''}
          </td>
        </tr>
      `,
    )
    .join('')
}

function fillResourcesForm(record = null) {
  if (!resourcesForm) {
    return
  }

  editingResourceId = record?.id || null
  resourcesForm.codigo.value = record?.codigo || ''
  resourcesForm.descripcion.value = record?.descripcion || ''
  resourcesForm.categoria.value = record?.categoria || 'MATERIAL'
  resourcesForm.unidad.value = record?.unidad || ''
  resourcesForm.moneda.value = record?.moneda || 'PEN'
  resourcesForm.costo_unitario.value = record?.costo_unitario ?? ''
  resourcesForm.proveedor.value = record?.proveedor || ''
  resourcesForm.imagen_url.value = record?.imagen_url || ''
  resourcesForm.observacion.value = record?.observacion || ''
}

function collectResourceFormData() {
  if (!resourcesForm) {
    return null
  }

  return {
    id: editingResourceId || createLocalId('resource'),
    codigo: resourcesForm.codigo.value.trim(),
    descripcion: resourcesForm.descripcion.value.trim(),
    categoria: resourcesForm.categoria.value.trim(),
    unidad: resourcesForm.unidad.value.trim(),
    moneda: resourcesForm.moneda.value.trim() || 'PEN',
    costo_unitario: resourcesForm.costo_unitario.value ? Number(resourcesForm.costo_unitario.value) : null,
    proveedor: resourcesForm.proveedor.value.trim(),
    imagen_url: resourcesForm.imagen_url.value.trim(),
    observacion: resourcesForm.observacion.value.trim(),
  }
}

async function persistResourcesCatalog() {
  await writeCachedDataset(resourcesCatalogCacheKey, resourcesRecords)
}

async function loadResourcesCatalog() {
  const permissions = getCurrentModulePermissions('resources')
  if (!permissions.access) {
    resourcesRecords = []
    renderResourcesTable()
    updateResourcesStatus('No tienes acceso al catálogo de Recursos.', 'warning')
    return []
  }

  try {
    const cached = await readCachedDataset(resourcesCatalogCacheKey)
    if (Array.isArray(cached?.records) && cached.records.length) {
      resourcesRecords = [...cached.records]
      renderResourcesTable()
      updateResourcesStatus(
        `Catálogo local listo. ${resourcesRecords.length} recurso(s) cargados. Ult. sync: ${formatCacheTimestamp(cached.updatedAt) || 'sin fecha'}.`,
        'success',
      )
      return resourcesRecords
    }
  } catch {}

  resourcesRecords = [...defaultResourceCatalog]
  renderResourcesTable()
  updateResourcesStatus('Catálogo local inicial cargado. Puedes editarlo y ampliarlo desde esta pestaña.', 'info')
  try {
    await persistResourcesCatalog()
  } catch {}
  return resourcesRecords
}

async function persistCustomRequirementItems() {
  await writeCachedDataset(requirementLocalItemsCacheKey, customRequirementItems)
}

async function loadCustomRequirementItems() {
  try {
    const cached = await readCachedDataset(requirementLocalItemsCacheKey)
    customRequirementItems = Array.isArray(cached?.records) ? [...cached.records] : []
  } catch {
    customRequirementItems = []
  }

  return customRequirementItems
}

function mergeRequirementDetailRecords(baseRecords = [], extraRecords = []) {
  const registry = new Map()
  ;[...baseRecords, ...extraRecords].forEach((record) => {
    const key = record.local_item_id || record.source_row_hash || `${record.rq_codigo || ''}::${record.item || ''}::${record.codigo || ''}::${record.descripcion || ''}`
    registry.set(key, record)
  })
  return [...registry.values()]
}

function normalizeAttachmentList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean)
  }
  if (typeof value === 'object' && value) {
    return Object.values(value).filter(Boolean)
  }
  if (String(value ?? '').trim()) {
    return [String(value).trim()]
  }
  return []
}

function countRequirementAttachments(items = []) {
  const attachmentKeys = ['ficha_tecnica', 'fotos', 'ficha_tecnica_a_suministrar', 'archivo_guia']
  return items.reduce(
    (total, item) =>
      total +
      attachmentKeys.reduce((subtotal, key) => subtotal + normalizeAttachmentList(item[key]).length, 0),
    0,
  )
}

function buildRequirementItemFromResource(requirementRecord, resourceRecord, existingItems = []) {
  const maxItem = existingItems.reduce((max, item) => Math.max(max, Number(item.item) || 0), 0)
  const today = new Date().toISOString().slice(0, 10)
  return {
    local_item_id: createLocalId('rq-resource'),
    fuente: 'LOCAL',
    item: maxItem + 1,
    rq_codigo: requirementRecord.rq_codigo,
    cotizacion_codigo: requirementRecord.cotizacion_codigo,
    centro_costos: requirementRecord.centro_costos,
    cliente: requirementRecord.cliente,
    unidad: requirementRecord.unidad,
    solicitante: requirementRecord.solicitante,
    fecha_rq: requirementRecord.fecha_rq,
    tipo_servicio: requirementRecord.tipo_servicio,
    area: requirementRecord.area,
    tipo: resourceRecord.categoria,
    tipo_flag: '',
    codigo: resourceRecord.codigo,
    descripcion: resourceRecord.descripcion,
    ficha_tecnica: [],
    observacion: resourceRecord.observacion,
    fotos: [],
    und: resourceRecord.unidad,
    cant_rq: 1,
    ajuste: null,
    atencion_real: null,
    cant_stock: null,
    compra: null,
    costo_unitario_dolar: resourceRecord.moneda === 'USD' ? resourceRecord.costo_unitario : null,
    costo_unitario_soles: resourceRecord.moneda === 'PEN' ? resourceRecord.costo_unitario : null,
    tc: null,
    factor_eq_herr: null,
    pu_soles_sin_igv: resourceRecord.costo_unitario,
    costo_total_presupuestado_s: resourceRecord.moneda === 'PEN' ? resourceRecord.costo_unitario : null,
    costo_total_presupuestado_usd: resourceRecord.moneda === 'USD' ? resourceRecord.costo_unitario : null,
    moneda: resourceRecord.moneda,
    fecha_coti: today,
    estado: 'LOCAL',
    a_suministrar: '',
    ficha_tecnica_a_suministrar: [],
    estado_proveedor: resourceRecord.proveedor || '',
    condicion_pago: '',
    tiempo_entrega: '',
    vb_tecnico: '',
    f_aprob_tecnico: null,
    vb_economico: '',
    f_aprob_economico: null,
    vb_gerencia: '',
    f_aprob_gerencia: null,
    logistica_compra: '',
    f_compra: null,
    oc: requirementRecord.centro_costos,
    f_entrega: requirementRecord.fecha_entrega || null,
    guia_remision: '',
    archivo_guia: [],
    proveedor: resourceRecord.proveedor,
  }
}

function getFilteredModalResources() {
  const term = requirementModalResourceSearch.trim().toLowerCase()
  if (!term) {
    return [...resourcesRecords]
  }

  return resourcesRecords.filter((record) =>
    [record.codigo, record.descripcion, record.categoria, record.proveedor]
      .map((value) => String(value ?? '').toLowerCase())
      .some((value) => value.includes(term)),
  )
}

function buildResourcePreviewMarkup(resource) {
  const imageUrl = String(resource?.imagen_url || '').trim()
  if (imageUrl) {
    return `<img class="resource-picker__thumb-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(resource.descripcion || 'Recurso')}" />`
  }

  const initials = String(resource?.codigo || resource?.categoria || 'R')
    .replace(/[^A-Za-z0-9]/g, '')
    .slice(0, 3)
    .toUpperCase()

  return `<div class="resource-picker__thumb-fallback">${escapeHtml(initials || 'R')}</div>`
}

function buildRequirementResourcePicker() {
  if (!requirementModalResourcePickerOpen) {
    return ''
  }

  const filteredResources = getFilteredModalResources()
  const listMarkup = filteredResources.length
    ? filteredResources
        .map(
          (resource) => `
            <article class="resource-picker__item">
              <div class="resource-picker__thumb">
                ${buildResourcePreviewMarkup(resource)}
              </div>
              <div class="resource-picker__item-main">
                <strong>${escapeHtml(resource.descripcion || 'Sin descripción')}</strong>
                <p>${escapeHtml(resource.codigo || 'Sin código')} · ${escapeHtml(resource.categoria || 'Sin categoría')} · ${escapeHtml(resource.unidad || '-')}</p>
                <small>${escapeHtml(resource.proveedor || 'Sin proveedor referencial')}</small>
              </div>
              <div class="resource-picker__item-side">
                <span>${escapeHtml(resource.moneda || 'PEN')} ${escapeHtml(formatNumber(resource.costo_unitario, { key: 'resource_cost', type: 'number' }) || '-')}</span>
                <button class="table-action" type="button" data-action="attach-resource" data-resource-id="${resource.id}">Agregar</button>
              </div>
            </article>
          `,
        )
        .join('')
    : '<div class="empty-table">No hay recursos que coincidan con la búsqueda.</div>'

  return `
    <aside class="resource-picker">
      <div class="resource-picker__header">
        <div>
          <strong>Agregar recurso existente</strong>
          <p>Selecciona recursos del catálogo y se insertarán solo en este requerimiento.</p>
        </div>
        <div class="filter-shell resource-picker__search">
          <input class="column-filter" data-resource-picker-search="true" type="text" value="${escapeHtml(requirementModalResourceSearch)}" placeholder="Buscar recurso" />
        </div>
      </div>
      <div class="resource-picker__list">${listMarkup}</div>
    </aside>
  `
}

function getVisibleColumns() {
  const visibleSet = new Set(visibleColumnKeys)
  return columns.filter((column) => visibleSet.has(column.key))
}

function getUniqueColumnValues(columnKey) {
  return [...new Set(records.map((record) => record[columnKey]).filter((value) => value !== null && value !== undefined && value !== ''))]
    .map((value) => String(value))
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
}

function deriveColumnsFromRecord(record) {
  const orderedKeys = Object.keys(record)

  return orderedKeys.map((key) => ({
    key,
    label: toLabel(key),
    type: inferType(key, record[key]),
    tag: inferTag(key),
    step: inferStep(key),
    required: false,
    readonly: key === primaryKey || key === 'created_at' || key === 'updated_at',
  }))
}

function updateStatus(message, tone = 'info') {
  if (!syncStatus) {
    return
  }

  syncStatus.textContent = message
  syncStatus.dataset.tone = tone
}

function updateRequirementsStatus(message, tone = 'info') {
  if (!requirementsSyncStatus) {
    return
  }

  requirementsSyncStatus.textContent = message
  requirementsSyncStatus.dataset.tone = tone
}

function applyDerivedColumns(nextColumns) {
  columns = nextColumns
  visibleColumnKeys = loadVisibleColumnKeys(columns)
  buildTableHead()
  buildFormFields()
  renderColumnManager()
}

function formatDate(value) {
  if (!value) {
    return ''
  }

  const normalized = `${value}`.trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
    const [year, month, day] = normalized.split('-')
    return `${day}/${month}/${year}`
  }

  return normalized
}

function formatDateTime(value) {
  if (!value) {
    return ''
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return String(value)
  }

  return date.toLocaleString('es-PE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatNumber(value, column) {
  if (value === null || value === undefined || value === '') {
    return ''
  }

  const numericValue = Number(value)
  if (Number.isNaN(numericValue)) {
    return String(value)
  }

  if (column.key === 'tc' || column.key === 'tipo_cambio') {
    return numericValue.toFixed(4).replace(/0+$/, '').replace(/\.$/, '')
  }

  if (column.key === 'oferta_sol') {
    return `S/ ${numericValue.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  if (column.key === 'oferta_usd') {
    return `$ ${numericValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return numericValue.toLocaleString('es-PE')
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function normalizeSortableValue(value, type = 'text') {
  if (value === null || value === undefined || value === '') {
    return null
  }

  if (type === 'date') {
    return String(value).slice(0, 10)
  }

  if (type === 'number') {
    const numericValue = Number(value)
    return Number.isNaN(numericValue) ? null : numericValue
  }

  return String(value).toLowerCase()
}

function compareValues(leftValue, rightValue, type = 'text', direction = 'asc') {
  const leftNormalized = normalizeSortableValue(leftValue, type)
  const rightNormalized = normalizeSortableValue(rightValue, type)

  if (leftNormalized === rightNormalized) {
    return 0
  }

  if (leftNormalized === null) {
    return 1
  }

  if (rightNormalized === null) {
    return -1
  }

  const factor = direction === 'desc' ? -1 : 1
  return leftNormalized > rightNormalized ? factor : -factor
}

function getSortIndicator(sortState, key) {
  if (sortState.key !== key) {
    return '↕'
  }

  return sortState.direction === 'asc' ? '↑' : '↓'
}

function inferColumnMinWidth(column) {
  if (column.type === 'date') {
    return 132
  }

  if (column.type === 'number') {
    return 112
  }

  if (/descripcion|observacion|resumen/i.test(column.key)) {
    return 220
  }

  if (/cotizacion|cliente|unidad|centro_costos|rq_codigo/i.test(column.key)) {
    return 160
  }

  return 120
}

function getColumnWidth(column, widthMap) {
  const stored = Number(widthMap[column.key])
  const minWidth = inferColumnMinWidth(column)
  return Number.isFinite(stored) && stored > 0 ? Math.max(minWidth, stored) : minWidth
}

function renderColgroup(tableElement, colgroupElement, nextColumns, widthMap, actionsWidth = 112) {
  if (!colgroupElement || !tableElement) {
    return
  }

  let totalWidth = actionsWidth > 0 ? actionsWidth : 0
  const cols = nextColumns
    .map((column) => {
      const width = getColumnWidth(column, widthMap)
      totalWidth += width
      return `<col style="width:${width}px">`
    })
    .join('')

  colgroupElement.innerHTML = actionsWidth > 0 ? `${cols}<col style="width:${actionsWidth}px">` : cols
  tableElement.style.width = `${totalWidth}px`
}

function markTableLayoutReady(tableElement) {
  if (!tableElement) {
    return
  }

  tableElement.classList.remove('is-pending-layout')
}

function getTagTone(value) {
  const normalized = `${value || ''}`.toLowerCase()

  if (['ganada', 'aprobada', 'cerrada', 'ok', 'baja', 'atencion completa', 'adjudicado', 'registrado'].includes(normalized)) {
    return 'success'
  }

  if (['pendiente', 'en revisión', 'alta', 'enviado', 'borrador'].includes(normalized)) {
    return 'warning'
  }

  if (['observada', 'rechazada', 'crítica', 'critica', 'observado'].includes(normalized)) {
    return 'danger'
  }

  return 'info'
}

function formatCellValue(value, column) {
  if (value === null || value === undefined || value === '') {
    return '<span class="cell-text cell-empty">-</span>'
  }

  if (['ficha_tecnica', 'fotos', 'ficha_tecnica_a_suministrar', 'archivo_guia'].includes(column.key)) {
    const attachmentItems = Array.isArray(value)
      ? value.filter((item) => item !== null && item !== undefined && item !== '')
      : typeof value === 'object'
        ? Object.values(value).filter((item) => item !== null && item !== undefined && item !== '')
        : String(value).trim()
          ? [value]
          : []

    if (!attachmentItems.length) {
      return '<span class="cell-text cell-empty">-</span>'
    }

    const label = attachmentItems.length === 1 ? '1 adjunto' : `${attachmentItems.length} adjuntos`
    return `<span class="attachment-pill" title="${escapeHtml(label)}">${escapeHtml(label)}</span>`
  }

  if (typeof value === 'object') {
    const normalizedObjectValue = Array.isArray(value)
      ? value.filter((item) => item !== null && item !== undefined && item !== '').join(' | ')
      : Object.values(value).filter((item) => item !== null && item !== undefined && item !== '').join(' | ')

    if (!normalizedObjectValue) {
      return '<span class="cell-text cell-empty">-</span>'
    }

    return `<span class="cell-text">${escapeHtml(String(normalizedObjectValue))}</span>`
  }

  if (column.type === 'date') {
    return `<span class="cell-text">${formatDate(value)}</span>`
  }

  if (column.type === 'number') {
    return `<span class="cell-text">${formatNumber(value, column)}</span>`
  }

  if (column.tag) {
    return `<em class="tag tag--${getTagTone(value)}">${value}</em>`
  }

  return `<span class="cell-text">${escapeHtml(String(value))}</span>`
}

function wrapFilterControl(controlMarkup) {
  return `<div class="filter-shell">${controlMarkup}</div>`
}

function buildTableHead() {
  if (!columns.length) {
    tableHead.innerHTML = ''
    return
  }

  const visibleColumns = getVisibleColumns()
  renderColgroup(quotationsTable, logTableColgroup, visibleColumns, columnWidths)
  const headers = visibleColumns
    .map(
      (column) => `
        <th>
          <button class="sort-button" type="button" data-sort-key="${column.key}">
            <span>${column.label}</span>
            <span class="sort-button__icon">${getSortIndicator(activeSort, column.key)}</span>
          </button>
          <span class="column-resize-handle" data-resize-table="quotations" data-resize-key="${column.key}" aria-hidden="true"></span>
        </th>
      `,
    )
    .join('')
  const filterCells = visibleColumns
    .map((column) => {
      const currentValue = activeFilters[column.key] ?? ''

      if (column.tag) {
        const options = getUniqueColumnValues(column.key)
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`
              <select class="column-filter" data-filter-key="${column.key}">
                <option value="">Todos</option>
                ${options}
              </select>
            `)}
          </th>
        `
      }

      if (column.type === 'date') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-filter-key="${column.key}" type="date" value="${currentValue}" />`)}
          </th>
        `
      }

      if (column.type === 'number') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-filter-key="${column.key}" type="number" step="${column.step || 'any'}" value="${currentValue}" placeholder="Filtrar" />`)}
          </th>
        `
      }

      return `
        <th class="log-table__filter-cell">
          ${wrapFilterControl(`<input class="column-filter" data-filter-key="${column.key}" type="text" value="${currentValue}" placeholder="Buscar" />`)}
        </th>
      `
    })
    .join('')

  tableHead.innerHTML = `
    <tr>${headers}<th>ACCIONES</th></tr>
    <tr class="log-table__filters-row">${filterCells}<th class="log-table__filter-cell">
      ${wrapFilterControl(`<button class="table-action table-action--clear" type="button" data-action="clear-filters">Limpiar</button>`)}
    </th></tr>
  `
}

function getQuotationRequirementLinks(record) {
  const costCenter = String(record.oc ?? record.centro_costos ?? '').trim()
  const quotationCode = String(record.cotizacion ?? record.cotizacion_codigo ?? '').trim()

  return requirementsRecords.filter((requirement) => {
    const sameCostCenter = costCenter && String(requirement.centro_costos ?? '').trim() === costCenter
    const sameQuotation = quotationCode && String(requirement.cotizacion_codigo ?? '').trim() === quotationCode
    return sameCostCenter || sameQuotation
  })
}

function buildRow(record) {
  const permissions = getCurrentQuotationPermissions()
  const cells = getVisibleColumns()
    .map((column) => `<td>${formatCellValue(record[column.key], column)}</td>`)
    .join('')
  const linkedRequirements = getQuotationRequirementLinks(record)
  const actions = []

  if (permissions.show_eye_button && linkedRequirements.length) {
    actions.push(`
      <button class="table-action table-action--icon" type="button" data-action="view-requirements" data-id="${record[primaryKey] ?? ''}" title="Ver requerimientos vinculados">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5C6.5 5 2.2 8.4 1 12c1.2 3.6 5.5 7 11 7s9.8-3.4 11-7c-1.2-3.6-5.5-7-11-7zm0 11.2A4.2 4.2 0 1 1 12 7.8a4.2 4.2 0 0 1 0 8.4zm0-6.7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"></path>
        </svg>
      </button>
    `)
  }

  if (permissions.show_edit_button) {
    actions.push(`
      <button class="table-action" type="button" data-action="edit" data-id="${record[primaryKey] ?? ''}">
        ${getQuotationReadableActionLabel()}
      </button>
    `)
  }

  return `
    <tr>
      ${cells}
      <td class="actions-cell">${actions.length ? actions.join('') : '<span class="cell-text cell-empty">-</span>'}</td>
    </tr>
  `
}

function getFilteredRecords() {
  return records.filter((record) =>
    Object.entries(activeFilters).every(([key, rawFilterValue]) => {
      const filterValue = `${rawFilterValue ?? ''}`.trim()
      if (!filterValue) {
        return true
      }

      const column = columns.find((item) => item.key === key)
      const recordValue = record[key]

      if (!column) {
        return true
      }

      if (column.type === 'date') {
        return String(recordValue || '').slice(0, 10) === filterValue
      }

      if (column.type === 'number') {
        return String(recordValue ?? '') === filterValue
      }

      return String(recordValue ?? '').toLowerCase().includes(filterValue.toLowerCase())
    }),
  )
}

function getSortedRecords(nextRecords) {
  if (!activeSort.key) {
    return [...nextRecords]
  }

  const column = columns.find((item) => item.key === activeSort.key)
  if (!column) {
    return [...nextRecords]
  }

  return [...nextRecords].sort((leftRecord, rightRecord) =>
    compareValues(leftRecord[activeSort.key], rightRecord[activeSort.key], column.type, activeSort.direction),
  )
}

function renderTable() {
  if (currentUserProfile && !userCanAccessQuotations()) {
    tableBody.innerHTML = `
      <tr>
        <td class="empty-table" colspan="${Math.max(getVisibleColumns().length + 1, 1)}">
          No tienes permisos para visualizar Log de Cotizaciones.
        </td>
      </tr>
    `
    return
  }

  const filteredRecords = getSortedRecords(getFilteredRecords())

  if (!filteredRecords.length) {
    tableBody.innerHTML = `
      <tr>
        <td class="empty-table" colspan="${getVisibleColumns().length + 1}">
          No hay registros que coincidan con los filtros actuales.
        </td>
      </tr>
    `
    return
  }

  tableBody.innerHTML = filteredRecords.map(buildRow).join('')
  markTableLayoutReady(quotationsTable)
}

function renderColumnManager() {
  if (!columnManagerList) {
    return
  }

  const visibleSet = new Set(visibleColumnKeys)
  columnManagerList.innerHTML = columns
    .filter((column) => !column.readonly)
    .map(
      (column) => `
        <label class="column-toggle">
          <input type="checkbox" data-column-key="${column.key}" ${visibleSet.has(column.key) ? 'checked' : ''} />
          <span>${column.label}</span>
        </label>
      `,
    )
    .join('')
}

function renderCatalogManager() {
  if (!catalogManagerPanel) {
    return
  }

  if (!activeCatalogFieldKey) {
    catalogManagerPanel.classList.add('is-hidden')
    catalogManagerPanel.innerHTML = ''
    return
  }

  const fieldDefinition = managedSelectFieldDefinitions[activeCatalogFieldKey] || { label: activeCatalogFieldKey }
  const entries = getCatalogEntries(activeCatalogFieldKey)
  const selectedEntry = findCatalogEntry(activeCatalogFieldKey, editingCatalogOptionValue) || { value: editingCatalogOptionValue, email: '', phone: '' }
  const isContactCatalog = fieldDefinition.kind === 'contact'

  catalogManagerPanel.classList.remove('is-hidden')
  catalogManagerPanel.innerHTML = `
    <div class="catalog-manager-panel__header">
      <div>
        <strong>Lista: ${escapeHtml(fieldDefinition.label)}</strong>
        <p>Agrega, renombra o elimina valores de esta lista independiente.</p>
      </div>
      <button class="ghost-button ghost-button--soft catalog-manager-panel__close" type="button" data-action="close-catalog-manager">Cerrar</button>
    </div>
    <div class="catalog-manager-panel__composer">
      <input class="column-filter" name="catalogOptionValue" type="text" placeholder="Nombre o valor" value="${escapeHtml(selectedEntry.value || '')}" />
      ${isContactCatalog ? `<input class="column-filter" name="catalogOptionEmail" type="text" placeholder="Correo" value="${escapeHtml(selectedEntry.email || '')}" />` : ''}
      ${isContactCatalog ? `<input class="column-filter" name="catalogOptionPhone" type="text" placeholder="Teléfono" value="${escapeHtml(selectedEntry.phone || '')}" />` : ''}
      <button class="ghost-button ghost-button--accent" type="button" data-action="save-catalog-option">${editingCatalogOptionValue ? 'Actualizar' : 'Agregar'}</button>
    </div>
    <div class="catalog-manager-panel__list">
      ${
        entries.length
          ? entries
              .map(
                (entry) => `
                  <div class="catalog-option-row">
                    <div class="catalog-option-row__text">
                      <span>${escapeHtml(entry.value)}</span>
                      ${isContactCatalog ? `<small>${escapeHtml(entry.email || 'Sin correo')} · ${escapeHtml(entry.phone || 'Sin teléfono')}</small>` : ''}
                    </div>
                    <div class="catalog-option-row__actions">
                      <button class="table-action" type="button" data-action="edit-catalog-option" data-catalog-option="${escapeHtml(entry.value)}">Editar</button>
                      <button class="table-action table-action--clear" type="button" data-action="delete-catalog-option" data-catalog-option="${escapeHtml(entry.value)}">Eliminar</button>
                    </div>
                  </div>
                `,
              )
              .join('')
          : '<div class="empty-table">Todavía no hay valores en esta lista.</div>'
      }
    </div>
  `
}

function openCatalogManager(fieldKey) {
  activeCatalogFieldKey = getManagedSelectFieldKey(fieldKey)
  editingCatalogOptionValue = ''
  renderCatalogManager()
}

function closeCatalogManager() {
  activeCatalogFieldKey = ''
  editingCatalogOptionValue = ''
  renderCatalogManager()
}

function refreshManagedSelects() {
  columns.forEach((column) => {
    const managedFieldKey = getManagedSelectFieldKey(column.key)
    if (!managedFieldKey) {
      return
    }

    const select = recordForm?.elements[column.key]
    if (!(select instanceof HTMLSelectElement)) {
      return
    }

    const currentValue = select.value
    const options = getCatalogOptions(managedFieldKey)
    const placeholder = '<option value="">Seleccionar</option>'
    select.innerHTML =
      placeholder +
      options
        .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
        .join('')

    if (currentValue && options.includes(currentValue)) {
      select.value = currentValue
    } else if (currentValue) {
      const fallbackOption = document.createElement('option')
      fallbackOption.value = currentValue
      fallbackOption.textContent = currentValue
      select.appendChild(fallbackOption)
      select.value = currentValue
    }
  })
}

function applyLinkedContactFields(fieldKey, selectedValue) {
  const definition = managedSelectFieldDefinitions[fieldKey]
  if (!definition || definition.kind !== 'contact' || !recordForm) {
    return
  }

  const entry = findCatalogEntry(fieldKey, selectedValue)
  const emailInput = recordForm.elements[definition.emailField]
  const phoneInput = recordForm.elements[definition.phoneField]

  if (emailInput instanceof HTMLInputElement) {
    emailInput.value = entry?.email || ''
  }

  if (phoneInput instanceof HTMLInputElement) {
    phoneInput.value = entry?.phone || ''
  }
}

function saveCatalogOption(fieldKey, nextValue, previousValue = '', metadata = {}) {
  const normalizedValue = String(nextValue || '').trim()
  const normalizedPrevious = String(previousValue || '').trim()
  if (!fieldKey || !normalizedValue) {
    return false
  }

  const fieldDefinition = managedSelectFieldDefinitions[fieldKey] || { kind: 'simple' }
  let nextEntries = [...getCatalogEntries(fieldKey)]

  if (normalizedPrevious) {
    nextEntries = nextEntries.filter((entry) => entry.value !== normalizedPrevious)
  }

  const nextEntry =
    fieldDefinition.kind === 'contact'
      ? {
          value: normalizedValue,
          email: String(metadata.email || '').trim(),
          phone: String(metadata.phone || '').trim(),
        }
      : { value: normalizedValue }

  if (!nextEntries.some((entry) => entry.value === normalizedValue)) {
    nextEntries.push(nextEntry)
  } else {
    nextEntries = nextEntries.map((entry) => (entry.value === normalizedValue ? nextEntry : entry))
  }

  optionCatalogs[fieldKey] = nextEntries.sort((a, b) => a.value.localeCompare(b.value, 'es', { sensitivity: 'base' }))
  deletedCatalogOptions[fieldKey] = (deletedCatalogOptions[fieldKey] || []).filter((option) => option !== normalizedValue)
  persistSelectCatalogState()
  refreshManagedSelects()
  renderCatalogManager()
  return true
}

function deleteCatalogOption(fieldKey, optionValue) {
  const normalizedValue = String(optionValue || '').trim()
  if (!fieldKey || !normalizedValue) {
    return
  }

  optionCatalogs[fieldKey] = getCatalogOptions(fieldKey).filter((option) => option !== normalizedValue)
  const deletedValues = new Set(Array.isArray(deletedCatalogOptions[fieldKey]) ? deletedCatalogOptions[fieldKey] : [])
  deletedValues.add(normalizedValue)
  deletedCatalogOptions[fieldKey] = [...deletedValues]
  persistSelectCatalogState()
  refreshManagedSelects()
  renderCatalogManager()
}

function buildFormFields() {
  if (!columns.length) {
    recordFormGrid.innerHTML = ''
    return
  }

  recordFormGrid.innerHTML = columns
    .map((column) => {
      if (column.readonly) {
        return ''
      }

      if (column.key === 'analisis_economico_url') {
        return ''
      }

      const managedFieldKey = getManagedSelectFieldKey(column.key)
      if (managedFieldKey) {
        const options = getCatalogOptions(managedFieldKey)
        return `
          <label class="field field--managed">
            <span>${column.label}</span>
            <div class="field__managed-control">
              <select name="${column.key}">
                <option value="">Seleccionar</option>
                ${options.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join('')}
              </select>
              <button class="field__manage-button" type="button" data-action="manage-select-options" data-field-key="${column.key}" title="Editar lista">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75zM20.7 7.04a1 1 0 0 0 0-1.41L18.37 3.3a1 1 0 0 0-1.41 0L15.13 5.13l3.75 3.75z"></path>
                </svg>
              </button>
            </div>
          </label>
        `
      }

      const inputType =
        column.type === 'number'
          ? 'number'
          : column.type === 'date'
            ? 'date'
            : column.type === 'email'
              ? 'email'
              : 'text'

      const required = column.required ? 'required' : ''
      const step = column.step ? `step="${column.step}"` : ''

      return `
        <label class="field">
          <span>${column.label}</span>
          <input name="${column.key}" type="${inputType}" ${required} ${step} />
        </label>
      `
    })
    .join('')
}

function openModal(record = null) {
  const permissions = getCurrentQuotationPermissions()
  currentEditingId = record?.[primaryKey] ?? null

  if (currentEditingId && (!permissions.show_edit_button || !permissions.open_edit_modal)) {
    updateStatus('No tienes permiso para abrir esta cotización.', 'warning')
    return
  }

  if (!currentEditingId && !userCanCreateQuotations()) {
    updateStatus('No tienes permiso para crear cotizaciones nuevas.', 'warning')
    return
  }

  modalTitle.textContent = currentEditingId ? 'Editar registro' : 'Nuevo registro'
  closeCatalogManager()

  columns.forEach((column) => {
    if (column.readonly) {
      return
    }

    const input = recordForm.elements[column.key]
    if (input) {
      const nextValue = record?.[column.key] ?? ''
      if (input instanceof HTMLSelectElement) {
        if (nextValue && ![...input.options].some((option) => option.value === String(nextValue))) {
          const fallbackOption = document.createElement('option')
          fallbackOption.value = String(nextValue)
          fallbackOption.textContent = String(nextValue)
          input.appendChild(fallbackOption)
        }
        input.value = String(nextValue)
      } else {
        input.value = nextValue
      }
    }
  })

  if (!currentEditingId) {
    const quotationInput = recordForm.elements.cotizacion
    if (quotationInput instanceof HTMLInputElement) {
      quotationInput.value = getNextQuotationCode()
    }
  }

  applyLinkedContactFields('solicitado_por', recordForm.elements.solicitado_por?.value || recordForm.elements.solicitado?.value || '')
  applyLinkedContactFields('responsable_tecnico', recordForm.elements.responsable_tecnico?.value || '')
  applyLinkedContactFields('responsable_economico', recordForm.elements.responsable_economico?.value || '')
  validateQuotationCode(recordForm.elements.cotizacion?.value || '')
  applyQuotationFormPermissions(record)

  recordModal.classList.remove('is-hidden')
  document.body.classList.add('menu-open')
}

function closeModal() {
  recordModal.classList.add('is-hidden')
  document.body.classList.remove('menu-open')
  recordForm.reset()
  currentEditingId = null
  closeCatalogManager()
}

function collectFormData() {
  const payload = {}
  const permissions = getCurrentQuotationPermissions()
  const allowedEditableKeys = new Set(permissions.editable_fields)
  const isCreateMode = !currentEditingId

  columns.forEach((column) => {
    if (column.readonly) {
      return
    }

    if (isCreateMode ? !userCanCreateQuotations() : !permissions.save_edits || !allowedEditableKeys.has(column.key)) {
      return
    }

    const fieldElement = recordForm.elements[column.key]
    if (!fieldElement) {
      return
    }

    const rawValue = fieldElement.value ?? ''
    payload[column.key] = rawValue === '' ? null : rawValue
  })

  return payload
}

function handleCatalogManagerAction(event) {
  const manageButton = event.target.closest('[data-action="manage-select-options"]')
  if (manageButton) {
    openCatalogManager(manageButton.dataset.fieldKey)
    return
  }

  const closeButton = event.target.closest('[data-action="close-catalog-manager"]')
  if (closeButton) {
    closeCatalogManager()
    return
  }

  const saveButton = event.target.closest('[data-action="save-catalog-option"]')
  if (saveButton) {
    const input = catalogManagerPanel?.querySelector('[name="catalogOptionValue"]')
    const emailInput = catalogManagerPanel?.querySelector('[name="catalogOptionEmail"]')
    const phoneInput = catalogManagerPanel?.querySelector('[name="catalogOptionPhone"]')
    const nextValue = input instanceof HTMLInputElement ? input.value : ''
    if (
      saveCatalogOption(activeCatalogFieldKey, nextValue, editingCatalogOptionValue, {
        email: emailInput instanceof HTMLInputElement ? emailInput.value : '',
        phone: phoneInput instanceof HTMLInputElement ? phoneInput.value : '',
      })
    ) {
      editingCatalogOptionValue = ''
      renderCatalogManager()
    }
    return
  }

  const editButton = event.target.closest('[data-action="edit-catalog-option"]')
  if (editButton) {
    editingCatalogOptionValue = editButton.dataset.catalogOption || ''
    renderCatalogManager()
    return
  }

  const deleteButton = event.target.closest('[data-action="delete-catalog-option"]')
  if (deleteButton) {
    deleteCatalogOption(activeCatalogFieldKey, deleteButton.dataset.catalogOption || '')
  }
}

function parseQuotationCode(value) {
  const normalized = String(value || '').trim()
  const match = normalized.match(/^(.*_)(\d{4})-(\d{3,})$/)
  if (!match) {
    return null
  }

  return {
    prefix: match[1],
    year: Number(match[2]),
    sequence: Number(match[3]),
    digits: match[3].length,
  }
}

function getNextQuotationCode() {
  const sourceRecords = records.length ? records : fallbackRecords
  let selected = null

  sourceRecords.forEach((record) => {
    const parsed = parseQuotationCode(record.cotizacion || record.cotizacion_codigo)
    if (!parsed) {
      return
    }

    if (!selected || parsed.year > selected.year || (parsed.year === selected.year && parsed.sequence > selected.sequence)) {
      selected = parsed
    }
  })

  if (!selected) {
    const currentYear = new Date().getFullYear()
    return `FOR-EKA-PRO-3_${currentYear}-001`
  }

  const nextSequence = String(selected.sequence + 1).padStart(selected.digits, '0')
  return `${selected.prefix}${selected.year}-${nextSequence}`
}

function validateQuotationCode(value) {
  const quotationInput = recordForm?.elements?.cotizacion
  if (!(quotationInput instanceof HTMLInputElement)) {
    return true
  }

  const normalized = String(value || '').trim().toUpperCase()
  const duplicated = records.some((record) => {
    const recordCode = String(record.cotizacion || record.cotizacion_codigo || '').trim().toUpperCase()
    if (!recordCode || recordCode !== normalized) {
      return false
    }
    return currentEditingId ? String(record[primaryKey]) !== String(currentEditingId) : true
  })

  quotationInput.setCustomValidity(duplicated ? 'La cotización ya existe. Usa otro código.' : '')
  quotationInput.dataset.duplicate = duplicated ? 'true' : 'false'
  return !duplicated
}

function updateRequirementEntryStatus(message, tone = 'info') {
  if (!requirementEntryStatus) {
    return
  }

  requirementEntryStatus.textContent = message || ''
  requirementEntryStatus.dataset.tone = tone
  requirementEntryStatus.classList.toggle('is-hidden', !message)
}

function getRequirementContextFromRecord(sourceRecord = {}) {
  return {
    cotizacion_codigo: sourceRecord.cotizacion_codigo || sourceRecord.cotizacion || '',
    centro_costos: sourceRecord.centro_costos || sourceRecord.oc || '',
    descripcion_cotizacion: sourceRecord.descripcion_cotizacion || sourceRecord.descripcion || '',
    cliente: sourceRecord.cliente || '',
    unidad: sourceRecord.unidad || sourceRecord.unidad_minera || '',
    fecha_rq: sourceRecord.fecha_rq ? String(sourceRecord.fecha_rq).slice(0, 10) : '',
    fecha_entrega: sourceRecord.fecha_entrega ? String(sourceRecord.fecha_entrega).slice(0, 10) : '',
    tipo_servicio: sourceRecord.tipo_servicio || '',
    solicitante: sourceRecord.solicitante || sourceRecord.solicitado_por || sourceRecord.solicitado || '',
    area: sourceRecord.area || '',
    estado: sourceRecord.estado || 'REGISTRADO',
  }
}

function normalizeRequirementStemSource(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function deriveRequirementUnitCode(unitLabel, clientLabel) {
  const normalizedUnit = normalizeRequirementStemSource(unitLabel)
  const unitWords = normalizedUnit
    .split(' ')
    .filter(Boolean)
    .filter((word) => !['DE', 'DEL', 'LA', 'LAS', 'LOS', 'Y', 'UM', 'U', 'M'].includes(word.toUpperCase()))

  let unitCode = unitWords.map((word) => word[0]).join('').toUpperCase()
  if (unitCode.length > 4) {
    unitCode = unitCode.slice(0, 4)
  }

  if (unitCode.length >= 3) {
    return unitCode
  }

  const normalizedClient = normalizeRequirementStemSource(clientLabel)
  const clientCode = normalizedClient
    .split(' ')
    .filter(Boolean)
    .filter((word) => !['SAC', 'SA', 'SAA', 'SAS', 'SRL', 'EIRL'].includes(word.toUpperCase()))
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (unitCode + clientCode).slice(0, 4) || 'GEN'
}

function parseRequirementCode(value) {
  const normalized = String(value || '').trim().toUpperCase()
  const match = normalized.match(/^(RQ-[A-Z0-9]+-\d{4})-(\d{1,3})$/)
  if (!match) {
    return null
  }

  return {
    stem: match[1],
    sequence: Number(match[2]),
    digits: match[2].length,
  }
}

function validateRequirementCode(value) {
  if (!(requirementCodeInput instanceof HTMLInputElement)) {
    return true
  }

  const normalized = String(value || '').trim().toUpperCase()
  const duplicated = requirementsRecords.some((record) => String(record.rq_codigo || '').trim().toUpperCase() === normalized)

  requirementCodeInput.setCustomValidity(duplicated ? 'El código RQ ya existe. Usa otro código.' : '')
  requirementCodeInput.dataset.duplicate = duplicated ? 'true' : 'false'
  updateRequirementEntryStatus(
    duplicated ? 'El código RQ ya existe en la base. Usa otro correlativo.' : 'Código RQ disponible para registrar.',
    duplicated ? 'danger' : 'info',
  )
  return !duplicated
}

function getSuggestedRequirementCode(context = {}) {
  const relatedCodes = requirementsRecords
    .filter((record) => {
      const sameQuotation = context.cotizacion_codigo && record.cotizacion_codigo === context.cotizacion_codigo
      const sameCenter = context.centro_costos && record.centro_costos === context.centro_costos
      return sameQuotation || sameCenter
    })
    .map((record) => record.rq_codigo)
    .filter(Boolean)

  const parsedRelated = relatedCodes.map(parseRequirementCode).filter(Boolean)
  if (parsedRelated.length) {
    const selected = parsedRelated.sort((leftCode, rightCode) => rightCode.sequence - leftCode.sequence)[0]
    let nextSequence = selected.sequence + 1
    let candidate = `${selected.stem}-${String(nextSequence).padStart(selected.digits, '0')}`

    while (!validateRequirementCodeSilently(candidate)) {
      nextSequence += 1
      candidate = `${selected.stem}-${String(nextSequence).padStart(selected.digits, '0')}`
    }

    return candidate
  }

  const now = new Date()
  const year = String(now.getFullYear()).slice(-2)
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const unitCode = deriveRequirementUnitCode(context.unidad, context.cliente)
  const baseStem = `RQ-${unitCode}-${year}${month}`

  let sequence = 1
  let candidate = `${baseStem}-${String(sequence).padStart(2, '0')}`
  while (!validateRequirementCodeSilently(candidate)) {
    sequence += 1
    candidate = `${baseStem}-${String(sequence).padStart(2, '0')}`
  }
  return candidate
}

function validateRequirementCodeSilently(value) {
  const normalized = String(value || '').trim().toUpperCase()
  return !requirementsRecords.some((record) => String(record.rq_codigo || '').trim().toUpperCase() === normalized)
}

function openRequirementEntryModal(context = {}) {
  activeRequirementEntryContext = getRequirementContextFromRecord(context)
  requirementEntryTitle.textContent = 'Nuevo requerimiento'
  requirementEntryForm?.reset()

  if (requirementQuotationInput) requirementQuotationInput.value = activeRequirementEntryContext.cotizacion_codigo || ''
  if (requirementCostCenterInput) requirementCostCenterInput.value = activeRequirementEntryContext.centro_costos || ''
  if (requirementDescriptionInput) requirementDescriptionInput.value = activeRequirementEntryContext.descripcion_cotizacion || ''
  if (requirementClientInput) requirementClientInput.value = activeRequirementEntryContext.cliente || ''
  if (requirementUnitInput) requirementUnitInput.value = activeRequirementEntryContext.unidad || ''
  if (requirementDateInput) requirementDateInput.value = activeRequirementEntryContext.fecha_rq || ''
  if (requirementDeliveryInput) requirementDeliveryInput.value = activeRequirementEntryContext.fecha_entrega || ''
  if (requirementServiceInput) requirementServiceInput.value = activeRequirementEntryContext.tipo_servicio || ''
  if (requirementRequesterInput) requirementRequesterInput.value = activeRequirementEntryContext.solicitante || ''
  if (requirementAreaInput) requirementAreaInput.value = activeRequirementEntryContext.area || ''
  if (requirementStateInput) requirementStateInput.value = activeRequirementEntryContext.estado || 'REGISTRADO'
  if (requirementCodeInput) requirementCodeInput.value = getSuggestedRequirementCode(activeRequirementEntryContext)

  validateRequirementCode(requirementCodeInput?.value || '')
  requirementEntryModal?.classList.remove('is-hidden')
  document.body.classList.add('menu-open')
}

function closeRequirementEntryModal() {
  requirementEntryModal?.classList.add('is-hidden')
  requirementEntryForm?.reset()
  activeRequirementEntryContext = null
  if (requirementCodeInput instanceof HTMLInputElement) {
    requirementCodeInput.dataset.duplicate = 'false'
    requirementCodeInput.setCustomValidity('')
  }
  updateRequirementEntryStatus('', 'info')
}

function collectRequirementEntryPayload() {
  return {
    rq_codigo: requirementCodeInput?.value?.trim() || null,
    cotizacion_codigo: requirementQuotationInput?.value?.trim() || null,
    centro_costos: requirementCostCenterInput?.value?.trim() || null,
    descripcion_cotizacion: requirementDescriptionInput?.value?.trim() || null,
    cliente: requirementClientInput?.value?.trim() || null,
    unidad: requirementUnitInput?.value?.trim() || null,
    fecha_rq: requirementDateInput?.value || null,
    fecha_entrega: requirementDeliveryInput?.value || null,
    tipo_servicio: requirementServiceInput?.value?.trim() || null,
    solicitante: requirementRequesterInput?.value?.trim() || null,
    area: requirementAreaInput?.value?.trim() || null,
    estado: requirementStateInput?.value || 'REGISTRADO',
    cantidad_items: 0,
    import_alertas: [],
  }
}

async function saveRequirementEntry(payload) {
  if (!payload.rq_codigo) {
    updateRequirementEntryStatus('Ingresa un código RQ válido.', 'warning')
    return
  }

  if (!validateRequirementCode(payload.rq_codigo)) {
    return
  }

  const source = config?.requirementsSource
  if (!supabaseClient || !source) {
    requirementsRecords = [payload, ...requirementsRecords]
    buildRequirementsHead()
    renderRequirementsTable()
    updateRequirementsStatus(`Requerimiento ${payload.rq_codigo} registrado en modo local.`, 'warning')
    closeRequirementEntryModal()
    return
  }

  updateRequirementEntryStatus('Guardando requerimiento en Supabase...', 'info')
  const { error } = await supabaseClient.from(source).insert(payload)
  if (error) {
    updateRequirementEntryStatus(`No se pudo guardar: ${error.message}`, 'danger')
    return
  }

  closeRequirementEntryModal()
  await loadRequirementsRecords()

  if (activeExplorerMode === 'quotation-linked' && quotationLinkedRecord) {
    openRequirementListModal(quotationLinkedRecord)
  } else if (activeExplorerMode === 'rq-detail' && activeRequirementRecord) {
    await openRequirementDetail(activeRequirementRecord)
  }

  updateRequirementsStatus(`Requerimiento ${payload.rq_codigo} registrado correctamente.`, 'success')
}

function buildRequirementsHead() {
  if (!requirementsTableHead) {
    return
  }

  renderColgroup(requirementsTable, requirementsTableColgroup, requirementsColumns, requirementsColumnWidths)
  const headers = requirementsColumns
    .map(
      (column) => `
        <th>
          <button class="sort-button" type="button" data-requirements-sort-key="${column.key}">
            <span>${column.label}</span>
            <span class="sort-button__icon">${getSortIndicator(requirementsSort, column.key)}</span>
          </button>
          <span class="column-resize-handle" data-resize-table="requirements" data-resize-key="${column.key}" aria-hidden="true"></span>
        </th>
      `,
    )
    .join('')
  const filterCells = requirementsColumns
    .map((column) => {
      const currentValue = requirementsActiveFilters[column.key] ?? ''

      if (column.key === 'revision_estado') {
        const options = ['OK', 'Revisar']
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`
              <select class="column-filter" data-requirements-filter-key="${column.key}">
                <option value="">Todos</option>
                ${options}
              </select>
            `)}
          </th>
        `
      }

      if (column.tag) {
        const options = getUniqueRequirementColumnValues(column.key)
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`
              <select class="column-filter" data-requirements-filter-key="${column.key}">
                <option value="">Todos</option>
                ${options}
              </select>
            `)}
          </th>
        `
      }

      if (column.type === 'date') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-requirements-filter-key="${column.key}" type="date" value="${currentValue}" />`)}
          </th>
        `
      }

      if (column.type === 'number') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-requirements-filter-key="${column.key}" type="number" step="any" value="${currentValue}" placeholder="Filtrar" />`)}
          </th>
        `
      }

      return `
        <th class="log-table__filter-cell">
          ${wrapFilterControl(`<input class="column-filter" data-requirements-filter-key="${column.key}" type="text" value="${currentValue}" placeholder="Buscar" />`)}
        </th>
      `
    })
    .join('')

  requirementsTableHead.innerHTML = `
    <tr>${headers}<th>ACCIONES</th></tr>
    <tr class="log-table__filters-row">${filterCells}<th class="log-table__filter-cell">
      ${wrapFilterControl(`<button class="table-action table-action--clear" type="button" data-action="clear-requirements-filters">Limpiar</button>`)}
    </th></tr>
  `
}

function getUniqueRequirementColumnValues(columnKey) {
  return [...new Set(requirementsRecords.map((record) => record[columnKey]).filter((value) => value !== null && value !== undefined && value !== ''))]
    .map((value) => String(value))
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
}

function getRequirementAlerts(record) {
  const rawAlerts =
    record.import_alertas ??
    record.alertas_importacion ??
    record.alertas ??
    record.review_alerts ??
    record.revision_alertas

  if (Array.isArray(rawAlerts)) {
    return rawAlerts.filter(Boolean)
  }

  if (typeof rawAlerts === 'string') {
    const trimmed = rawAlerts.trim()
    if (!trimmed || trimmed === '[]') {
      return []
    }

    try {
      const parsed = JSON.parse(trimmed)
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [trimmed]
    } catch {
      return [trimmed]
    }
  }

  return []
}

function buildRequirementReviewCell(record) {
  const alerts = getRequirementAlerts(record)

  if (!alerts.length) {
    return '<td><span class="review-pill review-pill--clean">OK</span></td>'
  }

  const title = alerts.join(' | ').replace(/"/g, '&quot;')
  const label = alerts.length === 1 ? '1 alerta' : `${alerts.length} alertas`

  return `<td><span class="review-pill review-pill--warning" title="${title}">Revisar · ${label}</span></td>`
}

function getRequirementRecordKey(record) {
  return [record.cotizacion_codigo, record.centro_costos, record.rq_codigo].map((value) => String(value ?? '').trim()).join('::')
}

function getRequirementRevisionState(record) {
  return getRequirementAlerts(record).length > 0 ? 'Revisar' : 'OK'
}

function buildRequirementsRow(record) {
  const permissions = getCurrentModulePermissions('requirements')
  const rowKey = getRequirementRecordKey(record)
  const rowClass = rowKey === selectedRequirementKey ? 'is-selected' : ''

  return `
    <tr class="${rowClass}" data-requirement-key="${rowKey}">
      ${requirementsColumns
        .map((column) => {
          if (column.key === 'revision_estado') {
            return buildRequirementReviewCell(record)
          }

          const value = record[column.key]

          if (column.key === 'estado') {
            return `<td><em class="tag tag--${getTagTone(value)}">${value || '-'}</em></td>`
          }

          if (column.key === 'fecha_rq') {
            return `<td><span class="cell-text">${formatDate(value)}</span></td>`
          }

          if (value === null || value === undefined || value === '') {
            return `<td><span class="cell-text cell-empty">-</span></td>`
          }

          return `<td><span class="cell-text">${escapeHtml(String(value))}</span></td>`
        })
        .join('')}
      <td class="actions-cell">
        ${
          permissions.show_detail_button
            ? `<button class="table-action" type="button" data-action="requirement-detail" data-requirement-key="${rowKey}">
                Detalle
              </button>`
            : '<span class="cell-text cell-empty">-</span>'
        }
      </td>
    </tr>
  `
}

function getFilteredRequirementsRecords() {
  return requirementsRecords.filter((record) =>
    Object.entries(requirementsActiveFilters).every(([key, rawFilterValue]) => {
      const filterValue = `${rawFilterValue ?? ''}`.trim()
      if (!filterValue) {
        return true
      }

      if (key === 'revision_estado') {
        return getRequirementRevisionState(record) === filterValue
      }

      const column = requirementsColumns.find((item) => item.key === key)
      const recordValue = record[key]

      if (!column) {
        return true
      }

      if (column.type === 'date') {
        return String(recordValue || '').slice(0, 10) === filterValue
      }

      if (column.type === 'number') {
        return String(recordValue ?? '') === filterValue
      }

      return String(recordValue ?? '').toLowerCase().includes(filterValue.toLowerCase())
    }),
  )
}

function getRequirementSortType(sortKey) {
  if (sortKey === 'revision_estado') {
    return 'text'
  }

  return requirementsColumns.find((column) => column.key === sortKey)?.type || 'text'
}

function getRequirementSortValue(record, sortKey) {
  if (sortKey === 'revision_estado') {
    return getRequirementRevisionState(record)
  }

  return record[sortKey]
}

function getSortedRequirementsRecords(nextRecords) {
  const groups = new Map()

  nextRecords.forEach((record) => {
    const groupKey = `${record.cotizacion_codigo ?? ''}::${record.centro_costos ?? ''}`
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        key: groupKey,
        cotizacion_codigo: record.cotizacion_codigo ?? '',
        centro_costos: record.centro_costos ?? '',
        items: [],
      })
    }

    groups.get(groupKey).items.push(record)
  })

  const groupList = [...groups.values()]
  groupList.sort((leftGroup, rightGroup) => {
    const primaryGroupComparison = compareValues(
      leftGroup.cotizacion_codigo,
      rightGroup.cotizacion_codigo,
      'text',
      requirementsSort.key === 'cotizacion_codigo' ? requirementsSort.direction : 'asc',
    )

    if (primaryGroupComparison !== 0) {
      return primaryGroupComparison
    }

    return compareValues(
      leftGroup.centro_costos,
      rightGroup.centro_costos,
      'text',
      requirementsSort.key === 'centro_costos' ? requirementsSort.direction : 'asc',
    )
  })

  groupList.forEach((group) => {
    group.items.sort((leftRecord, rightRecord) => {
      const sortKey = requirementsSort.key || 'rq_codigo'
      const sortType = getRequirementSortType(sortKey)
      const comparison = compareValues(
        getRequirementSortValue(leftRecord, sortKey),
        getRequirementSortValue(rightRecord, sortKey),
        sortType,
        requirementsSort.direction,
      )

      if (comparison !== 0) {
        return comparison
      }

      return compareValues(leftRecord.rq_codigo, rightRecord.rq_codigo, 'text', 'asc')
    })
  })

  return groupList
}

function buildRequirementsGroupRow(group) {
  const itemsLabel = group.items.length === 1 ? '1 requerimiento' : `${group.items.length} requerimientos`

  return `
    <tr class="group-row">
      <td colspan="${requirementsColumns.length + 1}">
        <div class="group-row__content">
          <div>
            <strong>${escapeHtml(group.cotizacion_codigo || 'Sin cotización')}</strong>
            <span>Centro de costo: ${escapeHtml(group.centro_costos || 'Sin centro de costo')}</span>
          </div>
          <em>${itemsLabel}</em>
        </div>
      </td>
    </tr>
  `
}

function renderRequirementsTable() {
  if (!requirementsTableBody) {
    return
  }

  const permissions = getCurrentModulePermissions('requirements')
  if (!permissions.access) {
    requirementsTableBody.innerHTML = `
      <tr>
        <td class="empty-table" colspan="${requirementsColumns.length + 1}">
          No tienes acceso a Log de Requerimientos.
        </td>
      </tr>
    `
    markTableLayoutReady(requirementsTable)
    return
  }

  const filtered = getFilteredRequirementsRecords()
  if (!filtered.length) {
    requirementsTableBody.innerHTML = `
      <tr>
        <td class="empty-table" colspan="${requirementsColumns.length + 1}">
          No hay requerimientos que coincidan con los filtros actuales.
        </td>
      </tr>
    `
    markTableLayoutReady(requirementsTable)
    return
  }

  const groupedRecords = getSortedRequirementsRecords(filtered)
  requirementsTableBody.innerHTML = groupedRecords
    .map((group) => `${buildRequirementsGroupRow(group)}${group.items.map(buildRequirementsRow).join('')}`)
    .join('')
  markTableLayoutReady(requirementsTable)
}

function deriveDetailColumnsFromRecord(record) {
  if (!record) {
    return []
  }

  return Object.keys(record)
    .filter((key) => !['raw_row'].includes(key))
    .map((key) => ({
      key,
      label: toLabel(key),
      type: inferType(key, record[key]),
      tag: /(estado|tipo|status)/i.test(key),
    }))
}

function getRequirementDetailsColumns(records = [], forceAll = false) {
  if (forceAll) {
    return requirementDetailsColumnDefinitions
  }

  const availableKeys = new Set()
  records.forEach((record) => {
    Object.keys(record || {}).forEach((key) => {
      if (record[key] !== undefined) {
        availableKeys.add(key)
      }
    })
  })

  const preferred = requirementDetailsColumnDefinitions.filter((column) => availableKeys.has(column.key))
  return preferred.length ? preferred : requirementDetailsColumnDefinitions
}

function getUniqueDetailColumnValues(columnKey) {
  return [...new Set(requirementDetailsRecords.map((record) => record[columnKey]).filter((value) => value !== null && value !== undefined && value !== ''))]
    .map((value) => String(value))
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
}

function buildRequirementDetailsHead() {
  if (!requirementsDetailTableHead) {
    return
  }

  renderColgroup(requirementsDetailTable, requirementsDetailColgroup, requirementDetailsColumns, requirementDetailsColumnWidths, 0)

  const headers = requirementDetailsColumns
    .map(
      (column) => `
        <th>
          <button class="sort-button" type="button" data-detail-sort-key="${column.key}">
            <span>${column.label}</span>
            <span class="sort-button__icon">${getSortIndicator(requirementDetailsSort, column.key)}</span>
          </button>
          <span class="column-resize-handle" data-resize-table="requirements-detail" data-resize-key="${column.key}" aria-hidden="true"></span>
        </th>
      `,
    )
    .join('')

  const filterCells = requirementDetailsColumns
    .map((column) => {
      const currentValue = requirementDetailsActiveFilters[column.key] ?? ''

      if (column.tag) {
        const options = getUniqueDetailColumnValues(column.key)
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`
              <select class="column-filter" data-detail-filter-key="${column.key}">
                <option value="">Todos</option>
                ${options}
              </select>
            `)}
          </th>
        `
      }

      if (column.type === 'date') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-detail-filter-key="${column.key}" type="date" value="${currentValue}" />`)}
          </th>
        `
      }

      if (column.type === 'number') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-detail-filter-key="${column.key}" type="number" step="any" value="${currentValue}" placeholder="Filtrar" />`)}
          </th>
        `
      }

      return `
        <th class="log-table__filter-cell">
          ${wrapFilterControl(`<input class="column-filter" data-detail-filter-key="${column.key}" type="text" value="${currentValue}" placeholder="Buscar" />`)}
        </th>
      `
    })
    .join('')

  requirementsDetailTableHead.innerHTML = `
    <tr>${headers}</tr>
    <tr class="log-table__filters-row">${filterCells}</tr>
  `
}

function getFilteredRequirementDetailsRecords() {
  return requirementDetailsRecords.filter((record) =>
    Object.entries(requirementDetailsActiveFilters).every(([key, rawFilterValue]) => {
      const filterValue = `${rawFilterValue ?? ''}`.trim()
      if (!filterValue) {
        return true
      }

      const column = requirementDetailsColumns.find((item) => item.key === key)
      const recordValue = record[key]
      if (!column) {
        return true
      }

      if (column.type === 'date') {
        return String(recordValue || '').slice(0, 10) === filterValue
      }

      if (column.type === 'number') {
        return String(recordValue ?? '') === filterValue
      }

      return String(recordValue ?? '').toLowerCase().includes(filterValue.toLowerCase())
    }),
  )
}

function getSortedRequirementDetailsRecords(nextRecords) {
  if (!requirementDetailsSort.key) {
    return [...nextRecords]
  }

  const column = requirementDetailsColumns.find((item) => item.key === requirementDetailsSort.key)
  if (!column) {
    return [...nextRecords]
  }

  return [...nextRecords].sort((leftRecord, rightRecord) =>
    compareValues(leftRecord[requirementDetailsSort.key], rightRecord[requirementDetailsSort.key], column.type, requirementDetailsSort.direction),
  )
}

function updateRequirementDetailsPager(totalRows) {
  const safePageSize = Math.max(1, Number(requirementDetailsPageSizeValue) || 200)
  const totalPages = Math.max(1, Math.ceil(totalRows / safePageSize))
  requirementDetailsPage = Math.min(Math.max(1, requirementDetailsPage), totalPages)

  const start = totalRows ? (requirementDetailsPage - 1) * safePageSize + 1 : 0
  const end = totalRows ? Math.min(start + safePageSize - 1, totalRows) : 0

  if (requirementsDetailPagerSummary) {
    requirementsDetailPagerSummary.textContent = `Mostrando ${start}-${end} de ${totalRows}`
  }

  if (requirementsDetailPageIndicator) {
    requirementsDetailPageIndicator.textContent = `Página ${requirementDetailsPage} / ${totalPages}`
  }

  if (requirementsDetailPrevPage) {
    requirementsDetailPrevPage.disabled = requirementDetailsPage <= 1
  }

  if (requirementsDetailNextPage) {
    requirementsDetailNextPage.disabled = requirementDetailsPage >= totalPages
  }

  return { totalPages, startIndex: start ? start - 1 : 0, endIndex: end }
}

function renderRequirementDetailsTable() {
  if (!requirementsDetailTableBody) {
    return
  }

  const permissions = getCurrentModulePermissions('details')
  if (!permissions.access) {
    requirementsDetailTableBody.innerHTML = `<tr><td class="empty-table" colspan="${Math.max(requirementDetailsColumns.length, 1)}">No tienes acceso a Detalle de Requerimientos.</td></tr>`
    markTableLayoutReady(requirementsDetailTable)
    return
  }

  const filtered = getSortedRequirementDetailsRecords(getFilteredRequirementDetailsRecords())
  const pager = updateRequirementDetailsPager(filtered.length)

  if (!filtered.length) {
    requirementsDetailTableBody.innerHTML = `<tr><td class="empty-table" colspan="${Math.max(requirementDetailsColumns.length, 1)}">No hay items para los filtros actuales.</td></tr>`
    markTableLayoutReady(requirementsDetailTable)
    return
  }

  const visibleRows = filtered.slice(pager.startIndex, pager.endIndex)

  requirementsDetailTableBody.innerHTML = visibleRows
    .map(
      (record) => `
        <tr>
          ${requirementDetailsColumns.map((column) => `<td>${formatCellValue(record[column.key], column)}</td>`).join('')}
        </tr>
      `,
    )
    .join('')

  markTableLayoutReady(requirementsDetailTable)
}

function updateRequirementDetailsContext(summary = null) {
  if (!requirementsDetailContext) {
    return
  }

  if (!summary) {
    requirementsDetailContext.innerHTML = ''
    return
  }

  requirementsDetailContext.innerHTML = `
    <div class="requirements-explorer__meta">
      <span><strong>Items finales:</strong> ${escapeHtml(summary.finalCount ?? 0)}</span>
      <span><strong>Items stage:</strong> ${escapeHtml(summary.stageCount ?? 0)}</span>
      <span><strong>Items locales:</strong> ${escapeHtml(summary.localCount ?? 0)}</span>
      <span><strong>Total items:</strong> ${escapeHtml(summary.totalCount ?? 0)}</span>
      <span><strong>RQ únicos:</strong> ${escapeHtml(summary.uniqueRqCount ?? 0)}</span>
    </div>
  `
}

function updateRequirementDetailsStatus(message, tone = 'info') {
  if (!requirementsDetailStatus) {
    return
  }

  requirementsDetailStatus.textContent = message
  requirementsDetailStatus.dataset.tone = tone
}

async function fetchAllRows(tableName, batchSize = 1000) {
  if (!supabaseClient || !tableName) {
    return []
  }

  const rows = []
  let from = 0

  while (true) {
    const to = from + batchSize - 1
    const { data, error } = await supabaseClient.from(tableName).select('*').range(from, to)

    if (error) {
      throw error
    }

    const chunk = Array.isArray(data) ? data : []
    rows.push(...chunk)

    if (chunk.length < batchSize) {
      break
    }

    from += batchSize
  }

  return rows
}

function resetExplorerExpedienteState() {
  explorerActiveTab = 'summary'
  explorerExpedienteContextKey = ''
  explorerTrackingEvents = []
  explorerTrackingState = 'idle'
  explorerTrackingError = ''
  explorerEvidenceRecords = []
  explorerEvidenceState = 'idle'
  explorerEvidenceError = ''
  explorerLegacyAttachmentRecords = []
  explorerTrackingComposerMode = ''
  explorerEvidenceComposerOpen = false
}

function getActiveExplorerEntityContext() {
  if (activeExplorerMode === 'quotation-linked' && quotationLinkedRecord) {
    const entityId = quotationLinkedRecord[primaryKey] ?? quotationLinkedRecord.id ?? null
    const entityCode = quotationLinkedRecord.cotizacion ?? quotationLinkedRecord.cotizacion_codigo ?? ''
    if (!entityId || !entityCode) {
      return null
    }

    return {
      entityType: 'cotizacion',
      entityId,
      entityCode,
    }
  }

  if (activeExplorerMode === 'rq-detail' && activeRequirementRecord) {
    const entityId = activeRequirementRecord.id ?? null
    const entityCode = activeRequirementRecord.rq_codigo ?? ''
    if (!entityId || !entityCode) {
      return null
    }

    return {
      entityType: 'requerimiento',
      entityId,
      entityCode,
    }
  }

  return null
}

function buildExplorerContextKey(context) {
  if (!context) {
    return ''
  }

  return `${context.entityType}::${context.entityId}`
}

function isMissingRelationError(error) {
  const message = `${error?.message || ''} ${error?.details || ''} ${error?.hint || ''}`.toLowerCase()
  return (
    message.includes('does not exist') ||
    message.includes('could not find the table') ||
    message.includes('relation') && message.includes('does not exist')
  )
}

async function loadExplorerTrackingEvents(context) {
  if (!supabaseClient || !context) {
    explorerTrackingEvents = []
    explorerTrackingState = 'ready'
    explorerTrackingError = ''
    return []
  }

  try {
    const { data, error } = await supabaseClient
      .from('seguimiento_eventos')
      .select('*')
      .eq('entity_type', context.entityType)
      .eq('entity_id', context.entityId)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    explorerTrackingEvents = Array.isArray(data) ? data : []
    explorerTrackingState = 'ready'
    explorerTrackingError = ''
    return explorerTrackingEvents
  } catch (error) {
    explorerTrackingEvents = []
    if (isMissingRelationError(error)) {
      explorerTrackingState = 'missing'
      explorerTrackingError = 'La bitácora de seguimiento aún no está activada en Supabase.'
      return []
    }

    explorerTrackingState = 'error'
    explorerTrackingError = error?.message || 'No se pudo cargar el seguimiento.'
    return []
  }
}

async function loadExplorerEvidenceRecords(context) {
  if (!supabaseClient || !context) {
    explorerEvidenceRecords = []
    explorerLegacyAttachmentRecords = []
    explorerEvidenceState = 'ready'
    explorerEvidenceError = ''
    return []
  }

  try {
    const evidenceQuery = supabaseClient
      .from('evidencias_relacionadas')
      .select('*')
      .eq('entity_type', context.entityType)
      .eq('entity_id', context.entityId)
      .order('created_at', { ascending: false })

    const primaryResult = await evidenceQuery
    let primaryError = primaryResult.error || null
    explorerEvidenceRecords = Array.isArray(primaryResult.data) ? primaryResult.data : []

    if (context.entityType === 'requerimiento') {
      const legacyResult = await supabaseClient
        .from('requerimiento_adjuntos')
        .select('*')
        .eq('requerimiento_log_id', context.entityId)
        .order('created_at', { ascending: false })

      explorerLegacyAttachmentRecords = Array.isArray(legacyResult.data) ? legacyResult.data : []
      if (!primaryError && legacyResult.error) {
        throw legacyResult.error
      }
    } else {
      explorerLegacyAttachmentRecords = []
    }

    if (primaryError) {
      if (isMissingRelationError(primaryError)) {
        explorerEvidenceState = 'missing'
        explorerEvidenceError = 'La capa de evidencias nuevas aún no está activada en Supabase.'
        return explorerEvidenceRecords
      }
      throw primaryError
    }

    explorerEvidenceState = 'ready'
    explorerEvidenceError = ''
    return explorerEvidenceRecords
  } catch (error) {
    explorerEvidenceRecords = []
    explorerLegacyAttachmentRecords = []
    explorerEvidenceState = 'error'
    explorerEvidenceError = error?.message || 'No se pudieron cargar las evidencias.'
    return []
  }
}

async function refreshExplorerExpedienteData(force = false) {
  const context = getActiveExplorerEntityContext()
  if (!context) {
    return
  }

  const contextKey = buildExplorerContextKey(context)
  const sameContext = explorerExpedienteContextKey === contextKey
  const alreadyReady = explorerTrackingState === 'ready' && explorerEvidenceState === 'ready'

  if (!force && sameContext && alreadyReady) {
    return
  }

  explorerExpedienteContextKey = contextKey
  explorerTrackingState = 'loading'
  explorerEvidenceState = 'loading'
  explorerTrackingError = ''
  explorerEvidenceError = ''

  if (!requirementsExplorerModal?.classList.contains('is-hidden')) {
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
  }

  await Promise.all([loadExplorerTrackingEvents(context), loadExplorerEvidenceRecords(context)])

  if (!requirementsExplorerModal?.classList.contains('is-hidden')) {
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
  }
}

function parseStructuredValue(rawValue) {
  if (rawValue === null || rawValue === undefined || rawValue === '') {
    return null
  }

  if (Array.isArray(rawValue) || (typeof rawValue === 'object' && rawValue !== null)) {
    return rawValue
  }

  if (typeof rawValue === 'string') {
    const trimmed = rawValue.trim()
    if (!trimmed) {
      return null
    }

    if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
      try {
        return JSON.parse(trimmed)
      } catch {
        return trimmed
      }
    }

    return trimmed
  }

  return rawValue
}

function normalizeLegacyEvidenceEntries(sourceValue, defaults = {}) {
  const parsedValue = parseStructuredValue(sourceValue)
  if (!parsedValue) {
    return []
  }

  const defaultType = defaults.evidenceType || 'otro'
  const defaultLabel = defaults.label || 'Evidencia'
  const originLabel = defaults.originLabel || 'Legacy'

  const toEntry = (rawEntry, index = 0) => {
    if (rawEntry === null || rawEntry === undefined || rawEntry === '') {
      return null
    }

    if (typeof rawEntry === 'string') {
      const trimmed = rawEntry.trim()
      if (!trimmed) {
        return null
      }

      return {
        id: `legacy-string-${defaultType}-${index}-${trimmed.slice(0, 24)}`,
        evidence_type: defaultType,
        title: `${defaultLabel}${Array.isArray(parsedValue) ? ` ${index + 1}` : ''}`,
        description: '',
        source_type: 'legacy',
        public_url: /^https?:\/\//i.test(trimmed) ? trimmed : '',
        external_url: /^https?:\/\//i.test(trimmed) ? trimmed : '',
        file_name: !/^https?:\/\//i.test(trimmed) ? trimmed : '',
        metadata: { originLabel, raw: trimmed },
        created_at: '',
      }
    }

    if (typeof rawEntry === 'object') {
      const publicUrl = rawEntry.public_url || rawEntry.url || rawEntry.external_url || ''
      const fileName = rawEntry.file_name || rawEntry.name || rawEntry.title || rawEntry.path || ''
      const title = rawEntry.title || rawEntry.label || fileName || `${defaultLabel}${Array.isArray(parsedValue) ? ` ${index + 1}` : ''}`
      const description = rawEntry.description || rawEntry.comment || rawEntry.note || ''

      return {
        id: rawEntry.id || `legacy-object-${defaultType}-${index}-${title}`,
        evidence_type: rawEntry.evidence_type || rawEntry.type || defaultType,
        title,
        description,
        source_type: 'legacy',
        public_url: publicUrl,
        external_url: rawEntry.external_url || '',
        file_name: fileName,
        mime_type: rawEntry.mime_type || '',
        metadata: { originLabel, ...rawEntry },
        created_at: rawEntry.created_at || '',
      }
    }

    return null
  }

  if (Array.isArray(parsedValue)) {
    return parsedValue.map((entry, index) => toEntry(entry, index)).filter(Boolean)
  }

  const singleEntry = toEntry(parsedValue, 0)
  return singleEntry ? [singleEntry] : []
}

function getLegacyRequirementEvidence(requirementRecord = activeRequirementRecord, detailItems = requirementModalItems) {
  if (!requirementRecord) {
    return []
  }

  const legacyRecords = []

  legacyRecords.push(
    ...normalizeLegacyEvidenceEntries(requirementRecord.archivo_principal_url || requirementRecord.archivo_principal_path, {
      evidenceType: 'pdf',
      label: 'Archivo principal',
      originLabel: 'Cabecera del requerimiento',
    }),
  )
  legacyRecords.push(
    ...normalizeLegacyEvidenceEntries(requirementRecord.adjuntos, {
      evidenceType: 'otro',
      label: 'Adjunto cabecera',
      originLabel: 'Adjuntos legacy del requerimiento',
    }),
  )
  legacyRecords.push(
    ...normalizeLegacyEvidenceEntries(requirementRecord.fotos_evidencia, {
      evidenceType: 'foto',
      label: 'Foto de evidencia',
      originLabel: 'Fotos legacy del requerimiento',
    }),
  )

  const normalizedItems = Array.isArray(detailItems) ? detailItems : []
  normalizedItems.forEach((item, index) => {
    const itemLabel = item.item || index + 1

    legacyRecords.push(
      ...normalizeLegacyEvidenceEntries(item.ficha_tecnica_files || item.ficha_tecnica, {
        evidenceType: 'ficha_tecnica',
        label: `Ficha técnica item ${itemLabel}`,
        originLabel: 'Detalle legacy del requerimiento',
      }),
    )
    legacyRecords.push(
      ...normalizeLegacyEvidenceEntries(item.fotos, {
        evidenceType: 'foto',
        label: `Foto item ${itemLabel}`,
        originLabel: 'Detalle legacy del requerimiento',
      }),
    )
    legacyRecords.push(
      ...normalizeLegacyEvidenceEntries(item.ficha_tecnica_a_suministrar_files || item.ficha_tecnica_a_suministrar, {
        evidenceType: 'ficha_tecnica',
        label: `Ficha a suministrar item ${itemLabel}`,
        originLabel: 'Detalle legacy del requerimiento',
      }),
    )
    legacyRecords.push(
      ...normalizeLegacyEvidenceEntries(item.archivo_guia_files || item.archivo_guia, {
        evidenceType: 'guia',
        label: `Archivo guía item ${itemLabel}`,
        originLabel: 'Detalle legacy del requerimiento',
      }),
    )
  })

  return legacyRecords
}

function getLegacyRequirementAttachmentEvidence() {
  if (!Array.isArray(explorerLegacyAttachmentRecords) || !explorerLegacyAttachmentRecords.length) {
    return []
  }

  return explorerLegacyAttachmentRecords.map((attachment, index) => ({
    id: attachment.id || `legacy-adjunto-${index}`,
    evidence_type: attachment.tipo || 'otro',
    title: attachment.file_name || attachment.metadata?.title || `Adjunto ${index + 1}`,
    description: attachment.metadata?.description || '',
    source_type: 'legacy',
    public_url: attachment.public_url || '',
    external_url: '',
    file_name: attachment.file_name || '',
    mime_type: attachment.mime_type || '',
    created_at: attachment.created_at || '',
    metadata: {
      originLabel: 'Tabla requerimiento_adjuntos',
      storage_path: attachment.storage_path || '',
      ...attachment.metadata,
    },
  }))
}

function getExplorerTabDefinitions() {
  const legacyEvidenceCount = activeExplorerMode === 'rq-detail' ? getLegacyRequirementEvidence().length : 0
  return [
    { key: 'summary', label: 'Resumen' },
    { key: 'tracking', label: 'Seguimiento', count: explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type !== 'comunicacion').length },
    { key: 'evidence', label: 'Evidencias', count: explorerEvidenceRecords.length + legacyEvidenceCount },
    { key: 'communications', label: 'Comunicaciones', count: explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type === 'comunicacion').length },
    { key: 'history', label: 'Historial', count: explorerTrackingEvents.length },
  ]
}

function buildExplorerTabs() {
  const tabs = getExplorerTabDefinitions()
  return `
    <nav class="expediente-tabs" aria-label="Secciones del expediente">
      ${tabs
        .map((tab) => {
          const isActive = explorerActiveTab === tab.key
          return `
            <button
              class="expediente-tab ${isActive ? 'is-active' : ''}"
              type="button"
              data-action="switch-explorer-tab"
              data-explorer-tab="${tab.key}"
            >
              <span>${escapeHtml(tab.label)}</span>
              ${tab.count ? `<small>${escapeHtml(String(tab.count))}</small>` : ''}
            </button>
          `
        })
        .join('')}
    </nav>
  `
}

function formatExplorerActor(userId) {
  if (!userId) {
    return 'Sistema'
  }

  if (authSession?.user?.id && authSession.user.id === userId) {
    return currentUserProfile?.full_name || currentUserProfile?.email || 'Tú'
  }

  return `Usuario ${String(userId).slice(0, 8)}`
}

function canManageExplorerExpediente() {
  if (!currentUserProfile?.active) {
    return false
  }

  const allowedRoles = new Set(['admin', 'comercial', 'tecnico', 'logistica'])
  if (!allowedRoles.has(String(currentUserProfile.role || ''))) {
    return false
  }

  if (activeExplorerMode === 'quotation-linked') {
    return getCurrentQuotationPermissions().access
  }

  if (activeExplorerMode === 'rq-detail') {
    return getCurrentModulePermissions('details').access
  }

  return false
}

function setExplorerNotice(message = '') {
  if (!requirementsExplorerContent) {
    return
  }

  requirementsExplorerContent.dataset.resourceNotice = message
}

function getTrackingEventOptions() {
  return [
    { value: 'comentario', label: 'Comentario' },
    { value: 'observacion', label: 'Observación' },
    { value: 'sustento', label: 'Sustento' },
    { value: 'validacion', label: 'Validación' },
    { value: 'aprobacion', label: 'Aprobación' },
    { value: 'rechazo', label: 'Rechazo' },
    { value: 'derivacion', label: 'Derivación' },
    { value: 'atencion', label: 'Atención' },
    { value: 'entrega', label: 'Entrega' },
    { value: 'cierre', label: 'Cierre' },
    { value: 'cambio_estado', label: 'Cambio de estado' },
  ]
}

function buildTrackingComposer(mode = 'tracking') {
  if (!canManageExplorerExpediente()) {
    return ''
  }

  const isCommunication = mode === 'communication'
  const eventOptions = getTrackingEventOptions()
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join('')

  return `
    <form class="expediente-composer" data-action="${isCommunication ? 'submit-communication-event' : 'submit-tracking-event'}">
      <div class="expediente-composer__header">
        <strong>${isCommunication ? 'Registrar comunicación' : 'Registrar seguimiento'}</strong>
        <button class="ghost-button ghost-button--soft" type="button" data-action="cancel-explorer-composer">Cancelar</button>
      </div>
      <div class="expediente-composer__grid ${isCommunication ? 'expediente-composer__grid--communication' : ''}">
        ${
          isCommunication
            ? `
              <label class="field">
                <span>Canal</span>
                <select name="channel">
                  <option value="email">Email</option>
                  <option value="telefono">Teléfono</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="reunion">Reunión</option>
                  <option value="interna">Interna</option>
                  <option value="otro">Otro</option>
                </select>
              </label>
              <label class="field field--wide">
                <span>Asunto o referencia</span>
                <input name="title" type="text" placeholder="Ej. Cliente observó plazo de entrega" required />
              </label>
              <label class="field">
                <span>Remitente</span>
                <input name="communication_from" type="text" placeholder="Quién envió la comunicación" />
              </label>
              <label class="field">
                <span>Destinatario</span>
                <input name="communication_to" type="text" placeholder="Quién recibió la comunicación" />
              </label>
              <label class="field field--wide">
                <span>Referencia</span>
                <input name="communication_ref" type="text" placeholder="Asunto del correo, link, código o nota corta" />
              </label>
              <label class="field field--full">
                <span>Comentario</span>
                <textarea name="comment" rows="4" placeholder="Resume qué se comunicó y su impacto operativo."></textarea>
              </label>
            `
            : `
              <label class="field">
                <span>Tipo de evento</span>
                <select name="event_type">
                  ${eventOptions}
                </select>
              </label>
              <label class="field field--wide">
                <span>Título</span>
                <input name="title" type="text" placeholder="Ej. Requerimiento observado por oficina central" required />
              </label>
              <label class="field">
                <span>Estado anterior</span>
                <input name="status_before" type="text" placeholder="Opcional" />
              </label>
              <label class="field">
                <span>Estado nuevo</span>
                <input name="status_after" type="text" placeholder="Opcional" />
              </label>
              <label class="field field--full">
                <span>Comentario</span>
                <textarea name="comment" rows="4" placeholder="Describe qué pasó, qué se observó o qué falta."></textarea>
              </label>
            `
        }
      </div>
      <div class="record-form__actions">
        <button class="ghost-button ghost-button--soft" type="reset">Limpiar</button>
        <button class="ghost-button ghost-button--accent" type="submit">Guardar</button>
      </div>
    </form>
  `
}

function buildEvidenceComposer() {
  if (!canManageExplorerExpediente()) {
    return ''
  }

  return `
    <form class="expediente-composer" data-action="submit-evidence-record">
      <div class="expediente-composer__header">
        <strong>Registrar evidencia</strong>
        <button class="ghost-button ghost-button--soft" type="button" data-action="cancel-evidence-composer">Cancelar</button>
      </div>
      <div class="expediente-composer__grid expediente-composer__grid--communication">
        <label class="field">
          <span>Tipo</span>
          <select name="evidence_type">
            <option value="pdf">PDF</option>
            <option value="foto">Foto</option>
            <option value="excel">Excel</option>
            <option value="word">Word</option>
            <option value="link">Link</option>
            <option value="ficha_tecnica">Ficha técnica</option>
            <option value="sustento_campo">Sustento de campo</option>
            <option value="cotizacion_proveedor">Cotización de proveedor</option>
            <option value="acta">Acta</option>
            <option value="guia">Guía</option>
            <option value="captura">Captura</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <label class="field">
          <span>Modo</span>
          <select name="source_type">
            <option value="link">Link</option>
            <option value="manual">Manual</option>
          </select>
        </label>
        <label class="field field--wide">
          <span>Título</span>
          <input name="title" type="text" placeholder="Ej. Correo con sustento del cliente" required />
        </label>
        <label class="field field--wide">
          <span>URL o enlace</span>
          <input name="external_url" type="text" placeholder="Pega el link si existe" />
        </label>
        <label class="field">
          <span>Nombre de archivo</span>
          <input name="file_name" type="text" placeholder="Opcional si aún no subes archivo" />
        </label>
        <label class="field field--full">
          <span>Descripción</span>
          <textarea name="description" rows="4" placeholder="Describe qué evidencia es y por qué respalda el caso."></textarea>
        </label>
      </div>
      <div class="record-form__actions">
        <button class="ghost-button ghost-button--soft" type="reset">Limpiar</button>
        <button class="ghost-button ghost-button--accent" type="submit">Guardar</button>
      </div>
    </form>
  `
}

function buildExpedienteSectionHeader(titleText, metaText = '', actionMarkup = '') {
  return `
    <div class="expediente-section__header">
      <strong>${escapeHtml(titleText)}</strong>
      <div class="expediente-section__actions">
        ${metaText ? `<span>${escapeHtml(metaText)}</span>` : ''}
        ${actionMarkup}
      </div>
    </div>
  `
}

async function saveExplorerTrackingEvent(formElement, mode = 'tracking') {
  if (!supabaseClient) {
    setExplorerNotice('Supabase no está disponible para registrar el seguimiento.')
    return false
  }

  const context = getActiveExplorerEntityContext()
  if (!context) {
    setExplorerNotice('No se pudo identificar el expediente activo.')
    return false
  }

  const formData = new FormData(formElement)
  const isCommunication = mode === 'communication'
  const title = String(formData.get('title') || '').trim()
  const comment = String(formData.get('comment') || '').trim()
  const payload = {
    entity_type: context.entityType,
    entity_id: context.entityId,
    entity_code: context.entityCode,
    event_type: isCommunication ? 'comunicacion' : String(formData.get('event_type') || 'comentario').trim(),
    title: title || (isCommunication ? 'Comunicación registrada' : 'Seguimiento registrado'),
    comment: comment || null,
    created_by: currentSession?.user?.id || null,
    updated_by: currentSession?.user?.id || null,
  }

  if (isCommunication) {
    payload.channel = String(formData.get('channel') || 'email').trim() || 'email'
    payload.communication_subject = title || null
    payload.communication_ref = String(formData.get('communication_ref') || '').trim() || null
    payload.communication_from = String(formData.get('communication_from') || '').trim() || null
    payload.communication_to = String(formData.get('communication_to') || '').trim() || null
  } else {
    payload.status_before = String(formData.get('status_before') || '').trim() || null
    payload.status_after = String(formData.get('status_after') || '').trim() || null
  }

  const { error } = await supabaseClient.from('seguimiento_eventos').insert(payload)
  if (error) {
    setExplorerNotice(`No se pudo guardar el ${isCommunication ? 'registro de comunicación' : 'seguimiento'}: ${error.message}`)
    return false
  }

  explorerTrackingComposerMode = ''
  setExplorerNotice(isCommunication ? 'Comunicación registrada en el expediente.' : 'Seguimiento registrado en el expediente.')
  await refreshExplorerExpedienteData(true)
  return true
}

async function saveExplorerEvidenceRecord(formElement) {
  if (!supabaseClient) {
    setExplorerNotice('Supabase no está disponible para registrar evidencias.')
    return false
  }

  const context = getActiveExplorerEntityContext()
  if (!context) {
    setExplorerNotice('No se pudo identificar el expediente activo.')
    return false
  }

  const formData = new FormData(formElement)
  const payload = {
    entity_type: context.entityType,
    entity_id: context.entityId,
    entity_code: context.entityCode,
    evidence_type: String(formData.get('evidence_type') || 'otro').trim() || 'otro',
    source_type: String(formData.get('source_type') || 'manual').trim() || 'manual',
    title: String(formData.get('title') || '').trim() || 'Evidencia registrada',
    description: String(formData.get('description') || '').trim() || null,
    external_url: String(formData.get('external_url') || '').trim() || null,
    file_name: String(formData.get('file_name') || '').trim() || null,
    uploaded_by: currentSession?.user?.id || null,
    updated_by: currentSession?.user?.id || null,
  }

  if (payload.source_type === 'link' && !payload.external_url) {
    setExplorerNotice('Si el modo es Link, ingresa una URL o referencia válida.')
    return false
  }

  const { error } = await supabaseClient.from('evidencias_relacionadas').insert(payload)
  if (error) {
    setExplorerNotice(`No se pudo registrar la evidencia: ${error.message}`)
    return false
  }

  explorerEvidenceComposerOpen = false
  setExplorerNotice('Evidencia registrada en el expediente.')
  await refreshExplorerExpedienteData(true)
  return true
}

function buildExplorerEmptyState(titleText, bodyText) {
  return `
    <div class="expediente-empty">
      <strong>${escapeHtml(titleText)}</strong>
      <p>${escapeHtml(bodyText)}</p>
    </div>
  `
}

function buildExplorerLoadState(scopeLabel, state, errorMessage) {
  if (state === 'loading') {
    return buildExplorerEmptyState(`Cargando ${scopeLabel.toLowerCase()}...`, 'Espera un momento mientras se consulta la información del expediente.')
  }

  if (state === 'missing') {
    return buildExplorerEmptyState(`${scopeLabel} pendiente de activación`, errorMessage || 'Primero ejecuta la migración de Fase 1A en Supabase para habilitar esta sección.')
  }

  if (state === 'error') {
    return buildExplorerEmptyState(`No se pudo cargar ${scopeLabel.toLowerCase()}`, errorMessage || 'Intenta actualizar más tarde o revisa la configuración de acceso.')
  }

  return ''
}

function buildExplorerEventCards(eventRecords, emptyTitle, emptyBody) {
  if (!Array.isArray(eventRecords) || !eventRecords.length) {
    return buildExplorerEmptyState(emptyTitle, emptyBody)
  }

  return `
    <div class="expediente-feed">
      ${eventRecords
        .map((eventRecord) => {
          const metaParts = [
            formatDateTime(eventRecord.created_at) || 'Sin fecha',
            formatExplorerActor(eventRecord.created_by),
            eventRecord.event_type ? toLabel(eventRecord.event_type) : '',
          ].filter(Boolean)

          const communicationParts = [
            eventRecord.channel ? `Canal: ${toLabel(eventRecord.channel)}` : '',
            eventRecord.communication_subject ? `Asunto: ${eventRecord.communication_subject}` : '',
            eventRecord.communication_from ? `De: ${eventRecord.communication_from}` : '',
            eventRecord.communication_to ? `Para: ${eventRecord.communication_to}` : '',
          ].filter(Boolean)

          const statusSummary =
            eventRecord.status_before || eventRecord.status_after
              ? `<div class="expediente-card__status">${escapeHtml(eventRecord.status_before || 'Sin estado')} <span>→</span> ${escapeHtml(eventRecord.status_after || 'Sin cambio')}</div>`
              : ''

          const referenceMarkup = eventRecord.communication_ref
            ? `<div class="expediente-card__footer"><span class="expediente-link-label">Referencia</span><span class="cell-text">${escapeHtml(eventRecord.communication_ref)}</span></div>`
            : ''

          return `
            <article class="expediente-card">
              <div class="expediente-card__meta">${escapeHtml(metaParts.join(' · '))}</div>
              <div class="expediente-card__header">
                <strong>${escapeHtml(eventRecord.title || toLabel(eventRecord.event_type) || 'Evento')}</strong>
                <span class="tag tag--${getTagTone(eventRecord.status_after || eventRecord.event_type)}">${escapeHtml(toLabel(eventRecord.event_type || 'evento'))}</span>
              </div>
              ${statusSummary}
              ${eventRecord.comment ? `<p class="expediente-card__body">${escapeHtml(eventRecord.comment)}</p>` : ''}
              ${communicationParts.length ? `<div class="expediente-card__footer">${communicationParts.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div>` : ''}
              ${referenceMarkup}
            </article>
          `
        })
        .join('')}
    </div>
  `
}

function buildEvidenceCards(evidenceRecords, emptyTitle, emptyBody, originLabel = '') {
  if (!Array.isArray(evidenceRecords) || !evidenceRecords.length) {
    return buildExplorerEmptyState(emptyTitle, emptyBody)
  }

  return `
    <div class="expediente-evidence-list">
      ${evidenceRecords
        .map((evidenceRecord) => {
          const evidenceType = toLabel(evidenceRecord.evidence_type || 'otro')
          const metaParts = [
            originLabel || evidenceRecord.source_type ? toLabel(originLabel || evidenceRecord.source_type) : '',
            evidenceRecord.file_name || '',
            evidenceRecord.mime_type || '',
            evidenceRecord.created_at ? formatDateTime(evidenceRecord.created_at) : '',
          ].filter(Boolean)
          const href = evidenceRecord.public_url || evidenceRecord.external_url || ''

          return `
            <article class="expediente-evidence-card">
              <div class="expediente-evidence-card__head">
                <strong>${escapeHtml(evidenceRecord.title || evidenceRecord.file_name || 'Evidencia')}</strong>
                <span class="rq-chip">${escapeHtml(evidenceType)}</span>
              </div>
              ${evidenceRecord.description ? `<p class="expediente-evidence-card__body">${escapeHtml(evidenceRecord.description)}</p>` : ''}
              ${metaParts.length ? `<div class="expediente-evidence-card__meta">${escapeHtml(metaParts.join(' · '))}</div>` : ''}
              ${
                href
                  ? `<a class="ghost-button ghost-button--soft expediente-evidence-card__link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">Abrir evidencia</a>`
                  : evidenceRecord.file_name
                    ? `<div class="expediente-evidence-card__meta">${escapeHtml(evidenceRecord.file_name)}</div>`
                    : ''
              }
            </article>
          `
        })
        .join('')}
    </div>
  `
}

function buildQuotationExpedientePanel() {
  if (explorerActiveTab === 'summary') {
    return buildQuotationLinkedTable()
  }

  if (explorerActiveTab === 'tracking') {
    const stateMarkup = buildExplorerLoadState('Seguimiento', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    const records = explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type !== 'comunicacion')
    const actionMarkup = canManageExplorerExpediente()
      ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-tracking-composer">Registrar seguimiento</button>`
      : ''
    return `
      <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
        <section class="expediente-section">
          ${buildExpedienteSectionHeader('Seguimiento operativo', `${records.length} evento(s)`, actionMarkup)}
          ${explorerTrackingComposerMode === 'tracking' ? buildTrackingComposer('tracking') : ''}
          ${buildExplorerEventCards(records, 'Sin seguimiento todavía', 'Esta cotización aún no tiene eventos de seguimiento registrados.')}
        </section>
      </div>
    `
  }

  if (explorerActiveTab === 'communications') {
    const stateMarkup = buildExplorerLoadState('Comunicaciones', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    const records = explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type === 'comunicacion')
    const actionMarkup = canManageExplorerExpediente()
      ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-communication-composer">Registrar comunicación</button>`
      : ''
    return `
      <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
        <section class="expediente-section">
          ${buildExpedienteSectionHeader('Comunicaciones relacionadas', `${records.length} registro(s)`, actionMarkup)}
          ${explorerTrackingComposerMode === 'communication' ? buildTrackingComposer('communication') : ''}
          ${buildExplorerEventCards(records, 'Sin comunicaciones registradas', 'Aquí aparecerán correos, reuniones o comunicaciones relevantes de la cotización.')}
        </section>
      </div>
    `
  }

  if (explorerActiveTab === 'history') {
    const stateMarkup = buildExplorerLoadState('Historial', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    return `<div class="requirements-explorer__panel-wrap">${buildExplorerEventCards(explorerTrackingEvents, 'Sin historial disponible', 'Todavía no hay eventos suficientes para construir el historial de esta cotización.')}</div>`
  }

  const stateMarkup = buildExplorerLoadState('Evidencias', explorerEvidenceState, explorerEvidenceError)
  if (stateMarkup) {
    return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
  }

  const actionMarkup = canManageExplorerExpediente()
    ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-evidence-composer">Registrar evidencia</button>`
    : ''
  return `
    <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
      <section class="expediente-section">
        ${buildExpedienteSectionHeader('Evidencias del expediente', `${explorerEvidenceRecords.length} registro(s)`, actionMarkup)}
        ${explorerEvidenceComposerOpen ? buildEvidenceComposer() : ''}
        ${buildEvidenceCards(explorerEvidenceRecords, 'Sin evidencias nuevas', 'Aún no se registraron documentos o sustentos nuevos para esta cotización.')}
      </section>
    </div>
  `
}

function buildRequirementExpedientePanel() {
  if (explorerActiveTab === 'summary') {
    const pickerMarkup = buildRequirementResourcePicker()
    return `
      <div class="requirements-explorer__workspace ${requirementModalResourcePickerOpen ? 'requirements-explorer__workspace--with-sidebar' : ''}">
        <div class="requirements-explorer__main">
          ${buildRequirementModalColumnManager()}
          <div class="requirements-explorer__table-wrap">
            ${buildRequirementModalTable()}
          </div>
        </div>
        ${pickerMarkup}
      </div>
    `
  }

  if (explorerActiveTab === 'tracking') {
    const stateMarkup = buildExplorerLoadState('Seguimiento', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    const records = explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type !== 'comunicacion')
    const actionMarkup = canManageExplorerExpediente()
      ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-tracking-composer">Registrar seguimiento</button>`
      : ''
    return `
      <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
        <section class="expediente-section">
          ${buildExpedienteSectionHeader('Seguimiento operativo', `${records.length} evento(s)`, actionMarkup)}
          ${explorerTrackingComposerMode === 'tracking' ? buildTrackingComposer('tracking') : ''}
          ${buildExplorerEventCards(records, 'Sin seguimiento todavía', 'Este requerimiento aún no tiene eventos de seguimiento registrados.')}
        </section>
      </div>
    `
  }

  if (explorerActiveTab === 'communications') {
    const stateMarkup = buildExplorerLoadState('Comunicaciones', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    const records = explorerTrackingEvents.filter((eventRecord) => eventRecord.event_type === 'comunicacion')
    const actionMarkup = canManageExplorerExpediente()
      ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-communication-composer">Registrar comunicación</button>`
      : ''
    return `
      <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
        <section class="expediente-section">
          ${buildExpedienteSectionHeader('Comunicaciones relacionadas', `${records.length} registro(s)`, actionMarkup)}
          ${explorerTrackingComposerMode === 'communication' ? buildTrackingComposer('communication') : ''}
          ${buildExplorerEventCards(records, 'Sin comunicaciones registradas', 'Aquí aparecerán correos o comunicaciones relevantes asociadas a este requerimiento.')}
        </section>
      </div>
    `
  }

  if (explorerActiveTab === 'history') {
    const stateMarkup = buildExplorerLoadState('Historial', explorerTrackingState, explorerTrackingError)
    if (stateMarkup) {
      return `<div class="requirements-explorer__panel-wrap">${stateMarkup}</div>`
    }

    return `<div class="requirements-explorer__panel-wrap">${buildExplorerEventCards(explorerTrackingEvents, 'Sin historial disponible', 'Todavía no hay eventos suficientes para construir el historial de este requerimiento.')}</div>`
  }

  const stateMarkup = buildExplorerLoadState('Evidencias', explorerEvidenceState, explorerEvidenceError)
  const legacyTableEvidence = getLegacyRequirementAttachmentEvidence()
  const legacyEvidence = [...legacyTableEvidence, ...getLegacyRequirementEvidence()]
  const newEvidenceMarkup = stateMarkup
    ? stateMarkup
    : buildEvidenceCards(explorerEvidenceRecords, 'Sin evidencias nuevas', 'Todavía no se registraron evidencias nuevas para este requerimiento.')
  const legacyMarkup = buildEvidenceCards(
    legacyEvidence,
    'Sin adjuntos heredados',
    'Este requerimiento no tiene adjuntos heredados detectados en la estructura actual.',
    'Legacy',
  )
  const actionMarkup = canManageExplorerExpediente()
    ? `<button class="ghost-button ghost-button--soft" type="button" data-action="open-evidence-composer">Registrar evidencia</button>`
    : ''

  return `
    <div class="requirements-explorer__panel-wrap requirements-explorer__panel-wrap--stacked">
      <section class="expediente-section">
        ${buildExpedienteSectionHeader('Evidencias del expediente', `${explorerEvidenceRecords.length} registro(s)`, actionMarkup)}
        ${explorerEvidenceComposerOpen ? buildEvidenceComposer() : ''}
        ${newEvidenceMarkup}
      </section>
      <section class="expediente-section">
        ${buildExpedienteSectionHeader('Adjuntos heredados', `${legacyEvidence.length} registro(s)`)}
        ${legacyMarkup}
      </section>
    </div>
  `
}

async function loadRequirementDetails() {
  const permissions = getCurrentModulePermissions('details')
  if (!permissions.access) {
    requirementDetailsRecords = []
    requirementDetailsColumns = getRequirementDetailsColumns([], true)
    buildRequirementDetailsHead()
    renderRequirementDetailsTable()
    updateRequirementDetailsContext(null)
    updateRequirementDetailsStatus('No tienes acceso a Detalle de Requerimientos.', 'warning')
    return []
  }

  const detailSource = config?.requirementDetailsSource
  const stageSource = config?.requirementDetailsStageSource
  const cacheKey = buildCacheKey('requirements-detail', detailSource || stageSource)

  selectedRequirementKey = ''
  requirementDetailsActiveFilters = {}
  requirementDetailsPage = 1
  await loadCustomRequirementItems()

  try {
    const cached = await readCachedDataset(cacheKey)
    if (Array.isArray(cached?.records) && cached.records.length) {
      requirementDetailsRecords = mergeRequirementDetailRecords(cached.records, customRequirementItems)
      requirementDetailsColumns = getRequirementDetailsColumns(requirementDetailsRecords)
      buildRequirementDetailsHead()
      renderRequirementDetailsTable()
      updateRequirementDetailsContext({
        finalCount: requirementDetailsRecords.filter((item) => item.fuente === 'FINAL').length,
        stageCount: requirementDetailsRecords.filter((item) => item.fuente === 'STAGE').length,
        localCount: requirementDetailsRecords.filter((item) => item.fuente === 'LOCAL').length,
        totalCount: requirementDetailsRecords.length,
        uniqueRqCount: new Set(requirementDetailsRecords.map((item) => item.rq_codigo).filter(Boolean)).size,
      })
      updateRequirementDetailsStatus(
        `Vista inmediata desde cache local. ${requirementDetailsRecords.length} item(s) cargados. Ult. sync: ${formatCacheTimestamp(cached.updatedAt) || 'sin fecha'}.`,
        'info',
      )
    }
  } catch {}

  if (!supabaseClient || !detailSource) {
    if (!requirementDetailsRecords.length) {
      const fallbackItems = requirementsFallbackRecords.flatMap((requirement) =>
        Array.from({ length: Math.max(1, Number(requirement.cantidad_items) || 1) }, (_, index) => ({
          rq_codigo: requirement.rq_codigo,
          cotizacion_codigo: requirement.cotizacion_codigo,
          centro_costos: requirement.centro_costos,
          item: index + 1,
          descripcion: `Item ${index + 1} de ${requirement.rq_codigo}`,
          tipo: requirement.tipo_servicio,
          estado: requirement.estado,
          fuente: 'PRELIMINAR',
        })),
      )

      requirementDetailsRecords = mergeRequirementDetailRecords(fallbackItems, customRequirementItems)
      requirementDetailsColumns = getRequirementDetailsColumns(requirementDetailsRecords)
      buildRequirementDetailsHead()
      renderRequirementDetailsTable()
      updateRequirementDetailsContext({
        finalCount: 0,
        stageCount: fallbackItems.length,
        localCount: customRequirementItems.length,
        totalCount: requirementDetailsRecords.length,
        uniqueRqCount: new Set(requirementDetailsRecords.map((item) => item.rq_codigo)).size,
      })
    }
    updateRequirementDetailsStatus('Vista general preliminar activa. Falta conectar la tabla real de items.', 'warning')
    await tryOpenRequirementFromDeepLink()
    return requirementDetailsRecords
  }

  updateRequirementDetailsStatus(requirementDetailsRecords.length ? 'Sincronizando detalle de requerimientos en segundo plano...' : 'Consultando todos los items de requerimientos...', 'info')
  let results = []
  try {
    const queries = [fetchAllRows(detailSource)]
    if (stageSource) {
      queries.push(fetchAllRows(stageSource))
    }
    results = await Promise.all(queries)
  } catch (error) {
    updateRequirementDetailsStatus(
      requirementDetailsRecords.length
        ? `No se pudo sincronizar Supabase. Se mantiene el cache local. ${error.message}`
        : `No se pudieron leer los items: ${error.message}`,
      requirementDetailsRecords.length ? 'warning' : 'danger',
    )
    return requirementDetailsRecords
  }

  const detailData = Array.isArray(results[0]) ? results[0].map((item) => ({ ...item, fuente: 'FINAL' })) : []
  const stageData = Array.isArray(results[1]) ? results[1].map((item) => ({ ...item, fuente: 'STAGE' })) : []
  const mergedBase = detailData.length ? detailData : stageData
  const merged = mergeRequirementDetailRecords(mergedBase, customRequirementItems)

  requirementDetailsRecords = merged
  requirementDetailsColumns = getRequirementDetailsColumns(merged)

  buildRequirementDetailsHead()
  renderRequirementDetailsTable()
  updateRequirementDetailsContext({
    finalCount: detailData.length,
    stageCount: stageData.length,
    localCount: customRequirementItems.length,
    totalCount: merged.length,
    uniqueRqCount: new Set(merged.map((item) => item.rq_codigo).filter(Boolean)).size,
  })

  const tone = merged.length ? 'success' : 'warning'
  updateRequirementDetailsStatus(
    merged.length
      ? detailData.length
        ? `${merged.length} item(s) cargados en el detalle general.`
        : `${merged.length} item(s) stage/local cargados en el detalle general.`
      : 'No se encontraron items en las tablas de detalle.',
    tone,
  )
  try {
    await writeCachedDataset(cacheKey, requirementDetailsRecords)
  } catch {}
  await tryOpenRequirementFromDeepLink()
  return merged
}

function findRequirementByKey(requirementKey) {
  return requirementsRecords.find((record) => getRequirementRecordKey(record) === requirementKey) || null
}

function getRequirementDetailEntries(record) {
  return [
    ['Cotización', record.cotizacion_codigo],
    ['Centro de costo', record.centro_costos],
    ['RQ', record.rq_codigo],
    ['Cliente', record.cliente],
    ['Unidad', record.unidad],
    ['Fecha RQ', formatDate(record.fecha_rq)],
    ['Fecha Entrega', formatDate(record.fecha_entrega)],
    ['Tipo Servicio', record.tipo_servicio],
    ['Solicitante', record.solicitante],
    ['Área', record.area],
    ['Estado', record.estado],
    ['Items', record.cantidad_items],
    ['Descripción cotización', record.descripcion_cotizacion],
    ['Alertas', getRequirementAlerts(record).join(' | ') || 'Sin alertas'],
  ]
}

function getRequirementModalUniqueValues(columnKey) {
  return [...new Set(requirementModalItems.map((record) => record[columnKey]).filter((value) => value !== null && value !== undefined && value !== '' && typeof value !== 'object'))]
    .map((value) => String(value))
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
}

function getQuotationLinkedUniqueValues(columnKey) {
  return [...new Set(quotationLinkedRequirements.map((record) => record[columnKey]).filter((value) => value !== null && value !== undefined && value !== ''))]
    .map((value) => String(value))
    .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
}

function getVisibleQuotationLinkedColumns() {
  const visibleSet = new Set(quotationLinkedVisibleColumnKeys)
  return requirementsColumns.filter((column) => visibleSet.has(column.key))
}

function buildQuotationLinkedColumnManager() {
  const options = requirementsColumns
    .map(
      (column) => `
        <label class="column-toggle">
          <input type="checkbox" data-linked-column-key="${column.key}" ${quotationLinkedVisibleColumnKeys.includes(column.key) ? 'checked' : ''} />
          <span>${column.label}</span>
        </label>
      `,
    )
    .join('')

  return `
    <div class="column-manager ${quotationLinkedColumnManagerOpen ? '' : 'is-hidden'}">
      <div class="column-manager__header">
        <strong>Columnas de requerimientos vinculados</strong>
        <button class="column-manager__reset" type="button" data-action="reset-linked-columns">Restablecer</button>
      </div>
      <div class="column-manager__list">${options}</div>
    </div>
  `
}

function getFilteredQuotationLinkedRequirements() {
  return quotationLinkedRequirements.filter((record) =>
    Object.entries(quotationLinkedFilters).every(([key, rawFilterValue]) => {
      const filterValue = `${rawFilterValue ?? ''}`.trim()
      if (!filterValue) {
        return true
      }

      if (key === 'revision_estado') {
        return getRequirementRevisionState(record) === filterValue
      }

      const column = requirementsColumns.find((item) => item.key === key)
      const recordValue = record[key]
      if (!column) {
        return true
      }

      if (column.type === 'date') {
        return String(recordValue || '').slice(0, 10) === filterValue
      }

      if (column.type === 'number') {
        return String(recordValue ?? '') === filterValue
      }

      return String(recordValue ?? '').toLowerCase().includes(filterValue.toLowerCase())
    }),
  )
}

function getSortedQuotationLinkedRequirements(recordsToSort) {
  if (!quotationLinkedSort.key) {
    return [...recordsToSort]
  }

  return [...recordsToSort].sort((leftRecord, rightRecord) =>
    compareValues(
      getRequirementSortValue(leftRecord, quotationLinkedSort.key),
      getRequirementSortValue(rightRecord, quotationLinkedSort.key),
      getRequirementSortType(quotationLinkedSort.key),
      quotationLinkedSort.direction,
    ),
  )
}

function exportQuotationLinkedCsv() {
  if (!quotationLinkedRecord) {
    return
  }

  const exportColumns = getVisibleQuotationLinkedColumns()
  const exportRows = getSortedQuotationLinkedRequirements(getFilteredQuotationLinkedRequirements())
  const csvLines = [
    exportColumns.map((column) => `"${String(column.label).replace(/"/g, '""')}"`).join(','),
    ...exportRows.map((record) =>
      exportColumns
        .map((column) => {
          const raw = column.key === 'revision_estado' ? getRequirementRevisionState(record) : record[column.key]
          const normalized = raw === null || raw === undefined ? '' : String(raw)
          return `"${normalized.replace(/"/g, '""')}"`
        })
        .join(','),
    ),
  ]

  downloadTextFile(`${quotationLinkedRecord.cotizacion || quotationLinkedRecord.cotizacion_codigo || 'requerimientos-vinculados'}.csv`, csvLines.join('\n'), 'text/csv;charset=utf-8')
}

async function shareQuotationLinkedLink() {
  if (!quotationLinkedRecord || typeof window === 'undefined') {
    return
  }

  const quotationKey = encodeURIComponent(String(quotationLinkedRecord.cotizacion || quotationLinkedRecord.cotizacion_codigo || ''))
  const costCenter = encodeURIComponent(String(quotationLinkedRecord.oc || quotationLinkedRecord.centro_costos || ''))
  const shareUrl = `${window.location.origin}${window.location.pathname}${window.location.search}#linked=${quotationKey}::${costCenter}`
  try {
    await navigator.clipboard.writeText(shareUrl)
    requirementsExplorerContent.dataset.resourceNotice = 'Enlace de cotización vinculada copiado al portapapeles.'
  } catch {
    requirementsExplorerContent.dataset.resourceNotice = `Comparte este enlace: ${shareUrl}`
  }
  renderQuotationLinkedExplorer()
}

function buildQuotationLinkedTable() {
  const permissions = getCurrentQuotationPermissions()
  const visibleColumns = getVisibleQuotationLinkedColumns()
  const headers = visibleColumns
    .map(
      (column) => `
        <th>
          <button class="sort-button" type="button" data-linked-sort-key="${column.key}">
            <span>${column.label}</span>
            <span class="sort-button__icon">${getSortIndicator(quotationLinkedSort, column.key)}</span>
          </button>
        </th>
      `,
    )
    .join('')

  const filterCells = visibleColumns
    .map((column) => {
      const currentValue = quotationLinkedFilters[column.key] ?? ''

      if (column.key === 'revision_estado') {
        const options = ['OK', 'Revisar']
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `<th class="log-table__filter-cell">${wrapFilterControl(`
          <select class="column-filter" data-linked-filter-key="${column.key}">
            <option value="">Todos</option>
            ${options}
          </select>
        `)}</th>`
      }

      if (column.tag) {
        const options = getQuotationLinkedUniqueValues(column.key)
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `<th class="log-table__filter-cell">${wrapFilterControl(`
          <select class="column-filter" data-linked-filter-key="${column.key}">
            <option value="">Todos</option>
            ${options}
          </select>
        `)}</th>`
      }

      if (column.type === 'date') {
        return `<th class="log-table__filter-cell">${wrapFilterControl(`<input class="column-filter" data-linked-filter-key="${column.key}" type="date" value="${currentValue}" />`)}</th>`
      }

      if (column.type === 'number') {
        return `<th class="log-table__filter-cell">${wrapFilterControl(`<input class="column-filter" data-linked-filter-key="${column.key}" type="number" step="any" value="${currentValue}" placeholder="Filtrar" />`)}</th>`
      }

      return `<th class="log-table__filter-cell">${wrapFilterControl(`<input class="column-filter" data-linked-filter-key="${column.key}" type="text" value="${currentValue}" placeholder="Buscar" />`)}</th>`
    })
    .join('')

  const filtered = getSortedQuotationLinkedRequirements(getFilteredQuotationLinkedRequirements())
  const rows = filtered.length
    ? filtered
        .map((record) => {
          const rowKey = getRequirementRecordKey(record)
          return `
            <tr>
              ${visibleColumns
                .map((column) => {
                  if (column.key === 'revision_estado') {
                    return buildRequirementReviewCell(record)
                  }

                  const value = record[column.key]
                  if (column.key === 'estado') {
                    return `<td><em class="tag tag--${getTagTone(value)}">${escapeHtml(value || '-')}</em></td>`
                  }

                  if (value === null || value === undefined || value === '') {
                    return `<td><span class="cell-text cell-empty">-</span></td>`
                  }

                  return `<td>${formatCellValue(value, column)}</td>`
                })
                .join('')}
              <td class="actions-cell">
                ${
                  permissions.show_linked_detail_button
                    ? `<button class="table-action" type="button" data-action="open-requirement-detail" data-requirement-key="${rowKey}">
                        Detalle
                      </button>`
                    : '<span class="cell-text cell-empty">-</span>'
                }
              </td>
            </tr>
          `
        })
        .join('')
    : `<tr><td class="empty-table" colspan="${Math.max(visibleColumns.length + 1, 1)}">No hay requerimientos vinculados para los filtros actuales.</td></tr>`

  return `
    ${buildQuotationLinkedColumnManager()}
    <div class="requirements-explorer__table-wrap">
      <div class="log-table-shell">
        <div class="log-table-scroll log-table-scroll--explorer">
          <table class="log-table log-table--requirements">
            <thead>
              <tr>${headers}<th>ACCIONES</th></tr>
              <tr class="log-table__filters-row">${filterCells}<th class="log-table__filter-cell">
                ${wrapFilterControl(`<button class="table-action table-action--clear" type="button" data-action="clear-linked-filters">Limpiar</button>`)}
              </th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  `
}

function renderQuotationLinkedExplorer() {
  if (!quotationLinkedRecord) {
    return
  }

  const permissions = getCurrentQuotationPermissions()
  const quotationCode = quotationLinkedRecord.cotizacion ?? quotationLinkedRecord.cotizacion_codigo ?? 'Sin cotización'
  const costCenter = quotationLinkedRecord.oc ?? quotationLinkedRecord.centro_costos ?? 'Sin centro de costo'
  const filtered = getFilteredQuotationLinkedRequirements()
  const pendingCount = quotationLinkedRequirements.filter((record) => String(record.estado || '').toLowerCase().includes('pendiente')).length
  const alertCount = quotationLinkedRequirements.filter((record) => getRequirementAlerts(record).length > 0).length
  const quotationSummaryMarkup = `
    <section class="rq-summary rq-summary--quotation">
      <div class="rq-summary__hero">
        <div>
          <p class="rq-summary__eyebrow">Cotización seleccionada</p>
          <h4 class="rq-summary__title">${escapeHtml(quotationCode)}</h4>
        </div>
        <div class="rq-summary__chips">
          <span class="rq-chip rq-chip--accent">${escapeHtml(`${quotationLinkedRequirements.length} requerimiento(s)`)}</span>
          <span class="rq-chip">${escapeHtml(costCenter || 'Sin centro de costo')}</span>
          <span class="rq-chip">${escapeHtml(quotationLinkedRecord.status_cot || quotationLinkedRecord.estado || 'Sin estado')}</span>
          <span class="rq-chip ${alertCount ? 'rq-chip--warning' : 'rq-chip--ok'}">${escapeHtml(alertCount ? `${alertCount} con alertas` : 'Sin alertas')}</span>
          <span class="rq-chip">${escapeHtml(`${pendingCount} pendientes`)}</span>
          <button class="rq-close-inline" type="button" data-action="close-explorer" aria-label="Cerrar vista relacionada">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="rq-summary__grid">
        <article class="rq-summary__card"><span>Centro de costo</span><strong>${escapeHtml(costCenter || '-')}</strong></article>
        <article class="rq-summary__card"><span>Cliente</span><strong>${escapeHtml(quotationLinkedRecord.cliente || '-')}</strong></article>
        <article class="rq-summary__card"><span>Unidad</span><strong>${escapeHtml(quotationLinkedRecord.unidad_minera || quotationLinkedRecord.unidad || '-')}</strong></article>
        <article class="rq-summary__card"><span>Descripción</span><strong>${escapeHtml(quotationLinkedRecord.descripcion || '-')}</strong></article>
        <article class="rq-summary__card"><span>Tipo de servicio</span><strong>${escapeHtml(quotationLinkedRecord.tipo_servicio || '-')}</strong></article>
        <article class="rq-summary__card"><span>Solicitante</span><strong>${escapeHtml(quotationLinkedRecord.solicitado_por || quotationLinkedRecord.solicitado || '-')}</strong></article>
      </div>
    </section>
  `

  const resourceNotice = requirementsExplorerContent.dataset.resourceNotice
    ? `<div class="sync-status" data-tone="info">${escapeHtml(requirementsExplorerContent.dataset.resourceNotice)}</div>`
    : ''

  requirementsExplorerContent.innerHTML = `
    <div class="requirements-explorer requirements-explorer--quotation-linked">
      <div class="requirements-explorer__meta requirements-explorer__meta--compact">${quotationSummaryMarkup}</div>
      <div class="requirements-explorer__toolbar">
        <div class="requirements-explorer__toolbar-group">
          ${permissions.show_linked_new_requirement ? '<button class="ghost-button ghost-button--accent" type="button" data-action="new-linked-requirement">Nuevo requerimiento</button>' : ''}
          ${permissions.show_linked_columns_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="toggle-linked-columns">Columnas</button>' : ''}
          ${permissions.show_linked_export_excel_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="export-linked-excel">Exportar Excel</button>' : ''}
          ${permissions.show_linked_share_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="share-linked">Compartir</button>' : ''}
        </div>
        <p class="requirements-explorer__toolbar-note">Mostrando ${filtered.length} de ${quotationLinkedRequirements.length} requerimientos vinculados a esta cotización.</p>
      </div>
      ${buildExplorerTabs()}
      ${resourceNotice}
      ${buildQuotationExpedientePanel()}
    </div>
  `
}

function getVisibleRequirementModalColumns() {
  const visibleSet = new Set(requirementModalVisibleColumnKeys)
  return requirementModalColumns.filter((column) => visibleSet.has(column.key))
}

function buildRequirementModalColumnManager() {
  const options = requirementModalColumns
    .map(
      (column) => `
        <label class="column-toggle">
          <input type="checkbox" data-modal-column-key="${column.key}" ${requirementModalVisibleColumnKeys.includes(column.key) ? 'checked' : ''} />
          <span>${column.label}</span>
        </label>
      `,
    )
    .join('')

  return `
    <div class="column-manager ${requirementModalColumnManagerOpen ? '' : 'is-hidden'}">
      <div class="column-manager__header">
        <strong>Columnas del detalle</strong>
        <button class="column-manager__reset" type="button" data-action="reset-modal-columns">Restablecer</button>
      </div>
      <div class="column-manager__list">${options}</div>
    </div>
  `
}

function getFilteredRequirementModalRecords() {
  return requirementModalItems.filter((record) =>
    Object.entries(requirementModalFilters).every(([key, rawFilterValue]) => {
      const filterValue = `${rawFilterValue ?? ''}`.trim()
      if (!filterValue) {
        return true
      }

      const column = requirementModalColumns.find((item) => item.key === key)
      const recordValue = record[key]
      if (!column) {
        return true
      }

      if (column.type === 'date') {
        return String(recordValue || '').slice(0, 10) === filterValue
      }

      if (column.type === 'number') {
        return String(recordValue ?? '') === filterValue
      }

      return String(recordValue ?? '').toLowerCase().includes(filterValue.toLowerCase())
    }),
  )
}

function getSortedRequirementModalRecords(recordsToSort) {
  if (!requirementModalSort.key) {
    return [...recordsToSort]
  }

  const column = requirementModalColumns.find((item) => item.key === requirementModalSort.key)
  if (!column) {
    return [...recordsToSort]
  }

  return [...recordsToSort].sort((leftRecord, rightRecord) =>
    compareValues(leftRecord[requirementModalSort.key], rightRecord[requirementModalSort.key], column.type, requirementModalSort.direction),
  )
}

function buildRequirementModalTable() {
  const visibleColumns = getVisibleRequirementModalColumns()
  const headers = visibleColumns
    .map(
      (column) => `
        <th>
          <button class="sort-button" type="button" data-modal-detail-sort-key="${column.key}">
            <span>${column.label}</span>
            <span class="sort-button__icon">${getSortIndicator(requirementModalSort, column.key)}</span>
          </button>
        </th>
      `,
    )
    .join('')

  const filterCells = visibleColumns
    .map((column) => {
      const currentValue = requirementModalFilters[column.key] ?? ''

      if (column.tag) {
        const options = getRequirementModalUniqueValues(column.key)
          .map((value) => `<option value="${value}" ${currentValue === value ? 'selected' : ''}>${value}</option>`)
          .join('')

        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`
              <select class="column-filter" data-modal-detail-filter-key="${column.key}">
                <option value="">Todos</option>
                ${options}
              </select>
            `)}
          </th>
        `
      }

      if (column.type === 'date') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-modal-detail-filter-key="${column.key}" type="date" value="${currentValue}" />`)}
          </th>
        `
      }

      if (column.type === 'number') {
        return `
          <th class="log-table__filter-cell">
            ${wrapFilterControl(`<input class="column-filter" data-modal-detail-filter-key="${column.key}" type="number" step="any" value="${currentValue}" placeholder="Filtrar" />`)}
          </th>
        `
      }

      return `
        <th class="log-table__filter-cell">
          ${wrapFilterControl(`<input class="column-filter" data-modal-detail-filter-key="${column.key}" type="text" value="${currentValue}" placeholder="Buscar" />`)}
        </th>
      `
    })
    .join('')

  const filtered = getSortedRequirementModalRecords(getFilteredRequirementModalRecords())
  const rows = filtered.length
    ? filtered
        .map(
          (item) => `
            <tr>
              ${visibleColumns.map((column) => `<td>${formatCellValue(item[column.key], column)}</td>`).join('')}
            </tr>
          `,
        )
        .join('')
    : `<tr><td class="empty-table" colspan="${Math.max(visibleColumns.length, 1)}">No se encontraron items para los filtros actuales.</td></tr>`

  return `
    <div class="log-table-shell">
      <div class="log-table-scroll log-table-scroll--explorer">
        <table class="log-table log-table--modal-detail">
          <thead>
            <tr>${headers}</tr>
            <tr class="log-table__filters-row">${filterCells}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `
}

function openRequirementsExplorer(html, titleText, eyebrowText = 'Trazabilidad') {
  if (!requirementsExplorerModal || !requirementsExplorerContent) {
    return
  }

  requirementsExplorerTitle.textContent = titleText
  requirementsExplorerEyebrow.textContent = eyebrowText
  requirementsExplorerContent.innerHTML = html
  requirementsExplorerModal.classList.toggle('is-rq-detail', eyebrowText === '')
  requirementsExplorerModal.classList.remove('is-hidden')
  document.body.classList.add('menu-open')
}

function renderRequirementModalExplorer() {
  const permissions = getCurrentModulePermissions('details')
  const resourceNotice = requirementsExplorerContent.dataset.resourceNotice
    ? `<div class="sync-status" data-tone="info">${escapeHtml(requirementsExplorerContent.dataset.resourceNotice)}</div>`
    : ''

  requirementsExplorerContent.innerHTML = `
    <div class="requirements-explorer requirements-explorer--detail">
      <div class="requirements-explorer__meta requirements-explorer__meta--compact">${requirementsExplorerContent.dataset.summaryMarkup || ''}</div>
      <div class="requirements-explorer__toolbar">
        <div class="requirements-explorer__toolbar-group">
          ${permissions.show_new_requirement_button ? '<button class="ghost-button ghost-button--accent" type="button" data-action="new-modal-requirement">Nuevo requerimiento</button>' : ''}
          ${permissions.show_add_resource_button ? `<button class="ghost-button ghost-button--accent" type="button" data-action="add-existing-resource">${requirementModalResourcePickerOpen ? 'Ocultar catálogo' : 'Agregar recurso'}</button>` : ''}
          ${permissions.show_columns_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="toggle-modal-columns">Columnas</button>' : ''}
          ${permissions.show_download_html_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="download-rq-html">Descargar HTML</button>' : ''}
          ${permissions.show_export_excel_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="export-rq-excel">Exportar Excel</button>' : ''}
          ${permissions.show_export_pdf_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="export-rq-pdf">Exportar PDF</button>' : ''}
          ${permissions.show_print_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="print-rq">Imprimir</button>' : ''}
          ${permissions.show_share_button ? '<button class="ghost-button ghost-button--soft" type="button" data-action="share-rq">Compartir</button>' : ''}
        </div>
        <p class="requirements-explorer__toolbar-note">Vista bloqueada al RQ seleccionado. Los filtros y acciones solo afectan este requerimiento.</p>
      </div>
      ${buildExplorerTabs()}
      ${resourceNotice}
      ${buildRequirementExpedientePanel()}
    </div>
  `
}

function beginColumnResize(tableName, columnKey, startX) {
  const columnsList = tableName === 'requirements' ? requirementsColumns : getVisibleColumns()
  const widthMap = tableName === 'requirements' ? requirementsColumnWidths : columnWidths
  const column = columnsList.find((item) => item.key === columnKey)
  if (!column) {
    return
  }

  activeResize = {
    tableName,
    columnKey,
    startX,
    startWidth: getColumnWidth(column, widthMap),
    minWidth: inferColumnMinWidth(column),
  }

  document.body.classList.add('is-resizing-columns')
}

function handleColumnResizeMove(event) {
  if (!activeResize) {
    return
  }

  const delta = event.clientX - activeResize.startX
  const nextWidth = Math.max(activeResize.minWidth, activeResize.startWidth + delta)

  if (activeResize.tableName === 'requirements') {
    requirementsColumnWidths = { ...requirementsColumnWidths, [activeResize.columnKey]: nextWidth }
    persistStoredMap(requirementsWidthStorageKey, requirementsColumnWidths)
    renderColgroup(requirementsTable, requirementsTableColgroup, requirementsColumns, requirementsColumnWidths)
  } else if (activeResize.tableName === 'requirements-detail') {
    requirementDetailsColumnWidths = { ...requirementDetailsColumnWidths, [activeResize.columnKey]: nextWidth }
    persistStoredMap(requirementDetailsWidthStorageKey, requirementDetailsColumnWidths)
    renderColgroup(requirementsDetailTable, requirementsDetailColgroup, requirementDetailsColumns, requirementDetailsColumnWidths, 0)
  } else {
    columnWidths = { ...columnWidths, [activeResize.columnKey]: nextWidth }
    persistStoredMap(quotationWidthStorageKey, columnWidths)
    renderColgroup(quotationsTable, logTableColgroup, getVisibleColumns(), columnWidths)
  }
}

function endColumnResize() {
  if (!activeResize) {
    return
  }

  activeResize = null
  document.body.classList.remove('is-resizing-columns')
}

function closeRequirementsExplorer() {
  if (!requirementsExplorerModal) {
    return
  }

  requirementsExplorerModal.classList.add('is-hidden')
  requirementsExplorerModal.classList.remove('is-rq-detail')
  if (requirementsExplorerContent) {
    requirementsExplorerContent.dataset.summaryMarkup = ''
    requirementsExplorerContent.dataset.resourceNotice = ''
  }
  activeRequirementRecord = null
  quotationLinkedRecord = null
  activeExplorerMode = ''
  quotationLinkedRequirements = []
  quotationLinkedColumnManagerOpen = false
  requirementModalResourcePickerOpen = false
  requirementModalResourceSearch = ''
  resetExplorerExpedienteState()
  if (typeof window !== 'undefined' && /^#rq=/.test(window.location.hash || '')) {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }
  document.body.classList.remove('menu-open')
}

function setRequirementDeepLink(requirementRecord) {
  if (typeof window === 'undefined' || !requirementRecord) {
    return
  }

  const requirementKey = encodeURIComponent(getRequirementRecordKey(requirementRecord))
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#rq=${requirementKey}`)
}

function readRequirementDeepLink() {
  if (typeof window === 'undefined') {
    return ''
  }

  const match = (window.location.hash || '').match(/^#rq=(.+)$/)
  return match ? decodeURIComponent(match[1]) : ''
}

async function tryOpenRequirementFromDeepLink() {
  const requirementKey = pendingDeepLinkRequirementKey || readRequirementDeepLink()
  if (!requirementKey || !requirementsRecords.length || !requirementDetailsRecords.length) {
    return
  }

  const requirementRecord = findRequirementByKey(requirementKey)
  if (!requirementRecord) {
    return
  }

  pendingDeepLinkRequirementKey = ''
  setActiveView('requirements-log')
  await openRequirementDetail(requirementRecord)
}

function downloadTextFile(filename, content, mimeType = 'text/plain;charset=utf-8') {
  if (typeof window === 'undefined') {
    return
  }

  const blob = new Blob([content], { type: mimeType })
  const url = window.URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  window.URL.revokeObjectURL(url)
}

function getRequirementModalExportColumns() {
  return getVisibleRequirementModalColumns()
}

function getRequirementModalExportRows() {
  return getSortedRequirementModalRecords(getFilteredRequirementModalRecords())
}

function exportRequirementModalCsv() {
  if (!activeRequirementRecord) {
    return
  }

  const exportColumns = getRequirementModalExportColumns()
  const exportRows = getRequirementModalExportRows()
  const csvLines = [
    exportColumns.map((column) => `"${String(column.label).replace(/"/g, '""')}"`).join(','),
    ...exportRows.map((record) =>
      exportColumns
        .map((column) => {
          const raw = record[column.key]
          const normalized =
            raw === null || raw === undefined
              ? ''
              : Array.isArray(raw)
                ? raw.join(' | ')
                : typeof raw === 'object'
                  ? Object.values(raw).join(' | ')
                  : String(raw)
          return `"${normalized.replace(/"/g, '""')}"`
        })
        .join(','),
    ),
  ]

  downloadTextFile(`${activeRequirementRecord.rq_codigo || 'detalle-requerimiento'}.csv`, csvLines.join('\n'), 'text/csv;charset=utf-8')
}

function buildRequirementSnapshotHtml() {
  if (!activeRequirementRecord) {
    return ''
  }

  const exportColumns = getRequirementModalExportColumns()
  const exportRows = getRequirementModalExportRows()
  const summaryCards = [
    ['Cotización', activeRequirementRecord.cotizacion_codigo],
    ['Centro de costo', activeRequirementRecord.centro_costos],
    ['Cliente', activeRequirementRecord.cliente],
    ['Unidad', activeRequirementRecord.unidad],
    ['Tipo de servicio', activeRequirementRecord.tipo_servicio],
    ['Fecha RQ', formatDate(activeRequirementRecord.fecha_rq)],
    ['Estado', activeRequirementRecord.estado],
    ['Items', activeRequirementRecord.cantidad_items],
  ]
    .map(
      ([label, value]) => `<div class="card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || '-')}</strong></div>`,
    )
    .join('')

  const headers = exportColumns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join('')
  const rows = exportRows
    .map(
      (record) => `<tr>${exportColumns
        .map((column) => {
          const raw = record[column.key]
          const normalized =
            raw === null || raw === undefined
              ? '-'
              : Array.isArray(raw)
                ? raw.join(' | ')
                : typeof raw === 'object'
                  ? Object.values(raw).join(' | ')
                  : column.type === 'date'
                    ? formatDate(raw)
                    : String(raw)
          return `<td>${escapeHtml(normalized)}</td>`
        })
        .join('')}</tr>`,
    )
    .join('')

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(activeRequirementRecord.rq_codigo || 'Detalle de requerimiento')}</title>
<style>
body{font-family:Inter,Arial,sans-serif;background:#f7f8ff;color:#24304a;margin:24px}
.hero{display:grid;gap:16px;margin-bottom:20px}
.hero h1{margin:0;font-size:28px}
.chips{display:flex;gap:8px;flex-wrap:wrap}
.chip{padding:6px 12px;border-radius:999px;background:#eef2ff;color:#3559a7;font-weight:700;font-size:12px}
.grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-bottom:20px}
.card{padding:12px 14px;border-radius:14px;background:#fff;border:1px solid #dde4fb}
.card span{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#8491b0;margin-bottom:6px}
.card strong{font-size:14px}
table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #dde4fb}
th,td{padding:8px 10px;border-bottom:1px solid #eef2ff;text-align:left;font-size:12px;vertical-align:top}
th{background:#f2f5ff;color:#7c89ab;font-weight:800}
</style>
</head>
<body>
  <section class="hero">
    <div class="chips">
      <span class="chip">${escapeHtml(activeRequirementRecord.estado || 'Sin estado')}</span>
      <span class="chip">${escapeHtml(`${activeRequirementRecord.cantidad_items || exportRows.length} items`)}</span>
      <span class="chip">${escapeHtml(activeRequirementRecord.rq_codigo || 'Sin RQ')}</span>
    </div>
    <h1>${escapeHtml(activeRequirementRecord.rq_codigo || 'Detalle de requerimiento')}</h1>
  </section>
  <section class="grid">${summaryCards}</section>
  <table>
    <thead><tr>${headers}</tr></thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`
}

function downloadRequirementSnapshotHtml() {
  if (!activeRequirementRecord) {
    return
  }
  downloadTextFile(`${activeRequirementRecord.rq_codigo || 'detalle-requerimiento'}.html`, buildRequirementSnapshotHtml(), 'text/html;charset=utf-8')
}

function printRequirementSnapshot() {
  const snapshot = buildRequirementSnapshotHtml()
  if (!snapshot || typeof window === 'undefined') {
    return
  }
  const printWindow = window.open('', '_blank', 'width=1280,height=900')
  if (!printWindow) {
    return
  }
  printWindow.document.open()
  printWindow.document.write(snapshot)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}

async function shareRequirementLink() {
  if (!activeRequirementRecord || typeof window === 'undefined') {
    return
  }

  setRequirementDeepLink(activeRequirementRecord)
  const shareUrl = window.location.href
  try {
    await navigator.clipboard.writeText(shareUrl)
    requirementsExplorerContent.dataset.resourceNotice = 'Enlace del requerimiento copiado al portapapeles.'
  } catch {
    requirementsExplorerContent.dataset.resourceNotice = `Comparte este enlace: ${shareUrl}`
  }
  renderRequirementModalExplorer()
}

function openRequirementListModal(quotationRecord) {
  const linkedRequirements = getQuotationRequirementLinks(quotationRecord)

  if (!linkedRequirements.length) {
    openRequirementsExplorer(
      '<div class="requirements-empty-state">No se encontraron requerimientos vinculados para esta cotización.</div>',
      'Requerimientos vinculados',
      'Sin coincidencias',
    )
    return
  }

  quotationLinkedRecord = quotationRecord
  activeExplorerMode = 'quotation-linked'
  quotationLinkedRequirements = [...linkedRequirements]
  quotationLinkedFilters = {}
  quotationLinkedSort = { key: 'fecha_rq', direction: 'desc' }
  quotationLinkedVisibleColumnKeys = loadColumnKeys(quotationLinkedVisibilityStorageKey, requirementsColumns)
  quotationLinkedColumnManagerOpen = false
  resetExplorerExpedienteState()
  requirementsExplorerContent.dataset.resourceNotice = ''
  openRequirementsExplorer('', 'Requerimientos vinculados', 'Vista relacionada')
  renderQuotationLinkedExplorer()
  void refreshExplorerExpedienteData(true)
}

async function openRequirementDetail(requirementRecord) {
  if (!requirementRecord) {
    return
  }

  selectedRequirementKey = getRequirementRecordKey(requirementRecord)
  activeExplorerMode = 'rq-detail'
  renderRequirementsTable()

  const loadedItems = requirementDetailsRecords.length ? requirementDetailsRecords : await loadRequirementDetails()

  const linkedItems = Array.isArray(loadedItems)
    ? loadedItems.filter((item) => String(item.rq_codigo ?? '') === String(requirementRecord.rq_codigo ?? ''))
    : requirementDetailsRecords.filter((item) => String(item.rq_codigo ?? '') === String(requirementRecord.rq_codigo ?? ''))
  activeRequirementRecord = requirementRecord
  requirementModalItems = linkedItems
  requirementModalColumns = getRequirementDetailsColumns(linkedItems, true)
  requirementModalFilters = {}
  requirementModalSort = { key: 'item', direction: 'asc' }
  requirementModalVisibleColumnKeys = loadColumnKeys(requirementModalVisibilityStorageKey, requirementModalColumns)
  requirementModalColumnManagerOpen = false
  requirementModalResourcePickerOpen = false
  requirementModalResourceSearch = ''
  resetExplorerExpedienteState()
  const alerts = getRequirementAlerts(requirementRecord)
  const statusTone = getTagTone(requirementRecord.estado)
  const attachmentCount = countRequirementAttachments(linkedItems)
  const localItemsCount = linkedItems.filter((item) => item.fuente === 'LOCAL').length
  const summaryMarkup = `
    <section class="rq-summary">
      <div class="rq-summary__hero">
        <div>
          <p class="rq-summary__eyebrow">Requerimiento seleccionado</p>
          <h4 class="rq-summary__title">${escapeHtml(requirementRecord.rq_codigo || 'Sin RQ')}</h4>
        </div>
        <div class="rq-summary__chips">
          <span class="tag tag--${statusTone}">${escapeHtml(requirementRecord.estado || 'Sin estado')}</span>
          <span class="rq-chip rq-chip--accent">${escapeHtml(`${requirementRecord.cantidad_items ?? linkedItems.length ?? 0} items`)}</span>
          <span class="rq-chip ${alerts.length ? 'rq-chip--warning' : 'rq-chip--ok'}">${escapeHtml(alerts.length ? `${alerts.length} alerta(s)` : 'Sin alertas')}</span>
          <span class="rq-chip">${escapeHtml(`${attachmentCount} adjuntos`)}</span>
          <span class="rq-chip">${escapeHtml(`${localItemsCount} locales`)}</span>
          <button class="rq-close-inline" type="button" data-action="close-explorer" aria-label="Cerrar detalle">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="rq-summary__grid">
        <article class="rq-summary__card">
          <span>Cotización</span>
          <strong>${escapeHtml(requirementRecord.cotizacion_codigo || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Centro de costo</span>
          <strong>${escapeHtml(requirementRecord.centro_costos || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Cliente</span>
          <strong>${escapeHtml(requirementRecord.cliente || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Unidad</span>
          <strong>${escapeHtml(requirementRecord.unidad || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Tipo de servicio</span>
          <strong>${escapeHtml(requirementRecord.tipo_servicio || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Fecha RQ</span>
          <strong>${escapeHtml(formatDate(requirementRecord.fecha_rq) || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Descripción cotización</span>
          <strong>${escapeHtml(requirementRecord.descripcion_cotizacion || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Solicitante</span>
          <strong>${escapeHtml(requirementRecord.solicitante || '-')}</strong>
        </article>
        <article class="rq-summary__card">
          <span>Área</span>
          <strong>${escapeHtml(requirementRecord.area || '-')}</strong>
        </article>
      </div>
    </section>
  `
  requirementsExplorerContent.dataset.summaryMarkup = summaryMarkup
  setRequirementDeepLink(requirementRecord)
  requirementsExplorerContent.dataset.resourceNotice = ''
  openRequirementsExplorer('', requirementRecord.rq_codigo || 'Detalle de requerimiento', '')
  renderRequirementModalExplorer()
  void refreshExplorerExpedienteData(true)
}

async function loadRecords() {
  const cacheKey = buildCacheKey('quotations', config?.table)
  const permissions = getCurrentQuotationPermissions()

  if (currentUserProfile && !permissions.access) {
    records = []
    initializeSelectCatalogs()
    buildFormFields()
    renderTable()
    updateStatus('No tienes permisos para acceder a Log de Cotizaciones.', 'warning')
    return
  }

  try {
    const cached = await readCachedDataset(cacheKey)
    if (Array.isArray(cached?.records) && cached.records.length) {
      records = [...cached.records]
      if (!columns.length && records[0]) {
        applyDerivedColumns(deriveColumnsFromRecord(records[0]))
      }
      initializeSelectCatalogs()
      buildFormFields()
      renderTable()
      updateStatus(`Vista inmediata desde cache local. ${records.length} registro(s) cargados. Ult. sync: ${formatCacheTimestamp(cached.updatedAt) || 'sin fecha'}.`, 'info')
    }
  } catch {}

  if (!supabaseClient) {
    if (!records.length) {
      records = [...fallbackRecords]
      if (!columns.length && records[0]) {
        applyDerivedColumns(deriveColumnsFromRecord(records[0]))
      }
      initializeSelectCatalogs()
      buildFormFields()
      renderTable()
    }
    updateStatus('Vista local activa. Completa supabase-config.js para traer datos reales.', 'warning')
    return
  }

  updateStatus(records.length ? 'Sincronizando cotizaciones en segundo plano...' : 'Consultando registros en Supabase...', 'info')

  let freshRecords = []
  try {
    freshRecords = await fetchAllRows(config.table)
  } catch (error) {
    if (!records.length) {
      records = []
      renderTable()
    }
    updateStatus(`No se pudo leer Supabase: ${error.message}`, 'danger')
    return
  }

  if (config.orderBy?.column) {
    const orderType = columns.find((column) => column.key === config.orderBy.column)?.type || 'text'
    freshRecords = [...freshRecords].sort((leftRecord, rightRecord) =>
      compareValues(leftRecord[config.orderBy.column], rightRecord[config.orderBy.column], orderType, config.orderBy.ascending ? 'asc' : 'desc'),
    )
  }

  records = Array.isArray(freshRecords) ? freshRecords : []
  if (!columns.length && records[0]) {
    applyDerivedColumns(deriveColumnsFromRecord(records[0]))
  }
  initializeSelectCatalogs()
  buildFormFields()
  renderTable()
  try {
    await writeCachedDataset(cacheKey, records)
  } catch {}
  updateStatus(`Sincronizado con Supabase. ${records.length} registro(s) cargados.`, 'success')
}

async function saveRecord(payload) {
  const permissions = getCurrentQuotationPermissions()
  const isCreateMode = !currentEditingId

  if (isCreateMode && !userCanCreateQuotations()) {
    updateStatus('No tienes permiso para crear cotizaciones.', 'danger')
    return
  }

  if (!isCreateMode && !permissions.save_edits) {
    updateStatus('No tienes permiso para guardar cambios en cotizaciones.', 'danger')
    return
  }

  if (!validateQuotationCode(payload.cotizacion || '')) {
    updateStatus('La cotización ya existe. Usa otro código antes de guardar.', 'danger')
    return
  }

  if (!supabaseClient) {
    if (currentEditingId) {
      records = records.map((record) => (record[primaryKey] === currentEditingId ? { ...record, ...payload } : record))
    } else {
      records.unshift({
        [primaryKey]: Date.now(),
        ...payload,
      })
    }

    renderTable()
    closeModal()
    updateStatus('Registro actualizado en modo local. Falta conectar Supabase para persistirlo.', 'warning')
    return
  }

  updateStatus('Guardando cambios en Supabase...', 'info')

  if (currentEditingId) {
    const { error } = await supabaseClient.from(config.table).update(payload).eq(primaryKey, currentEditingId)
    if (error) {
      updateStatus(`No se pudo actualizar: ${error.message}`, 'danger')
      return
    }
  } else {
    const { error } = await supabaseClient.from(config.table).insert(payload)
    if (error) {
      updateStatus(`No se pudo crear el registro: ${error.message}`, 'danger')
      return
    }
  }

  closeModal()
  await loadRecords()
}

async function loadRequirementsRecords() {
  const permissions = getCurrentModulePermissions('requirements')
  if (!permissions.access) {
    requirementsRecords = []
    buildRequirementsHead()
    renderRequirementsTable()
    updateRequirementsStatus('No tienes acceso a Log de Requerimientos.', 'warning')
    return
  }

  const source = config?.requirementsSource
  const cacheKey = buildCacheKey('requirements-log', source)

  try {
    const cached = await readCachedDataset(cacheKey)
    if (Array.isArray(cached?.records) && cached.records.length) {
      requirementsRecords = [...cached.records]
      buildRequirementsHead()
      renderRequirementsTable()
      renderTable()
      const cachedAlerts = requirementsRecords.filter((record) => getRequirementAlerts(record).length > 0).length
      const alertSummary = cachedAlerts > 0 ? ` ${cachedAlerts} registro(s) requieren revisión.` : ''
      updateRequirementsStatus(
        `Vista inmediata desde cache local. ${requirementsRecords.length} registro(s) cargados.${alertSummary} Ult. sync: ${formatCacheTimestamp(cached.updatedAt) || 'sin fecha'}.`,
        cachedAlerts > 0 ? 'warning' : 'info',
      )
    }
  } catch {}

  if (!supabaseClient || !source) {
    if (!requirementsRecords.length) {
      requirementsRecords = [...requirementsFallbackRecords]
      buildRequirementsHead()
      renderRequirementsTable()
      renderTable()
    }
    updateRequirementsStatus('Vista preliminar activa. Ejecuta el SQL y carga la tabla/view de requerimientos en Supabase.', 'warning')
    await tryOpenRequirementFromDeepLink()
    return
  }

  updateRequirementsStatus(requirementsRecords.length ? 'Sincronizando log de requerimientos en segundo plano...' : 'Consultando log de requerimientos...', 'info')

  let freshRequirements = []
  try {
    freshRequirements = await fetchAllRows(source)
  } catch {
    if (!requirementsRecords.length) {
      requirementsRecords = [...requirementsFallbackRecords]
      buildRequirementsHead()
      renderRequirementsTable()
      renderTable()
    }
    updateRequirementsStatus(`Aún no existe ${source} en Supabase. Se muestra una vista preliminar.`, 'warning')
    await tryOpenRequirementFromDeepLink()
    return
  }

  freshRequirements = [...freshRequirements].sort((leftRecord, rightRecord) =>
    compareValues(leftRecord.fecha_rq, rightRecord.fecha_rq, 'date', 'desc'),
  )

  requirementsRecords = Array.isArray(freshRequirements) ? freshRequirements : []
  buildRequirementsHead()
  renderRequirementsTable()
  renderTable()
  try {
    await writeCachedDataset(cacheKey, requirementsRecords)
  } catch {}

  const recordsWithAlerts = requirementsRecords.filter((record) => getRequirementAlerts(record).length > 0).length
  const alertSummary =
    recordsWithAlerts > 0 ? ` ${recordsWithAlerts} registro(s) requieren revisión.` : ''

  updateRequirementsStatus(
    `Log de requerimientos sincronizado. ${requirementsRecords.length} registro(s) cargados.${alertSummary}`,
    recordsWithAlerts > 0 ? 'warning' : 'success',
  )
  await tryOpenRequirementFromDeepLink()
}

async function saveResourceRecord(payload) {
  const permissions = getCurrentModulePermissions('resources')
  if (!permissions.access || !permissions.show_form || !permissions.save_edits) {
    updateResourcesStatus('No tienes permisos para guardar recursos.', 'warning')
    return
  }

  if (!payload || !payload.descripcion) {
    updateResourcesStatus('Completa al menos la descripción del recurso.', 'warning')
    return
  }

  if (editingResourceId) {
    resourcesRecords = resourcesRecords.map((record) => (record.id === editingResourceId ? payload : record))
  } else {
    resourcesRecords = [payload, ...resourcesRecords]
  }

  await persistResourcesCatalog()
  renderResourcesTable()
  fillResourcesForm()
  updateResourcesStatus(
    editingResourceId ? 'Recurso actualizado en el catálogo local.' : 'Recurso agregado al catálogo local.',
    'success',
  )
}

async function deleteResourceRecord(resourceId) {
  const permissions = getCurrentModulePermissions('resources')
  if (!permissions.access || !permissions.show_delete_button) {
    updateResourcesStatus('No tienes permisos para eliminar recursos.', 'warning')
    return
  }

  resourcesRecords = resourcesRecords.filter((record) => record.id !== resourceId)
  await persistResourcesCatalog()
  renderResourcesTable()
  if (editingResourceId === resourceId) {
    fillResourcesForm()
  }
  updateResourcesStatus('Recurso eliminado del catálogo local.', 'warning')
}

async function attachResourceToActiveRequirement(resourceId) {
  if (!activeRequirementRecord) {
    requirementsExplorerContent.dataset.resourceNotice = 'No hay un requerimiento activo para asociar recursos.'
    renderRequirementModalExplorer()
    return
  }

  const resource = resourcesRecords.find((record) => record.id === resourceId)
  if (!resource) {
    requirementsExplorerContent.dataset.resourceNotice = 'No se encontró el recurso seleccionado en el catálogo.'
    renderRequirementModalExplorer()
    return
  }

  const nextItem = buildRequirementItemFromResource(activeRequirementRecord, resource, requirementModalItems)
  customRequirementItems = [...customRequirementItems, nextItem]
  await persistCustomRequirementItems()

  requirementDetailsRecords = mergeRequirementDetailRecords(requirementDetailsRecords, [nextItem])
  requirementModalItems = [...requirementModalItems, nextItem]
  requirementModalColumns = getRequirementDetailsColumns(requirementModalItems, true)

  const requirementIndex = requirementsRecords.findIndex(
    (record) => getRequirementRecordKey(record) === getRequirementRecordKey(activeRequirementRecord),
  )

  if (requirementIndex >= 0) {
    const currentRequirement = requirementsRecords[requirementIndex]
    const nextQuantity = Number(currentRequirement.cantidad_items ?? 0) + 1
    const nextRequirement = { ...currentRequirement, cantidad_items: nextQuantity }
    requirementsRecords = requirementsRecords.map((record, index) => (index === requirementIndex ? nextRequirement : record))
    activeRequirementRecord = nextRequirement
    renderRequirementsTable()
  }

  renderRequirementDetailsTable()
  updateRequirementDetailsContext({
    finalCount: requirementDetailsRecords.filter((item) => item.fuente === 'FINAL').length,
    stageCount: requirementDetailsRecords.filter((item) => item.fuente === 'STAGE').length,
    localCount: requirementDetailsRecords.filter((item) => item.fuente === 'LOCAL').length,
    totalCount: requirementDetailsRecords.length,
    uniqueRqCount: new Set(requirementDetailsRecords.map((item) => item.rq_codigo).filter(Boolean)).size,
  })
  requirementsExplorerContent.dataset.resourceNotice = `Se agregó "${resource.descripcion}" al requerimiento ${activeRequirementRecord.rq_codigo}.`
  const alerts = getRequirementAlerts(activeRequirementRecord)
  const attachmentCount = countRequirementAttachments(requirementModalItems)
  const localItemsCount = requirementModalItems.filter((item) => item.fuente === 'LOCAL').length
  requirementsExplorerContent.dataset.summaryMarkup = `
    <section class="rq-summary">
      <div class="rq-summary__hero">
        <div>
          <p class="rq-summary__eyebrow">Requerimiento seleccionado</p>
          <h4 class="rq-summary__title">${escapeHtml(activeRequirementRecord.rq_codigo || 'Sin RQ')}</h4>
        </div>
        <div class="rq-summary__chips">
          <span class="tag tag--${getTagTone(activeRequirementRecord.estado)}">${escapeHtml(activeRequirementRecord.estado || 'Sin estado')}</span>
          <span class="rq-chip rq-chip--accent">${escapeHtml(`${activeRequirementRecord.cantidad_items ?? requirementModalItems.length} items`)}</span>
          <span class="rq-chip ${alerts.length ? 'rq-chip--warning' : 'rq-chip--ok'}">${escapeHtml(alerts.length ? `${alerts.length} alerta(s)` : 'Sin alertas')}</span>
          <span class="rq-chip">${escapeHtml(`${attachmentCount} adjuntos`)}</span>
          <span class="rq-chip">${escapeHtml(`${localItemsCount} locales`)}</span>
          <button class="rq-close-inline" type="button" data-action="close-explorer" aria-label="Cerrar detalle">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="rq-summary__grid">
        <article class="rq-summary__card"><span>Cotización</span><strong>${escapeHtml(activeRequirementRecord.cotizacion_codigo || '-')}</strong></article>
        <article class="rq-summary__card"><span>Centro de costo</span><strong>${escapeHtml(activeRequirementRecord.centro_costos || '-')}</strong></article>
        <article class="rq-summary__card"><span>Cliente</span><strong>${escapeHtml(activeRequirementRecord.cliente || '-')}</strong></article>
        <article class="rq-summary__card"><span>Unidad</span><strong>${escapeHtml(activeRequirementRecord.unidad || '-')}</strong></article>
        <article class="rq-summary__card"><span>Tipo de servicio</span><strong>${escapeHtml(activeRequirementRecord.tipo_servicio || '-')}</strong></article>
        <article class="rq-summary__card"><span>Fecha RQ</span><strong>${escapeHtml(formatDate(activeRequirementRecord.fecha_rq) || '-')}</strong></article>
        <article class="rq-summary__card"><span>Descripción cotización</span><strong>${escapeHtml(activeRequirementRecord.descripcion_cotizacion || '-')}</strong></article>
        <article class="rq-summary__card"><span>Solicitante</span><strong>${escapeHtml(activeRequirementRecord.solicitante || '-')}</strong></article>
        <article class="rq-summary__card"><span>Área</span><strong>${escapeHtml(activeRequirementRecord.area || '-')}</strong></article>
      </div>
    </section>
  `
  renderRequirementModalExplorer()
}

navItems.forEach((item) => {
  item.addEventListener('click', () => setActiveView(item.dataset.view))
})

menuToggle?.addEventListener('click', () => {
  sidebar.classList.toggle('is-open')
  document.body.classList.toggle('menu-open', sidebar.classList.contains('is-open'))
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 860) {
    sidebar.classList.remove('is-open')
    document.body.classList.remove('menu-open')
  }
})

tableBody?.addEventListener('click', (event) => {
  const permissions = getCurrentQuotationPermissions()
  const requirementButton = event.target.closest('[data-action="view-requirements"]')
  if (requirementButton) {
    if (!permissions.show_eye_button) {
      updateStatus('No tienes permiso para abrir requerimientos vinculados.', 'warning')
      return
    }
    const recordId = requirementButton.dataset.id
    const record = records.find((item) => String(item[primaryKey]) === recordId)
    if (record) {
      openRequirementListModal(record)
    }
    return
  }

  const button = event.target.closest('[data-action="edit"]')
  if (!button) {
    return
  }

  if (!permissions.show_edit_button || !permissions.open_edit_modal) {
    updateStatus('No tienes permiso para abrir la ficha de esta cotización.', 'warning')
    return
  }

  const recordId = button.dataset.id
  const record = records.find((item) => String(item[primaryKey]) === recordId)
  if (record) {
    openModal(record)
  }
})

recordForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  await saveRecord(collectFormData())
})

authForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  if (!supabaseClient?.auth) {
    showAuthShell('Supabase Auth no está disponible en esta configuración.', 'danger')
    return
  }

  const email = String(authEmailInput?.value || '').trim()
  const password = String(authPasswordInput?.value || '')
  const fullName = String(authNameInput?.value || '').trim()

  if (!email || (authMode !== 'reset' && !password) || (authMode === 'register' && !fullName)) {
    updateAuthStatus(
      authMode === 'reset'
        ? 'Ingresa tu correo para enviarte el enlace.'
        : authMode === 'register'
          ? 'Completa tu nombre, correo y contraseña.'
          : 'Ingresa tu correo y contraseña.',
      'danger',
    )
    return
  }

  if (authMode === 'login') {
    updateAuthStatus('Validando credenciales...', 'info')

    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      updateAuthStatus(`No se pudo iniciar sesión: ${error.message}`, 'danger')
      return
    }

    authPasswordInput.value = ''
    updateAuthStatus('Sesión iniciada correctamente.', 'success')
    return
  }

  if (authMode === 'register') {
    updateAuthStatus('Registrando cuenta y dejándola pendiente de aprobación...', 'info')

    const redirectTo = `${window.location.origin}${window.location.pathname}`
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectTo,
        data: {
          full_name: fullName,
          requested_role: 'consulta',
        },
      },
    })

    if (error) {
      updateAuthStatus(`No se pudo registrar la cuenta: ${error.message}`, 'danger')
      return
    }

    authPasswordInput.value = ''
    updateAuthStatus(
      'Tu cuenta fue registrada. Si corresponde, revisa tu correo para confirmar y luego espera la aprobación del administrador.',
      'success',
    )
    return
  }

  updateAuthStatus('Enviando enlace de recuperación...', 'info')
  const redirectTo = `${window.location.origin}${window.location.pathname}`
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo,
  })

  if (error) {
    updateAuthStatus(`No se pudo enviar el enlace: ${error.message}`, 'danger')
    return
  }

  updateAuthStatus('Te enviamos un enlace de recuperación a tu correo.', 'success')
})

authResetButton?.addEventListener('click', () => {
  if (authForm) {
    authForm.reset()
  }
  if (authEmailInput && !authEmailInput.value) {
    authEmailInput.value = 'edwin.qm@outlook.com'
  }
  applyAuthMode(authMode)
  updateAuthStatus('')
})

authTabs?.addEventListener('click', (event) => {
  const tabButton = event.target.closest('[data-auth-mode]')
  if (!tabButton) {
    return
  }

  applyAuthMode(tabButton.dataset.authMode)
})

authGoogleButton?.addEventListener('click', async () => {
  if (!supabaseClient?.auth) {
    updateAuthStatus('Supabase Auth no está disponible en esta configuración.', 'danger')
    return
  }

  const redirectTo = `${window.location.origin}${window.location.pathname}`
  updateAuthStatus('Redirigiendo a Google...', 'info')

  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      queryParams: {
        access_type: 'offline',
        prompt: 'select_account',
      },
    },
  })

  if (error) {
    updateAuthStatus(
      `No se pudo iniciar con Google: ${error.message}. Verifica que Google esté habilitado en Supabase Authentication y que el redirect URL esté registrado.`,
      'danger',
    )
  }
})

logoutButton?.addEventListener('click', async () => {
  if (!supabaseClient?.auth) {
    return
  }

  await supabaseClient.auth.signOut()
})

refreshButton?.addEventListener('click', async () => {
  await loadRecords()
})

requirementsRefreshButton?.addEventListener('click', async () => {
  await loadRequirementsRecords()
})

requirementsDetailRefreshButton?.addEventListener('click', async () => {
  await loadRequirementDetails()
})

resourcesRefreshButton?.addEventListener('click', async () => {
  await loadResourcesCatalog()
})

adminButton?.addEventListener('click', async () => {
  if (currentUserProfile?.role !== 'admin') {
    return
  }

  setActiveView('admin')
  await loadAdminUsers()
})

adminUsersRefreshButton?.addEventListener('click', async () => {
  await loadAdminUsers()
})

resourcesForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  await saveResourceRecord(collectResourceFormData())
})

resourcesFormReset?.addEventListener('click', () => {
  fillResourcesForm()
  updateResourcesStatus('Formulario de recursos reiniciado.', 'info')
})

resourcesSearch?.addEventListener('input', () => {
  resourcesSearchTerm = resourcesSearch.value
  renderResourcesTable()
})

resourcesTableBody?.addEventListener('click', async (event) => {
  const permissions = getCurrentModulePermissions('resources')
  const editButton = event.target.closest('[data-action="edit-resource"]')
  if (editButton) {
    if (!permissions.access || !permissions.show_edit_button || !permissions.show_form) {
      updateResourcesStatus('No tienes permisos para editar recursos.', 'warning')
      return
    }
    const resource = resourcesRecords.find((record) => record.id === editButton.dataset.resourceId)
    if (resource) {
      fillResourcesForm(resource)
      setActiveView('resources')
      updateResourcesStatus(`Editando recurso ${resource.descripcion}.`, 'info')
    }
    return
  }

  const deleteButton = event.target.closest('[data-action="delete-resource"]')
  if (deleteButton) {
    if (!permissions.access || !permissions.show_delete_button) {
      updateResourcesStatus('No tienes permisos para eliminar recursos.', 'warning')
      return
    }
    await deleteResourceRecord(deleteButton.dataset.resourceId)
  }
})

adminUsersTableBody?.addEventListener('change', async (event) => {
  const roleSelect = event.target.closest('[data-action="change-user-role"]')
  if (roleSelect) {
    await updateAdminUserRole(roleSelect.dataset.userId, roleSelect.value)
    return
  }

  const toggle = event.target.closest('[data-action="toggle-user-active"]')
  if (!toggle) {
    return
  }

  await updateAdminUserAccess(toggle.dataset.userId, Boolean(toggle.checked))
})

adminUsersTableHead?.addEventListener('input', (event) => {
  const filterInput = event.target.closest('[data-admin-filter]')
  if (!filterInput) {
    return
  }

  adminUsersFilters[filterInput.dataset.adminFilter] = String(filterInput.value || '').trim().toLowerCase()
  renderAdminUsersTable()
})

adminUsersTableHead?.addEventListener('change', (event) => {
  const filterSelect = event.target.closest('[data-admin-filter]')
  if (!filterSelect) {
    return
  }

  adminUsersFilters[filterSelect.dataset.adminFilter] = String(filterSelect.value || '').trim().toLowerCase()
  renderAdminUsersTable()
})

adminUsersTableBody?.addEventListener('click', (event) => {
  const permissionsButton = event.target.closest('[data-action="edit-user-quotations-permissions"]')
  if (!permissionsButton) {
    return
  }

  const profile = adminUsersRecords.find((record) => record.user_id === permissionsButton.dataset.userId)
  if (profile) {
    openAdminPermissionsModal(profile)
  }
})

adminPermissionsForm?.addEventListener('change', () => {
  if (!activePermissionsProfile) {
    return
  }

  const stagedPermissions = collectAdminModulePermissions()
  activePermissionsProfile = {
    ...activePermissionsProfile,
    metadata: {
      ...(activePermissionsProfile.metadata && typeof activePermissionsProfile.metadata === 'object' ? activePermissionsProfile.metadata : {}),
      permissions: {
        ...((activePermissionsProfile.metadata && activePermissionsProfile.metadata.permissions) || {}),
        [activePermissionsModule]: stagedPermissions,
      },
    },
  }
  renderAdminPermissionsModal()
})

adminPermissionsForm?.addEventListener('click', (event) => {
  const moduleButton = event.target.closest('[data-action="select-permissions-module"]')
  if (moduleButton) {
    const moduleKey = String(moduleButton.dataset.moduleKey || '')
    const moduleConfig = adminPermissionModules.find((module) => module.key === moduleKey)
    if (!moduleConfig?.ready) {
      updateAdminPermissionsStatus('Ese módulo quedará disponible en el mismo esquema de permisos más adelante.', 'warning')
      return
    }

    activePermissionsModule = moduleKey
    renderAdminPermissionsModal()
    updateAdminPermissionsStatus(`Configurando permisos de ${moduleConfig.label} para este usuario.`, 'info')
    return
  }

  const presetButton = event.target.closest('[data-action="apply-module-permissions-preset"]')
  if (!presetButton || !activePermissionsProfile) {
    return
  }

  const presetKey = String(presetButton.dataset.presetKey || '')
  const presetPermissions = buildModulePermissionsPreset(activePermissionsModule, presetKey)
  activePermissionsProfile = {
    ...activePermissionsProfile,
    metadata: {
      ...(activePermissionsProfile.metadata && typeof activePermissionsProfile.metadata === 'object' ? activePermissionsProfile.metadata : {}),
      permissions: {
        ...((activePermissionsProfile.metadata && activePermissionsProfile.metadata.permissions) || {}),
        [activePermissionsModule]: presetPermissions,
      },
    },
  }
  renderAdminPermissionsModal()
  const moduleConfig = getModulePermissionConfig(activePermissionsModule)
  updateAdminPermissionsStatus(`Plantilla ${quotationPermissionPresets.find((preset) => preset.key === presetKey)?.label || 'rápida'} aplicada a ${moduleConfig.label}. Puedes ajustar detalles antes de guardar.`, 'success')
})

adminPermissionsForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  await saveAdminModulePermissions()
})

closeAdminPermissionsButton?.addEventListener('click', closeAdminPermissionsModal)
cancelAdminPermissionsButton?.addEventListener('click', closeAdminPermissionsModal)
adminPermissionsBackdrop?.addEventListener('click', closeAdminPermissionsModal)

newRequirementButton?.addEventListener('click', () => {
  const permissions = getCurrentModulePermissions('requirements')
  if (!permissions.access || !permissions.show_new_button) {
    updateRequirementsStatus('No tienes permisos para crear requerimientos.', 'warning')
    return
  }
  const selectedRecord = selectedRequirementKey ? findRequirementByKey(selectedRequirementKey) : null
  openRequirementEntryModal(selectedRecord || quotationLinkedRecord || activeRequirementRecord || {})
})

requirementsTableHead?.addEventListener('input', (event) => {
  const input = event.target.closest('[data-requirements-filter-key]')
  if (!input) {
    return
  }

  requirementsActiveFilters[input.dataset.requirementsFilterKey] = input.value
  renderRequirementsTable()
})

requirementsTableHead?.addEventListener('change', (event) => {
  const input = event.target.closest('[data-requirements-filter-key]')
  if (!input) {
    return
  }

  requirementsActiveFilters[input.dataset.requirementsFilterKey] = input.value
  renderRequirementsTable()
})

requirementsTableHead?.addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-requirements-sort-key]')
  if (sortButton) {
    const sortKey = sortButton.dataset.requirementsSortKey
    requirementsSort =
      requirementsSort.key === sortKey
        ? { key: sortKey, direction: requirementsSort.direction === 'asc' ? 'desc' : 'asc' }
        : { key: sortKey, direction: 'asc' }

    buildRequirementsHead()
    renderRequirementsTable()
    return
  }

  const clearButton = event.target.closest('[data-action="clear-requirements-filters"]')
  if (!clearButton) {
    return
  }

  requirementsActiveFilters = {}
  buildRequirementsHead()
  renderRequirementsTable()
})

requirementsDetailTableHead?.addEventListener('input', (event) => {
  const input = event.target.closest('[data-detail-filter-key]')
  if (!input) {
    return
  }

  requirementDetailsActiveFilters[input.dataset.detailFilterKey] = input.value
  requirementDetailsPage = 1
  renderRequirementDetailsTable()
})

requirementsDetailTableHead?.addEventListener('change', (event) => {
  const input = event.target.closest('[data-detail-filter-key]')
  if (!input) {
    return
  }

  requirementDetailsActiveFilters[input.dataset.detailFilterKey] = input.value
  requirementDetailsPage = 1
  renderRequirementDetailsTable()
})

requirementsDetailTableHead?.addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-detail-sort-key]')
  if (!sortButton) {
    return
  }

  const sortKey = sortButton.dataset.detailSortKey
  requirementDetailsSort =
    requirementDetailsSort.key === sortKey
      ? { key: sortKey, direction: requirementDetailsSort.direction === 'asc' ? 'desc' : 'asc' }
      : { key: sortKey, direction: 'asc' }

  requirementDetailsPage = 1
  buildRequirementDetailsHead()
  renderRequirementDetailsTable()
})

requirementsDetailPageSize?.addEventListener('change', () => {
  requirementDetailsPageSizeValue = Math.max(1, Number(requirementsDetailPageSize.value) || 200)
  requirementDetailsPage = 1
  renderRequirementDetailsTable()
})

requirementsDetailPrevPage?.addEventListener('click', () => {
  requirementDetailsPage = Math.max(1, requirementDetailsPage - 1)
  renderRequirementDetailsTable()
})

requirementsDetailNextPage?.addEventListener('click', () => {
  requirementDetailsPage += 1
  renderRequirementDetailsTable()
})

newRecordButton?.addEventListener('click', () => {
  openModal()
})

columnsButton?.addEventListener('click', () => {
  columnManager.classList.toggle('is-hidden')
})

columnManagerList?.addEventListener('change', (event) => {
  const input = event.target.closest('[data-column-key]')
  if (!input) {
    return
  }

  const key = input.dataset.columnKey
  if (input.checked) {
    if (!visibleColumnKeys.includes(key)) {
      visibleColumnKeys.push(key)
    }
  } else {
    visibleColumnKeys = visibleColumnKeys.filter((item) => item !== key)
    if (!visibleColumnKeys.length) {
      visibleColumnKeys = [key]
      input.checked = true
    }
  }

  persistVisibleColumnKeys()
  buildTableHead()
  renderTable()
})

recordFormGrid?.addEventListener('click', handleCatalogManagerAction)
catalogManagerPanel?.addEventListener('click', handleCatalogManagerAction)
recordForm?.addEventListener('change', (event) => {
  const target = event.target
  if (!(target instanceof HTMLSelectElement || target instanceof HTMLInputElement)) {
    return
  }

  if (target.name === 'solicitado_por' || target.name === 'solicitado') {
    applyLinkedContactFields('solicitado_por', target.value)
    return
  }

  if (target.name === 'responsable_tecnico') {
    applyLinkedContactFields('responsable_tecnico', target.value)
    return
  }

  if (target.name === 'responsable_economico') {
    applyLinkedContactFields('responsable_economico', target.value)
    return
  }
})

recordForm?.addEventListener('input', (event) => {
  const target = event.target
  if (!(target instanceof HTMLInputElement)) {
    return
  }

  if (target.name === 'cotizacion') {
    validateQuotationCode(target.value)
  }
})

tableHead?.addEventListener('input', (event) => {
  const input = event.target.closest('[data-filter-key]')
  if (!input) {
    return
  }

  activeFilters[input.dataset.filterKey] = input.value
  renderTable()
})

tableHead?.addEventListener('change', (event) => {
  const input = event.target.closest('[data-filter-key]')
  if (!input) {
    return
  }

  activeFilters[input.dataset.filterKey] = input.value
  renderTable()
})

tableHead?.addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-sort-key]')
  if (sortButton) {
    const sortKey = sortButton.dataset.sortKey
    activeSort =
      activeSort.key === sortKey
        ? { key: sortKey, direction: activeSort.direction === 'asc' ? 'desc' : 'asc' }
        : { key: sortKey, direction: 'asc' }

    buildTableHead()
    renderTable()
    return
  }

  const button = event.target.closest('[data-action="clear-filters"]')
  if (!button) {
    return
  }

  activeFilters = {}
  buildTableHead()
  renderTable()
})

tableHead?.addEventListener('pointerdown', (event) => {
  const handle = event.target.closest('[data-resize-table="quotations"]')
  if (!handle) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  beginColumnResize('quotations', handle.dataset.resizeKey, event.clientX)
})

requirementsTableHead?.addEventListener('pointerdown', (event) => {
  const handle = event.target.closest('[data-resize-table="requirements"]')
  if (!handle) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  beginColumnResize('requirements', handle.dataset.resizeKey, event.clientX)
})

requirementsDetailTableHead?.addEventListener('pointerdown', (event) => {
  const handle = event.target.closest('[data-resize-table="requirements-detail"]')
  if (!handle) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  beginColumnResize('requirements-detail', handle.dataset.resizeKey, event.clientX)
})

resetColumnsButton?.addEventListener('click', () => {
  visibleColumnKeys = getDefaultVisibleColumnKeys(columns)
  persistVisibleColumnKeys()
  renderColumnManager()
  buildTableHead()
  renderTable()
})

closeModalButton?.addEventListener('click', closeModal)
cancelModalButton?.addEventListener('click', closeModal)
modalBackdrop?.addEventListener('click', closeModal)
closeRequirementEntryButton?.addEventListener('click', closeRequirementEntryModal)
cancelRequirementEntryButton?.addEventListener('click', closeRequirementEntryModal)
requirementEntryBackdrop?.addEventListener('click', closeRequirementEntryModal)
closeRequirementsExplorerButton?.addEventListener('click', closeRequirementsExplorer)
requirementsExplorerBackdrop?.addEventListener('click', closeRequirementsExplorer)

requirementEntryForm?.addEventListener('submit', async (event) => {
  event.preventDefault()
  await saveRequirementEntry(collectRequirementEntryPayload())
})

requirementCodeInput?.addEventListener('input', () => {
  validateRequirementCode(requirementCodeInput.value)
})

requirementsTableBody?.addEventListener('click', (event) => {
  const detailButton = event.target.closest('[data-action="requirement-detail"]')
  if (detailButton) {
    const permissions = getCurrentModulePermissions('requirements')
    if (!permissions.show_detail_button || !permissions.open_detail_modal) {
      updateRequirementsStatus('No tienes permiso para abrir el detalle del requerimiento.', 'warning')
      return
    }
    const requirementRecord = findRequirementByKey(detailButton.dataset.requirementKey)
    if (requirementRecord) {
      void openRequirementDetail(requirementRecord)
    }
  }
})

requirementsExplorerContent?.addEventListener('click', (event) => {
  const quotationPermissions = getCurrentQuotationPermissions()
  const detailsPermissions = getCurrentModulePermissions('details')
  const inlineCloseButton = event.target.closest('[data-action="close-explorer"]')
  if (inlineCloseButton) {
    closeRequirementsExplorer()
    return
  }

  const tabButton = event.target.closest('[data-action="switch-explorer-tab"]')
  if (tabButton) {
    const requestedTab = tabButton.dataset.explorerTab || 'summary'
    if (explorerActiveTab !== requestedTab) {
      explorerTrackingComposerMode = ''
      explorerEvidenceComposerOpen = false
      explorerActiveTab = requestedTab
      if (activeExplorerMode === 'quotation-linked') {
        renderQuotationLinkedExplorer()
      } else if (activeExplorerMode === 'rq-detail') {
        renderRequirementModalExplorer()
      }
      if (requestedTab !== 'summary') {
        void refreshExplorerExpedienteData()
      }
    }
    return
  }

  const openTrackingComposerButton = event.target.closest('[data-action="open-tracking-composer"]')
  if (openTrackingComposerButton) {
    explorerTrackingComposerMode = 'tracking'
    explorerEvidenceComposerOpen = false
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
    return
  }

  const openCommunicationComposerButton = event.target.closest('[data-action="open-communication-composer"]')
  if (openCommunicationComposerButton) {
    explorerTrackingComposerMode = 'communication'
    explorerEvidenceComposerOpen = false
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
    return
  }

  const cancelComposerButton = event.target.closest('[data-action="cancel-explorer-composer"]')
  if (cancelComposerButton) {
    explorerTrackingComposerMode = ''
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
    return
  }

  const openEvidenceComposerButton = event.target.closest('[data-action="open-evidence-composer"]')
  if (openEvidenceComposerButton) {
    explorerEvidenceComposerOpen = true
    explorerTrackingComposerMode = ''
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
    return
  }

  const cancelEvidenceComposerButton = event.target.closest('[data-action="cancel-evidence-composer"]')
  if (cancelEvidenceComposerButton) {
    explorerEvidenceComposerOpen = false
    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
    return
  }

  const detailButton = event.target.closest('[data-action="open-requirement-detail"]')
  if (detailButton) {
    if (!quotationPermissions.show_linked_detail_button) {
      updateRequirementsStatus('No tienes permiso para abrir el detalle del requerimiento desde esta vista.', 'warning')
      return
    }
    const requirementRecord = findRequirementByKey(detailButton.dataset.requirementKey)
    if (requirementRecord) {
      void openRequirementDetail(requirementRecord)
    }
    return
  }

  const toggleColumnsButton = event.target.closest('[data-action="toggle-modal-columns"]')
  if (toggleColumnsButton) {
    if (!detailsPermissions.show_columns_button) {
      return
    }
    if (explorerActiveTab !== 'summary') {
      explorerActiveTab = 'summary'
    }
    requirementModalColumnManagerOpen = !requirementModalColumnManagerOpen
    renderRequirementModalExplorer()
    return
  }

  const newModalRequirementButton = event.target.closest('[data-action="new-modal-requirement"]')
  if (newModalRequirementButton) {
    if (!detailsPermissions.show_new_requirement_button) {
      updateRequirementDetailsStatus('No tienes permiso para crear requerimientos desde este detalle.', 'warning')
      return
    }
    openRequirementEntryModal(activeRequirementRecord || {})
    return
  }

  const toggleLinkedColumnsButton = event.target.closest('[data-action="toggle-linked-columns"]')
  if (toggleLinkedColumnsButton) {
    if (!quotationPermissions.show_linked_columns_button) {
      return
    }
    if (explorerActiveTab !== 'summary') {
      explorerActiveTab = 'summary'
    }
    quotationLinkedColumnManagerOpen = !quotationLinkedColumnManagerOpen
    renderQuotationLinkedExplorer()
    return
  }

  const newLinkedRequirementButton = event.target.closest('[data-action="new-linked-requirement"]')
  if (newLinkedRequirementButton) {
    if (!quotationPermissions.show_linked_new_requirement) {
      updateRequirementsStatus('No tienes permiso para crear requerimientos desde esta cotización.', 'warning')
      return
    }
    openRequirementEntryModal(quotationLinkedRecord || {})
    return
  }

  const resetModalColumnsButton = event.target.closest('[data-action="reset-modal-columns"]')
  if (resetModalColumnsButton) {
    requirementModalVisibleColumnKeys = getDefaultVisibleColumnKeys(requirementModalColumns)
    persistRequirementModalVisibleColumnKeys()
    renderRequirementModalExplorer()
    return
  }

  const resetLinkedColumnsButton = event.target.closest('[data-action="reset-linked-columns"]')
  if (resetLinkedColumnsButton) {
    quotationLinkedVisibleColumnKeys = getDefaultVisibleColumnKeys(requirementsColumns)
    persistStoredMap(quotationLinkedVisibilityStorageKey, quotationLinkedVisibleColumnKeys)
    renderQuotationLinkedExplorer()
    return
  }

  const addExistingResourceButton = event.target.closest('[data-action="add-existing-resource"]')
  if (addExistingResourceButton) {
    if (!detailsPermissions.show_add_resource_button) {
      updateRequirementDetailsStatus('No tienes permiso para agregar recursos desde este detalle.', 'warning')
      return
    }
    if (explorerActiveTab !== 'summary') {
      explorerActiveTab = 'summary'
    }
    requirementModalResourcePickerOpen = !requirementModalResourcePickerOpen
    if (!resourcesRecords.length) {
      requirementsExplorerContent.dataset.resourceNotice = 'Primero registra recursos en la pestaña Recursos para reutilizarlos aquí.'
    } else if (!requirementModalResourcePickerOpen) {
      requirementsExplorerContent.dataset.resourceNotice = ''
    }
    renderRequirementModalExplorer()
    return
  }

  const downloadHtmlButton = event.target.closest('[data-action="download-rq-html"]')
  if (downloadHtmlButton) {
    if (!detailsPermissions.show_download_html_button) {
      return
    }
    downloadRequirementSnapshotHtml()
    return
  }

  const exportExcelButton = event.target.closest('[data-action="export-rq-excel"]')
  if (exportExcelButton) {
    if (!detailsPermissions.show_export_excel_button) {
      return
    }
    exportRequirementModalCsv()
    return
  }

  const exportPdfButton = event.target.closest('[data-action="export-rq-pdf"]')
  if (exportPdfButton) {
    if (!detailsPermissions.show_export_pdf_button) {
      return
    }
    printRequirementSnapshot()
    return
  }

  const printButton = event.target.closest('[data-action="print-rq"]')
  if (printButton) {
    if (!detailsPermissions.show_print_button) {
      return
    }
    printRequirementSnapshot()
    return
  }

  const shareButton = event.target.closest('[data-action="share-rq"]')
  if (shareButton) {
    if (!detailsPermissions.show_share_button) {
      return
    }
    void shareRequirementLink()
    return
  }

  const exportLinkedButton = event.target.closest('[data-action="export-linked-excel"]')
  if (exportLinkedButton) {
    if (!quotationPermissions.show_linked_export_excel_button) {
      return
    }
    exportQuotationLinkedCsv()
    return
  }

  const shareLinkedButton = event.target.closest('[data-action="share-linked"]')
  if (shareLinkedButton) {
    if (!quotationPermissions.show_linked_share_button) {
      return
    }
    void shareQuotationLinkedLink()
    return
  }

  const attachResourceButton = event.target.closest('[data-action="attach-resource"]')
  if (attachResourceButton) {
    if (!detailsPermissions.show_add_resource_button) {
      return
    }
    void attachResourceToActiveRequirement(attachResourceButton.dataset.resourceId)
    return
  }

  const sortButton = event.target.closest('[data-modal-detail-sort-key]')
  if (sortButton) {
    const sortKey = sortButton.dataset.modalDetailSortKey
    requirementModalSort =
      requirementModalSort.key === sortKey
        ? { key: sortKey, direction: requirementModalSort.direction === 'asc' ? 'desc' : 'asc' }
        : { key: sortKey, direction: 'asc' }

    renderRequirementModalExplorer()
    return
  }

  const linkedSortButton = event.target.closest('[data-linked-sort-key]')
  if (!linkedSortButton) {
    return
  }

  const linkedSortKey = linkedSortButton.dataset.linkedSortKey
  quotationLinkedSort =
    quotationLinkedSort.key === linkedSortKey
      ? { key: linkedSortKey, direction: quotationLinkedSort.direction === 'asc' ? 'desc' : 'asc' }
      : { key: linkedSortKey, direction: 'asc' }

  renderQuotationLinkedExplorer()
})

requirementsExplorerContent?.addEventListener('submit', (event) => {
  const form = event.target.closest('form')
  if (!form) {
    return
  }

  if (
    !form.matches('[data-action="submit-tracking-event"]') &&
    !form.matches('[data-action="submit-communication-event"]') &&
    !form.matches('[data-action="submit-evidence-record"]')
  ) {
    return
  }

  event.preventDefault()

  ;(async () => {
    if (form.matches('[data-action="submit-tracking-event"]')) {
      await saveExplorerTrackingEvent(form, 'tracking')
    } else if (form.matches('[data-action="submit-communication-event"]')) {
      await saveExplorerTrackingEvent(form, 'communication')
    } else if (form.matches('[data-action="submit-evidence-record"]')) {
      await saveExplorerEvidenceRecord(form)
    }

    if (activeExplorerMode === 'quotation-linked') {
      renderQuotationLinkedExplorer()
    } else if (activeExplorerMode === 'rq-detail') {
      renderRequirementModalExplorer()
    }
  })()
})

requirementsExplorerContent?.addEventListener('input', (event) => {
  const pickerSearch = event.target.closest('[data-resource-picker-search="true"]')
  if (pickerSearch) {
    requirementModalResourceSearch = pickerSearch.value
    renderRequirementModalExplorer()
    return
  }

  const input = event.target.closest('[data-modal-detail-filter-key]')
  if (input) {
    requirementModalFilters[input.dataset.modalDetailFilterKey] = input.value
    renderRequirementModalExplorer()
    return
  }

  const linkedInput = event.target.closest('[data-linked-filter-key]')
  if (!linkedInput) {
    return
  }

  quotationLinkedFilters[linkedInput.dataset.linkedFilterKey] = linkedInput.value
  renderQuotationLinkedExplorer()
})

requirementsExplorerContent?.addEventListener('change', (event) => {
  const columnToggle = event.target.closest('[data-modal-column-key]')
  if (columnToggle) {
    const key = columnToggle.dataset.modalColumnKey
    if (columnToggle.checked) {
      if (!requirementModalVisibleColumnKeys.includes(key)) {
        requirementModalVisibleColumnKeys.push(key)
      }
    } else {
      requirementModalVisibleColumnKeys = requirementModalVisibleColumnKeys.filter((item) => item !== key)
      if (!requirementModalVisibleColumnKeys.length) {
        requirementModalVisibleColumnKeys = [key]
        columnToggle.checked = true
      }
    }
    persistRequirementModalVisibleColumnKeys()
    renderRequirementModalExplorer()
    return
  }

  const input = event.target.closest('[data-modal-detail-filter-key]')
  if (input) {
    requirementModalFilters[input.dataset.modalDetailFilterKey] = input.value
    renderRequirementModalExplorer()
    return
  }

  const linkedColumnToggle = event.target.closest('[data-linked-column-key]')
  if (linkedColumnToggle) {
    const key = linkedColumnToggle.dataset.linkedColumnKey
    if (linkedColumnToggle.checked) {
      if (!quotationLinkedVisibleColumnKeys.includes(key)) {
        quotationLinkedVisibleColumnKeys.push(key)
      }
    } else {
      quotationLinkedVisibleColumnKeys = quotationLinkedVisibleColumnKeys.filter((item) => item !== key)
      if (!quotationLinkedVisibleColumnKeys.length) {
        quotationLinkedVisibleColumnKeys = [key]
        linkedColumnToggle.checked = true
      }
    }
    persistStoredMap(quotationLinkedVisibilityStorageKey, quotationLinkedVisibleColumnKeys)
    renderQuotationLinkedExplorer()
    return
  }

  const linkedInput = event.target.closest('[data-linked-filter-key]')
  if (!linkedInput) {
    return
  }

  quotationLinkedFilters[linkedInput.dataset.linkedFilterKey] = linkedInput.value
  renderQuotationLinkedExplorer()
})

document.addEventListener('pointermove', handleColumnResizeMove)
document.addEventListener('pointerup', endColumnResize)
document.addEventListener('mouseleave', endColumnResize)

supabaseClient = initializeSupabase()
void initializeAuth()
