import { motion } from 'framer-motion';
import { AdminSafetyBoard } from './sections/AdminSafetyBoard';
import { HeroOverview } from './sections/HeroOverview';
import { MobileScreensMVP } from './sections/MobileScreensMVP';
import { MvpPlanBoard } from './sections/MvpPlanBoard';
import { OrganizerAnalyticsBoard } from './sections/OrganizerAnalyticsBoard';

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#231334] via-[#34204E] to-[#46316B] px-4 py-6 text-ink sm:px-8">
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <HeroOverview />
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MobileScreensMVP />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <OrganizerAnalyticsBoard />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <AdminSafetyBoard />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MvpPlanBoard />
      </motion.div>
    </div>
  </div>
);

export default App;
