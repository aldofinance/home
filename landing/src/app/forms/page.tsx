"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
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
    LayoutDashboard,
    History,
    FileCode2,
    AlertTriangle,
    Check,
    Award,
    Send,
    Trophy,
    FolderX,
    TrendingUp,
    Smartphone,
    PenTool,
    Database
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- COMPONENTE DE CONTADOR ANIMADO (Inicia rigurosamente en 0) ---
function AnimatedCounter({ end, duration = 2200 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration]);

    return <>{count.toLocaleString("en-US")}</>;
}

// --- CASOS DE ESTUDIO OPERATIVOS (REEMPLAZO REAL DEL PAPEL) ---
const studyCases = [
    {
        id: "captura",
        title: "1. Eliminación del Trabajo Doble",
        shortName: "Captura Directa",
        problem: "Técnicos acuden con reporte impreso en papel y lo entregan manualmente al capturista para su transcripción y posterior envío.",
        solution: "Reemplazo total por formularios dinámicos en app web adaptados a la inspección actual, accesibles desde celular, tablet o computadora.",
        icon: Smartphone,
        tagline: "0% transcripción manual",
        bgGradient: "bg-black text-white",
    },
    {
        id: "evidencia",
        title: "2. Registro en Campo & Fotografías",
        shortName: "Inspección Móvil",
        problem: "Fotografías sueltas en dispositivos personales y anotaciones en papel sin vinculación directa con el historial del activo.",
        solution: "El técnico registra 'n' cantidad de extintores u otros activos, adjunta evidencias fotográficas y valida estatus en el mismo lugar.",
        icon: FileCode2,
        tagline: "Evidencia fotográfica en sitio",
        bgGradient: "bg-zinc-900 text-white",
    },
    {
        id: "firma",
        title: "3. Firma Digital & Entrega Instantánea",
        shortName: "Despacho Inmediato",
        problem: "Días o semanas de retraso para que el cliente reciba la documentación oficial del servicio o auditoría realizada.",
        solution: "Captura de firma digital del técnico y del cliente en pantalla. En segundos se emite el PDF oficial con identidad corporativa y se entrega al cliente.",
        icon: PenTool,
        tagline: "Reporte generado en segundos",
        bgGradient: "bg-stone-900 text-white",
    },
    {
        id: "historial",
        title: "4. Historial Auditable en la Nube",
        shortName: "Control Administrador",
        problem: "Hojas traspapeladas, archivos dispersos y falta de visibilidad del cumplimiento general ante auditorías.",
        solution: "Panel de administración centralizado con acceso al historial completo de todas las revisiones, con trazabilidad inalterable.",
        icon: Database,
        tagline: "Acceso total para administradores",
        bgGradient: "bg-neutral-900 text-white",
    },
];

// --- PESTAÑAS DE DEMOSTRACIÓN DEL PRODUCTO ---
const productTabs = [
    {
        id: "dashboard",
        label: "Dashboard IA",
        icon: LayoutDashboard,
        badge: "Análisis Automatizado",
        title: "Visualiza el cumplimiento general sin abrir un solo Excel",
        description:
            "Obtén el porcentaje exacto de activos en estado OK / NO OK en tiempo real. Monitorea presiones, sellos, manómetros y pruebas hidrostáticas con analítica operativa.",
        imageSrc: "/image/dashboard.png",
    },
    {
        id: "mapa",
        label: "Mapa de Activos",
        icon: MapPin,
        badge: "Geolocalización GPS",
        title: "Ubica cada extintor y equipo en el mapa",
        description:
            "Visualización geográfica por cliente, sede o mes de recarga. Localiza de inmediato cualquier activo dentro de las instalaciones con trazabilidad total.",
        imageSrc: "/image/mapa.jpg",
    },
    {
        id: "historial",
        label: "Historial & PDF",
        icon: History,
        badge: "Validez Legal NOM/STPS",
        title: "Historial inalterable con envíos automáticos",
        description:
            "Genera reportes PDF oficiales con firma digital y folio único. Distribuye los documentos por correo electrónico en cuanto concluye la revisión en campo.",
        imageSrc: "/image/historial.png",
    },
    {
        id: "formularios",
        label: "Editor Dinámico",
        icon: FileCode2,
        badge: "100% Personalizable",
        title: "Formularios a la medida sin saber programar",
        description:
            "Crea checklists condicionales para extintores, hidrantes, subestaciones o cualquier activo en minutos, adaptados a la normativa vigente.",
        imageSrc: "/image/formularios.png",
    },
];

// --- PLANES DE PRECIO ---
const plans = [
    {
        name: "Free",
        price: "0",
        period: "gratis",
        description: "Para profesionales que están iniciando. Sin tarjeta de crédito.",
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
        description: "La experiencia completa para escalar el servicio de inspección.",
        features: [
            "Usuarios Técnicos ilimitados",
            "Almacenamiento ilimitado",
            "Reportes y envíos por correo ilimitados",
            "Dashboard de productividad",
            "Descarga masiva en (Excel + PDF)",
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
        description: "Para organizaciones que requieren marca blanca y soporte dedicado.",
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
        a: "Sí, el plan gratuito tiene un límite de 15 días. Incluye 1 técnico, 1 administrador y 4 reportes por semana para operar sin compromisos.",
    },
    {
        q: "¿Puedo cambiar de plan cuando mi equipo crezca?",
        a: "Sí, puedes ajustar tu suscripción en cualquier momento desde la consola de administración.",
    },
    {
        q: "¿Ofrecen descuento en esquemas de pago anual?",
        a: "Sí, obtienes 2 meses sin costo al contratar el plan anual (El plan Primary disminuye a $2,400 MXN + IVA/mes).",
    },
    {
        q: "¿Existen contratos forzosos?",
        a: "No existen plazos forzosos. Puedes cancelar la suscripción mensual en el momento que lo requieras.",
    },
];

export default function FormsPage() {
    // ESTADOS
    const [activeCase, setActiveCase] = useState("captura");
    const [activeTab, setActiveTab] = useState("dashboard");
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const [signed, setSigned] = useState(false);
    const [sendingStatus, setSendingStatus] = useState<"idle" | "sending" | "sent">("idle");

    // TOAST STATE (Original)
    const [toast, setToast] = useState<{ show: boolean; message: string; isError: boolean }>({
        show: false,
        message: "",
        isError: false,
    });

    const mostrarToast = (mensaje: string, esError = false) => {
        setToast({ show: true, message: mensaje, isError: esError });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, show: false }));
        }, 3500);
    };

    const handleSign = () => {
        const nextSignedState = !signed;
        setSigned(nextSignedState);
        if (nextSignedState) {
            mostrarToast("Firma digital generada y verificada bajo estándar NOM/STPS.", false);
        } else {
            mostrarToast("Firma removida del documento.", true);
        }
    };

    const handleSimulateSend = () => {
        setSendingStatus("sending");
        setTimeout(() => {
            setSendingStatus("sent");
            mostrarToast("Reporte PDF oficial despachado correctamente al cliente.", false);
        }, 1200);
    };

    const currentTab = productTabs.find((t) => t.id === activeTab) || productTabs[0];

    return (
        <div className="min-h-screen bg-[#fcfcf9] text-black font-montserrat antialiased selection:bg-black selection:text-white">
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className="pt-28 pb-12 md:pt-36 md:pb-16 max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* BADGE NEO-BRUTALISTA */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] text-xs font-black uppercase text-black mb-8 rounded-lg">
                        <Award className="h-4 w-4 text-brand" />
                        InnovaFest 2026 • Transformación Digital e IA
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.08] mb-6 uppercase">
                        Digitaliza tus revisiones. <br />
                        <span className="text-brand">Elimina el papel.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-2xl mb-10">
                        La innovación tecnológica mexicana que está transformando la seguridad industrial. Pasa de capturas manuales a inspecciones digitales en tiempo real con geolocalización GPS y firma inalterable.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Button
                            className="h-14 px-8 text-base font-bold bg-brand text-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all rounded-none w-full sm:w-auto"
                            size="lg"
                            asChild
                        >
                            <Link href="https://calendar.app.google/HueQQwgFaVgzDoam8" target="_blank">
                                Agendar Demo Gratis <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-14 px-8 text-base font-bold bg-white text-black border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all rounded-none w-full sm:w-auto"
                            size="lg"
                            asChild
                        >
                            <Link href="https://www.theqontrol.com/" target="_blank">
                                Conocer la Plataforma
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 pt-8 border-t-2 border-black/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-700 font-bold">
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-black" />
                            <span>Implementado en <strong className="text-black font-black">más de 300 plantas e industrias</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-brand" />
                            <span>Desarrollado en <strong className="text-black font-black">Saltillo, Coahuila 🇲🇽</strong></span>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECCIÓN DE CONTADORES EN VIVO */}
            <section className="pb-20 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* TARJETA 1: ACTIVOS REGISTRADOS */}
                    <div className="bg-white border-2 border-black p-8 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-[11px] font-black uppercase tracking-wider bg-black text-white px-3 py-1 border border-black">
                                Métrica Oficial
                            </span>
                            <ShieldCheck className="h-7 w-7 text-brand" />
                        </div>

                        <div>
                            <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-none my-2 font-mono">
                                +<AnimatedCounter end={24411} duration={2500} />
                            </div>
                            <h3 className="text-2xl font-black text-black uppercase mt-4">
                                Activos registrados
                            </h3>
                        </div>
                    </div>

                    {/* TARJETA 2: EMPRESAS IMPACTADAS */}
                    <div className="bg-white border-2 border-black p-8 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-[11px] font-black uppercase tracking-wider bg-brand text-white px-3 py-1 border border-black">
                                Cobertura Comercial
                            </span>
                            <Building2 className="h-7 w-7 text-black" />
                        </div>

                        <div>
                            <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-none my-2 font-mono">
                                +<AnimatedCounter end={541} duration={2000} />
                            </div>
                            <h3 className="text-2xl font-black text-black uppercase mt-4">
                                Empresas impactadas
                            </h3>
                            <p className="text-sm font-medium text-gray-700 mt-2 leading-relaxed">
                                Negocios que han recibido documentación oficial de Qontrol.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2. TRES TARJETAS DE IMPACTO (90% AHORRO, DESORDEN, MIT) */}
            <section className="py-16 bg-white border-y-2 border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
                            Impacto Operativo y Financiero
                        </h2>
                        <p className="text-gray-600 text-sm font-semibold mt-2">
                            Aumenta la eficiencia de tus inspecciones y escala la rentabilidad de tu negocio.
                        </p>
                    </div>

                    {/* 3 TARJETAS MINIMALISTAS Y UNIFORMES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* TARJETA 1: 90% AHORRO DE TIEMPO */}
                        <div className="bg-brand/10 p-8 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between">
                            <span className="absolute -top-3 right-4 bg-brand text-white border border-black text-[10px] font-black uppercase px-2.5 py-0.5">
                                Eficiencia Directa
                            </span>
                            <div>
                                <div className="w-12 h-12 bg-brand text-white border-2 border-black flex items-center justify-center mb-6 font-bold">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="font-black text-black text-xl mb-2 uppercase">90% Ahorro de Tiempo</h3>
                                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                    En cada reporte emitido ahorras el 90% del tiempo administrativo, eliminando por completo la captura manual de datos y la transcripción física.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 2: DESORDEN DOCUMENTAL */}
                        <div className="bg-[#fff0f0] p-8 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 bg-red-600 text-white border-2 border-black flex items-center justify-center mb-6 font-bold">
                                    <FolderX className="h-6 w-6" />
                                </div>
                                <h3 className="font-black text-black text-xl mb-2 uppercase">Desorden Documental</h3>
                                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                    Miles de hojas físicas y archivos extraviados saturan a tu equipo, generando lentitud en los sistemas, retrasos en la facturación y falta de control sobre los activos.
                                </p>
                            </div>
                        </div>

                        {/* TARJETA 3: ESTUDIO MIT */}
                        <div className="bg-black text-white p-8 border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] relative flex flex-col justify-between">
                            <span className="absolute -top-3 right-4 bg-white text-black border border-black text-[10px] font-black uppercase px-2.5 py-0.5">
                                Estudio MIT
                            </span>
                            <div>
                                <div className="w-12 h-12 bg-white text-black border-2 border-black flex items-center justify-center mb-6 font-bold">
                                    <TrendingUp className="h-6 w-6 text-brand" />
                                </div>
                                <h3 className="font-black text-white text-xl mb-2 uppercase">+26% Rentabilidad</h3>
                                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                                    De acuerdo con investigaciones del MIT, las empresas que digitalizan sus operaciones se vuelven un 26% más rentables que sus competidores análogos.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. CASOS DE ESTUDIO: REEMPLAZO DEL PAPEL EN TIEMPO REAL */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-brand font-black text-xs uppercase tracking-wider">Transformación Digital Real</span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase mt-1">
                            Casos de Estudio: Del Papel a Tiempo Real
                        </h2>
                    </div>
                    <p className="text-gray-600 font-medium text-sm mt-2 md:mt-0 max-w-md">
                        Selecciona cada etapa para conocer cómo QONTROL® elimina los cuellos de botella del modelo análogo.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[420px]">
                    {studyCases.map((item) => {
                        const isSelected = activeCase === item.id;
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                onClick={() => setActiveCase(item.id)}
                                className={cn(
                                    "relative border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] cursor-pointer transition-all duration-300 flex flex-col justify-between p-8 text-white overflow-hidden",
                                    item.bgGradient,
                                    {
                                        "lg:flex-[3.5] opacity-100": isSelected,
                                        "lg:flex-[0.9] opacity-80 hover:opacity-100": !isSelected,
                                    }
                                )}
                            >
                                <div className="flex items-start justify-between z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 border border-white/20 bg-white/10">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        {isSelected && (
                                            <div>
                                                <h4 className="font-black text-base leading-tight uppercase">{item.title}</h4>
                                                <span className="text-xs text-brand font-bold uppercase">{item.tagline}</span>
                                            </div>
                                        )}
                                    </div>

                                    {!isSelected && (
                                        <span className="hidden lg:block rotate-90 origin-top-left text-xs font-black uppercase tracking-widest text-white/70 whitespace-nowrap mt-12">
                                            {item.shortName}
                                        </span>
                                    )}
                                </div>

                                {isSelected && (
                                    <div className="my-auto space-y-4 z-10 animate-fadeIn pt-4">
                                        <div className="bg-red-950/40 border border-red-500/40 p-4">
                                            <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                                                ❌ Proceso Análogo (Antes):
                                            </span>
                                            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
                                                {item.problem}
                                            </p>
                                        </div>

                                        <div className="bg-emerald-950/40 border border-emerald-500/40 p-4">
                                            <span className="text-[10px] font-black uppercase text-emerald-400 block mb-1">
                                                ✅ Solución QONTROL® (Ahora):
                                            </span>
                                            <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">
                                                {item.solution}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {!isSelected && (
                                    <div className="lg:hidden z-10 pt-4 border-t border-white/20">
                                        <h4 className="font-bold text-sm text-white uppercase">{item.title}</h4>
                                        <p className="text-xs text-white/70 line-clamp-1">{item.tagline}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. DEMOSTRACIÓN DE PRODUCTO CON PESTAÑAS */}
            <section className="py-20 bg-black text-white border-y-2 border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-amber-400 font-black text-xs uppercase tracking-wider">Demostración de la Plataforma</span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mt-1">
                            Control Operativo Unificado
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                        {productTabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-5 py-2.5 font-bold text-xs sm:text-sm uppercase transition-all border-2 border-white cursor-pointer",
                                        {
                                            "bg-brand text-white shadow-[4px_4px_0px_rgba(255,255,255,1)]": isActive,
                                            "bg-black text-gray-400 hover:text-white hover:border-white": !isActive,
                                        }
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="bg-zinc-900 border-2 border-white p-4 sm:p-6 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
                        <div className="flex items-center justify-between pb-3 border-b border-zinc-700 text-xs text-gray-400 font-mono mb-6">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500 border border-black" />
                                <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                            </div>
                            <span className="bg-black text-white px-3 py-1 border border-zinc-700">app.theqontrol.com</span>
                            <span className="hidden sm:inline text-brand font-bold text-[10px] uppercase">QONTROL AI</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="inline-block bg-white text-black border border-black px-2.5 py-1 text-[11px] font-black uppercase tracking-wider">
                                    {currentTab.badge}
                                </span>
                                <h3 className="text-2xl font-black leading-tight uppercase">
                                    {currentTab.title}
                                </h3>
                                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                                    {currentTab.description}
                                </p>
                                <div className="pt-2">
                                    <Button
                                        onClick={() => mostrarToast("Solicitud enviada. Un asesor se pondrá en contacto.", false)}
                                        className="bg-brand text-white font-bold border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all rounded-none text-xs h-10 px-5 uppercase"
                                    >
                                        Solicitar Demostración <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:col-span-7 overflow-hidden border-2 border-white bg-black aspect-video flex items-center justify-center">
                                <img
                                    src={currentTab.imageSrc}
                                    alt={currentTab.label}
                                    className="w-full h-full object-cover object-top opacity-90"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://placehold.co/1280x800/1a1a1a/FFF?text=Captura+de+Pantalla+QONTROL";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CARACTERÍSTICAS BENTO GRID INTERACTIVO */}
            <section className="py-20 bg-[#fcfcf9] border-t-2 border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] text-xs font-black uppercase text-black mb-4">
                            <Sparkles className="h-4 w-4 text-brand" />
                            Infraestructura de Inspección
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black uppercase">
                            Arquitectura Tecnológica Industrial
                        </h2>
                        <p className="text-gray-700 text-sm sm:text-base mt-3 font-semibold">
                            Suite modular diseñada para eliminar el uso de papel, automatizar la generación de reportes y asegurar cumplimiento legal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                        {/* TARJETA DESTACADA INNOVAFEST */}
                        <div className="md:col-span-12 bg-black text-white p-8 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-black border border-black text-xs font-black uppercase mb-3">
                                    <Trophy className="h-4 w-4" /> InnovaFest 2026
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black uppercase mb-2">
                                    Semifinalistas del Premio a la Innovación Mexicana
                                </h3>
                                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                                    Reconocimiento otorgado dentro de la categoría <strong>Transformación Digital e Inteligencia Artificial</strong> por convertir procesos manuales de campo en sistemas de inteligencia operativa en tiempo real.
                                </p>
                            </div>
                            <div className="bg-white text-black p-6 border-2 border-black shadow-[4px_4px_0px_rgba(255,255,255,0.3)] text-center shrink-0">
                                <span className="block text-4xl font-black text-brand">90%</span>
                                <span className="text-xs font-bold uppercase">Ahorro en Tiempos</span>
                            </div>
                        </div>

                        {/* TARJETA FIRMA DIGITAL */}
                        <div className="md:col-span-12 lg:col-span-6 bg-white border-2 border-black p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-brand font-black text-xs uppercase tracking-wider mb-3">
                                    <ShieldCheck className="h-4 w-4" />
                                    <span>Validez Legal NOM-002</span>
                                </div>
                                <h3 className="text-2xl font-black text-black uppercase mb-3">
                                    Firma Digital e Historial
                                </h3>
                                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6">
                                    Expedientes digitales inalterables con registro de sello y trazabilidad auditables ante Protección Civil y STPS.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-6 border-2 border-black border-dashed flex flex-col items-center justify-center relative">
                                <span className="text-[10px] uppercase font-black text-black absolute top-2 left-3 bg-white px-2 border border-black">
                                    Módulo de Firma
                                </span>

                                <div className="w-full bg-white border-2 border-black p-4 text-center min-h-[100px] flex flex-col items-center justify-center">
                                    {signed ? (
                                        <div className="flex flex-col items-center animate-fadeIn">
                                            <span className="font-serif italic text-2xl text-black font-bold">
                                                Ing. Roberto Garza
                                            </span>
                                            <span className="text-xs text-emerald-700 font-mono font-bold mt-1 flex items-center gap-1 bg-emerald-100 px-2 py-0.5 border border-emerald-600">
                                                <Check className="h-3 w-3 stroke-[3px]" /> VERIFICADO STPS
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="text-xs text-gray-500 font-bold italic">Documento sin firmar...</span>
                                    )}
                                </div>

                                <button
                                    onClick={handleSign}
                                    className="mt-4 text-xs font-black text-black bg-white border-2 border-black px-4 py-2 uppercase shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
                                >
                                    {signed ? "Limpiar Firma" : "Simular Firma Digital"}
                                </button>
                            </div>
                        </div>

                        {/* TARJETA DESPACHO DE REPORTES */}
                        <div className="md:col-span-12 lg:col-span-6 bg-white border-2 border-black p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-brand font-black text-xs uppercase tracking-wider mb-3">
                                    <Mail className="h-4 w-4" />
                                    <span>Distribución Inmediata</span>
                                </div>
                                <h3 className="text-2xl font-black text-black uppercase mb-3">
                                    Despacho Automático PDF
                                </h3>
                                <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6">
                                    Genera e imparte certificados e inspecciones oficiales en formato PDF de manera ilimitada y sin cargos adicionales.
                                </p>
                            </div>

                            <div className="bg-black p-4 text-white font-mono text-xs border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                                <div className="flex items-center justify-between text-gray-300 pb-2 mb-2 border-b border-zinc-800 text-[11px] font-bold">
                                    <span className="flex items-center gap-1.5">
                                        <FileText className="h-4 w-4 text-brand" /> Reporte_Auditoria.pdf
                                    </span>
                                    <span className="bg-emerald-500 text-black px-1.5 font-sans font-black">GENERADO</span>
                                </div>

                                <div className="flex items-center justify-between gap-3 bg-zinc-900 p-3 border border-zinc-800">
                                    <div className="truncate">
                                        <span className="text-gray-400 block text-[9px] font-bold">DESTINATARIO:</span>
                                        <span className="text-gray-200 text-xs font-bold">auditoria@planta.com</span>
                                    </div>
                                    <button
                                        onClick={handleSimulateSend}
                                        disabled={sendingStatus === "sending"}
                                        className="bg-brand text-white px-3 py-2 border border-white text-[11px] font-sans font-bold flex items-center gap-1.5 hover:bg-brand/90 transition-all cursor-pointer shrink-0 uppercase"
                                    >
                                        {sendingStatus === "sending" && <Clock className="h-3 w-3 animate-spin" />}
                                        {sendingStatus === "sent" && <Check className="h-3 w-3 stroke-[3px]" />}
                                        {sendingStatus === "idle" && <Send className="h-3 w-3" />}
                                        <span>{sendingStatus === "sent" ? "Enviado" : sendingStatus === "sending" ? "Procesando" : "Emitir"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* TARJETAS SECUNDARIAS */}
                        <div className="md:col-span-6 bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                            <HardDrive className="h-6 w-6 text-black mb-3" />
                            <h4 className="font-black text-black text-lg uppercase mb-1">Almacenamiento Ilimitado</h4>
                            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                Custodia permanente del historial documental, firmas y fotografías en la nube de forma segura.
                            </p>
                        </div>

                        <div className="md:col-span-6 bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                            <FileSpreadsheet className="h-6 w-6 text-black mb-3" />
                            <h4 className="font-black text-black text-lg uppercase mb-1">Descarga Masiva ZIP</h4>
                            <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                Exporta paquetes estructurados de inspecciones en formato Excel y PDF organizados por periodos o sedes.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 6. PLANES DE PRECIO */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black uppercase">
                        Planes y Esquemas de Servicio
                    </h2>
                    <p className="text-gray-700 text-sm font-semibold mt-2">
                        Selecciona el plan proporcional al tamaño de tu equipo operativo. Sin plazos forzosos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={cn(
                                "bg-white p-8 border-2 border-black flex flex-col justify-between transition-all relative",
                                {
                                    "shadow-[8px_8px_0px_rgba(0,0,0,1)] -translate-y-1": plan.popular,
                                    "shadow-[4px_4px_0px_rgba(0,0,0,1)]": !plan.popular,
                                }
                            )}
                        >
                            {plan.popular && (
                                <span className="absolute -top-3 right-6 bg-brand text-white border border-black text-[10px] font-black uppercase tracking-wider px-3 py-1">
                        Recomendado
                    </span>
                            )}

                            <div>
                                <h3 className="text-xl font-black text-black uppercase">{plan.name}</h3>
                                <p className="text-xs text-gray-600 font-semibold mt-1">{plan.description}</p>

                                <div className="mt-6 mb-6 pb-6 border-b-2 border-black/10">
                                    <span className="text-4xl font-black text-black">${plan.price}</span>
                                    <span className="text-xs text-gray-600 font-bold ml-1">{plan.period}</span>
                                </div>

                                <div className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 font-medium">
                                            <Check className="h-4 w-4 text-black shrink-0 mt-0.5 stroke-[3px]" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button
                                className={cn("mt-8 w-full font-bold h-12 text-sm rounded-none border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all uppercase", {
                                    "bg-brand text-white hover:bg-brand": plan.popular,
                                    "bg-black text-white hover:bg-black": !plan.popular,
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

                {/* BOTÓN DE COMPARACIÓN DETALLADA */}
                <div className="mt-14 text-center">
                    <Button
                        className="h-13 px-8 text-sm font-black bg-white text-black border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all rounded-none uppercase inline-flex items-center gap-2"
                        asChild
                    >
                        <Link href="/pricing">
                            <span>Ver tabla de comparación a detalle</span>
                            <ArrowUpRight className="h-4 w-4 text-brand stroke-[3px]" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* 7. PREGUNTAS FRECUENTES */}
            <section className="py-16 bg-white border-t-2 border-black">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black text-center uppercase mb-10">
                        Preguntas Frecuentes
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-[#fcfcf9] border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left text-sm sm:text-base font-bold text-black cursor-pointer"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 text-black transition-transform duration-200 shrink-0 stroke-[3px]",
                                            expandedFaq === idx && "rotate-180"
                                        )}
                                    />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-800 font-medium leading-relaxed border-t-2 border-black/10">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. CALL TO ACTION FINAL */}
            <section className="bg-black text-white py-16 md:py-20 border-t-2 border-black">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">
                        Transforma la Gestión de Inspecciones
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium leading-relaxed">
                        Elimina los registros manuales en papel, garantiza certidumbre legal en auditorías y optimiza los tiempos de tu equipo de trabajo.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            className="h-12 px-8 font-bold bg-brand text-white border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all rounded-none w-full sm:w-auto uppercase"
                            asChild
                        >
                            <Link href="https://calendar.app.google/HueQQwgFaVgzDoam8" target="_blank">
                                <Calendar className="mr-2 h-4 w-4" /> Agendar Demo Gratis
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            className="h-12 px-8 font-bold bg-black text-white border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all rounded-none w-full sm:w-auto uppercase"
                            asChild
                        >
                            <Link href="https://www.theqontrol.com/" target="_blank">
                                <MessageSquare className="mr-2 h-4 w-4" /> Contactar con Asesor
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />

            {/* COMPONENTE DE NOTIFICACIÓN TOAST (ORIGINAL) */}
            {toast.show && (
                <div
                    className={cn(
                        "fixed bottom-6 right-6 left-6 sm:left-auto p-4 border-2 border-black font-bold text-sm z-50 flex items-center gap-3 animate-in slide-in-from-bottom-4 shadow-[6px_6px_0px_rgba(0,0,0,1)]",
                        toast.isError ? "bg-red-600 text-white border-black" : "bg-black text-white border-black"
                    )}
                >
                    {toast.isError ? (
                        <AlertTriangle className="h-5 w-5 text-white shrink-0" />
                    ) : (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 stroke-[3px]" />
                    )}
                    <span>{toast.message}</span>
                </div>
            )}
        </div>
    );
}