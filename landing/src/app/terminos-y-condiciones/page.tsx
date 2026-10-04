import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Terminos() {
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
                    Términos y Condiciones
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-4 text-justify text-black leading-relaxed">
                    <p className="font-bold text-lg">
                        1. Términos de Servicio y Aceptación Electrónica
                    </p>
                    <p>
                        Lea detenidamente estos términos y condiciones, así como nuestro Aviso de Privacidad, antes de acceder o utilizar la plataforma Qontrol.
                    </p>
                    <p>
                        Estos términos y condiciones (“Términos”) constituyen un contrato legalmente vinculante entre usted (o la entidad comercial que representa) y <strong>Grupo Codiaz S.A.S. de C.V.</strong> (“Qontrol”), el cual rige el acceso y uso del sitio web, API, panel de administración y aplicaciones móviles.
                    </p>
                    <p>
                        <strong>Aceptación Explícita y Validez Probatoria:</strong> Al registrarse, marcar la casilla de verificación correspondiente o hacer uso continuo de los Servicios, usted otorga su consentimiento expreso y electrónico a estos Términos. De conformidad con la legislación de comercio electrónico aplicable, el sistema genera y conserva un registro automatizado de auditoría (que incluye versión de términos aceptada, fecha, hora e identificador de cuenta). Este registro constituye prueba plena de su manifestación de la voluntad.
                    </p>
                    <p>
                        Si está utilizando los Servicios en nombre de una empresa u organización, declara y garantiza que cuenta con las facultades legales suficientes para obligar a dicha entidad. Si no está de acuerdo con la totalidad de estos Términos, no debe acceder ni utilizar la plataforma.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        2. Licencia de Uso, Restricciones y Cuentas
                    </p>
                    <p>
                        <strong>2.1. Requisito de Edad y Capacidad:</strong> Los Servicios están dirigidos exclusivamente a personas mayores de 18 años con plena capacidad legal y comercial.
                    </p>
                    <p>
                        <strong>2.2. Licencia de Uso SaaS:</strong> Qontrol otorga un derecho limitado, revocable, no exclusivo, intransferible y no sublicenciable para acceder y utilizar la plataforma SaaS estrictamente para sus operaciones comerciales internas. El software se otorga bajo licencia de uso, no se vende.
                    </p>
                    <p>
                        <strong>2.3. Autenticación y Control de Sesión Única:</strong> La creación de cuentas requiere información veraz y comprobable. Se prohíbe el registro mediante direcciones de correo electrónico temporales o desechables. Para proteger la integridad de los accesos, la plataforma aplica un control de sesión única (<em>Single Session Enforcement</em>); el inicio de sesión desde un nuevo dispositivo finalizará automáticamente la sesión previa activa. Queda estrictamente prohibido compartir credenciales de acceso entre múltiples personas.
                    </p>
                    <p>
                        <strong>2.4. Protección del Plan Gratuito (Free):</strong> El plan gratuito incluye límites operativos (500 MB de almacenamiento, 4 reportes semanales, 1 usuario técnico y 1 administrador). Se prohíbe la creación de múltiples cuentas gratuitas por una misma entidad para eludir dichos límites. Cuentas inactivas por más de 90 días naturales podrán ser suspendidas o purgadas definitivamente.
                    </p>
                    <p>
                        <strong>2.5. Restricciones Técnicas:</strong> Queda prohibido (i) realizar ingeniería inversa, descompilar o intentar extraer el código fuente de Qontrol; (ii) utilizar la plataforma para desarrollar productos competidores; (iii) realizar pruebas de vulnerabilidad automatizadas sin autorización previa por escrito; o (iv) emplear scripts, bots o herramientas automatizadas no autorizadas.
                    </p>
                    <p>
                        <strong>2.6. Transparencia en Certificaciones de Infraestructura:</strong> Qontrol se despliega sobre infraestructura de nube distribuida operada por proveedores globales (AWS, Supabase, Render, Cloudflare) que cuentan con certificaciones independientes de ciberseguridad (ISO/IEC 27001 y SOC 2 Type II). Se aclara expresamente que dicha certificación pertenece a los proveedores de infraestructura subyacentes; Qontrol, como entidad comercial, opera bajo estándares y mejores prácticas de la industria (<em>Security by Design</em>), pero no cuenta con una certificación ISO o auditoría corporativa propia independiente.
                    </p>
                    <p>
                        <strong>2.7. Uso Aceptable y Conducta:</strong> Nos reservamos el derecho de suspender o rescindir el servicio, sin previo aviso ni reembolso, a usuarios que incurran en conductas abusivas, lenguaje difamatorio o agresiones hacia el personal de soporte, o que utilicen la plataforma para actividades ilícitas o fraudulentas.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        3. Transferencia de Datos y Encargados del Tratamiento
                    </p>
                    <p>
                        Para la correcta prestación del servicio SaaS, prevención de fraude y mantenimiento de la seguridad, Qontrol hace uso de servicios especializados provistos por terceros encargados del tratamiento (<em>Data Processors</em>). Al aceptar estos Términos, usted autoriza el procesamiento técnico y la transferencia operacional de datos (incluyendo IP, tokens de sesión, logs y correo electrónico) hacia:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Supabase Auth & PostgreSQL:</strong> Gestión remota de identidades, bases de datos y almacenamiento de archivos.</li>
                        <li><strong>Google reCAPTCHA v3:</strong> Análisis pasivo de riesgo para mitigación de bots en procesos de registro.</li>
                        <li><strong>Sentry:</strong> Captura y diagnóstico de errores de software en tiempo real.</li>
                        <li><strong>Sistemas de Validación Fiscal (SAT Art. 69-B):</strong> Verificación de claves RFC contra listas públicas de operaciones simuladas.</li>
                    </ul>
                    <p className="text-sm italic text-gray-700 mt-2">
                        El tratamiento detallado de dichos datos se rige conforme a lo dispuesto en nuestro <a href="https://www.theqontrol.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Aviso de Privacidad</a>.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        4. Derechos de Propiedad Intelectual y Contenido
                    </p>
                    <p>
                        <strong>4.1. Su Contenido:</strong> Usted conserva la propiedad de las evidencias, datos, fotografías y reportes cargados en la plataforma ("Contenido del Usuario"). Usted otorga a Qontrol una licencia limitada, mundial y libre de regalías para almacenar, procesar y transmitir dicho contenido únicamente con el propósito de prestarle el servicio SaaS.
                    </p>
                    <p>
                        <strong>4.2. Propiedad de la Plataforma:</strong> Todos los derechos de propiedad intelectual, marcas, logotipos, arquitectura de software, diseños e interfaces de Qontrol son propiedad exclusiva de Grupo Codiaz S.A.S. de C.V.
                    </p>
                    <p>
                        <strong>4.3. Retroalimentación (Feedback):</strong> Cualquier sugerencia, mejora o comentario proporcionado sobre la plataforma podrá ser incorporado por Qontrol sin que esto genere obligación de compensación económica.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        5. Pagos, Facturación y Cancelaciones
                    </p>
                    <p>
                        <strong>5.1. Tarifas y Suscripciones:</strong> El acceso a planes de pago se rige por las tarifas vigentes (ej. Plan Primary a $3,000.00 MXN + IVA/mes y Plan Corporate a $7,600.00 MXN + IVA/mes, más los cargos aplicables por usuarios administradores adicionales). Las suscripciones se facturan por adelantado y se renuevan automáticamente al inicio de cada periodo.
                    </p>
                    <p>
                        <strong>5.2. Política de No Reembolso:</strong> En la máxima medida permitida por la ley, todas las tarifas pagadas son definitivas y no reembolsables. No se realizarán reembolsos parciales ni créditos por periodos no utilizados o descensos de plan (downgrades).
                    </p>
                    <p>
                        <strong>5.3. Morosidad:</strong> Cuentas con adeudos superiores a 7 días naturales sufrirán la suspensión temporal del acceso. Transcurridos 30 días de mora, Qontrol podrá proceder a la cancelación definitiva del servicio y purga de la información almacenada.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        6. Limitación de Responsabilidad y Exclusión por Servicios de Terceros
                    </p>
                    <p>
                        <strong>6.1. Prestación "TAL CUAL" (As-Is):</strong> Los Servicios se proporcionan "TAL CUAL" y "SEGÚN DISPONIBILIDAD". Qontrol no garantiza que la plataforma operará de forma ininterrumpida o totalmente libre de errores.
                    </p>
                    <p>
                        <strong>6.2. Deslinde por Fallas en Proveedores Externos:</strong> Qontrol no será responsable por interrupciones del servicio, latencia, degrado de rendimiento, pérdida temporal de conectividad o indisponibilidad derivadas directamente de caídas masivas, incidentes técnicos o mantenimientos en las infraestructuras de nuestros proveedores de servicios (incluyendo AWS, Supabase, Render, Cloudflare, Google reCAPTCHA, Sentry, OpenStreetMap o servidores del SAT).
                    </p>
                    <p>
                        <strong>6.3. Mapeo de Responsabilidad Máxima:</strong> En ningún caso la responsabilidad total acumulada de Qontrol por cualquier daño directo o reclamación derivada de estos Términos excederá el monto total efectivamente pagado por el usuario en los tres (3) meses anteriores al evento que originó el reclamo, o $0.00 MXN en el caso de cuentas en plan gratuito.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        7. Modificaciones a la Plataforma y a los Términos
                    </p>
                    <p>
                        Qontrol se reserva el derecho de actualizar, modificar o discontinuar características de la plataforma o alterar estos Términos en cualquier momento. Los cambios sustanciales serán notificados mediante publicación en el sitio web o correo electrónico. El uso continuado del servicio tras la publicación constituye la aceptación tácita y expresa de los nuevos Términos.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        8. Ley Aplicable, Jurisdicción y Disputas
                    </p>
                    <p>
                        <strong>8.1. Ley Aplicable:</strong> Estos Términos se rigen e interpretan conforme a las leyes federales de los Estados Unidos Mexicanos y la legislación comercial aplicable en el Estado de Coahuila de Zaragoza.
                    </p>
                    <p>
                        <strong>8.2. Conciliación Previa:</strong> En caso de cualquier controversia, las partes acuerdan agotar una fase de negociación informal de 60 días enviando una notificación escrita a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>.
                    </p>
                    <p>
                        <strong>8.3. Jurisdicción:</strong> De no resolverse la disputa informalmente, las partes se someten de manera expresa e irrevocable a la jurisdicción exclusiva de los tribunales competentes en la ciudad de <strong>Saltillo, Coahuila, México</strong>, renunciando a cualquier otro fuero que pudiera corresponderles por razón de sus domicilios presentes o futuros.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        Contacto Legal
                    </p>
                    <p>
                        Para cualquier duda, aclaración o notificación formal vinculada con estos Términos de Servicio, diríjase a: <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}