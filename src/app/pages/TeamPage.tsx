import { motion } from "motion/react";
import { Users, Handshake, ShieldCheck, Cog } from "lucide-react";

const getGradientColor = (index: number) => {
  const gradients = [
    "from-blue-500 to-blue-700",
    "from-purple-500 to-purple-700",
    "from-cyan-500 to-cyan-700",
    "from-indigo-500 to-indigo-700",
    "from-slate-600 to-slate-800",
    "from-orange-500 to-orange-700",
  ];
  return gradients[index % gradients.length];
};

const teamMembers = [
  { name: "Mr. Dinesh Kumar", role: "Founder & Managing Director", exp: "20+ Years Exp", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Suresh Menon", role: "Lead Automation Engineer", exp: "15 Years Exp", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Rajesh Reddy", role: "Chemical Process Head", exp: "12 Years Exp", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Sharma", role: "Design & GA Specialist", exp: "8 Years Exp", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Anand Verma", role: "Project Execution Manager", exp: "14 Years Exp", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Vikram Singh", role: "NDT Systems Expert", exp: "10 Years Exp", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
];

export function TeamPage() {
  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Technical Team</h1>
          <p className="text-lg text-slate-600">
            A specialized 15-member engineering task force dedicated to delivering uncompromising quality in industrial automation and setups.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className={`h-64 relative flex items-center justify-center bg-gradient-to-br ${getGradientColor(idx)} group-hover:scale-105 transition-transform duration-500`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.8),transparent)]"></div>
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mb-4">
                    <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {member.exp}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 rounded-2xl border border-slate-200 border-dashed flex flex-col items-center justify-center p-8 text-center"
          >
            <Users className="w-12 h-12 text-slate-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-2">+ 9 Dedicated Specialists</h3>
            <p className="text-sm text-slate-500">Including draftsmen, safety coordinators, and field technicians.</p>
          </motion.div>
        </div>

        {/* Consulting Partner Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-900 rounded-3xl p-10 md:p-16 relative overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Handshake className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold">Consulting Partnership</h2>
              </div>
              <h3 className="text-xl text-blue-200 font-medium mb-6">Elroiz Neway Solutions</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                To guarantee world-class execution, SDK Automations operates in close technical collaboration with Elroiz Neway Solutions. This strategic partnership brings specialized consulting support for complex chemical processing, advanced NDT integrations, and international compliance standards.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-sm text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span>Quality Assurance & Validation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-300">
                  <Cog className="w-5 h-5 text-blue-400" />
                  <span>Process Engineering Consultation</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-blue-700/50">
               <img src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&q=80&w=800" alt="Consulting Team" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" />
               <div className="absolute inset-0 bg-blue-900/30"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-slate-900/80 backdrop-blur-md px-8 py-6 rounded-xl border border-blue-500/30 text-center">
                    <span className="block text-2xl font-bold text-white mb-2">Technical Synergy</span>
                    <span className="block text-blue-300 text-sm">SDK × Elroiz Neway</span>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
