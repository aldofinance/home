"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Clock,
    FileSpreadsheet,
    FileText,
    MapPin,
    ShieldCheck,
    Zap,
    ChevronDown,
    Calendar,
    MessageSquare,
    Building2,
    Sparkles,
    HardDrive,
    Mail,
    Sliders,
    Globe,
    LayoutDashboard,
    History,
    FileCode2,
    AlertTriangle,
    Check,
    Quote,
    Award,
    Database,
    QrCode,
    Send,
    BarChart3
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- HISTORIAS DE ÉXITO (TARJETAS EXPANDIBLES ESTILO SUPABASE) ---
const customerStories = [
    {
        id: "acero",
        company: "Planta Industrial Coahuila",
        shortName: "Planta Industrial",
        tagline: "Reducción del 85% en tiempo de entrega de reportes a auditoría.",
        quote:
            "Pasamos de acumular carpetas físicas de extintores y reportes en Excel a tener todo auditado en tiempo real con firma digital. La plataforma transformó la eficiencia de nuestros técnicos.",
        author: "Ing. Roberto Garza",
        role: "Gerente de EHS & Seguridad Industrial",
        bgGradient: "bg-gradient-to-br from-brand via-red-700 to-black",
        logoBg: "bg-black/30",
    },
    {
        id: "extintores",
        company: "Servicios de Extintores del Norte",
        shortName: "Extintores del Norte",
        tagline: "Envío automático de PDF oficial con ubicación GPS al cliente.",
        quote:
            "Nuestros clientes quedan fascinados porque terminamos la revisión del activo y en segundos reciben el PDF oficial con la geolocalización y firmas. Eliminó por completo las horas extras de captura.",
        author: "Carlos Mendoza",
        role: "Director de Operaciones",
        bgGradient: "bg-gradient-to-br from-blue via-[#0d2743] to-black",
        logoBg: "bg-black/30",
    },
    {
        id: "logistica",
        company: "Grupo Logístico & Mantenimiento",
        shortName: "Grupo Logístico",
        tagline: "Gestión de más de 1,500 extintores y activos sin desorden.",
        quote:
            "Organizar miles de códigos QR y fotos solía ser una pesadilla. Con Qontrol Forms, cada foto queda vinculada al activo correspondiente de forma automática y transparente.",
        author: "Dra. Sofía Treviño",
        role: "Coordinadora de Calidad",
        bgGradient: "bg-gradient-to-br from-orange via-[#8d5b00] to-black",
        logoBg: "bg-black/30",
    },
    {
        id: "seguridad",
        company: "Seguridad Corporativa MX",
        shortName: "Seguridad MX",
        tagline: "100% cumplimiento legal ante revisiones oficiales.",
        quote:
            "Las bitácoras inalterables y los mapas de ubicación nos dan una tranquilidad absoluta durante las auditorías de Protección Civil y certificaciones internacionales.",
        author: "Alejandro Reyes",
        role: "Consultor de Risk Management",
        bgGradient: "bg-gradient-to-br from-zinc-900 via-stone-900 to-black",
        logoBg: "bg-white/10",
    },
];

// --- PESTAÑAS DE DEMOSTRACIÓN DEL PRODUCTO ---
const productTabs = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        badge: "Análisis Automatizado",
        title: "Visualiza el cumplimiento general sin abrir un solo Excel",
        description:
            "Obtén el porcentaje exacto de activos en estado OK / NO OK en tiempo real. Monitorea presiones, sellos, manómetros y pruebas hidrostáticas al instante.",
        imageSrc: "/image/dashboard.png",
    },
    {
        id: "mapa",
        label: "Mapa de Activos",
        icon: MapPin,
        badge: "Geolocalización",
        title: "Ubica cada extintor y equipo en el mapa",
        description:
            "Visualización geográfica por cliente, sede o mes de recarga. Encuentra al instante cualquier activo dentro de las instalaciones.",
        imageSrc: "/image/mapa.jpg",
    },
    {
        id: "historial",
        label: "Historial & PDF",
        icon: History,
        badge: "Validez Legal",
        title: "Historial inalterable con envíos automáticos",
        description:
            "Genera reportes PDF oficiales con firma digital y folio único. Envía los documentos por correo a tus clientes en el segundo que se concluye la revisión.",
        imageSrc: "/image/historial.png",
    },
    {
        id: "formularios",
        label: "Editor Dinámico",
        icon: FileCode2,
        badge: "100% Personalizable",
        title: "Formularios a la medida sin saber programar",
        description:
            "Crea checklists condicionales para extintores, hidrantes, subestaciones o cualquier activo en minutos.",
        imageSrc: "/image/formularios.png",
    },
];

// --- PLANES DE PRECIO ---
const plans = [
    {
        name: "Free for Life",
        price: "0",
        period: "gratis para siempre",
        description: "Ideal para profesionales que están empezando. Sin tarjeta de crédito.",
        features: [
            "1 Usuario Técnico + 1 Administrador",
            "500 MB de Almacenamiento",
            "4 Reportes semanales",
            "Registro Offline (Sin Internet)",
            "Firma Digital incluida",
            "2 Plantillas personalizables",
        ],
        buttonText: "Probar Gratis",
        popular: false,
        link: "https://calendar.app.google/HueQQwgFaVgzDoam8",
    },
    {
        name: "Primary",
        price: "3,000",
        period: "MXN + IVA / mes",
        description: "La experiencia completa para profesionales que buscan escalar su servicio.",
        features: [
            "Usuarios Técnicos ilimitados",
            "Almacenamiento ilimitado",
            "Reportes y envíos por correo ilimitados",
            "Dashboard de productividad",
            "Descarga masiva en ZIP (Excel + PDF)",
            "Plantillas ilimitadas de formularios",
            "Firma Digital e Historial inalterable",
        ],
        buttonText: "Agendar Demo",
        popular: true,
        link: "https://calendar.app.google/HueQQwgFaVgzDoam8",
    },
    {
        name: "Corporate",
        price: "7,600",
        period: "MXN + IVA / mes",
        description: "Para equipos que necesitan optimizar tiempos, marca propia y soporte prioritario.",
        features: [
            "Todo lo del plan Primary",
            "3 Usuarios Administradores incluidos",
            "Soporte prioritario por WhatsApp",
            "Marca blanca personalizada en reportes",
            "Configuración e integración inicial incluida",
            "Capacitación remota para tu equipo",
        ],
        buttonText: "Contactar Ventas",
        popular: false,
        link: "https://calendar.app.google/HueQQwgFaVgzDoam8",
    },
];

// --- PREGUNTAS FRECUENTES ---
const faqs = [
    {
        q: "¿El plan gratuito tiene límite de tiempo?",
        a: "No, el plan Free for Life es gratis para siempre. Incluye 1 técnico, 1 administrador y 4 reportes por semana para que comiences sin compromisos.",
    },
    {
        q: "¿Puedo cambiar de plan cuando mi equipo crezca?",
        a: "Sí, puedes ajustar tu plan en cualquier momento desde la consola de administración.",
    },
    {
        q: "¿Tienen algún descuento en pago anual?",
        a: "Sí, ahorras 2 meses completos al contratar el plan anual (El plan Primary baja a $2,400 MXN + IVA/mes).",
    },
    {
        q: "¿Hay contratos forzosos?",
        a: "Ninguno. Puedes cancelar la suscripción mensual cuando quieras sin penalizaciones.",
    },
];

export default function FormsPage() {
    // ESTADOS EXISTENTES
    const [activeStory, setActiveStory] = useState("acero");
    const [activeTab, setActiveTab] = useState("dashboard");
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    // ESTADOS DINÁMICOS PARA LA SECCIÓN BENTO GRID
    const [selectedStatus, setSelectedStatus] = useState<"ok" | "pending" | "alert">("ok");
    const [signed, setSigned] = useState(true);
    const [sendingStatus, setSendingStatus] = useState<"idle" | "sending" | "sent">("sent");

    const currentTab = productTabs.find((t) => t.id === activeTab) || productTabs[0];

    const handleSimulateSend = () => {
        setSendingStatus("sending");
        setTimeout(() => {
            setSendingStatus("sent");
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-back text-black font-montserrat antialiased selection:bg-brand-back selection:text-brand">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
                        Qontrol Forms 2026
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.08] mb-6">
                        Digitaliza tus revisiones. <br />
                        <span className="text-brand">Elimina el trabajo doble.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mb-10">
                        El sistema operativo para la seguridad e inspección industrial en México. Envía reportes con firma digital al cliente al instante en que tu técnico concluye en campo.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Button
                            className="h-12 px-8 text-base font-bold bg-brand text-white hover:bg-brand/90 transition-all rounded-lg w-full sm:w-auto shadow-sm"
                            size="lg"
                            asChild
                        >
                            <Link href="https://calendar.app.google/HueQQwgFaVgzDoam8" target="_blank">
                                Agendar Demo Gratis <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 px-8 text-base font-semibold border-gray-300 text-black hover:bg-gray-50 transition-all rounded-lg w-full sm:w-auto"
                            size="lg"
                            asChild
                        >
                            <Link href="https://www.theqontrol.com/" target="_blank">
                                Conocer la Plataforma
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                        <Building2 className="h-4 w-4 text-brand" />
                        <span>Utilizado en más de <strong className="text-black font-bold">300 plantas e industrias en Coahuila</strong></span>
                    </div>

                </div>
            </section>

            {/* 2. COSTO DE OPORTUNIDAD */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                            El costo real de seguir trabajando con papel y Excel
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">
                            Llenar listas manuales representa una fuga silenciosa de horas productivas para tu empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                            <div className="w-10 h-10 rounded-lg bg-red-50 text-error flex items-center justify-center mb-4 font-bold">
                                <Clock className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-black text-lg mb-2">15 Horas Perdidas / Semana</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Cada técnico dedica horas diarias en la oficina transcribiendo lo que ya revisó en campo, pasando datos a Excel y adjuntando fotos.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                            <div className="w-10 h-10 rounded-lg bg-orange-back text-orange flex items-center justify-center mb-4 font-bold">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-black text-lg mb-2">Riesgo en Auditorías</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Documentos en papel sin firma digital ni fecha verificable pueden ser invalidados durante revisiones de Protección Civil.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border-2 border-brand/30 shadow-xs relative">
                            <span className="absolute -top-3 right-4 bg-brand text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                                Con Qontrol
                            </span>
                            <div className="w-10 h-10 rounded-lg bg-brand-back/50 text-brand flex items-center justify-center mb-4 font-bold">
                                <Zap className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-black text-lg mb-2">100% Automático e Inmediato</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                El técnico llena la checklist desde su celular. Al finalizar, el cliente recibe el PDF oficial por correo con GPS y firma.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HISTORIAS DE ÉXITO (TARJETAS EXPANDIBLES ESTILO SUPABASE) */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-brand font-bold text-xs uppercase tracking-wider">Casos de Éxito</span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mt-1">
                            Cómo las empresas líderes optimizan sus inspecciones
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:mt-0 max-w-md">
                        Haz clic en las tarjetas para explorar los testimonios de plantas y proveedores de seguridad industrial.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[480px]">
                    {customerStories.map((story) => {
                        const isSelected = activeStory === story.id;
                        return (
                            <div
                                key={story.id}
                                onClick={() => setActiveStory(story.id)}
                                className={cn(
                                    "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between p-8 text-white shadow-xl",
                                    story.bgGradient,
                                    {
                                        "lg:flex-[3.5] opacity-100": isSelected,
                                        "lg:flex-[0.8] opacity-80 hover:opacity-100 hover:scale-[1.01]": !isSelected,
                                    }
                                )}
                            >
                                <div className="flex items-start justify-between z-10">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("p-2.5 rounded-xl backdrop-blur-md border border-white/10", story.logoBg)}>
                                            <Building2 className="h-6 w-6 text-white" />
                                        </div>
                                        {isSelected && (
                                            <div>
                                                <h4 className="font-bold text-base leading-tight">{story.company}</h4>
                                                <span className="text-xs text-white/70">Cliente Certificado</span>
                                            </div>
                                        )}
                                    </div>

                                    {!isSelected && (
                                        <span className="hidden lg:block rotate-90 origin-top-left text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap mt-12">
                                            {story.shortName}
                                        </span>
                                    )}
                                </div>

                                {isSelected && (
                                    <div className="my-auto space-y-6 z-10 animate-fadeIn pt-6">
                                        <Quote className="h-10 w-10 text-white/20" />

                                        <p className="text-lg sm:text-2xl font-medium leading-relaxed tracking-tight text-white">
                                            "{story.quote}"
                                        </p>

                                        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <p className="font-bold text-sm sm:text-base text-white">{story.author}</p>
                                                <p className="text-xs text-white/70">{story.role}</p>
                                            </div>

                                            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/15">
                                                <span>{story.tagline}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {!isSelected && (
                                    <div className="lg:hidden z-10 pt-4 border-t border-white/10">
                                        <h4 className="font-bold text-sm text-white">{story.company}</h4>
                                        <p className="text-xs text-white/70 line-clamp-1">{story.tagline}</p>
                                    </div>
                                )}

                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. DEMOSTRACIÓN DE PRODUCTO CON PESTAÑAS */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-brand font-bold text-xs uppercase tracking-wider">Demostración del Sistema</span>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
                            Una sola plataforma para toda la operación
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                        {productTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer border",
                                        {
                                            "bg-brand text-white border-brand shadow-lg shadow-brand/20": isActive,
                                            "bg-gray-800 text-gray-400 border-gray-700 hover:text-white": !isActive,
                                        }
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="bg-black p-3 sm:p-4 rounded-2xl border border-gray-800 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 px-2 border-b border-gray-800 text-xs text-gray-400 font-mono">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded border border-gray-800">
                                <Globe className="h-3 w-3 text-gray-500" /> app.theqontrol.com
                            </div>
                            <span className="hidden sm:inline text-brand font-bold text-[10px] uppercase">QONTROL APP</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 items-center">
                            <div className="lg:col-span-4 space-y-4">
                                <span className="inline-block bg-brand/20 text-brand px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                                    {currentTab.badge}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                                    {currentTab.title}
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    {currentTab.description}
                                </p>
                                <div className="pt-2">
                                    <Button className="bg-brand text-white hover:bg-brand/90 font-semibold text-xs h-9 px-4" asChild>
                                        <Link href="https://calendar.app.google/HueQQwgFaVgzDoam8" target="_blank">
                                            Solicitar demostración guiada <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:col-span-8 overflow-hidden rounded-xl border border-gray-800 bg-black aspect-video flex items-center justify-center">
                                <img
                                    src={currentTab.imageSrc}
                                    alt={currentTab.label}
                                    className="w-full h-full object-cover object-top transition-all duration-300"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://placehold.co/1280x800/1a1a1a/FFF?text=Captura+de+pantalla+disponible";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CARACTERÍSTICAS BENTO GRID DINÁMICO & INTERACTIVO (ESTILO SUPABASE) */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-bold text-brand mb-4">
                            <Sparkles className="h-3.5 w-3.5" />
                            Infraestructura de Inspección
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
                            Diseñado para las empresas que impulsan la industria de hoy
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
                            Una suite completa de herramientas dinámicas diseñadas para eliminar el papel, automatizar reportes y garantizar cumplimiento auditable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">


                        {/* TARJETA 2: FIRMA DIGITAL (5 COLUMNAS) */}
                        <div className="md:col-span-12 lg:col-span-5 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider mb-3">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span>Validez Legal</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-3">
                                    Firma Digital e Historial
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Documentos legales inalterables con sello digital y trazabilidad completa para auditorías y certificaciones NOM-002 / STPS.
                                </p>
                            </div>

                            {/* INTERACTIVIDAD DE FIRMA */}
                            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center relative">
                                <div className="w-full bg-white border border-dashed border-gray-300 rounded-xl p-4 text-center min-h-[110px] flex flex-col items-center justify-center relative">
                                    <span className="text-[10px] uppercase font-bold text-gray-400 absolute top-2 left-3">
                                        Firma del Responsable
                                    </span>

                                    {signed ? (
                                        <div className="flex flex-col items-center animate-fadeIn">
                                            <span className="font-serif italic text-xl text-gray-900 tracking-widest font-bold">
                                                Ing. Roberto Garza
                                            </span>
                                            <span className="text-[10px] text-emerald-600 font-mono font-semibold mt-1 flex items-center gap-1">
                                                <Check className="h-3 w-3" /> Verificado por STPS
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-xs text-gray-400 italic">Haz clic abajo para firmar...</span>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSigned(!signed)}
                                    className="mt-3 text-xs font-bold text-brand hover:underline cursor-pointer"
                                >
                                    {signed ? "Limpiar firma" : "Simular Firma Digital"}
                                </button>
                            </div>
                        </div>

                        {/* TARJETA 3: REPORTES Y ENVÍO PDF (6 COLUMNAS) */}
                        <div className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider mb-3">
                                    <Mail className="h-4 w-4" />
                                    <span>Reportes y Envíos Ilimitados</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-3">
                                    Despacho Automático
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Genera y envía por correo tantos reportes oficiales como requiera tu operación sin restricciones ni cuotas ocultas.
                                </p>
                            </div>

                            {/* WIDGET DE ENVÍO DE CORREO */}
                            <div className="bg-black rounded-2xl p-4 text-white font-mono text-xs">
                                <div className="flex items-center justify-between text-gray-400 pb-2 mb-2 border-b border-gray-800 text-[11px]">
                                    <span className="flex items-center gap-1.5">
                                        <FileText className="h-3.5 w-3.5 text-brand" /> Reporte_Auditoria.pdf
                                    </span>
                                    <span className="text-emerald-400">Generado</span>
                                </div>

                                <div className="flex items-center justify-between gap-3 bg-gray-900 p-2.5 rounded-lg border border-gray-800">
                                    <div className="truncate">
                                        <span className="text-gray-500 block text-[9px]">DESTINATARIO:</span>
                                        <span className="text-gray-200 text-xs">auditoria@planta.com</span>
                                    </div>
                                    <button
                                        onClick={handleSimulateSend}
                                        disabled={sendingStatus === "sending"}
                                        className="bg-brand text-white px-3 py-1.5 rounded text-[11px] font-sans font-bold flex items-center gap-1.5 hover:bg-brand/90 transition-all cursor-pointer shrink-0"
                                    >
                                        {sendingStatus === "sending" && <Clock className="h-3 w-3 animate-spin" />}
                                        {sendingStatus === "sent" && <Check className="h-3 w-3 text-emerald-300" />}
                                        {sendingStatus === "idle" && <Send className="h-3 w-3" />}
                                        <span>{sendingStatus === "sent" ? "Enviado" : sendingStatus === "sending" ? "Enviando..." : "Reenviar"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* TARJETA 4: FORMATOS A LA MEDIDA & EVIDENCIA FOTOGRÁFICA (6 COLUMNAS) */}
                        <div className="md:col-span-12 lg:col-span-6 bg-white rounded-3xl border border-gray-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-wider mb-3">
                                    <Sliders className="h-4 w-4" />
                                    <span>Formatos 100% a la Medida</span>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-3">
                                    Evidencia Fotográfica por Activo
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Crea checklists específicos para extintores, hidrantes o subestaciones. Toma fotos respaldadas directamente para eliminar dudas en auditorías.
                                </p>
                            </div>

                            <div className="bg-slate-100 rounded-2xl p-4 border border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-black block">Checklist Condicional</span>
                                        <span className="text-[11px] text-gray-500">Fotos adjuntas con geotagging</span>
                                    </div>
                                </div>
                                <span className="bg-brand/10 text-brand text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-brand/20">
                                    100% Personalizable
                                </span>
                            </div>
                        </div>

                        {/* TARJETAS COMPLEMENTARIAS (ALMACENAMIENTO Y DESCARGA MASIVA) */}
                        <div className="md:col-span-6 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-all">
                            <HardDrive className="h-6 w-6 text-brand mb-3" />
                            <h4 className="font-bold text-black text-lg mb-1">Sin Límite de Almacenamiento</h4>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Conserva todo el historial documental, firmas y fotografías en la nube de forma segura sin cobros adicionales.
                            </p>
                        </div>

                        <div className="md:col-span-6 bg-white rounded-3xl border border-gray-200 p-6 shadow-xs hover:shadow-md transition-all">
                            <FileSpreadsheet className="h-6 w-6 text-brand mb-3" />
                            <h4 className="font-bold text-black text-lg mb-1">Descarga Masiva (Excel + PDF)</h4>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Exporta lotes enteros de inspecciones organizadas en carpetas ZIP para entregar paquetes completos a tus clientes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. PLANES DE PRECIO */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                        Nuestros Planes
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">
                        Elige el plan que se ajusta al tamaño de tu equipo. Sin contratos forzosos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "bg-white p-8 rounded-2xl border flex flex-col justify-between transition-all relative",
                                {
                                    "border-brand ring-2 ring-brand/20 shadow-lg": plan.popular,
                                    "border-gray-200 shadow-xs": !plan.popular,
                                }
                            )}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 right-6 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Más Popular
                                </span>
                            )}

                            <div>
                                <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                                <p className="text-xs text-gray-500 mt-1">{plan.description}</p>

                                <div className="mt-6 mb-6">
                                    <span className="text-4xl font-extrabold text-black">${plan.price}</span>
                                    <span className="text-xs text-gray-500 ml-1 font-medium">{plan.period}</span>
                                </div>

                                <div className="border-t border-gray-100 pt-6 space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                                            <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button
                                className={cn("mt-8 w-full font-bold h-11 text-sm rounded-lg transition-colors", {
                                    "bg-brand text-white hover:bg-brand/90": plan.popular,
                                    "bg-black text-white hover:bg-gray-800": !plan.popular,
                                })}
                                asChild
                            >
                                <Link href={plan.link} target="_blank">
                                    {plan.buttonText}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. PREGUNTAS FRECUENTES */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black text-center mb-10">
                        Preguntas Frecuentes
                    </h2>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-black cursor-pointer"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown
                                        className={cn(
                                            "h-4 w-4 text-gray-500 transition-transform duration-200 shrink-0",
                                            expandedFaq === idx && "rotate-180 text-brand"
                                        )}
                                    />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION FINAL */}
            <section className="bg-black text-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
                        Pásate a Qontrol
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                        Elimina los tiempos de captura manual y eleva la calidad de tu trabajo. Si necesitas información adicional, comunícate con nosotros.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            className="h-12 px-8 font-bold bg-brand text-white hover:bg-brand/90 transition-all rounded-lg w-full sm:w-auto"
                            asChild
                        >
                            <Link href="https://calendar.app.google/HueQQwgFaVgzDoam8" target="_blank">
                                <Calendar className="mr-2 h-4 w-4" /> Agendar Demo
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 px-8 font-semibold border-gray-700 text-white hover:bg-gray-900 transition-all rounded-lg w-full sm:w-auto"
                            asChild
                        >
                            <Link href="https://www.theqontrol.com/" target="_blank">
                                <MessageSquare className="mr-2 h-4 w-4" /> Escribir por Chat
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}