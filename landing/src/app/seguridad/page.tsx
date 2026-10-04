import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Cumplimiento() {
    return (
        <div style={{ fontFamily: "var(--font-montserrat)" }}>
            <Navbar />
            <main className="w-full pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                {/* Fecha fija */}
                <p className="text-center text-sm font-bold text-brand mb-2">
                    Ultima Actualización: 3 de octubre de 2026
                </p>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
                    Seguridad
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-6 text-justify text-black leading-relaxed">
                    <p>
                        En Qontrol (operado por <strong>Grupo Codiaz S.A.S. de C.V.</strong>), la seguridad, confidencialidad y disponibilidad de tus datos normativos son nuestra máxima prioridad. Diseñamos y operamos una arquitectura SaaS B2B multicapa orientada a proteger tu información contra accesos no autorizados, fraude e interrupciones operativas, alineándonos con los estándares de la industria y las mejores prácticas de ciberseguridad.
                    </p>

                    {/* Transparencia y Deslinde de Infraestructura */}
                    <div className="bg-gray-50 border-l-4 border-black p-4 rounded-r text-sm">
                        <p className="font-semibold text-black mb-1">Transparencia en Certificaciones de Infraestructura</p>
                        <p className="text-gray-700">
                            Qontrol opera sobre infraestructura de nube global de proveedores líderes que cuentan con certificaciones internacionales independientes (como ISO/IEC 27001 y SOC 2 Type II). Si bien la plataforma Qontrol no cuenta con un sello ISO propio independiente, está construida técnicamente bajo principios de seguridad por diseño (*Security by Design*) y defensas en profundidad.
                        </p>
                    </div>

                    <p className="font-bold text-lg mt-6">
                        1. Arquitectura de Infraestructura y Proveedores de Nube
                    </p>
                    <p>
                        Para garantizar estabilidad y rendimiento, delegamos componentes críticos de infraestructura en proveedores globales con altos estándares de cumplimiento:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Supabase Auth & PostgreSQL (Infraestructura AWS):</strong> Proveedor de identidad y base de datos relacional. Cuenta con encriptación nativa, aislamiento de datos y respaldo automatizado.
                        </li>
                        <li>
                            <strong>Render:</strong> Hosting de servicios backend y ejecución de la API principal con aislamiento de procesos y entornos de ejecución seguros.
                        </li>
                        <li>
                            <strong>Cloudflare:</strong> Capa de protección perimetral, Firewall de Aplicaciones Web (WAF), mitigación de ataques DDoS (capas 3, 4 y 7) y red de distribución de contenido (CDN).
                        </li>
                        <li>
                            <strong>Sentry:</strong> Monitoreo activo y captura de excepciones en tiempo real para la auditoría, prevención y respuesta inmediata ante fallas de software.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        2. Autenticación, Identidad y Control de Acceso
                    </p>
                    <p>
                        Implementamos mecanismos estrictos para proteger las cuentas de usuario y mitigar el acceso no autorizado:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Cifrado de Credenciales en Reposo:</strong> Las contraseñas están resguardadas mediante algoritmos de hash criptográfico unidireccional (<em>Bcrypt con factor de costo 10</em>) y gestionadas mediante proveedores de identidad seguros.
                        </li>
                        <li>
                            <strong>Verificación por Código Dinámico (OTP):</strong> Para activación de cuentas y recuperación de accesos, el sistema genera códigos dinámicos de 8 dígitos con tiempo de caducidad.
                        </li>
                        <li>
                            <strong>Doble Validación Corporativa:</strong> Cuando el correo de contacto corporativo difiere del correo del usuario administrador, exigimos la verificación independiente de ambas cuentas antes de activar la empresa.
                        </li>
                        <li>
                            <strong>Control de Sesión Única (Single Session Enforcement):</strong> Para prevenir el uso no autorizado de cuentas compartidas, el backend invalida automáticamente sesiones activas en otros dispositivos cuando se inicia una nueva sesión.
                        </li>
                        <li>
                            <strong>Reglas de Complejidad:</strong> Se exige una estructura mínima para contraseñas (al menos 8 caracteres, incluyendo letras, números y símbolos).
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        3. Protección Anti-Fraude, Bots y Controles Operativos
                    </p>
                    <p>
                        Mantenemos controles automatizados para garantizar la legitimidad de las empresas y usuarios registrados en la plataforma:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Análisis Anti-Bot (Google reCAPTCHA v3):</strong> Evaluamos de forma pasiva y continua las interacciones de registro para bloquear el tráfico automatizado malicioso sin generar fricción en el usuario.
                        </li>
                        <li>
                            <strong>Bloqueo de Correos Temporales:</strong> Filtramos el registro de cuentas creadas con dominios de correo desechable o temporal.
                        </li>
                        <li>
                            <strong>Validación Fiscal y Anti-Fraude (SAT Art. 69-B):</strong> Verificamos la validez de la clave RFC y realizamos la consulta automática en listas de Empresas que Facturan Operaciones Simuladas (EFOS).
                        </li>
                        <li>
                            <strong>Control de Frecuencia (Rate Limiting):</strong> Aplicamos temporizadores de enfriamiento exponencial en el reenvío de códigos para prevenir ataques de denegación de servicio o saturación de correos.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        4. Cifrado y Seguridad de Datos
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Datos en Tránsito:</strong> Toda la comunicación entre los usuarios, la aplicación web, aplicaciones móviles (Expo) y la API utiliza conexiones cifradas mediante HTTPS/TLS 1.3 con certificados administrados.
                        </li>
                        <li>
                            <strong>Datos en Reposo:</strong> La base de datos y el almacenamiento de evidencias (fotografías, firmas digitales y archivos) están protegidos con cifrado estándar AES-256.
                        </li>
                        <li>
                            <strong>Inmunidad a Inyecciones SQL:</strong> Todas las consultas a la base de datos se ejecutan mediante parámetros preparados, eliminando vectores de ataque por inyección de código.
                        </li>
                        <li>
                            <strong>Aislamiento de Clientes (Multi-Tenancy RLS):</strong> La base de datos aplica políticas de Seguridad a Nivel de Fila (<em>Row Level Security</em>), garantizando que la información de cada empresa sea inaccesible para otras cuentas.
                        </li>
                        <li>
                            <strong>Galletas y Cookies de Sesión:</strong> Emitidas con políticas de seguridad <code>SameSite=Lax</code> y la bandera <code>Secure</code> activa bajo conexiones HTTPS.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        5. Continuidad del Negocio y Respaldo
                    </p>
                    <p>
                        Se ejecutan respaldos automáticos diarios cifrados de la base de datos a través de la infraestructura de Supabase. El sistema utiliza transacciones atómicas (ACID), asegurando que si ocurre un error durante el proceso de registro u operación, los cambios se revierten inmediatamente de forma limpia.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        6. Retención, Borrado de Datos y Trazabilidad
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Logs de Auditoría:</strong> Registramos eventos clave del sistema y aceptación de términos (incluyendo versión, fecha y consentimiento) para cumplimiento probatorio. Los logs técnicos de errores se conservan por un periodo máximo de 90 días naturales.
                        </li>
                        <li>
                            <strong>Eliminación Definitiva:</strong> Ante la cancelación de una cuenta o solicitud explícita, se programa un proceso automatizado para la purga irreversible de registros, imágenes y evidencias en nuestros servidores.
                        </li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        7. Divulgación Responsable de Vulnerabilidades
                    </p>
                    <p>
                        Agradecemos el apoyo de la comunidad de ciberseguridad. Si identificas una vulnerabilidad o posible falla de seguridad en nuestros servicios web, móviles o API, te solicitamos que nos la informes de manera confidencial y responsable.
                    </p>
                    <p>
                        <strong>Proceso de reporte:</strong>
                    </p>
                    <p>
                        Envia un correo electrónico a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a> adjuntando:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-4">
                        <li>Descripción clara del hallazgo.</li>
                        <li>Pasos para reproducir la vulnerabilidad (Prueba de concepto / PoC).</li>
                        <li>Entorno o herramientas utilizadas.</li>
                    </ol>
                    <p>
                        Nos comprometemos a confirmar la recepción del reporte en un plazo razonable, evaluar el caso y aplicar las correcciones correspondientes sin publicar el hallazgo antes de su resolución.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}