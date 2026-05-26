import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  FileText,
  Factory,
  Clock,
  Users,
  Award,
} from "lucide-react";

export function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kamaleshcharaka@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        alert("Failed to send message");
        setFormStatus("idle");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setFormStatus("idle");
    }
  };

  return (
    <div className="pt-10 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>

          <p className="text-lg text-slate-600">
            Request a consultation, ask about our engineering
            services, or schedule a visit to our factory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Details
              </h3>

              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Factory className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Factory Location
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      SDK Automations
                      <br />
                      Industrial Estate, Phase II
                      <br />
                      Plot No. 42, Tech Park
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Phone
                    </h4>

                    <p className="text-sm text-slate-600">
                      +91 98765 43210
                    </p>

                    <p className="text-sm text-slate-600">
                      +91 80 2345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Email
                    </h4>

                    <p className="text-sm text-slate-600">
                      sdk8973@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Business Details
                    </h4>

                    <p className="text-sm text-slate-600">
                      GSTIN: 29ABCDE1234F1Z5
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-6">
                  Why Work With Us
                </h4>

                <div className="space-y-4">

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Quick Response
                      </p>

                      <p className="text-xs text-slate-600 mt-1">
                        Reply within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Expert Team
                      </p>

                      <p className="text-xs text-slate-600 mt-1">
                        15+ years experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        Full Support
                      </p>

                      <p className="text-xs text-slate-600 mt-1">
                        End-to-end solutions
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden"
            >

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>

                  <p className="text-slate-600 max-w-md mx-auto mb-8">
                    Thank you for reaching out to SDK Automations.
                  </p>

                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Send an Inquiry
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      />

                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      />

                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      />

                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white"
                      />

                    </div>

                    <select
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white text-slate-700"
                    >
                      <option>Automation Setup</option>
                      <option>Chemical Processing Line</option>
                      <option>NDT FPI Booths</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>

                    <textarea
                      required
                      rows={4}
                      name="message"
                      placeholder="Please describe your requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none bg-slate-50 focus:bg-white resize-none"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center space-x-2 transition-all disabled:opacity-70 shadow-lg shadow-blue-500/30"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}