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
                        1. Términos de Servicio
                    </p>
                    <p>
                        Lea detenidamente estos términos y condiciones, así como nuestro Aviso de Privacidad, antes de acceder o utilizar Qontrol.
                    </p>
                    <p>
                        Estos términos y condiciones (“Términos”) crean un acuerdo legal vinculante entre usted y Grupo Codiaz S.A.S. de C.V. (“Qontrol”), y rigen su uso del sitio web y los servicios de Qontrol.
                    </p>
                    <p>
                        El “Sitio Web” se refiere al sitio web de Qontrol y a todo el contenido, servicios y productos proporcionados por Qontrol en o a través del sitio web, incluyendo subdominios y aplicaciones móviles. “Servicios” significa, colectivamente, cualquier producto o servicio de software como servicio (SaaS) puesto a disposición por Qontrol.
                    </p>
                    <p>
                        Al utilizar los Servicios (incluyendo visitar el Sitio Web, acceder a las aplicaciones o hacer cualquier otro uso), usted acepta y acuerda estar sujeto a estos Términos. Al utilizar los Servicios, usted afirma, declara y garantiza que (i) es plenamente capaz y competente para aceptar los términos, condiciones, obligaciones y garantías establecidos en estos Términos, y (ii) no ha sido previamente suspendido o eliminado de los Servicios.
                    </p>
                    <p>
                        Si está utilizando los Servicios en nombre de una empresa, organización u otra entidad (en cuyo caso las palabras “usted” y “su” se referirán a dicha entidad), declara además que tiene la autoridad para vincular a dicha organización a estos Términos. Si no tiene autoridad o no está de acuerdo con la totalidad de estos Términos, no debe acceder ni utilizar los Servicios.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        2. Derechos de Uso y Restricciones
                    </p>
                    <p>
                        <strong>2.1. Edad:</strong> Usted certifica que es una persona de al menos dieciocho (18) años de edad o que ha alcanzado la mayoría de edad legal en su jurisdicción.
                    </p>
                    <p>
                        <strong>2.2. Licencia de Uso Temporal:</strong> Durante el período en el que esté autorizado para utilizar los Servicios, y sujeto a su cumplimiento de estos Términos, se le otorga un derecho limitado, personal, no exclusivo, intransferible, no sublicenciable y revocable para acceder y utilizar los Servicios estrictamente para sus fines comerciales internos. Al utilizar los Servicios, usted reconoce que: (i) los Servicios no se le venden, sino que se le licencian; y (ii) aplican tarifas y términos por el uso de la plataforma SaaS.
                    </p>
                    <p>
                        <strong>2.3. Términos de la Cuenta y Autenticación:</strong> Para crear y mantener una cuenta en Qontrol, debe proporcionar información veraz. Qontrol utiliza proveedores de terceros, específicamente Clerk, para la gestión y seguridad de identidades. No se permiten cuentas registradas por “bots” u otros métodos automatizados. No puede mantener más de una cuenta por persona física o entidad sin realizar un pago (aplicable al plan gratuito). Su inicio de sesión solo puede ser utilizado por una persona; está estrictamente prohibido compartir credenciales. Qontrol no será responsable de ninguna pérdida en la que pueda incurrir como resultado de que otra persona use su contraseña o cuenta, con o sin su conocimiento.
                    </p>
                    <p>
                        <strong>2.4. Protección del Plan Gratuito (Free for Life):</strong> El plan gratuito se proporciona con características limitadas (500 MB de almacenamiento, 4 reportes por semana, 1 usuario técnico y 1 administrador). Para proteger la infraestructura de Qontrol, se prohíbe estrictamente la creación de múltiples cuentas gratuitas por la misma entidad para evadir límites de uso. Las cuentas en el plan gratuito que permanezcan inactivas por un período superior a 90 días podrán ser eliminadas permanentemente.
                    </p>
                    <p>
                        <strong>2.5. Restricciones de Uso:</strong> Usted no puede publicar, reproducir, distribuir, mostrar, realizar, editar, adaptar, modificar, copiar, crear trabajos derivados, revender o explotar de otro modo los Servicios. Usted no puede (i) descompilar, realizar ingeniería inversa o intentar derivar el código fuente de Qontrol; (ii) utilizar los Servicios para desarrollar productos competitivos; (iii) acceder o utilizar los Servicios de una manera ilícita o no autorizada, o de una manera que interfiera con las redes, sistemas o instalaciones utilizadas para proporcionar los Servicios.
                    </p>
                    <p>
                        <strong>2.6. Proveedores de Terceros e Infraestructura:</strong> Usted comprende y acepta que Qontrol utiliza proveedores externos y socios de alojamiento para proporcionar el hardware, software, redes, almacenamiento y tecnología relacionada necesaria para ejecutar los Servicios. Específicamente, Qontrol opera sobre infraestructuras provistas por Supabase (bases de datos y almacenamiento), Render (alojamiento de API/Backend) y Expo (despliegue móvil). Qontrol no asume responsabilidad por tiempos de inactividad, latencia o pérdida de datos que resulten directamente de interrupciones, mantenimientos o fallas masivas en las plataformas de estos proveedores externos.
                    </p>
                    <p>
                        <strong>2.7. Uso Aceptable y Conducta:</strong> Usted acepta utilizar los Servicios de manera profesional. Qontrol se reserva el derecho de suspender o cancelar inmediatamente, sin previo aviso y sin derecho a reembolso, la cuenta de cualquier usuario que incurra en conductas abusivas, irrazonables o perjudiciales. Esto incluye, de manera enunciativa: agredir verbalmente, amenazar, acosar o utilizar lenguaje profano contra el personal de soporte o ventas de Qontrol; o realizar exigencias técnicas o de servicio que excedan manifiestamente las características del plan contratado.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        3. Derechos y Restricciones de Contenido
                    </p>
                    <p>
                        <strong>3.1. Su Contenido:</strong> Usted sigue siendo plenamente responsable de cualquier material, evidencia, datos y contenido que envíe a través de los Servicios ("Contenido del Usuario"). Usted conserva sus derechos de propiedad sobre cualquier Contenido del Usuario. Al enviarlo, otorga a Qontrol una licencia no exclusiva, mundial y libre de regalías para alojar, compilar, distribuir y utilizar su Contenido del Usuario únicamente con el fin de proporcionarle los Servicios.
                    </p>
                    <p>
                        <strong>3.2. Monitoreo y Cumplimiento:</strong> Qontrol tiene el derecho de: (i) eliminar cualquier Contenido del Usuario que considere que viola estos Términos, infringe derechos de propiedad intelectual o crea responsabilidad para Qontrol; (ii) tomar las medidas legales apropiadas por cualquier uso ilegal o no autorizado de los Servicios; y (iii) suspender su acceso a la totalidad o parte de los Servicios por cualquier violación de estos Términos. Qontrol cooperará plenamente con las autoridades competentes que soliciten o dirijan la divulgación de identidades de usuarios que publiquen contenido ilícito.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        4. Derechos de Propiedad
                    </p>
                    <p>
                        <strong>4.1. Propiedad:</strong> Los Servicios son propiedad de Qontrol y están operados por ella. Usted reconoce que Qontrol posee todos los derechos, títulos e intereses sobre los Servicios, incluyendo todo el software, interfaces visuales, gráficos, diseño y arquitectura subyacente. No adquirirá ningún derecho de propiedad intelectual sobre Qontrol en virtud de estos Términos.
                    </p>
                    <p>
                        <strong>4.2. Comentarios (Feedback):</strong> Por la presente, usted otorga a Qontrol una licencia irrevocable, libre de regalías y perpetua para utilizar todos los comentarios, ideas o mejoras sugeridas que proporcione con respecto a los Servicios, sin compensación alguna para usted.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        5. Pagos y Facturación
                    </p>
                    <p>
                        <strong>5.1. Tarifas y Planes:</strong> El uso de funcionalidades premium requiere el pago de tarifas de servicio. Las tarifas actuales son de $3,000.00 MXN + IVA para el plan Primary y $7,600.00 MXN + IVA para el plan Corporate, facturados de forma recurrente. Los usuarios administradores adicionales tienen costos de $400.00 MXN y $180.00 MXN respectivamente, según el plan.
                    </p>
                    <p>
                        <strong>5.2. Calendario de Facturación y Renovación:</strong> Las tarifas de servicio se facturan por adelantado de forma mensual o anual y no son reembolsables. Las suscripciones se renuevan automáticamente al final de cada ciclo de facturación. Usted autoriza a Qontrol, a través de sus procesadores de pago externos, a cargar automáticamente el método de pago especificado.
                    </p>
                    <p>
                        <strong>5.3. Política Estricta de No Reembolso:</strong> Todas las tarifas pagadas son definitivas y no reembolsables en la máxima medida permitida por la ley. No habrá reembolsos ni créditos por meses parciales de servicio, reembolsos por descensos de plan (downgrades), ni reembolsos por meses no utilizados con una cuenta abierta.
                    </p>
                    <p>
                        <strong>5.4. Saldos Pendientes:</strong> Las cuentas con tarifas de servicio vencidas por más de 7 días están sujetas a suspensión inmediata. Usted debe pagar todas las tarifas pendientes para restablecer su cuenta. Qontrol se reserva el derecho de eliminar permanentemente los datos y evidencias de cuentas suspendidas por morosidad prolongada.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        6. Limitación de Responsabilidad
                    </p>
                    <p>
                        <strong>6.1. Renuncia de Garantías:</strong> Usted acepta expresamente que el uso de los servicios es bajo su propio riesgo. En la máxima medida permitida por la ley aplicable, Qontrol proporciona los Servicios "TAL CUAL" (AS-IS) y "SEGÚN DISPONIBILIDAD", excluyendo cualquier garantía, ya sea oral o escrita, expresa o implícita. Qontrol no garantiza que los servicios serán ininterrumpidos, libres de errores, o completamente seguros contra intrusiones no autorizadas. Qontrol no es responsable por daños resultantes de la dependencia de infraestructuras externas (Supabase, Clerk, Expo, Render, Cloudflare).
                    </p>
                    <p>
                        <strong>6.2. Limitación de Responsabilidad:</strong> En la mayor medida permitida por la ley, en ningún caso Qontrol, sus directores, empleados o proveedores serán responsables por daños directos, indirectos, incidentales, punitivos, especiales o consecuentes, incluyendo pérdida de ingresos, ganancias, datos o evidencias, resultantes del uso de los servicios. En ningún caso la responsabilidad total de Qontrol hacia usted por todos los daños y pérdidas excederá la cantidad real que usted pagó por los servicios durante los tres (3) meses anteriores al evento, o $0 MXN si utiliza el plan gratuito.
                    </p>
                    <p>
                        <strong>6.3. Indemnización:</strong> Usted acepta indemnizar y eximir a Qontrol de cualquier responsabilidad, reclamo, daño o gasto (incluyendo honorarios de abogados) que surja de su incumplimiento de estos Términos o de su uso de los Servicios.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        7. Modificación y Terminación
                    </p>
                    <p>
                        <strong>7.1. Modificación:</strong> Qontrol se reserva el derecho de modificar o eliminar permanentemente o temporalmente los Servicios o cualquier parte de los mismos en cualquier momento, a discreción exclusiva de Qontrol, sin previo aviso.
                    </p>
                    <p>
                        <strong>7.2. Terminación:</strong> Qontrol puede rescindir inmediatamente estos Términos y suspender o cancelar su acceso a los Servicios por cualquier motivo en cualquier momento, incluyendo el incumplimiento de estos Términos o comportamiento abusivo. Tras la terminación, Qontrol podrá, a su entera discreción, eliminar cualquier dato asociado con su cuenta.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        8. Cambios a los Términos
                    </p>
                    <p>
                        Qontrol puede cambiar cualquiera de los términos contenidos en este documento en cualquier momento. Cualquier modificación material será efectiva tras su uso continuado de los Servicios después de que Qontrol publique o envíe un aviso de los cambios.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        9. Miscelánea
                    </p>
                    <p>
                        <strong>Fuerza Mayor:</strong> Qontrol estará exento del cumplimiento en caso de circunstancias fuera de su control razonable, incluyendo desastres naturales, fallas de red, interrupciones de telecomunicaciones o caídas prolongadas de proveedores de infraestructura.
                    </p>
                    <p>
                        <strong>Divisibilidad:</strong> Si alguna disposición se considera ilegal o inaplicable, dicha disposición se considerará separable y no afectará la validez de las disposiciones restantes.
                    </p>
                    <p>
                        <strong>Ausencia de Renuncia:</strong> El hecho de que Qontrol no haga cumplir cualquier disposición no renuncia a su derecho de hacerla cumplir posteriormente.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        10. Ley Aplicable, Disputas y Arbitraje
                    </p>
                    <p>
                        <strong>10.1. Ley Aplicable:</strong> Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos, específicamente las aplicables en el Estado de Coahuila de Zaragoza, sin dar efecto a los principios de conflicto de leyes.
                    </p>
                    <p>
                        <strong>10.2. Resolución de Disputas:</strong> En caso de disputa, usted y Qontrol acuerdan intentar resolverla mediante negociación informal durante 60 días a partir de la recepción de una notificación por escrito enviada a <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>.
                    </p>
                    <p>
                        <strong>10.3. Renuncia a Demandas Colectivas:</strong> Cualquier procedimiento para resolver o litigar cualquier disputa se llevará a cabo exclusivamente de forma individual. Ni usted ni Qontrol buscarán que ninguna disputa sea escuchada como una demanda colectiva o en cualquier otro procedimiento en el que cualquiera de las partes actúe en calidad representativa.
                    </p>
                    <p>
                        <strong>10.4. Jurisdicción:</strong> Si la disputa no se resuelve de manera informal, en la medida en que la ley permita un procedimiento judicial, usted y Qontrol se someten a la jurisdicción personal y exclusiva de los tribunales estatales o federales ubicados en la ciudad de Saltillo, Coahuila, México. Al utilizar los Servicios, usted renuncia a cualquier reclamo o fuero que pueda surgir en razón de su domicilio presente o futuro.
                    </p>

                    <p className="font-bold text-lg mt-6">
                        Contacto
                    </p>
                    <p>
                        Para consultas o preguntas relacionadas con estos Términos, comuníquese con Qontrol en: <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}