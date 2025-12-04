import { motion } from 'framer-motion';
import { Brain, Code2, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tracks = [
  {
    icon: Brain,
    title: 'AI Track',
    description:
      'Explore the frontiers of artificial intelligence, machine learning, and neural networks. Build intelligent systems that shape the future.',
    color: 'primary',
    gradient: 'from-primary/20 to-magenta/20',
  },
  {
    icon: Code2,
    title: 'Web Dev Track',
    description:
      'Master modern web technologies, frameworks, and best practices. Create stunning, responsive applications from scratch.',
    color: 'secondary',
    gradient: 'from-secondary/20 to-cosmic-blue/20',
  },
  {
    icon: Database,
    title: 'Data Science Track',
    description:
      'Unlock insights from data through analytics, visualization, and statistical modeling. Transform raw data into actionable knowledge.',
    color: 'accent',
    gradient: 'from-accent/20 to-primary/20',
  },
];

const TracksSection = () => {
  return (
    <section id="tracks" className="relative py-24 bg-card/50">
      <div className="magical-particles opacity-20" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Event Tracks</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Choose your path and unleash your potential across three exciting
            domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br ${track.gradient} border border-border hover:border-${track.color}/50 transition-all duration-500`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${track.color}/10 blur-xl`}
              />

              <div className="relative p-8">
                <div
                  className={`w-20 h-20 mb-6 rounded-2xl bg-${track.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <track.icon className={`w-10 h-10 text-${track.color}`} />
                </div>

                <h3 className="font-display text-2xl mb-4 text-foreground">
                  {track.title}
                </h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {track.description}
                </p>

                <Button
                  variant="outline"
                  className={`border-${track.color}/50 text-${track.color} hover:bg-${track.color} hover:text-foreground`}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
