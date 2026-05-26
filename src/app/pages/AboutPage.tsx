import { motion } from "motion/react";
import { Target, Lightbulb, Shield, Award, Users } from "lucide-react";

export function AboutPage() {
  return (
    <div className="pt-10 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">Our Story</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-800 to-pink-700 bg-clip-text text-transparent border border-slate-200/10">
            About SDK Automations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            A specialized engineering and automation solutions company focused on delivering world-class turnkey projects with precision and innovation.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <img
              src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&q=80&w=1000"
              alt="Engineering Team"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-blue-600/20"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                <p className="text-slate-900 dark:text-white font-semibold">15+ years of Industrial Excellence</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Trusted by leading manufacturing companies worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Engineering Philosophy</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At SDK Automations, we believe in engineering excellence through precision, innovation, and unwavering commitment to quality. We specialize in automation systems, chemical processing line establishments, NDT FPI booth setups, bath process integrations, industrial installations, and complete turnkey engineering support.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: "Mission", icon: Target, desc: "Engineer smart solutions that elevate industrial excellence." },
                { title: "Vision", icon: Lightbulb, desc: "Be the global benchmark in automation and turnkey setups." },
                { title: "Values", icon: Shield, desc: "Integrity, Quality, Safety, and Innovation." },
                { title: "Commitment", icon: Award, desc: "Projects delivered on time, without compromise." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Leadership</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mr. Dinesh Kumar</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-sm">Founder & Managing Director</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Leading SDK Automations with over two decades of industrial engineering expertise and strategic vision.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-2 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Strategic Partnership</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-l-4 border-blue-600 p-8 rounded-xl mb-6">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  In technical collaboration and consulting partnership with <span className="font-bold text-blue-600 dark:text-blue-400">Elroiz Neway Solutions</span>, we bring unmatched expertise in specialized industrial processes, ensuring world-class standards in every project execution.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Elroiz Neway Solutions</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Global Technical Consulting Partner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
