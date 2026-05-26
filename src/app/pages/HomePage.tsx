import { motion } from "motion/react";
import { ArrowRight, Settings, Zap, ShieldCheck, Factory, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

function CapabilityCard({ service }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
    >
      <div className="h-48 overflow-hidden bg-slate-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
          <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 mb-6">{service.desc}</p>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 font-medium flex items-center gap-2 group-hover:text-blue-700 transition-colors mb-4"
        >
          Learn more
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-slate-200">
            <p className="text-slate-600 text-sm leading-relaxed">{service.details}</p>
            <div className="mt-4">
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                View all services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2Ffbc0f89b916b446bad4b6d2e9e1aa85c?format=webp&width=800&height=1200"
            alt="Industrial Automation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Smart Solutions</span> for Industrial Excellence
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              World-class automation systems, chemical processing lines, and turnkey engineering support for global manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md border border-white/10 transition-all hover:scale-105"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Our Solutions in Action</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">Watch our expert team deliver world-class automation and engineering excellence.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-950">
            <video
              controls
              className="w-full h-auto bg-black"
              poster="https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2Ffbc0f89b916b446bad4b6d2e9e1aa85c?format=webp&width=800&height=1200"
            >
              <source
                src="https://cdn.builder.io/o/assets%2F6081257f56164f79a999356618a191cf%2F26609043e39e478fa59fc3f207db1e98?alt=media&token=940c22d5-b6e3-4207-a524-a4d0c0c759eb&apiKey=6081257f56164f79a999356618a191cf"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-20 -mt-0 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { label: "Projects Completed", value: "150+" },
            { label: "Global Clients", value: "40+" },
            { label: "Years Experience", value: "15+" },
            { label: "Expert Engineers", value: "15" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Capabilities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Advanced engineering solutions tailored for modern industrial requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PLC Automation",
                icon: Settings,
                desc: "Intelligent control systems for optimal manufacturing efficiency.",
                image: "https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2F05b5896a615341d79d29bc546bc27f02?format=webp&width=800&height=1200",
                details: "Our PLC automation solutions include: programmable logic controller design, HMI interface development, real-time monitoring systems, and industrial IoT integration. Perfect for optimizing production lines and reducing manual intervention."
              },
              {
                title: "Chemical Processing",
                icon: Factory,
                desc: "Complete setup for chemical processing lines and surface treatment.",
                image: "https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2Fc2bc854df9c24e37aaf23da22c166edf?format=webp&width=800&height=1200",
                details: "From tank establishment to filtration systems, heating controls, and safety compliance. We handle complete turnkey chemical processing facility setup with expert commissioning and operator training included."
              },
              {
                title: "NDT FPI Booths",
                icon: ShieldCheck,
                desc: "Precision testing environments for aerospace and manufacturing.",
                image: "https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2Feb1277e567ea49e89519e32f45528e63?format=webp&width=800&height=1200",
                details: "Specialized non-destructive testing facilities with dark room setup, precise lighting controls, and contamination management. Certified for aerospace, automotive, and critical manufacturing standards."
              },
            ].map((service, idx) => (
              <CapabilityCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://cdn.builder.io/api/v1/image/assets%2F8c409737d47b4c5ebd702c7c2a206fa9%2Ffc7be238e8d54b3baa74f1757e0ae434?format=webp&width=800&height=1200')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Industrial Processes?</h2>
          <p className="text-xl text-blue-200 mb-10">Partner with SDK Automations for turnkey engineering solutions that drive efficiency and precision.</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow-xl hover:bg-slate-50 transition-colors"
          >
            Schedule a Consultation
            <Zap className="ml-2 w-5 h-5 text-blue-600" />
          </Link>
        </div>
      </section>
    </div>
  );
}
