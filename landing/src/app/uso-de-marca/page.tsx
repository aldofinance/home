import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Marca() {
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
                    Uso de Marca
                </h1>

                {/* Contenido centrado con texto justificado */}
                <div className="space-y-4 text-justify text-black leading-relaxed">
                    <p className="font-bold text-lg mt-6 uppercase">
                        1. Titularidad de la Marca y Derechos de Propiedad Intelectual
                    </p>
                    <p>
                        La plataforma de software como servicio (SaaS), sus interfaces, código fuente, y todos los elementos visuales operan bajo la marca comercial registrada <strong>QONTROL</strong>.
                    </p>
                    <p>
                        Se hace constar públicamente y con plenos efectos legales que la denominación "QONTROL" se encuentra debidamente registrada y protegida conforme a la Ley Federal de Protección a la Propiedad Industrial ante el Instituto Mexicano de la Propiedad Industrial (IMPI) bajo la Clase 42 (Servicios científicos y tecnológicos; diseño y desarrollo de hardware y software, entre otros).
                    </p>
                    <p>
                        Los detalles específicos del expediente, número de registro, titularidad patrimonial y vigencia se mantienen bajo resguardo. Cualquier entidad o tercero con interés jurídico que requiera validar los datos exactos de la concesión registral, puede solicitar la información correspondiente dirigiendo una petición formal al Departamento Legal a través del correo: <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800">legal@theqontrol.com</a>.
                    </p>
                    <p>
                        La empresa <strong>Grupo Codiaz S.A.S. de C.V.</strong> opera, comercializa y administra el software mediante las licencias, autorizaciones y cesiones de uso legalmente correspondientes otorgadas por el Titular de los Derechos.
                    </p>

                    <p className="font-bold text-lg mt-6 uppercase">
                        2. Restricciones y Protección del Uso de Marca
                    </p>
                    <p>
                        El acceso y uso de los servicios de QONTROL no otorga a El Usuario, bajo ninguna circunstancia, licencia, concesión, ni derecho de propiedad sobre la marca comercial, los logotipos, la identidad visual, ni ningún otro derecho de propiedad intelectual asociado.
                    </p>
                    <p>
                        Queda estrictamente prohibido para El Usuario o cualquier tercero:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>Copiar, reproducir, modificar, imitar o utilizar la marca QONTROL, parcial o totalmente, para promocionar servicios o productos propios.</li>
                        <li>Registrar o intentar registrar dominios web, nombres comerciales, o variaciones ortográficas (ej. <em>QontrolApp</em>, <em>TheQontrol</em>, etc.) que generen confusión en el mercado.</li>
                        <li>Utilizar los logotipos de QONTROL en materiales publicitarios sin autorización expresa y por escrito del Departamento Legal.</li>
                    </ol>
                    <p>
                        El uso no autorizado de la marca QONTROL y sus activos intelectuales constituirá un delito federal y dará lugar a las acciones civiles, penales y administrativas correspondientes por infracción en materia de comercio y daños y perjuicios.
                    </p>

                    <p className="font-bold text-lg mt-6 uppercase">
                        3. Política de "Marca Blanca" en Documentos (White Label)
                    </p>
                    <p>
                        Como parte de las características exclusivas de ciertos niveles de licenciamiento (ej. <em>Plan Corporate</em>), El Licenciante otorga a El Usuario la funcionalidad técnica de "Marca Blanca" (White Label). Esta funcionalidad se rige bajo las siguientes limitaciones estrictas:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Alcance Limitado:</strong> La Marca Blanca permite <strong>única y exclusivamente</strong> la remoción de los logotipos institucionales de QONTROL y la inserción del logotipo de El Usuario en los <strong>documentos exportados, reportes PDF y hojas de cálculo (Excel)</strong> generados a través del sistema.</li>
                        <li><strong>Prohibición de Reventa (No-Resale):</strong> La funcionalidad de Marca Blanca NO transfiere los derechos de propiedad intelectual del software. Queda estrictamente prohibido a El Usuario comercializar, revender, sublicenciar o presentar la interfaz web/móvil de QONTROL a sus propios clientes como un software de desarrollo propio o como un servicio de marca propia (Whitelabeling de Software).</li>
                        <li><strong>Propiedad del Documento:</strong> Los documentos exportados con la identidad gráfica de El Usuario son responsabilidad total y absoluta de El Usuario, deslindando a Grupo Codiaz S.A.S. de C.V. de cualquier implicación legal, fiscal o técnica contenida en dicha evidencia generada.</li>
                    </ul>

                    <p className="font-bold text-lg mt-6 uppercase">
                        4. Declaración de No Colaboración y Prevención de Fraude
                    </p>
                    <p>
                        Para proteger la integridad comercial de nuestra marca y la seguridad de nuestros clientes, Grupo Codiaz S.A.S. de C.V. emite la siguiente declaración pública:
                    </p>
                    <p>
                        Cualquier otro dominio, página web, aplicación móvil o plataforma que utilice el nombre <strong>QONTROL</strong> (o variaciones del mismo) y que no se encuentre publicado dentro de nuestros canales oficiales, <strong>no representa a nuestra empresa ni cuenta con autorización para operar, comunicar o gestionar servicios en nuestro nombre.</strong>
                    </p>
                    <p>
                        Para mantener una relación segura y legal con QONTROL, y evitar ser víctima de suplantación de identidad (Phishing) o fraude corporativo, exigimos a los usuarios verificar siempre que:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>El sitio web y las plataformas de acceso correspondan <strong>únicamente a los canales y dominios oficiales</strong> publicados y reconocidos por Grupo Codiaz S.A.S. de C.V.</li>
                        <li>La información comercial, técnica, presupuestos o de soporte sea proporcionada directamente por nuestro equipo autorizado desde direcciones de correo electrónico institucionales oficiales.</li>
                        <li>Los procesos de contratación, demostraciones, atención al cliente, facturación y comunicación empresarial sean gestionados exclusivamente mediante nuestros medios oficiales.</li>
                    </ol>
                    <p>
                        <strong>Grupo Codiaz S.A.S. de C.V.</strong> y el titular de la marca se deslindan absolutamente de cualquier daño, fraude, pérdida de datos o perjuicio económico derivado de interacciones, pagos o contrataciones realizadas a través de entidades no autorizadas, "agentes de ventas" no verificados o portales apócrifos que hagan uso ilícito de la marca QONTROL.
                    </p>

                    <hr className="my-8 border-gray-300" />

                    <p className="text-sm italic text-gray-700">
                        Para reportar el uso indebido de nuestra marca, suplantación de identidad corporativa, o para validación de canales oficiales, comuníquese inmediatamente al Departamento Legal: <a href="mailto:legal@theqontrol.com" className="text-blue-600 underline hover:text-blue-800 font-semibold">legal@theqontrol.com</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}