import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const AboutMe = () => {
    return (
        <div className="relative h-screen flex justify-center items-center overflow-hidden bg-slate-900/60">
            {/* Background grid and mask */}
            <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-8" />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none opacity-50" />
            
            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
