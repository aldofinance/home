import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Politica() {
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
                    Aviso de Privacidad
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-6 text-justify text-black leading-relaxed">

                    {/* Sección 1 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            1. Identidad y Domicilio del Responsable
                        </p>
                        <p className="mt-2">
                            <strong>Grupo Codiaz S.A.S. de C.V.</strong> (en lo sucesivo "Qontrol", "nosotros" o "nuestro"), con domicilio en Saltillo, Coahuila, México, es el responsable del tratamiento, uso y protección de sus datos personales. El presente Aviso de Privacidad regula el tratamiento de la información recabada a través de nuestros sitios web, aplicaciones móviles (desarrolladas en Expo), interfaces de programación (API) y plataformas SaaS (colectivamente, los "Servicios").
                        </p>
                    </div>

                    {/* Sección 2 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            2. Datos Personales y Técnicos Objeto de Tratamiento
                        </p>
                        <p className="mt-2">
                            Para la prestación de nuestros servicios SaaS y la seguridad de la infraestructura, recopilamos las siguientes categorías de datos:
                        </p>

                        <p className="font-semibold mt-3">A. Datos de Identificación y Contacto:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Nombre completo, correo electrónico corporativo y de contacto, teléfono y cargo.</li>
                            <li>Identificadores de cuenta y credenciales cifradas (hash unidireccional vía Bcrypt).</li>
                            <li>Verificación de identidad mediante códigos dinámicos de un solo uso (OTP) enviados a su correo electrónico.</li>
                        </ul>

                        <p className="font-semibold mt-3">B. Datos Fiscales y de Representación Legal:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Registro Federal de Contribuyentes (RFC) y razón social.</li>
                            <li>Dirección fiscal y datos necesarios para la emisión de Comprobantes Fiscales Digitales por Internet (CFDI).</li>
                            <li>Resultado de la consulta algorítmica y verificación contra listas públicas del Servicio de Administración Tributaria (SAT) respecto al Artículo 69-B del Código Fiscal de la Federación (EFOS).</li>
                        </ul>

                        <p className="font-semibold mt-3">C. Datos de Operación y Contenido del Usuario (Evidencias Normativas):</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Fotografías, archivos adjuntos, firmas digitales y registros generados en inspecciones de campo.</li>
                            <li>Metadatos de geolocalización precisa (coordenadas GPS) capturados exclusivamente al momento de la toma de evidencias en aplicaciones móviles (previa autorización del dispositivo).</li>
                        </ul>

                        <p className="font-semibold mt-3">D. Telemetría de Red, Seguridad y Prevención de Abuso:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Dirección IP, agente de usuario (User-Agent), tipo de navegador y sistema operativo.</li>
                            <li>Tokens de sesión activa (`session_token`) para control de inicio de sesión único.</li>
                            <li>Puntuación de riesgo anti-bot generada de forma pasiva por Google reCAPTCHA v3.</li>
                            <li>Validación de dominios de correo para bloqueo automatizado de servicios de correo temporal o desechables.</li>
                            <li>Registros de errores y excepciones del sistema capturados mediante Sentry.</li>
                        </ul>
                    </div>

                    {/* Sección 3 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            3. Finalidades del Tratamiento de Datos
                        </p>
                        <p className="mt-2">
                            Tratamos sus datos personales conforme a las siguientes finalidades:
                        </p>

                        <p className="font-semibold mt-3">Finalidades Primarias (Estricta necesidad para la relación jurídica y el servicio):</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Proporcionar el acceso y la funcionalidad del software SaaS Qontrol.</li>
                            <li>Autenticar la identidad del usuario y validar la legítima existencia comercial de las empresas registradas.</li>
                            <li>Prevenir el fraude fiscal y verificar la validez tributaria del RFC registrado.</li>
                            <li>Prevenir accesos simultáneos no autorizados mediante políticas de sesión única.</li>
                            <li>Almacenar y organizar las evidencias, firmas y reportes normativos en bases de datos administradas.</li>
                            <li>Procesar pagos y emitir la facturación correspondiente.</li>
                        </ul>

                        <p className="font-semibold mt-3">Finalidades Secundarias (Mejora continua y seguridad operativa):</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Monitoreo de rendimiento, detección de fallas de código y corrección de bugs en tiempo real.</li>
                            <li>Protección perimetral de la red, mitigación de ataques de denegación de servicio (DDoS) y detección de bots.</li>
                            <li>Análisis estadístico anonimizado de uso de la plataforma.</li>
                        </ul>
                        <p className="text-sm italic mt-2 text-gray-700">
                            En caso de que no desee que sus datos personales sean tratados para las finalidades secundarias, puede manifestar su negativa enviando un correo a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline">legal@theqontrol.com</a>.
                        </p>
                    </div>

                    {/* Sección 4 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            4. Transferencia de Datos y Subencargados del Tratamiento
                        </p>
                        <p className="mt-2">
                            Qontrol no comercializa, vende ni renta sus datos personales. Para la prestación operativa del servicio SaaS, transferimos datos técnicos e información estrictamente necesaria a los siguientes subencargados (<em>Data Processors</em>):
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>
                                <strong>Supabase Inc. (Infraestructura AWS):</strong> Alojamiento de bases de datos PostgreSQL, autenticación de usuarios y almacenamiento de evidencias (fotografías/firmas).
                            </li>
                            <li>
                                <strong>Render Services, Inc.:</strong> Alojamiento de servidores backend y ejecución de la API principal.
                            </li>
                            <li>
                                <strong>Cloudflare, Inc.:</strong> Seguridad perimetral, Web Application Firewall (WAF), certificados SSL/TLS y red de distribución de contenido (CDN).
                            </li>
                            <li>
                                <strong>Google LLC (reCAPTCHA v3):</strong> Evaluación pasiva de comportamiento técnico para la prevención de registros automatizados por bots.
                            </li>
                            <li>
                                <strong>Functional Software, Inc. (Sentry):</strong> Diagnóstico de errores técnicos y monitoreo de estabilidad del sistema.
                            </li>
                            <li>
                                <strong>Servicio de Administración Tributaria (SAT):</strong> Consulta automatizada de listas públicas de cumplimiento normativo (Art. 69-B del CFF).
                            </li>
                        </ul>
                    </div>

                    {/* Sección 5 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            5. Cookies y Tecnologías de Rastreo Técnico
                        </p>
                        <p className="mt-2">
                            Utilizamos cookies técnicas necesarias y almacenamiento local (<em>LocalStorage</em>) para el mantenimiento de sesiones activas. Las cookies de sesión se emiten con configuraciones de seguridad <code>SameSite=Lax</code> y la bandera <code>Secure</code> bajo conexiones cifradas HTTPS. La desactivación de estas tecnologías esenciales impedirá el correcto funcionamiento de la plataforma.
                        </p>
                    </div>

                    {/* Sección 6 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            6. Derechos ARCO y Revocación del Consentimiento
                        </p>
                        <p className="mt-2">
                            Usted o su representante legal tienen derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales.
                        </p>
                        <p className="mt-2">
                            <strong>Procedimiento:</strong> Deberá enviar una solicitud formal por escrito al correo <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a> desde la cuenta de correo registrada. La solicitud debe incluir: (i) Nombre del titular y correo de registro, (ii) Documento que acredite su identidad o representación legal, y (iii) Descripción clara de los datos respecto de los cuales busca ejercer el derecho.
                        </p>
                        <p className="text-sm italic mt-2 text-gray-700">
                            Nota de Cancelación: La eliminación total de una cuenta implica la purga automatizada e irreversible de las evidencias e imágenes almacenadas en Supabase. Datos de facturación se conservarán durante los plazos legalmente exigidos por la legislación fiscal mercantil mexicana.
                        </p>
                    </div>

                    {/* Sección 7 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            7. Retención y Medidas de Seguridad
                        </p>
                        <p className="mt-2">
                            Implementamos medidas de seguridad técnicas y administrativas alineadas a la industria: cifrado en tránsito mediante TLS 1.3, cifrado en reposo AES-256 en bases de datos y almacenamiento de archivos, hashing de contraseñas con Bcrypt (cost 10) y aislamiento de datos a nivel de fila (RLS). Los registros de auditoría y errores en Sentry se purgan automáticamente tras un período máximo de 90 días naturales.
                        </p>
                    </div>

                    {/* Sección 8 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            8. Transferencias Internacionales
                        </p>
                        <p className="mt-2">
                            Debido a la naturaleza de la arquitectura distribuida en la nube, sus datos pueden ser procesados en centros de datos ubicados en los Estados Unidos de América operados por nuestros proveedores de infraestructura (AWS/Supabase, Render, Cloudflare, Google, Sentry). Dichas transferencias se realizan bajo estándares de seguridad equiparables a los exigidos por la LFPDPPP mexicana.
                        </p>
                    </div>

                    {/* Sección 9 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            9. Cambios al Aviso de Privacidad
                        </p>
                        <p className="mt-2">
                            Nos reservamos el derecho de modificar o actualizar este Aviso de Privacidad en cualquier momento. Las modificaciones estarán disponibles en el panel web y la versión actualizada surtirá efectos a partir de su publicación.
                        </p>
                    </div>

                    {/* Sección 10 */}
                    <div>
                        <p className="font-bold text-lg text-black">
                            10. Contacto Legal
                        </p>
                        <p className="mt-2">
                            Para dudas sobre el tratamiento de sus datos o sobre el presente aviso, contacte a nuestro Departamento de Privacidad en:
                        </p>
                        <p className="mt-1">
                            <strong>Correo electrónico:</strong> <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline">legal@theqontrol.com</a><br />
                            <strong>Empresa:</strong> Grupo Codiaz S.A.S. de C.V.<br />
                            <strong>Jurisdicción:</strong> Saltillo, Coahuila, México.
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}