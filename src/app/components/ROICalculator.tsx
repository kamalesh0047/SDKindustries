import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, DollarSign, Clock, Zap } from "lucide-react";

export function ROICalculator() {
  const [productionCost, setProductionCost] = useState(50000);
  const [laborCost, setLaborCost] = useState(30000);
  const [downtime, setDowntime] = useState(10);

  const monthlyWasteReduction = productionCost * (downtime / 100) * 0.6;
  const annualLaborSavings = laborCost * 0.4 * 12;
  const totalAnnualSavings = monthlyWasteReduction * 12 + annualLaborSavings;
  const roi = ((totalAnnualSavings - 50000) / 50000) * 100;
  const paybackMonths = 50000 / (totalAnnualSavings / 12);

  const metrics = [
    { label: "Annual Savings", value: `$${(totalAnnualSavings / 1000).toFixed(1)}K`, icon: DollarSign, color: "text-green-600" },
    { label: "ROI (Year 1)", value: `${roi.toFixed(0)}%`, icon: TrendingUp, color: "text-blue-600" },
    { label: "Payback Period", value: `${paybackMonths.toFixed(1)} mo`, icon: Clock, color: "text-purple-600" },
    { label: "Efficiency Gain", value: "60%", icon: Zap, color: "text-orange-600" },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Project ROI Calculator</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Estimate your potential savings with SDK Automations solutions</p>

        {/* Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Monthly Production Cost
            </label>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">${(productionCost / 1000).toFixed(0)}K</span>
              <input
                type="range"
                min="10000"
                max="200000"
                step="5000"
                value={productionCost}
                onChange={(e) => setProductionCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">$10K - $200K</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Monthly Labor Cost
            </label>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">${(laborCost / 1000).toFixed(0)}K</span>
              <input
                type="range"
                min="5000"
                max="100000"
                step="2500"
                value={laborCost}
                onChange={(e) => setLaborCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">$5K - $100K</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              Current Downtime %
            </label>
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{downtime}%</span>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={downtime}
                onChange={(e) => setDowntime(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">1% - 50%</p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-50 dark:from-slate-800 to-slate-100 dark:to-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`${metric.color}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{metric.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Based on these inputs, you could save approximately <span className="font-bold text-blue-600 dark:text-blue-400">${(totalAnnualSavings / 1000).toFixed(1)}K annually</span> with SDK Automations.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Schedule Consultation
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
