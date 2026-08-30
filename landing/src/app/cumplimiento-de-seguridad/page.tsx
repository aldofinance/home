import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Cumplimiento() {
    return (
        <div style={{ fontFamily: "var(--font-montserrat)" }}>
            <Navbar />
            <main className="w-full pt-28 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
                {/* Fecha fija */}
                <p className="text-center text-sm font-bold text-brand mb-2">
                    Ultima Actualización: 30 de agosto de 2026
                </p>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
                    Cumplimiento de Seguridad
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-4 text-justify text-black leading-relaxed">
                    <p>
                        En Qontrol (operado por <strong>Grupo Codiaz S.A.S. de C.V.</strong>), nos comprometemos a garantizar la disponibilidad continua de nuestros servicios y a proteger la confidencialidad, integridad y disponibilidad de la información de nuestros usuarios. Empleamos estándares y arquitecturas de seguridad de clase mundial para resguardar la plataforma contra accesos no autorizados, divulgación, alteración o pérdida de datos.
                    </p>
                    <p>
                        La dirección de seguridad de Qontrol está administrada por el equipo de arquitectura e infraestructura de Grupo Codiaz S.A.S. de C.V.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        1. Seguridad de la Infraestructura y Confiabilidad
                    </p>

                    <p className="font-semibold mt-4">Alojamiento y Proveedores de Nube</p>
                    <p>
                        La plataforma Qontrol no opera servidores físicos propios; se despliega sobre infraestructura de nube distribuida y gestionada por proveedores líderes en la industria que cuentan con certificaciones internacionales de seguridad (SOC 2 Type II, ISO 27001):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Render:</strong> Alojamiento de la arquitectura backend y ejecución de la API principal, proporcionando aislamiento de procesos y entornos de ejecución seguros.</li>
                        <li><strong>Supabase:</strong> Gestión de base de datos PostgreSQL y almacenamiento de objetos (archivos y evidencias fotográficas) con aislamiento a nivel de fila (RLS) y encriptación nativa.</li>
                        <li><strong>Cloudflare:</strong> Capa de seguridad perimetral, Firewall de Aplicaciones Web (WAF), mitigación de ataques DDoS de capa 3, 4 y 7, y optimización de tráfico mediante Red de Distribución de Contenido (CDN).</li>
                    </ul>

                    <p className="font-semibold mt-4">Confiabilidad y Disponibilidad</p>
                    <p>
                        Nos esforzamos por mantener la más alta disponibilidad operativa en nuestros Servicios SaaS. La telemetría de red y el estado operativo de los proveedores subyacentes son monitoreados continuamente para mitigar puntos únicos de falla.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        2. Continuidad del Negocio y Recuperación ante Desastres (DRP)
                    </p>

                    <p className="font-semibold mt-4">Respaldo de Datos</p>
                    <p>
                        Se ejecutan respaldos automatizados diarios y cifrados de la base de datos a través de la infraestructura de Supabase. Los respaldos se almacenan de manera redundante en múltiples zonas de disponibilidad.
                    </p>

                    <p className="font-semibold mt-4">Aislamiento y Conmutación por Error</p>
                    <p>
                        Ante una falla catastrófica de zona en los centros de datos primarios, la infraestructura en la nube está configurada para redirigir el tráfico a través de Cloudflare hacia nodos secundarios. Grupo Codiaz S.A.S. de C.V. realiza pruebas periódicas de restauración de datos para garantizar un Tiempo Objetivo de Recuperación (RTO) y un Punto Objetivo de Recuperación (RPO) mínimos.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        3. Seguridad de los Datos y Cifrado
                    </p>

                    <p className="font-semibold mt-4">Cifrado en Tránsito y en Reposo</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>En Tránsito:</strong> Todo el tráfico de red entre los dispositivos de los usuarios, las aplicaciones móviles (desarrolladas con Expo) y nuestros servidores está forzado a través de HTTPS/TLS 1.3 mediante certificados gestionados por Cloudflare y Render.</li>
                        <li><strong>En Reposo:</strong> Todos los datos almacenados en nuestras bases de datos PostgreSQL y los archivos de evidencias (fotografías, documentos) en Supabase están cifrados utilizando el estándar AES-256.</li>
                    </ul>

                    <p className="font-semibold mt-4">Tratamiento de Información y Privacidad</p>
                    <p>
                        Qontrol almacena la información estrictamente necesaria para la prestación del servicio SaaS (evidencias, reportes, firmas digitales y metadatos de ubicación GPS). La gestión de identidades y credenciales de acceso se delega a <strong>Clerk</strong>, lo que significa que Qontrol nunca almacena contraseñas en texto plano dentro de sus bases de datos primarias.
                    </p>

                    <p className="font-semibold mt-4">Retención y Eliminación de Datos</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Registros de Sistema:</strong> Los registros de auditoría y telemetría de errores se conservan por un período de hasta 90 días naturales antes de su purga automática.</li>
                        <li><strong>Eliminación por Usuario:</strong> Cuando un Usuario solicita la cancelación de su cuenta o la eliminación de datos, el sistema programa un proceso automatizado para la purga definitiva de sus registros e imágenes en Supabase. Una vez ejecutada la eliminación, el proceso es irreversible.</li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        4. Seguridad en la Aplicación y Control de Acceso
                    </p>

                    <p className="font-semibold mt-4">Autenticación e Identidad (Clerk)</p>
                    <p>
                        La autenticación de usuarios está respaldada por la infraestructura de Clerk. Los usuarios pueden habilitar <strong>Autenticación de Múltiples Factores (MFA)</strong> para agregar una capa de seguridad adicional mediante aplicaciones de autenticación (TOTP).
                    </p>

                    <p className="font-semibold mt-4">Aislamiento de Cuentas (Multi-Tenancy)</p>
                    <p>
                        Qontrol utiliza políticas de Seguridad a Nivel de Fila (Row Level Security - RLS) en la base de datos. Esto garantiza de forma estricta que los datos de una organización o usuario sean inaccesibles para otras cuentas o inquilinos de la plataforma.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        5. Políticas Internas de Seguridad
                    </p>
                    <p>
                        Grupo Codiaz S.A.S. de C.V. mantiene políticas internas de seguridad que se revisan periódicamente, las cuales incluyen:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Control de Acceso de Personal:</strong> Principio de mínimo privilegio (PoLP) para el acceso del equipo de desarrollo a los entornos de producción.</li>
                        <li><strong>Gestión de Vulnerabilidades:</strong> Actualización continua de dependencias de software y análisis de código estático (SAST).</li>
                        <li><strong>Ciclo de Vida de Desarrollo Seguro (SDLC):</strong> Pruebas de integración y revisión de código obligatorias antes de cualquier despliegue en producción.</li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        6. Divulgación Responsable de Vulnerabilidades
                    </p>
                    <p>
                        Agradecemos la contribución de la comunidad de seguridad para mantener a Qontrol seguro. Si ha descubierto una vulnerabilidad de seguridad en nuestra plataforma, API o aplicaciones móviles, le solicitamos que nos la informe de manera responsable.
                    </p>
                    <p>
                        <strong>Cómo reportar:</strong>
                    </p>
                    <p>
                        Envíe un correo electrónico a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a> incluyendo:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-4">
                        <li>Descripción detallada de la vulnerabilidad.</li>
                        <li>Pasos necesarios para reproducir el problema (Proof of Concept).</li>
                        <li>Herramientas o entornos utilizados.</li>
                    </ol>
                    <p>
                        Nos comprometemos a revisar todos los reportes válidos, confirmar la recepción de la vulnerabilidad en un plazo razonable y trabajar en la corrección correspondiente antes de cualquier divulgación pública.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}