import { motion } from "framer-motion";
import { Cpu, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Tech Innovation",
    description: "Dive deep into AI, Web Development, and Data Science through hands-on workshops and competitions.",
  },
  {
    icon: Users,
    title: "Women in Engineering",
    description: "Empowering women to lead the future of technology through mentorship and collaboration.",
  },
  {
    icon: Zap,
    title: "Leadership Summit",
    description: "Network with industry leaders and gain insights from accomplished professionals.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="magical-particles opacity-30" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">About ZEAL 2025</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body">
            ZEAL is the flagship technical event organized by IEEE Women in Engineering (WIE) 
            Affinity Group at MITS. A day-long celebration of technology, innovation, and leadership 
            that brings together brilliant minds from across the region.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="gradient-border p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
