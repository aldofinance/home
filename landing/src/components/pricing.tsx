"use client";

import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CallToAction } from "@/components/calltoaction";
import { ComparisonTablePlans } from "@/components/comparison-table-plans";
import { FrequentlyAskedQuestions } from "@/components/faq";

const plans = [
  {
    name: "Free",
    price: 0,
    description:
        "Ideal para profesionales que están empezando. Sin necesidad de tarjeta de crédito.",
    features: [
      "1 Usuario Técnico + 1 Administrador",
      "500 MB de Almacenamiento",
      "4 Reportes semanales",
      "Registro Offline (Sin Internet)",
      "Firma Digital incluida",
      "2 Plantillas personalizables",
    ],
    buttonText: "Try Free",
  },
  {
    name: "Primary",
    price: 3000,
    isRecommended: true,
    description:
        "La experiencia completa de Qontrol para profesionales que buscan un verdadero aliado en su trabajo.",
    features: [
      "Usuarios Técnicos ilimitados",
      "Almacenamiento ilimitado",
      "Reportes y envíos por correo ilimitados",
      "Dashboard de productividad",
      "Descarga masiva de evidencias en (Excel + PDF)",
      "Plantillas ilimitadas de documentos y formularios",
      "Firma Digital e Historial inalterable",
    ],
    buttonText: "Try Free",
    isPopular: true,
  },
  {
    name: "Corporate",
    price: 7600,
    description:
        "Para equipos en crecimiento que necesitan optimizar tiempos, organizar evidencias y escalar sus operaciones.",
    features: [
      "Todo lo del plan Primary",
      "3 Usuarios Administradores incluidos",
      "Soporte prioritario por WhatsApp",
      "Marca blanca personalizada",
      "Descarga masiva e integración Cloud",
      "Configuración e integración inicial incluida",
      "Capacitación remota para tu equipo",
    ],
    buttonText: "Try Free",
  },
];

const Pricing = () => {
  return (
      <div className="w-full">
        {/* Header Section */}
        <div className="relative overflow-visible px-4 py-8 sm:px-6 sm:py-10 md:py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-medium tracking-[-0.04em] sm:text-4xl sm:text-[2.75rem]">
              Nuestros Planes
            </h2>
            <p className="mt-3 text-center text-xl tracking-[0.01em] text-black md:text-2xl">
              Elige el plan que se ajusta a tus necesidades
            </p>
          </div>
        </div>

        {/* Pricing Plans Section */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:py-10">
          <div className="mx-auto mt-6 grid max-w-(--breakpoint-lg) grid-cols-1 items-stretch gap-6 sm:mt-8 sm:gap-8 md:mt-10 md:gap-10 lg:grid-cols-3 lg:gap-0">
            {plans.map((plan) => (
                <div
                    className={cn(
                        "relative flex h-full flex-col border bg-white p-6 sm:p-8 lg:p-7 lg:first:rounded-none lg:last:rounded-none lg:rounded-none",
                        {
                          "ring-5 ring-brand z-10 ring-inset": plan.isPopular,
                        }
                    )}
                    key={plan.name}
                >
                  {plan.isPopular && (
                      <Badge className="text-brand absolute -top-3 right-1/2 translate-x-1/2 -translate-y-1/2">
                        Más Popular
                      </Badge>
                  )}

                  {/* BLOQUE SUPERIOR (Título, Precio, Descripción) */}
                  <div>
                    {/* Título: Altura fija estándar */}
                    <h3 className="h-7 text-lg font-medium">{plan.name}</h3>

                    {/* Precio: min-h-[5rem] absorbe saltos de línea largos como "$3000 MXN + \n IVA" */}
                    <div className="mt-4 flex min-h-[5rem] items-start">
                      <p className="text-4xl font-semibold">
                        ${plan.price} MXN + IVA
                      </p>
                    </div>

                    {/* Descripción: min-h-[7rem] asegura que todas las descripciones bajen el separador al mismo nivel exacto */}
                    <div className="mt-2 flex min-h-[7rem] items-start">
                      <p className="text-black">{plan.description}</p>
                    </div>
                  </div>

                  <Separator className="my-6 shrink-0" />

                  {/* BLOQUE INFERIOR FLEXIBLE (Lista y Botón) */}
                  <div className="flex flex-1 flex-col">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                          <li
                              className="flex items-start gap-2 text-sm sm:text-base"
                              key={feature}
                          >
                            <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-green-600" />
                            <span>{feature}</span>
                          </li>
                      ))}
                    </ul>

                    {/* Contenedor del botón con mt-auto para pegarlo 100% abajo */}
                    <div className="mt-auto pt-8">
                      <Button
                          className={cn("w-full text-base font-semibold", {
                            "bg-brand hover:text-brand text-white hover:bg-white":
                            plan.isPopular,
                            "border-black text-black hover:border-white hover:bg-white hover:text-black bg-white":
                                !plan.isPopular,
                          })}
                          size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Comparison Table Section */}
        <ComparisonTablePlans />

        {/* FAQ Section */}
        <FrequentlyAskedQuestions />

        {/* Call to Action */}
        <CallToAction />
      </div>
  );
};

export default Pricing;