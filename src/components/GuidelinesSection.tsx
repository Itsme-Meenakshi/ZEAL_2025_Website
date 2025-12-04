import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, BookOpen, Laptop, Shield, Trophy, Users } from "lucide-react";

const guidelines = [
  {
    icon: BookOpen,
    title: "General Guidelines",
    content: [
      "ZEAL is a day event. Participants must adhere to the schedule shared by the organizers.",
      "All participants must complete registration through the official ZEAL website before entering any event zone.",
      "Carry your college ID and registration confirmation at all times.",
      "Follow instructions given by event coordinators, volunteers and security personnel.",
    ],
  },
  {
    icon: Users,
    title: "Code of Conduct",
    content: [
      "Maintain respectful and professional behavior throughout the summit.",
      "Any form of harassment, discrimination, or disruptive behavior will not be tolerated.",
      "Treat all equipment, property, and venue infrastructure with care.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Event Participation",
    content: [
      "Participants must report to venues on time. Late entries may not be permitted.",
      "Follow the rules specific to each competition, workshop, or session as announced on-site.",
      "Misconduct or violation of event rules may lead to disqualification or removal from the venue.",
    ],
  },
  {
    icon: Laptop,
    title: "Technical & Workshop Guidelines",
    content: [
      "Talk Sessions: Be seated before the session begins to avoid disturbance. Maintain silence during talks.",
      "Hands-On Workshops: Bring your own laptop, chargers, and accessories unless informed otherwise.",
      "Ensure all required software/tools are installed beforehand.",
      "Follow instructions from mentors for safety and smooth execution.",
    ],
  },
  {
    icon: Trophy,
    title: "Competition Rules",
    content: [
      "External assistance or prohibited resources are not allowed; the list will be announced beforehand.",
      "Participants must adhere to time limits and submission deadlines.",
      "Any attempt to gain unfair advantage may result in disqualification.",
      "Decisions made by judges and organizers will be final and binding.",
    ],
  },
  {
    icon: Shield,
    title: "Safety & Certificates",
    content: [
      "Keep your personal belongings safe; organizers are not responsible for loss or damage.",
      "Report any suspicious activity or safety concerns to volunteers immediately.",
      "Certificates will be provided only to participants who meet attendance and eligibility criteria.",
      "Maintain cleanliness within all event spaces. Food and beverages are allowed only in designated areas.",
    ],
  },
];

const GuidelinesSection = () => {
  return (
    <section id="guidelines" className="relative py-24 bg-card/50">
      <div className="magical-particles opacity-20" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Event Guidelines</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Please read and follow all guidelines to ensure a safe and enjoyable experience for everyone
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {guidelines.map((item, index) => (
              <AccordionItem
                key={item.title}
                value={`item-${index}`}
                className="gradient-border px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-display text-lg text-foreground">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <ul className="space-y-3 pl-14">
                    {item.content.map((point, i) => (
                      <li key={i} className="text-muted-foreground font-body flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
