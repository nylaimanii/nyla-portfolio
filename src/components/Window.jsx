import { motion } from 'framer-motion';
import '../styles/windows.css';

export default function Window({ title, variant = 'cyan', fullWidth = false, children, id, index = 0 }) {
  return (
    <motion.div
      id={id}
      className={`window window-${variant}${fullWidth ? ' window-full' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="window-titlebar">
        <span className="window-dot window-dot-red" />
        <span className="window-dot window-dot-yellow" />
        <span className="window-dot window-dot-green" />
        <span>{title}</span>
      </div>
      <div className="window-body">
        {children}
      </div>
    </motion.div>
  );
}
