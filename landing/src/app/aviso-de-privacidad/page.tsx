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
                <div className="space-y-4 text-justify text-black leading-relaxed">

                    <p className="font-bold text-lg mt-6">
                        1. Información General
                    </p>
                    <p>
                        Grupo Codiaz S.A.S. de C.V. ("Qontrol", "nosotros" o "nuestro") se compromete a proteger la privacidad y seguridad de la información que recopilamos, así como a mantener la transparencia sobre las formas en que procesamos y tratamos sus datos personales.
                    </p>
                    <p>
                        Esta Política de Privacidad (el "Aviso de Privacidad") establece nuestras políticas y prácticas para el manejo de la información que recopilamos de usted o sobre usted. Se aplica a los sitios web, aplicaciones móviles, API y servicios en línea que operamos y que enlazan con este Aviso de Privacidad (colectivamente, los "Servicios").
                    </p>
                    <p>
                        Al utilizar los Servicios, usted reconoce y acepta las prácticas descritas en este Aviso de Privacidad.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        2. Recopilación de Información
                    </p>
                    <p>
                        Recopilamos las siguientes categorías de información cuando usted utiliza nuestros Servicios:
                    </p>

                    <p className="font-semibold mt-4">
                        A. Información que usted nos proporciona directamente:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Información de Contacto e Identidad:</strong> Nombre completo, correo electrónico y datos de registro.</li>
                        <li><strong>Información de Inicio de Sesión:</strong> Credenciales de autenticación gestionadas de forma segura a través de nuestros proveedores (Clerk).</li>
                        <li><strong>Información de Perfil y Empresa:</strong> Nombre de la empresa u organización, cargo, ubicación y detalles ingresados en el panel de control (dashboard).</li>
                        <li><strong>Datos de Transacción y Facturación:</strong> Dirección fiscal, RFC (Registro Federal de Contribuyentes) y datos de la tarjeta de pago (procesados a través de pasarelas de pago de terceros; Qontrol no almacena números completos de tarjetas de crédito).</li>
                        <li><strong>Contenido del Usuario (Evidencias):</strong> Fotografías, archivos, firmas digitales, ubicaciones geográficas (GPS) asociadas a reportes, y cualquier dato ingresado en los formularios dinámicos creados en la plataforma.</li>
                    </ul>

                    <p className="font-semibold mt-4">
                        B. Información que recopilamos automáticamente:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Datos de Actividad, Dispositivo y Seguridad:</strong> Recopilamos información sobre su actividad en la red de manera automática desde los dispositivos y navegadores que utiliza. Esto incluye su dirección IP, tipo de navegador, sistema operativo, métricas de rendimiento, registros de errores, patrones de uso y telemetría de seguridad (ej. para prevención de ataques DDoS o filtrado web, gestionado mediante herramientas como Cloudflare).</li>
                        <li><strong>Ubicación Técnica:</strong> Metadatos de ubicación derivados de direcciones IP o datos GPS precisos cuando la aplicación móvil recopila evidencias en campo (previa autorización expresa del usuario en su dispositivo).</li>
                    </ul>

                    <p className="font-semibold mt-4">
                        C. Información de Terceros:
                    </p>
                    <p>
                        Podemos recibir información de servicios de terceros si usted integra Qontrol con otras plataformas o si interactúa con integraciones alojadas en nuestra infraestructura en la nube.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        3. Uso de la Información y Finalidad del Tratamiento
                    </p>
                    <p>
                        Utilizamos y procesamos cada una de las categorías de información identificadas anteriormente para los siguientes propósitos (Finalidades Primarias y Secundarias):
                    </p>

                    <p className="font-semibold mt-4">
                        Finalidades Primarias (Necesarias para la prestación del servicio):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Proporcionarle los productos, servicios SaaS y reportes que solicita.</li>
                        <li>Gestionar y administrar su cuenta, incluyendo la identificación y autenticación segura.</li>
                        <li>Procesar pagos, emitir facturación electrónica y gestionar cobranza.</li>
                        <li>Almacenar, organizar y estructurar el Contenido del Usuario (evidencias, fotografías, firmas) en nuestras bases de datos administradas por proveedores de nube (Supabase).</li>
                        <li>Notificarle sobre cambios operativos, técnicos o legales relacionados con la plataforma.</li>
                    </ul>

                    <p className="font-semibold mt-4">
                        Finalidades Secundarias (Legítimo interés y mejora del servicio):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Administrar nuestros Servicios mediante análisis de datos, pruebas e investigación estadística (Analytics).</li>
                        <li>Solucionar problemas técnicos (troubleshooting) e identificar errores de software (bugs).</li>
                        <li>Mantener la seguridad perimetral de la red y prevenir el fraude, abuso o ataques cibernéticos.</li>
                        <li>Mejorar y personalizar la interfaz de usuario en función de los patrones de uso.</li>
                    </ul>
                    <p className="text-sm italic mt-2 text-gray-700">
                        Si no desea que sus datos sean tratados para las finalidades secundarias, puede oponerse mediante los canales de contacto especificados en este documento. La negativa para el uso de finalidades secundarias no será motivo para negarle el servicio principal.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        4. Divulgación y Transferencia de Información
                    </p>
                    <p>
                        Estamos comprometidos a mantener su confianza. Qontrol <strong>no vende ni alquila</strong> su información personal a terceros. Solo compartimos la información recopilada bajo las siguientes circunstancias:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Proveedores de Servicios e Infraestructura (Subencargados):</strong> Transferimos información a empresas que procesan datos en nuestro nombre bajo estrictos acuerdos de confidencialidad para operar el modelo SaaS. Esto incluye proveedores críticos como <strong>Supabase</strong> (alojamiento de bases de datos y archivos), <strong>Render</strong> (alojamiento de servidores y API), <strong>Cloudflare</strong> (seguridad perimetral, firewall de aplicaciones web [WAF] y red de entrega de contenido [CDN]), <strong>Expo</strong> (telemetría y actualizaciones móviles), <strong>Clerk</strong> (autenticación) y plataformas de procesamiento de pagos.</li>
                        <li><strong>Cumplimiento Legal:</strong> Podemos divulgar información para responder a requerimientos judiciales, órdenes de cateo, citatorios, u otras solicitudes legales de autoridades competentes mexicanas o internacionales; así como para proteger los derechos, la propiedad y la seguridad física o digital de Qontrol, nuestros usuarios o el público en general.</li>
                        <li><strong>Transferencias Corporativas:</strong> En caso de fusión, adquisición, reestructuración, o venta de activos de Grupo Codiaz S.A.S. de C.V., su información podrá ser transferida a la entidad sucesora.</li>
                    </ul>

                    <p className="font-bold text-lg mt-6">
                        5. Uso de Cookies y Tecnologías de Rastreo
                    </p>
                    <p>
                        Cuando utiliza nuestros Servicios web, utilizamos cookies y tecnologías similares (como local storage o tokens).
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookies Esenciales y de Seguridad:</strong> Son estrictamente necesarias para que la plataforma funcione y permanezca segura (ej. mantener su sesión activa, mitigación de bots a través de Cloudflare). No pueden desactivarse.</li>
                        <li><strong>Cookies de Rendimiento/Analíticas:</strong> Nos ayudan a comprender cómo interactúan los usuarios con la plataforma, registrando tiempos de carga y mensajes de error.</li>
                    </ul>
                    <p>
                        Usted puede configurar su navegador web para rechazar cookies no esenciales; sin embargo, la desactivación de cookies esenciales impedirá el acceso a su cuenta y el uso de los Servicios de Qontrol.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        6. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
                    </p>
                    <p>
                        De conformidad con la legislación mexicana aplicable, usted (o su representante legal) tiene el derecho de ejercer en cualquier momento sus Derechos ARCO respecto a sus datos personales:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Acceso:</strong> Conocer qué datos personales tenemos, para qué los utilizamos y las condiciones de su uso.</li>
                        <li><strong>Rectificación:</strong> Solicitar la corrección de su información en caso de que esté desactualizada, sea inexacta o incompleta.</li>
                        <li><strong>Cancelación:</strong> Solicitar que eliminemos su información de nuestras bases de datos cuando considere que no está siendo utilizada conforme a los principios y obligaciones previstos en la normativa.</li>
                        <li><strong>Oposición:</strong> Oponerse al uso de sus datos personales para fines específicos (ej. finalidades secundarias).</li>
                    </ul>

                    <p className="font-semibold mt-4">
                        Para ejercer sus Derechos ARCO o revocar su consentimiento:
                    </p>
                    <p>
                        Deberá enviar una solicitud formal por escrito al correo electrónico <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>. La solicitud deberá provenir del correo electrónico registrado en la cuenta e incluir copia de una identificación oficial.
                    </p>
                    <p className="text-sm italic mt-2 text-gray-700">
                        Nota sobre la Cancelación: Si usted solicita la eliminación total de su cuenta y datos, dicho proceso es irreversible. Todas las evidencias, fotografías y reportes asociados se eliminán definitivamente (sujeto a plazos de retención legal para fines fiscales o de auditoría).
                    </p>

                    <p className="font-bold text-lg mt-6">
                        7. Retención, Seguridad e Integridad de los Datos
                    </p>
                    <p>
                        Mantenemos medidas de seguridad administrativas, técnicas y físicas comercialmente razonables para proteger su información contra pérdida, robo, uso indebido, acceso no autorizado, alteración o destrucción. Esto incluye cifrado de datos en tránsito (HTTPS/TLS gestionado mediante infraestructuras como Cloudflare y Render) y políticas estrictas de control de acceso interno.
                    </p>
                    <p>
                        Retendremos su información únicamente durante el tiempo razonablemente necesario para cumplir con los propósitos descritos en este Aviso de Privacidad y en cumplimiento con la legislación mercantil y fiscal aplicable en México (típicamente de 5 a 10 años para datos de facturación). No obstante, usted comprende que ningún sistema de almacenamiento en la nube o transmisión por internet es 100% invulnerable.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        8. Transferencias Internacionales de Datos
                    </p>
                    <p>
                        Dado que Qontrol utiliza infraestructura en la nube de alcance global (ej. servidores, bases de datos y redes de distribución operados por terceros como Render, Supabase y Cloudflare, muchos de ellos ubicados en Estados Unidos), su información personal y telemetría de red puede ser transferida, almacenada y procesada fuera de su jurisdicción de residencia. Al utilizar los Servicios, usted otorga su consentimiento expreso para dicha transferencia internacional, entendiendo que los proveedores extranjeros se encuentran sujetos a esquemas y estándares de seguridad equiparables o superiores a los requeridos por la legislación mexicana aplicable en materia de protección de datos.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        9. Privacidad Infantil
                    </p>
                    <p>
                        Nuestros Servicios están dirigidos exclusivamente a profesionales y entidades comerciales. No recopilamos conscientemente información personal de menores de 18 años. Si tenemos conocimiento de que hemos recopilado datos de un menor sin el consentimiento verificable de sus padres o tutores, tomaremos las medidas necesarias para eliminar dicha información de inmediato.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        10. Cambios a la Política de Privacidad
                    </p>
                    <p>
                        Qontrol se reserva el derecho de actualizar este Aviso de Privacidad periódicamente para reflejar cambios en nuestras prácticas operativas, proveedores de infraestructura o requisitos legales. Cuando se realicen actualizaciones, modificaremos la "Fecha de última actualización" en la parte superior de este documento. Le recomendamos revisar esta página de manera concurrente.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        11. Contacto Legal
                    </p>
                    <p>
                        Si tiene alguna pregunta, requerimiento o queja relacionada con este Aviso de Privacidad, el ejercicio de sus derechos ARCO, o sobre las prácticas de gestión de datos de nuestros subencargados (como Supabase, Render, Clerk o Cloudflare), comuníquese formalmente con nuestro Departamento Legal en:
                    </p>
                    <p>
                        <strong>Correo electrónico:</strong> <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a><br/>
                        <strong>Razón Social:</strong> Grupo Codiaz S.A.S. de C.V.<br/>
                        <em className="text-gray-700">(Con domicilio jurisdiccional en Saltillo, Coahuila, México).</em>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}