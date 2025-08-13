// Datos del One Pager y sistema de autenticación
const correctPassword = 'fotofacturas2025';
let isAuthenticated = false;

// Verificar si hay una autenticación guardada en localStorage
if (localStorage.getItem('fotofacturas_auth') === 'true') {
    isAuthenticated = true;
}

// Contenido del One Pager - Secciones
const sections = {
    situacion: true,
    mercado: true,
    modelo: true,
    b2b: true,
    funcionamiento: true,
    traccion: true,
    impacto: true,
    escalamiento: true,
    crecimiento: true,
    partnership: true    // Nuevo
};

// Función principal que inicia la aplicación
function init() {
    const appContainer = document.getElementById('app');

    if (isAuthenticated) {
        renderOnePager(appContainer);
    } else {
        renderPasswordScreen(appContainer);
    }

    // Detectar si es móvil
    checkMobile();
    window.addEventListener('resize', checkMobile);
}

// Verificar si es un dispositivo móvil
let isMobile = false;
function checkMobile() {
    isMobile = window.innerWidth < 768;

    // Ajustar estilos según el dispositivo
    if (isAuthenticated) {
        updateResponsiveStyles();
    }
}

// Actualizar estilos responsivos
function updateResponsiveStyles() {
    // Ajustes responsivos adicionales si son necesarios
}
// Renderizar pantalla de contraseña
function renderPasswordScreen(container) {
    container.innerHTML = `
        <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div class="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
                <div class="text-center mb-6">
                    <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center purple-bg">
                        <i data-lucide="lock" class="text-white"></i>
                    </div>
                    <h2 class="text-2xl font-bold mb-1">Contenido Protegido</h2>
                    <p class="text-gray-600">Ingresa la contraseña para acceder al One Pager de Fotofacturas</p>
                </div>
                
                <form id="password-form">
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Ingresa la contraseña"
                            autocomplete="off"
                            required
                        />
                        <p id="error-message" class="mt-2 text-sm text-red-600 hidden"></p>
                    </div>
                    
                    <button
                        type="submit"
                        class="w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 purple-bg"
                    >
                        Acceder
                    </button>
                </form>
            </div>
        </div>
    `;

    // Inicializar iconos de Lucide
    lucide.createIcons();

    // Configurar evento de envío del formulario
    const form = document.getElementById('password-form');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Dar foco al input de contraseña
    passwordInput.focus();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (passwordInput.value === correctPassword) {
            isAuthenticated = true;
            localStorage.setItem('fotofacturas_auth', 'true');
            renderOnePager(container);
        } else {
            errorMessage.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
        }
    });
}
// Renderizar el One Pager completo
function renderOnePager(container) {
    container.innerHTML = `
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <!-- Encabezado -->
            <div class="purple-bg text-white p-4 md:p-6 flex justify-between items-center">
                <div class="flex-1">
                    <h1 class="text-2xl md:text-4xl font-bold mb-1 md:mb-2">Fotofacturas</h1>
                    <h2 class="text-base md:text-xl">$3.2K MRR • 147% CAGR • Top 1% Performance</h2>
                    <div class="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm">
                        <div class="bg-white bg-opacity-20 rounded px-2 py-1 text-center">
                            <div class="font-bold">$3.2K</div>
                            <div>MRR Real</div>
                        </div>
                        <div class="bg-white bg-opacity-20 rounded px-2 py-1 text-center">
                            <div class="font-bold">147%</div>
                            <div>CAGR</div>
                        </div>
                        <div class="bg-white bg-opacity-20 rounded px-2 py-1 text-center">
                            <div class="font-bold">+92%</div>
                            <div>YoY Growth</div>
                        </div>
                        <div class="bg-white bg-opacity-20 rounded px-2 py-1 text-center">
                            <div class="font-bold">241</div>
                            <div>Usuarios</div>
                        </div>
                    </div>
                    <h3 class="text-sm md:text-base opacity-90">Sistema de facturación automática de gastos impulsado por IA</h3>
                </div>
                <div class="ml-4">
                    <img src="https://fotofacturas.ai/blog/wp-content/uploads/2024/10/logoff.png" alt="Fotofacturas Logo" class="h-8 md:h-10">
                </div>
            </div>

            <!-- Contenido principal -->
            <div class="p-4 md:p-6">
                <div class="mb-6">
                    <h3 class="text-2xl md:text-3xl font-bold flex flex-wrap items-center gap-2">
                        <span class="purple-theme">Problema:</span>
                        <span class="text-black">Pago excesivo de impuestos</span>
                    </h3>
                </div>

                <div class="space-y-6 px-4 md:px-6">
                <!-- Situación actual -->
                    <div>
                        <div class="section-header" data-section="situacion">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="file-text" class="purple-theme"></i>
                                Situación actual
                                <span class="text-xs text-gray-500 font-normal ml-2">(Actualizado Julio 2025)</span>
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="situacion-content">
                            <ul class="mt-3 space-y-2 ml-4 md:ml-8">
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Estructura legal:</strong> SAPI de CV</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Antigüedad:</strong> +4 años en el mercado</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Tecnologías:</strong> JS / React Native / NET Core </span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>Número de colaboradores:</strong> 2 socios, 4 asociados y 4 empleados</span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>MRR Real:</strong> <span class="purple-theme font-bold">$3,177 USD</span> <span class="text-xs text-gray-500">(RevenueCat $2,748 + Stripe $429)</span></span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>ARR Actual:</strong> <span class="purple-theme font-bold">$38,120 USD</span> <span class="text-xs text-gray-500">(+38% vs estimado)</span></span>
                                </li>
                                <li class="flex items-baseline gap-2">
                                    <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                    <span><strong>CAGR Histórico:</strong> <span class="purple-theme font-bold">147.2%</span> <span class="text-xs text-gray-500">(Top 1% global)</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Mercado -->
                    <div>
                        <div class="section-header" data-section="mercado">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="bar-chart-2" class="purple-theme"></i>
                                Mercado
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="mercado-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <p class="font-semibold mb-4">Iniciando en México y expandiendo por LATAM</p>
                                
                                <div id="market-circles" class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                    <!-- Círculo TAM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-lg tam-bg">
                                            <span class="text-white font-bold text-2xl">TAM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">21.7B USD</p>
                                        <p>164.5M contribuyentes LATAM</p>
                                    </div>
                                    
                                    <!-- Círculo SAM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-md sam-bg">
                                            <span class="text-white font-bold text-xl">SAM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">11.0B USD</p>
                                        <p>83.45M contribuyentes México</p>
                                    </div>
                                    
                                    <!-- Círculo SOM -->
                                    <div class="flex flex-col items-center">
                                        <div class="circle circle-sm som-bg">
                                            <span class="text-white font-bold text-lg">SOM</span>
                                        </div>
                                        <p class="text-xl font-bold mt-4 purple-theme">550.8M USD</p>
                                        <p>5% contribuyentes México</p>
                                    </div>
                                </div>
                                <div class="text-center mb-4">
                                    <span class="font-semibold">Situación actual:</span> <span class="purple-theme font-bold">$3,177 USD MRR</span>
                                    <div class="text-sm text-green-600 font-semibold">$38,120 USD ARR • 147.2% CAGR • Top 1% Performance</div>
                                    <div class="text-xs text-gray-500 mt-1">Datos reales julio 2025 (RevenueCat + Stripe combinado)</div>
                                </div>
                                <div class="bg-gray-50 p-4 rounded-lg purple-left-border mt-4">
                                    <p class="text-center italic mb-2">"Iniciamos en México con un modelo probado antes de expandirnos a LATAM."</p>
                                    <p class="text-sm text-gray-600 mt-2">Fuentes:</p>
                                    <ul class="text-sm text-gray-600 list-disc list-inside">
                                        <li><a href="http://omawww.sat.gob.mx/cifras_sat/Documents/ITG_2023_2T.pdf" target="_blank" rel="noopener noreferrer" class="underline text-purple-700 hover:text-purple-900">SAT - Informe Trimestral de Ingresos Gubernamentales 2023</a></li>
                                        <li><a href="https://www.oecd.org/content/dam/oecd/en/topics/policy-sub-issues/global-tax-revenues/folleto-estadisticas-tributarias-en-america-latina-y-el-caribe.pdf" target="_blank" rel="noopener noreferrer" class="underline text-purple-700 hover:text-purple-900">OCDE - Estadísticas Tributarias en América Latina y el Caribe 2025</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modelo de Negocio -->
                    <div>
                        <div class="section-header" data-section="modelo">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="package" class="purple-theme"></i>
                                Modelo de Negocio
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="modelo-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <p class="font-semibold mb-2">Centros de ingreso:</p>
                                <ul class="space-y-2 ml-6">
                                    <li class="flex items-baseline gap-2">
                                        <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                        <span>B2C - Suscripción mensual</span>
                                    </li>
                                    <li class="flex items-baseline gap-2">
                                        <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                        <span>B2B - Planes Corporativos a la medida</span>
                                    </li>
                                </ul>
                                <p class="font-semibold mt-3 mb-2">Canales:</p>
                                <p class="ml-6">AppStore / GooglePlay / Web</p>
                                
                                <div class="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                        <h4 class="text-xl font-bold mb-2">Plan Ahorro</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$5 USD</p>
                                    </div>
                                    
                                    <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                        <h4 class="text-xl font-bold mb-2">Plan Individual</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$15 USD</p>
                                    </div>
                                    
                                    <div class="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                        <h4 class="text-xl font-bold mb-2">Plan Empresarial</h4>
                                        <p class="text-3xl font-bold mb-3 purple-theme">$50 USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Oportunidad B2B -->
                    <div>
                        <div class="section-header" data-section="b2b">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="building" class="purple-theme"></i>
                                Oportunidad B2B: Game Changer
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="b2b-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <!-- B2C vs B2B -->
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Comparación de Mercados</h4>
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between border-b pb-2">
                                                <span class="font-medium">B2C Actual</span>
                                                <span class="text-lg font-bold">$13 USD</span>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <span class="font-medium">B2B Potencial</span>
                                                <span class="text-lg font-bold purple-theme">$600-1,200 USD</span>
                                            </div>
                                            <div class="text-center mt-4 p-2 bg-purple-100 rounded">
                                                <span class="text-sm font-semibold purple-theme">46-92x mayor ARPU</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Impacto en MRR -->
                                    <div class="bg-white p-4 rounded-lg shadow-md border-l-4" style="border-color: #5501F1;">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Impacto en MRR</h4>
                                        <div class="space-y-3">
                                            <div class="flex items-center justify-between">
                                                <span>MRR actual</span>
                                                <span class="font-bold">$3,295</span>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <span>Solo 6 clientes B2B</span>
                                                <span class="font-bold text-green-600">+$3,600</span>
                                            </div>
                                            <div class="flex items-center justify-between border-t pt-2">
                                                <span class="font-medium">Nuevo MRR total</span>
                                                <span class="text-xl font-bold purple-theme">$6,895</span>
                                            </div>
                                            <div class="text-center mt-3 p-2 bg-green-100 rounded">
                                                <span class="text-sm font-semibold text-green-700">+109% crecimiento MRR</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Estrategia B2B -->
                                <div class="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                                    <h4 class="text-lg font-semibold mb-3 purple-theme">Estrategia de Penetración B2B</h4>
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div class="text-center">
                                            <div class="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center purple-bg">
                                                <i data-lucide="users" class="text-white text-sm"></i>
                                            </div>
                                            <h5 class="font-semibold mb-1">Target: Empresas 50-500 empleados</h5>
                                            <p class="text-sm text-gray-600">Departamentos contables con alto volumen</p>
                                        </div>
                                        <div class="text-center">
                                            <div class="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center purple-bg">
                                                <i data-lucide="zap" class="text-white text-sm"></i>
                                            </div>
                                            <h5 class="font-semibold mb-1">ROI: 300-500% anual</h5>
                                            <p class="text-sm text-gray-600">Ahorro en tiempo y deducción fiscal</p>
                                        </div>
                                        <div class="text-center">
                                            <div class="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center purple-bg">
                                                <i data-lucide="calendar" class="text-white text-sm"></i>
                                            </div>
                                            <h5 class="font-semibold mb-1">Timeline: Q4 2025</h5>
                                            <p class="text-sm text-gray-600">Lanzamiento con talent B2B</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg border-l-4 mt-4 text-center" style="border-color: #5501F1;">
                                    <p class="italic font-medium">"Con solo 15 clientes B2B promedio, podríamos alcanzar <span class="purple-theme font-bold">$12K MRR</span> - 4x nuestro nivel actual."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Funcionamiento -->
                    <div>
                        <div class="section-header" data-section="funcionamiento">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="zap" class="purple-theme"></i>
                                Funcionamiento
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="funcionamiento-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="flex flex-col items-center">
                                    <p class="text-center font-semibold mb-6 text-xl">Proceso simple en 3 pasos:</p>
                                    
                                    <div class="w-full mb-6 flex justify-center">
                                        <div class="w-full border border-gray-200 rounded-lg p-4 md:p-8 bg-white shadow-md">
                                            <div id="flow-diagram" class="flex flex-col md:flex-row justify-center items-center gap-6">
                                                <!-- Paso 1 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="relative">
                                                        <img src="https://fotofacturas.ai/blog/wp-content/uploads/2025/05/Device2.png" alt="Crear cuenta" class="w-40 md:w-48 h-auto rounded-lg shadow-sm">
                                                        <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold purple-bg">1</div>
                                                    </div>
                                                    <p class="mt-4 font-medium text-center">Crear cuenta</p>
                                                </div>
                                                
                                                <!-- Conector 1 -->
                                                <div id="connector-1" class="h-0.5 w-8 md:w-16 purple-bg hidden md:block"></div>
                                                <div id="connector-1-mobile" class="w-0.5 h-8 purple-bg block md:hidden"></div>
                                                
                                                <!-- Paso 2 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="relative">
                                                        <img src="https://fotofacturas.ai/blog/wp-content/uploads/2025/05/Device3.png" alt="Tomar una foto" class="w-40 md:w-48 h-auto rounded-lg shadow-sm">
                                                        <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold purple-bg">2</div>
                                                    </div>
                                                    <p class="mt-4 font-medium text-center">Tomar una foto</p>
                                                </div>
                                                
                                                <!-- Conector 2 -->
                                                <div id="connector-2" class="h-0.5 w-8 md:w-16 purple-bg hidden md:block"></div>
                                                <div id="connector-2-mobile" class="w-0.5 h-8 purple-bg block md:hidden"></div>
                                                
                                                <!-- Paso 3 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="relative">
                                                        <img src="https://fotofacturas.ai/blog/wp-content/uploads/2025/05/Device.png" alt="Recibir factura" class="w-40 md:w-48 h-auto rounded-lg shadow-sm">
                                                        <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold purple-bg">3</div>
                                                    </div>
                                                    <p class="mt-4 font-medium text-center">Recibir factura</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-gray-50 p-4 rounded-lg border-l-4 mt-4 text-center" style="border-color: #5501F1;">
                                        <p class="italic">Proceso completamente automatizado que te permite facturar tus gastos en segundos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Tracción y Oportunidades -->
                    <div>
                        <div class="section-header" data-section="traccion">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="trending-up" class="purple-theme"></i>
                                Tracción y Oportunidades de Crecimiento
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="traccion-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <!-- Tracción Actual -->
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Tracción Validada</h4>
                                        <ul class="space-y-3">
                                            <li class="flex items-center justify-between">
                                                <span>Usuarios registrados</span>
                                                <span class="font-bold text-lg">10,500+</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Usuarios activos (facturando)</span>
                                                <span class="font-bold text-lg">2,780+</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Usuarios pagados activos</span>
                                                <span class="font-bold text-xl purple-theme">241</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Tickets procesados</span>
                                                <span class="font-bold text-xl">53,979+</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Value facturado</span>
                                                <span class="font-bold text-xl purple-theme">$2.2M USD</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Oportunidades Inmediatas -->
                                    <div class="bg-gray-50 p-4 rounded-lg purple-left-border">
                                        <h4 class="text-lg font-semibold mb-3 purple-theme">Oportunidades Q4 2025</h4>
                                        <ul class="space-y-3">
                                            <li class="flex items-center justify-between">
                                                <span>96 usuarios listos para upsell</span>
                                                <span class="font-bold text-green-600">+$206 MRR</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Conversion rate optimization</span>
                                                <span class="font-bold text-green-600">+45% conversions</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>Retention improvements</span>
                                                <span class="font-bold text-green-600">+33% LTV</span>
                                            </li>
                                            <li class="flex items-center justify-between">
                                                <span>B2B channel launch</span>
                                                <span class="font-bold text-green-600">New market</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <!-- Quote de oportunidad -->
                                <div class="bg-gray-50 p-4 rounded-lg border-l-4 mt-4 text-center" style="border-color: #5501F1;">
                                    <p class="italic">"Con las optimizaciones identificadas, proyectamos 2-3x el crecimiento actual en los próximos 6 meses."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Impacto para nuestros usuarios -->
                    <div>
                        <div class="section-header" data-section="impacto">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="zap" class="purple-theme"></i>
                                Impacto para nuestros usuarios
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="impacto-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="bg-gray-50 border-l-4 p-4 rounded-r-lg mb-4" style="border-color: #5501F1;">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold mb-1 purple-theme">Total de tickets facturados</h4>
                                        </div>
                                        <div class="text-3xl font-bold purple-theme">+$2.2M USD</div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 border-l-4 p-4 rounded-r-lg" style="border-color: #5501F1;">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold mb-1 purple-theme">Deducción de IVA</h4>
                                            <p class="text-sm text-gray-600">Valor aproximado</p>
                                        </div>
                                        <div class="text-3xl font-bold purple-theme">+$352K USD</div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 p-4 rounded-r-lg mt-4" style="border-color: #22c55e;">
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div>
                                            <h4 class="font-semibold mb-1 text-green-700">ARPU Competitivo</h4>
                                            <div class="text-2xl font-bold text-green-600">$13.18 USD</div>
                                            <p class="text-xs text-gray-600">vs $8-15 industria</p>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold mb-1 text-green-700">Crecimiento YoY</h4>
                                            <div class="text-2xl font-bold text-green-600">+91.7%</div>
                                            <p class="text-xs text-gray-600">Julio 2025 vs 2024</p>
                                        </div>
                                        <div>
                                            <h4 class="font-semibold mb-1 text-green-700">Growth Multiple</h4>
                                            <div class="text-2xl font-bold text-green-600">110.2x</div>
                                            <p class="text-xs text-gray-600">Desde 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Plan de Escalamiento -->
                    <div>
                        <div class="section-header" data-section="escalamiento">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="rocket" class="purple-theme"></i>
                                Plan de Escalamiento 2025-2026
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="escalamiento-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- Fase 1: Optimización (Q4 2025) -->
                                    <div class="bg-white p-4 rounded-lg shadow-md border-l-4" style="border-color: #5501F1;">
                                        <h4 class="text-xl font-bold mb-3 purple-theme">Fase 1: Optimización</h4>
                                        <p class="text-sm text-gray-600 mb-3">Q4 2025 - Q1 2026</p>
                                        <ul class="space-y-2">
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                                <span><strong>Retention:</strong> Reducir churn de 57% a 35%</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                                <span><strong>Upsell:</strong> Activar sistema automático</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                                <span><strong>B2B:</strong> Lanzar canal corporativo</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2 purple-bg"></span>
                                                <span><strong>Target:</strong> MRR $10K+ (15 clientes B2B)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Fase 2: Expansión (2026) -->
                                    <div class="bg-white p-4 rounded-lg shadow-md border-l-4" style="border-color: #6965CA;">
                                        <h4 class="text-xl font-bold mb-3" style="color: #6965CA;">Fase 2: Expansión</h4>
                                        <p class="text-sm text-gray-600 mb-3">2026</p>
                                        <ul class="space-y-2">
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2" style="background-color: #6965CA;"></span>
                                                <span><strong>Geografía:</strong> Colombia, Chile, Argentina</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2" style="background-color: #6965CA;"></span>
                                                <span><strong>Producto:</strong> Features IA avanzadas</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2" style="background-color: #6965CA;"></span>
                                                <span><strong>Partnerships:</strong> Bancos y contadores</span>
                                            </li>
                                            <li class="flex items-baseline gap-2">
                                                <span class="w-2 h-2 rounded-full inline-block mt-2" style="background-color: #6965CA;"></span>
                                                <span><strong>Target:</strong> $25K MRR, 5% market share</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <h4 class="font-semibold mb-1 purple-theme">Impacto Proyectado 24 meses</h4>
                                            <p class="text-sm text-gray-600">Con plan de escalamiento ejecutado</p>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-2xl font-bold purple-theme">$300K ARR</div>
                                            <div class="text-sm text-gray-600">+1,200 usuarios pagados</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Crecimiento -->
                    <div>
                        <div class="section-header" data-section="crecimiento">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="bar-chart-2" class="purple-theme"></i>
                                Crecimiento (Histórico y proyectado 2025)
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="crecimiento-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- Ingresos por año -->
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="font-semibold mb-8 purple-theme">Ventas (USD)</h4>
                                        <div class="h-40 relative">
                                            <div class="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
                                                <!-- 2023 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-16 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">$6,088 USD</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2023</span>
                                                </div>
                                                
                                                <!-- 2024 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-28 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">$22,050 USD</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2024</span>
                                                </div>
                                                
                                                <!-- 2025 - Dividido en actual y proyección -->
                                                <div class="flex flex-col items-center">
                                                    <div class="relative w-16">
                                                        <!-- Parte proyectada (superior) - Lo que falta -->
                                                        <div class="w-16 rounded-t-lg h-16 bg-purple-200">
                                                            <div class="absolute -top-9 w-16 text-center text-xs font-bold">$47,097 USD</div>
                                                        </div>
                                                        <!-- Parte actual (inferior) - Lo que ya tienes -->
                                                        <div class="w-16 h-16 purple-bg rounded-b-lg"></div>
                                                        <!-- Línea divisoria actual/proyección con marcador -->
                                                        <div class="absolute top-16 w-16 border-t border-white border-dashed">
                                                            <div class="absolute -right-20 -top-3 text-xs">
                                                                <div class="bg-white text-xs px-1 py-0 rounded-sm border border-purple-200">$23,344 (actual)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="text-xs mt-1 font-semibold">2025</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Crecimiento porcentual -->
                                        <div class="mt-6 flex justify-around">
                                            <div class="text-center">
                                                <div class="text-sm font-semibold purple-theme">+262%</div>
                                                <div class="text-xs text-gray-600">vs 2023</div>
                                            </div>
                                            <div class="text-center">
                                                <div class="text-sm font-semibold purple-theme">+114%</div>
                                                <div class="text-xs text-gray-600">vs 2024</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Usuarios por año -->
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <h4 class="font-semibold mb-8 purple-theme"># Usuarios Pagados</h4>
                                        <div class="h-40 relative">
                                            <div class="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
                                                <!-- 2023 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-8 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">48</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2023</span>
                                                </div>
                                                
                                                <!-- 2024 -->
                                                <div class="flex flex-col items-center">
                                                    <div class="w-16 rounded-t h-24 purple-bg">
                                                        <div class="absolute -top-6 w-16 text-center text-xs font-bold">178</div>
                                                    </div>
                                                    <span class="text-xs mt-1">2024</span>
                                                </div>
                                                
                                                <!-- 2025 - Dividido en actual y proyección -->
                                                <div class="flex flex-col items-center">
                                                    <div class="relative w-16">
                                                        <!-- Parte proyectada (superior) - Lo que falta -->
                                                        <div class="w-16 rounded-t-lg h-8 bg-purple-200">
                                                            <div class="absolute -top-9 w-16 text-center text-xs font-bold">310</div>
                                                        </div>
                                                        <!-- Parte actual (inferior) - Lo que ya tienes -->
                                                        <div class="w-16 h-24 purple-bg rounded-b-lg"></div>
                                                        <!-- Marcador actual -->
                                                        <div class="absolute top-8 w-16 border-t border-white border-dashed">
                                                            <div class="absolute -right-14 -top-3 text-xs">
                                                                <div class="bg-white text-xs px-1 py-0 rounded-sm">251 (actual)</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span class="text-xs mt-1 font-semibold">2025</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Crecimiento porcentual -->
                                        <div class="mt-6 flex justify-around">
                                            <div class="text-center">
                                                <div class="text-sm font-semibold purple-theme">+271%</div>
                                                <div class="text-xs text-gray-600">vs 2023</div>
                                            </div>
                                            <div class="text-center">
                                                <div class="text-sm font-semibold purple-theme">+74%</div>
                                                <div class="text-xs text-gray-600">vs 2024</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <div class="flex flex-col md:flex-row justify-between items-center">
                                        <p class="text-sm text-gray-600 italic">Proyección basada en la tendencia actual de crecimiento.</p>
                                        <div class="flex items-center mt-2 md:mt-0">
                                            <div class="w-3 h-3 purple-bg mr-1"></div>
                                            <span class="text-xs mr-3">Datos reales</span>
                                            <div class="w-3 h-3 purple-bg opacity-40 mr-1"></div>
                                            <span class="text-xs">Proyección</span>
                                        </div>
                                    </div>
                                </div>
                    </div>

                    <!-- Termsheet Strategic Partnership -->
                    <div>
                        <div class="section-header" data-section="partnership">
                            <div class="flex items-center gap-2 font-semibold text-xl purple-theme">
                                <i data-lucide="handshake" class="purple-theme"></i>
                                Termsheet - Partnership Estratégico B2B
                            </div>
                            <i data-lucide="chevron-up" class="purple-theme chevron"></i>
                        </div>
                        <div class="section-content" id="partnership-content">
                            <div class="mt-3 ml-4 md:ml-8">
                                <!-- Header con valor del acuerdo -->
                                <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-6 text-center">
                                    <h3 class="text-2xl font-bold mb-2">$25,000 USD Investment</h3>
                                    <p class="text-lg">Partnership estratégico para acelerar canal B2B</p>
                                    <div class="mt-3 text-sm opacity-90">Valuación post-money: $500K USD</div>
                                </div>
                                
                                <!-- Estructura principal del deal -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <!-- Investment Structure -->
                                    <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                                        <div class="text-center mb-4">
                                            <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center purple-bg">
                                                <i data-lucide="banknote" class="text-white text-xl"></i>
                                            </div>
                                            <h4 class="text-xl font-bold purple-theme">Estructura de Inversión</h4>
                                        </div>
                                        
                                        <div class="space-y-4">
                                            <div class="bg-purple-50 p-4 rounded-lg">
                                                <div class="text-center">
                                                    <div class="text-2xl font-bold purple-theme">5%</div>
                                                    <div class="text-sm text-gray-600">Equity Base Garantizado</div>
                                                    <div class="text-xs mt-1">Vesting 4 años • Cliff 6 meses</div>
                                                </div>
                                            </div>
                                            
                                            <div class="text-center text-sm text-gray-600">
                                                <strong>Modalidades de pago:</strong>
                                            </div>
                                            
                                            <div class="space-y-2 text-sm">
                                                <div class="flex items-center gap-2">
                                                    <div class="w-2 h-2 rounded-full purple-bg"></div>
                                                    <span><strong>Opción A:</strong> Préstamo 12% anual</span>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <div class="w-2 h-2 rounded-full purple-bg"></div>
                                                    <span><strong>Opción B:</strong> Capitalización por equity</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Performance Equity -->
                                    <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
                                        <div class="text-center mb-4">
                                            <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-green-600">
                                                <i data-lucide="trending-up" class="text-white text-xl"></i>
                                            </div>
                                            <h4 class="text-xl font-bold text-green-700">Performance Equity</h4>
                                        </div>
                                        
                                        <div class="space-y-4">
                                            <div class="bg-green-50 p-4 rounded-lg text-center">
                                                <div class="text-lg font-bold text-green-700">+0.5%</div>
                                                <div class="text-sm text-gray-600">Por cada $10K ARR B2B</div>
                                                <div class="text-xs mt-1">Activo y mantenido 6+ meses</div>
                                            </div>
                                            
                                            <div class="space-y-2 text-sm">
                                                <div class="flex justify-between">
                                                    <span>Timeline máximo:</span>
                                                    <span class="font-semibold">24 meses</span>
                                                </div>
                                                <div class="flex justify-between">
                                                    <span>Cap total:</span>
                                                    <span class="font-semibold text-green-700">10% equity</span>
                                                </div>
                                                <div class="flex justify-between">
                                                    <span>Max performance:</span>
                                                    <span class="font-semibold">+5% adicional</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Uso de Fondos Visual -->
                                <div class="bg-gray-50 p-6 rounded-lg mb-6">
                                    <h4 class="text-xl font-bold mb-4 text-center purple-theme">Uso de Fondos - $25,000 USD</h4>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <!-- Plataforma B2B -->
                                        <div class="bg-white p-4 rounded-lg text-center border-l-4 border-blue-500">
                                            <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-blue-500">
                                                <i data-lucide="code" class="text-white"></i>
                                            </div>
                                            <div class="text-2xl font-bold text-blue-600">40%</div>
                                            <div class="text-lg font-semibold mb-2">$10,000</div>
                                            <div class="text-sm text-gray-600">
                                                <div class="font-medium">Plataforma B2B</div>
                                                <div class="mt-1">• API & Automatización</div>
                                                <div>• Equipo subcontratado</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Talent -->
                                        <div class="bg-white p-4 rounded-lg text-center border-l-4 border-purple-500">
                                            <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center purple-bg">
                                                <i data-lucide="users" class="text-white"></i>
                                            </div>
                                            <div class="text-2xl font-bold purple-theme">40%</div>
                                            <div class="text-lg font-semibold mb-2">$10,000</div>
                                            <div class="text-sm text-gray-600">
                                                <div class="font-medium">Talent</div>
                                                <div class="mt-1">• Mid-Senior Developer</div>
                                                <div>• Vendedor B2B</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Marketing -->
                                        <div class="bg-white p-4 rounded-lg text-center border-l-4 border-green-500">
                                            <div class="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-green-500">
                                                <i data-lucide="megaphone" class="text-white"></i>
                                            </div>
                                            <div class="text-2xl font-bold text-green-600">20%</div>
                                            <div class="text-lg font-semibold mb-2">$5,000</div>
                                            <div class="text-sm text-gray-600">
                                                <div class="font-medium">Marketing</div>
                                                <div class="mt-1">• Campañas B2B</div>
                                                <div>• Programa referidos</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Simulator -->
                                <div class="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
                                    <h4 class="text-lg font-bold mb-4 text-center purple-theme">Simulador de Performance Equity</h4>
                                    
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div class="bg-white p-3 rounded-lg shadow-sm">
                                            <div class="text-sm text-gray-600">$10K ARR</div>
                                            <div class="text-lg font-bold purple-theme">5.5%</div>
                                            <div class="text-xs text-gray-500">Total equity</div>
                                        </div>
                                        <div class="bg-white p-3 rounded-lg shadow-sm">
                                            <div class="text-sm text-gray-600">$30K ARR</div>
                                            <div class="text-lg font-bold purple-theme">6.5%</div>
                                            <div class="text-xs text-gray-500">Total equity</div>
                                        </div>
                                        <div class="bg-white p-3 rounded-lg shadow-sm">
                                            <div class="text-sm text-gray-600">$50K ARR</div>
                                            <div class="text-lg font-bold purple-theme">7.5%</div>
                                            <div class="text-xs text-gray-500">Total equity</div>
                                        </div>
                                        <div class="bg-white p-3 rounded-lg shadow-sm border-2 border-purple-200">
                                            <div class="text-sm text-gray-600">$100K ARR</div>
                                            <div class="text-lg font-bold purple-theme">10%</div>
                                            <div class="text-xs text-purple-600 font-semibold">Max equity</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Pilot Program -->
                                <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-200">
                                    <div class="text-center mb-4">
                                        <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center bg-yellow-500">
                                            <i data-lucide="zap" class="text-white text-xl"></i>
                                        </div>
                                        <h4 class="text-xl font-bold text-yellow-700">Programa Pilot</h4>
                                        <p class="text-sm text-gray-600">Validación antes del acuerdo completo</p>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div class="text-center">
                                            <div class="text-lg font-bold text-yellow-600">$5,000</div>
                                            <div class="text-sm text-gray-600">Inversión inicial</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="text-lg font-bold text-yellow-600">1%</div>
                                            <div class="text-sm text-gray-600">Equity provisional</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="text-lg font-bold text-yellow-600">90 días</div>
                                            <div class="text-sm text-gray-600">Timeline validación</div>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-4 bg-yellow-50 p-3 rounded-lg">
                                        <div class="text-sm font-semibold mb-2">Targets del Pilot:</div>
                                        <div class="text-sm space-y-1">
                                            <div>• 3-5 leads B2B calificados</div>
                                            <div>• 2 demos completos</div>
                                            <div>• 1 propuesta formal enviada</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Bottom CTA -->
                                <div class="mt-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-lg">
                                    <p class="font-semibold">"Partnership estratégico para acelerar el canal B2B con incentivos alineados y riesgo balanceado"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="purple-bg text-white p-4 md:p-4 text-center">
                <p class="text-sm md:text-base">© 2025 Fotofacturas - $3.2K MRR • 147% CAGR • Ready for B2B Scaling</p>
            </div>
        </div>
    `;

    // Inicializar iconos de Lucide
    lucide.createIcons();

    // Configurar eventos para las secciones plegables
    setupSectionEvents();

    // Actualizar elementos responsivos
    updateResponsiveElements();
}
// Configurar eventos para las secciones plegables
function setupSectionEvents() {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const sectionName = this.getAttribute('data-section');
            const content = document.getElementById(`${sectionName}-content`);
            const chevron = this.querySelector('.chevron');

            // Cambiar el HTML del ícono directamente en lugar de cambiar el atributo y reinicializarlo
            if (chevron.getAttribute('data-lucide') === 'chevron-up') {
                // Guarda el ícono actual
                const oldIcon = chevron.innerHTML;
                
                // Cambia el atributo
                chevron.setAttribute('data-lucide', 'chevron-down');
                
                // Clona y reemplaza el nodo para mantener el mismo estilo
                const newChevron = chevron.cloneNode(true);
                newChevron.innerHTML = oldIcon;
                chevron.parentNode.replaceChild(newChevron, chevron);
                
                // Inicializa el nuevo ícono
                lucide.createIcons({
                    elements: [newChevron]
                });
            } else {
                // Similar al caso anterior pero invirtiendo
                const oldIcon = chevron.innerHTML;
                chevron.setAttribute('data-lucide', 'chevron-up');
                
                const newChevron = chevron.cloneNode(true);
                newChevron.innerHTML = oldIcon;
                chevron.parentNode.replaceChild(newChevron, chevron);
                
                lucide.createIcons({
                    elements: [newChevron]
                });
            }

            // Mostrar/ocultar contenido
            content.classList.toggle('hidden');
            sections[sectionName] = !sections[sectionName];
        });
    });
}

// Actualizar elementos responsivos
function updateResponsiveElements() {
    const flowDiagram = document.getElementById('flow-diagram');
    const connector1 = document.getElementById('connector-1');
    const connector2 = document.getElementById('connector-2');

    if (flowDiagram) {
        if (isMobile) {
            flowDiagram.classList.remove('flex-row');
            flowDiagram.classList.add('flex-col');

            connector1.classList.remove('h-0.5', 'w-8', 'md:w-16');
            connector1.classList.add('w-0.5', 'h-8');

            connector2.classList.remove('h-0.5', 'w-8', 'md:w-16');
            connector2.classList.add('w-0.5', 'h-8');
        } else {
            flowDiagram.classList.remove('flex-col');
            flowDiagram.classList.add('flex-row');

            connector1.classList.remove('w-0.5', 'h-8');
            connector1.classList.add('h-0.5', 'w-8', 'md:w-16');

            connector2.classList.remove('w-0.5', 'h-8');
            connector2.classList.add('h-0.5', 'w-8', 'md:w-16');
        }
    }
}

// Función para cerrar sesión (se puede agregar un botón si es necesario)
function logout() {
    localStorage.removeItem('fotofacturas_auth');
    isAuthenticated = false;
    location.reload();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
