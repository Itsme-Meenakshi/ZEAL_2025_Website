import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-foreground mb-1">ZEAL 2025</h3>
            <p className="text-muted-foreground font-body text-sm">
              IEEE WIE AG MITS Initiative
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground font-body text-sm">
              Organized by
            </span>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-display text-xs tracking-wider">
                IEEE SB MITS
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-display text-xs tracking-wider">
                IEEE WIE
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <a 
              href="https://ieeesbmits.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors font-body"
            >
              ieeesbmits.in
            </a>
            <p className="text-muted-foreground font-body text-sm mt-1">
              © 2025 All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
