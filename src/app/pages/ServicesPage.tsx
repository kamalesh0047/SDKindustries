import { motion } from "motion/react";
import { Cpu, Settings, Combine, Activity, FlaskConical, Droplet, Cylinder, Thermometer, Radar, Aperture, PaintBucket, Waves, PenTool, Play, Users, CheckCircle2, Award, Zap, Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const services = [
  {
    icon: Cpu,
    title: "PLC-based Automation",
    desc: "Advanced programmable logic controller setups for precise factory automation.",
    details: "Our PLC automation solutions integrate cutting-edge programmable logic controllers with advanced HMI systems, providing real-time monitoring and control. We design custom logic sequences, implement data logging, and ensure seamless integration with existing production systems.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Settings,
    title: "Control Panel Integration",
    desc: "Custom industrial control panels designed for safety and efficiency.",
    details: "We design and build custom control panels with circuit protection, emergency stops, status indicators, and communication modules. Each panel is tested for electrical safety, thermal management, and operational reliability.",
    image: "https://images.unsplash.com/photo-1581092162562-40038f96a36b?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Combine,
    title: "Conveyor Systems",
    desc: "Robust material handling systems for seamless production flow.",
    details: "Complete conveyor system design and implementation including belt systems, roller conveyors, motorized drives, and automation controls. Perfect for food processing, manufacturing, and logistics applications.",
    image: "https://images.unsplash.com/photo-1513214582128-f1f5d6d15a44?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Activity,
    title: "Process Monitoring",
    desc: "Real-time tracking and data acquisition systems for industrial processes.",
    details: "Implement comprehensive monitoring systems with sensors, PLCs, and SCADA software. Collect critical production data, generate real-time alerts, and create historical reports for process optimization.",
    image: "https://images.unsplash.com/photo-1551874359-c6f9f4ecb3f8?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: FlaskConical,
    title: "Chemical Processing Lines",
    desc: "Complete turnkey establishment of chemical treatment facilities.",
    details: "End-to-end setup of chemical processing facilities including tank installation, pumping systems, heating/cooling controls, safety systems, and environmental compliance measures.",
    image: "https://images.unsplash.com/photo-1585518446867-8f3f8d0a0b5c?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Droplet,
    title: "Surface Treatment",
    desc: "Integration of advanced surface treatment and finishing processes.",
    details: "Professional surface treatment setups including electroplating, anodizing, coating, and finishing lines with proper ventilation, waste management, and quality control systems.",
    image: "https://images.unsplash.com/photo-1565640566911-8d001d78f2f5?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Cylinder,
    title: "Tank & Bath Establishment",
    desc: "Industrial-grade tank and bath setups for chemical processing.",
    details: "Installation of industrial tanks, plating baths, and immersion systems with proper infrastructure, piping, and support structures. Designed for durability and chemical resistance.",
    image: "https://images.unsplash.com/photo-1581092916250-62bdea2fc34f?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Thermometer,
    title: "Heating & Filtration",
    desc: "Specialized heating and filtration systems for process baths.",
    details: "Temperature control systems for chemical baths, industrial heaters, filtration units, and circulation pumps. Ensures optimal process conditions and bath longevity.",
    image: "https://images.unsplash.com/photo-1581092918199-20df3f2df39b?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Radar,
    title: "NDT FPI Booths",
    desc: "Non-destructive testing and Fluorescent Penetrant Inspection booths.",
    details: "Certified NDT/FPI inspection facilities with controlled lighting, dark rooms, proper ventilation, and compliant work environments. Meets aerospace and automotive industry standards.",
    image: "https://images.unsplash.com/photo-1581092887252-8f1c27f6d3fa?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Aperture,
    title: "Dark Room Setup",
    desc: "Specialized dark rooms for precision inspection requirements.",
    details: "Custom dark room construction with light-proof design, UV lighting options, viewing stands, and controlled ambient conditions for fluorescent penetrant inspection.",
    image: "https://images.unsplash.com/photo-1581092881916-7a13da76e0f7?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: PaintBucket,
    title: "Painting Booths",
    desc: "Industrial painting booth infrastructure with advanced ventilation.",
    details: "Complete spray painting facilities with downdraft systems, air filtration, proper lighting, and safety features. Designed for automotive, aerospace, and general manufacturing applications.",
    image: "https://images.unsplash.com/photo-1581092943956-14ddef3b5e28?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Waves,
    title: "Ultrasonic Cleaning",
    desc: "High-frequency ultrasonic cleaning bath integration.",
    details: "Installation of industrial ultrasonic cleaning systems with adjustable frequency and power settings. Ideal for precision parts cleaning in manufacturing and aerospace applications.",
    image: "https://images.unsplash.com/photo-1581092162627-8a8e9a5ee0f3?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: PenTool,
    title: "Installation & Commissioning",
    desc: "End-to-end execution, installation, and system commissioning.",
    details: "Professional installation services with site preparation, equipment setup, electrical connections, system testing, and commissioning support. Full documentation and handover.",
    image: "https://images.unsplash.com/photo-1581092162269-c2d3c93ad29a?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Play,
    title: "Production Startup",
    desc: "Expert assistance during initial production runs to ensure stability.",
    details: "On-site support during system startup, process optimization, troubleshooting, and performance tuning. Our experts ensure smooth transition to full production.",
    image: "https://images.unsplash.com/photo-1581092918192-726dbffe26ad?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    icon: Users,
    title: "Operator Training",
    desc: "Comprehensive training and process validation for your workforce.",
    details: "Detailed operator training programs covering equipment operation, safety procedures, maintenance, troubleshooting, and emergency protocols. Certified training with documentation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600"
  },
];

function ServiceCard({ service }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-800 overflow-hidden"
    >
      <motion.div
        animate={{ height: isExpanded ? "auto" : "auto" }}
        className="relative"
      >
        <div className="p-8">
          <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
            <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">{service.desc}</p>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 hover:text-blue-700 transition-colors"
          >
            {isExpanded ? "Show less" : "Show more"}
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
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.details}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesPage() {
  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600">
            Comprehensive engineering solutions tailored for industrial excellence. From automation to complete chemical processing lines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose SDK Automations</h2>
            <p className="text-lg text-slate-600">
              Industry-leading expertise backed by years of proven results and customer success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: "15+ Years Industry Experience",
                desc: "Proven track record with 150+ completed projects across diverse industrial sectors and global markets.",
                color: "text-amber-600"
              },
              {
                icon: CheckCircle2,
                title: "End-to-End Solutions",
                desc: "From design and installation to commissioning and operator training - we handle it all comprehensively.",
                color: "text-green-600"
              },
              {
                icon: Zap,
                title: "Advanced Technology",
                desc: "Cutting-edge PLC automation, IoT integration, and real-time process monitoring for maximum efficiency.",
                color: "text-orange-600"
              },
              {
                icon: Shield,
                title: "Quality & Compliance",
                desc: "Adherence to international safety standards with rigorous testing and validation at every stage.",
                color: "text-blue-600"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group"
                >
                  <div className={`w-16 h-16 ${item.color} bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let our expert team design and implement the perfect automation solution for your facility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors shadow-lg"
              >
                Get Your Free Consultation
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors border border-blue-400"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
