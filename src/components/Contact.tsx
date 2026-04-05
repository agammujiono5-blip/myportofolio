import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ HANDLE SUBMIT (FIX)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", form);
    alert("Pesan berhasil dikirim 🚀");

    // reset form
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "agammujiono51@gmail.com",
      href: "mailto:agammujiono51@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 813 9220 7234",
      href: "tel:+6281392207234",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="p-8" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* NAME */}
                  <div className="space-y-2">
                    <Label className="text-gray-300">Name</Label>
                    <Input
                      value={form.name}
                      placeholder="Your name"
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="bg-slate-900/50 border-white/10 text-white"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-2">
                    <Label className="text-gray-300">Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      placeholder="your.email@example.com"
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="bg-slate-900/50 border-white/10 text-white"
                    />
                  </div>

                  {/* SUBJECT */}
                  <div className="space-y-2">
                    <Label className="text-gray-300">Subject</Label>
                    <Input
                      value={form.subject}
                      placeholder="What's this about?"
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="bg-slate-900/50 border-white/10 text-white"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <Label className="text-gray-300">Message</Label>
                    <Textarea
                      value={form.message}
                      placeholder="Your message..."
                      rows={5}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="bg-slate-900/50 border-white/10 text-white"
                    />
                  </div>

                  {/* BUTTON */}
                  <GradientButton className="w-full">
                    Send Message
                  </GradientButton>
                </form>
              </GlassCard>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a key={index} href={info.href}>
                      <GlassCard className="p-6 flex gap-4">
                        <Icon className="text-cyan-400" />
                        <div>
                          <p className="text-gray-400">{info.label}</p>
                          <p className="text-white">{info.value}</p>
                        </div>
                      </GlassCard>
                    </motion.a>
                  );
                })}
              </div>

              <GlassCard className="p-8 text-center">
                <h3 className="text-white text-xl mb-4">
                  Let's Work Together
                </h3>

                <div className="flex justify-center gap-4">
                  {socialLinks.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a key={i} href={s.href}>
                        <Icon className="text-cyan-400" />
                      </a>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}