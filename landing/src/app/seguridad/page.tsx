import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Cumplimiento() {
    return (
        <div style={{ fontFamily: "var(--font-montserrat)" }}>
            <Navbar />
            <main className="w-full pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                {/* Fecha fija */}
                <p className="text-center text-sm font-bold text-brand mb-2">
                    Última Actualización: 3 de octubre de 2026
                </p>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
                    Seguridad
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-6 text-justify text-black leading-relaxed">
                    <p>
                        En Qontrol (operado bajo la razón social <strong>Grupo Codiaz S.A.S. de C.V.</strong>), concebimos la ciberseguridad, el resguardo criptográfico y la confidencialidad de la información como el pilar fundamental de nuestra arquitectura operativa. Entendemos que la gestión normativo-corporativa de nuestros clientes exige estándares de tolerancia cero ante brechas de datos, accesos no autorizados o contingencias operativas. Por ello, hemos desplegado un ecosistema informático SaaS B2B estructurado bajo el principio de <strong>Defensa en Profundidad</strong> (<em>Defense-in-Depth</em>) y <strong>Seguridad desde el Diseño</strong> (<em>Security by Design & Default</em>), diseñado para satisfacer los requerimientos más estrictos de auditoría, gobernanza y cumplimiento corporativo.
                    </p>

                    {/* Transparencia y Deslinde de Infraestructura */}
                    <div className="bg-gray-50 border-l-4 border-black p-4 rounded-r text-sm">
                        <p className="font-semibold text-black mb-1">Declaración de Transparencia e Infraestructura Certificada</p>
                        <p className="text-black">
                            Qontrol consolida su seguridad física y lógica alojando y procesando datos exclusivamente sobre infraestructura de nube perimetral provista por líderes globales que ostentan acreditaciones e informes independientes de auditoría internacional (tales como <strong>ISO/IEC 27001:2022, SOC 1, SOC 2 Type II y SOC 3</strong>). Si bien la entidad comercial Qontrol no emite certificaciones ISO individuales a terceros, la plataforma ha sido programada, configurada y auditada internamente conforme a las mejores prácticas internacionales de ciberseguridad, OWASP Top 10 y marcos normativos de protección de datos en Latinoamérica.
                        </p>
                    </div>

                    <p className="font-bold text-lg mt-6">
                        1. Arquitectura de Nube Distribuida y Proveedores de Infraestructura
                    </p>
                    <p>
                        Para erradicar puntos únicos de falla (SPOF) y garantizar un rendimiento óptimo de nivel empresarial, delegamos el procesamiento, autenticación y almacenamiento en proveedores de clase mundial sujetados a estrictos acuerdos de procesamiento de datos:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Supabase Auth & PostgreSQL (Infraestructura AWS):</strong> Gestión de identidades, autenticación y base de datos relacional de alta disponibilidad sobre infraestructura Amazon Web Services (AWS). Implementa aislamiento lógico, encriptación nativa y redundancia multizona.
                        </li>
                        <li>
                            <strong>Render Services, Inc.:</strong> Entorno aislado de ejecución para el motor backend y la API REST principal, garantizando separación de procesos, ejecución sin estado (stateless) y contenedores seguros.
                        </li>
                        <li>
                            <strong>Cloudflare, Inc. (Red Perimetral):</strong> Escudo de protección perimetral, Firewall de Aplicaciones Web (WAF) avanzado, mitigación automática de ataques masivos de Denegación de Servicio Distribuido (DDoS capas 3, 4 y 7) y entrega acelerada mediante CDN global.
                        </li>
                        <li>
                            <strong>Sentry (Functional Software Inc.):</strong> Telemetría y monitoreo activo de excepciones de software en tiempo real, permitiendo la detección temprana de anomalías, prevención de vulnerabilidades y auditoría continua en entornos de producción.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        2. Cadena de Custodia, Inalterabilidad y Valor Probatorio de Evidencias
                    </p>
                    <p>
                        La información almacenada en Qontrol posee un altísimo valor estratégico y legal para el cumplimiento normativo de nuestros usuarios. Para asegurar su validez ante auditorías internas, inspecciones de autoridad o litigios, nuestra plataforma incorpora mecanismos de preservación de la prueba:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Inalterabilidad Criptográfica:</strong> Cada reporte, fotografía y documento adjunto generado en campo es procesado con sellado de tiempo y firmas digitales asociadas a la identidad del usuario ejecutor.
                        </li>
                        <li>
                            <strong>Trazabilidad Geográfica y Temporal (Geotagging):</strong> La recolección de evidencias fotográficas en aplicaciones móviles registra coordenadas GPS y metadatos del dispositivo de manera inalterable, impidiendo la manipulación remota o la falsificación de ubicación.
                        </li>
                        <li>
                            <strong>Principios de No Repudio:</strong> Los registros de auditoría vinculan de forma inequívoca cada acción dentro de la plataforma a una cuenta autenticada, garantizando la trazabilidad integral del ciclo de vida del dato.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        3. Autenticación Robusta, Identidad y Control de Accesos
                    </p>
                    <p>
                        Garantizamos que únicamente el personal expresamente autorizado por la organización cliente pueda acceder a la información confidencial mediante esquemas de autenticación multicapa:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Cifrado Criptográfico de Credenciales:</strong> Las contraseñas jamás se almacenan ni transmiten en texto plano. Se resguardan mediante funciones de hash criptográfico unidireccional con salado adaptativo (<em>Bcrypt con factor de costo 10</em>).
                        </li>
                        <li>
                            <strong>Autenticación de Múltiples Factores y Códigos Dinámicos (OTP):</strong> Para procedimientos sensibles, reactivaciones y recuperación de contraseñas, exigimos la verificación mediante códigos dinámicos de un solo uso de 8 dígitos con tiempo de caducidad estricto.
                        </li>
                        <li>
                            <strong>Verificación Dual Corporativa:</strong> Cuando la cuenta de contacto corporativo difiere del correo del usuario administrador principal, el sistema exige la validación cruzada e independiente de ambas casillas para activar el entorno empresarial.
                        </li>
                        <li>
                            <strong>Control de Sesión Única (Single Session Enforcement):</strong> Bloqueamos el uso compartido no autorizado de licencias e impedimos secuestros de sesión (Session Hijacking) mediante la invalidación automática de tokens previos al detectar un inicio de sesión simultáneo en un nuevo dispositivo.
                        </li>
                        <li>
                            <strong>Políticas de Contraseñas Fuertes:</strong> Se fuerzan algoritmos de validación en frontend y backend exigiendo una longitud mínima y combinación obligatoria de caracteres alfanuméricos y símbolos especiales.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        4. Controles Anti-Fraude, Protección Anti-Bot y Malla de Seguridad Fiscal
                    </p>
                    <p>
                        Incoporamos barreras proactivas para prevenir el uso indebido de la plataforma por parte de actores maliciosos o scripts automatizados:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Evaluación de Riesgo Pasivo (Google reCAPTCHA v3):</strong> Analizamos continuamente las métricas de comportamiento durante el registro e inicio de sesión para detener ataques automatizados (credential stuffing) sin entorpecer la experiencia del usuario legítimo.
                        </li>
                        <li>
                            <strong>Filtro Algorítmico de Correos Desechables:</strong> Mantenemos una lista negra de dominios temporales actualizada activamente para prevenir el registro de cuentas anónimas o spammers.
                        </li>
                        <li>
                            <strong>Verificación de Legitimidad Fiscal (SAT Art. 69-B):</strong> Validamos la estructura matemática del Registro Federal de Contribuyentes (RFC) de las empresas y realizamos búsquedas automatizadas contra los listados oficiales de Empresas que Facturan Operaciones Simuladas (EFOS), protegiendo la red corporativa de Qontrol.
                        </li>
                        <li>
                            <strong>Enfriamiento Exponencial (Rate Limiting):</strong> El sistema aplica límites de frecuencia en solicitudes sensibles (como el reenvío de OTPs) para mitigar vectores de ataque por fuerza bruta o saturación de canales SMTP.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        5. Cifrado Estricto de Datos y Seguridad a Nivel de Software
                    </p>
                    <p>
                        La confidencialidad de la información de nuestros clientes está blindada mediante estándares criptográficos reconocidos a nivel internacional:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Cifrado en Tránsito (In-Transit):</strong> Todo el canal de comunicación entre los clientes (web, app móvil en Expo y herramientas externas) y nuestros servidores opera forzosamente bajo cifrado HTTPS respaldado por protocolos TLS 1.3 con certificados gestionados por Cloudflare y Render.
                        </li>
                        <li>
                            <strong>Cifrado en Reposo (At-Rest):</strong> Las bases de datos PostgreSQL y las carpetas de almacenamiento masivo de objetos en Supabase Storage aplican algoritmos de cifrado simétrico bajo el estándar **AES-256**.
                        </li>
                        <li>
                            <strong>Inmunidad Total a Inyecciones SQL (SQLi):</strong> La totalidad de las interacciones con la base de datos se ejecutan mediante consultas parametrizadas y sentencias preparadas, neutralizando cualquier intento de inyección de código.
                        </li>
                        <li>
                            <strong>Aislamiento Estricto de Clientes (Multi-Tenancy RLS):</strong> Implementamos políticas de Seguridad a Nivel de Fila (<em>Row Level Security - RLS</em>) en el motor de base de datos. Esto garantiza una separación lógica absoluta, impidiendo técnica y matemáticamente que cualquier cliente acceda, consulte o modifique la información de otra organización.
                        </li>
                        <li>
                            <strong>Atributos de Seguridad en Cookies:</strong> Las cookies de sesión se emiten estrictamente con las banderas <code>SameSite=Lax</code>, <code>HttpOnly</code> y <code>Secure</code> activas bajo conexiones HTTPS.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        6. Ciclo de Vida de Desarrollo Seguro (DevSecOps)
                    </p>
                    <p>
                        El software de Qontrol evoluciona constantemente mediante procesos de actualización continuos que priorizan la estabilidad e integridad del código fuente:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Principio de Mínimo Privilegio (PoLP):</strong> El personal de ingeniería y desarrollo cuenta con accesos restringidos y autenticados con doble factor a los entornos de producción.
                        </li>
                        <li>
                            <strong>Análisis de Código y Dependencias (SAST):</strong> Evaluamos periódicamente el código fuente y las librerías de terceros para identificar y parchear vulnerabilidades conocidas antes de liberar cambios en producción.
                        </li>
                        <li>
                            <strong>Auditoría Interna de Modificaciones:</strong> Toda actualización requiere revisiones de código cruzadas y pruebas de integración antes de ser desplegada en la infraestructura en vivo.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        7. Continuidad del Negocio, Redundancia y Recuperación ante Desastres (DRP)
                    </p>
                    <p>
                        Garantizamos la disponibilidad ininterrumpida de sus operaciones normativas mediante planes de contingencia probados de forma periódica:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Respaldos Automatizados Diarios:</strong> La base de datos es respaldada automáticamente de forma diaria con copias cifradas almacenadas de manera redundante en múltiples zonas de disponibilidad geográfica.
                        </li>
                        <li>
                            <strong>Transacciones ACID y Atomicidad:</strong> Los flujos de registro y escritura crítica operan bajo transacciones SQL atómicas. Ante cualquier falla de red o error de ejecución, el sistema revierte los cambios (ROLLBACK) impidiendo la corrupción o inconsistencia de datos.
                        </li>
                        <li>
                            <strong>Conmutación por Error (Failover):</strong> Ante eventos de fuerza mayor o caídas de nodo en los centros de datos primarios, la capa perimetral redirige el tráfico hacia nodos alternativos, minimizando los Tiempos Objetivos de Recuperación (RTO) y Puntos Objetivos de Recuperación (RPO).
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        8. Trazabilidad de Auditoría, Retención y Purga Irreversible de Datos
                    </p>
                    <p>
                        Qontrol mantiene una política clara en cuanto al manejo del historial de operaciones y la disposición final de la información:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Bitácoras de Consentimiento y Auditoría:</strong> Almacenamos registros detallados de aceptación de términos legales, versión de políticas, fecha, hora e IP para otorgar plena certeza jurídica en revisiones normativas.
                        </li>
                        <li>
                            <strong>Retención Limitada de Telemetría:</strong> Los registros técnicos de errores y eventos de red recopilados para mantenimiento se depuran automáticamente tras un plazo máximo de 90 días naturales.
                        </li>
                        <li>
                            <strong>Derecho al Olvido y Borrado Irreversible:</strong> Cuando un usuario o empresa solicita la cancelación definitiva de su cuenta, el sistema ejecuta rutinas automatizadas para la purga total e irreversible de todos sus registros, fotografías y evidencias en la infraestructura en la nube, salvo aquellos datos que deban conservarse por disposición legal o fiscal mexicana.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        9. Cumplimiento Legal y Soberanía de la Información
                    </p>
                    <p>
                        Grupo Codiaz S.A.S. de C.V. es una entidad legalmente constituida bajo las leyes de los Estados Unidos Mexicanos. Operamos en pleno apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), garantizando el ejercicio irrestricto de los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), la transparencia en transferencias con subencargados internacionales y la observancia de la normativa de comercio electrónico vigente.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        10. Programa de Divulgación Responsable de Vulnerabilidades
                    </p>
                    <p>
                        En Qontrol valoramos y reconocemos las aportaciones de la comunidad de investigación en ciberseguridad para mantener la resiliencia de nuestro ecosistema. Si has descubierto una potencial vulnerabilidad de seguridad en nuestros servicios web, API o aplicaciones móviles, te solicitamos informarla de manera confidencial y coordinada.
                    </p>
                    <p>
                        <strong>Directrices de reporte:</strong>
                    </p>
                    <p>
                        Dirige un correo electrónico formal a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800 font-semibold">legal@theqontrol.com</a> incluyendo:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-4">
                        <li>Resumen técnico y vector del hallazgo.</li>
                        <li>Pasos detallados para reproducir la vulnerabilidad (Proof of Concept - PoC).</li>
                        <li>Entornos, sistemas operativos o herramientas utilizadas.</li>
                    </ol>
                    <p>
                        Nos comprometemos a acusar recibo de tu reporte en un plazo máximo de 48 horas hábiles, evaluar el impacto, priorizar la mitigación correspondiente y abstenernos de iniciar acciones legales siempre que se respeten las políticas de divulgación responsable y la privacidad de los datos de nuestros clientes.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}