"use client";

import { Cpu, HardDrive, Monitor, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function SpecSection() {
    const specs = [
        { icon: <Cpu className="w-4 h-4" />, label: "CPU", value: "Intel® Pro N95", color: "text-blue-400" },
        { icon: <Monitor className="w-4 h-4" />, label: "디스플레이", value: '21.5" FHD', color: "text-indigo-400" },
        { icon: <Settings className="w-4 h-4" />, label: "OS", value: "Win 10 IoT", color: "text-purple-400" },
        { icon: <HardDrive className="w-4 h-4" />, label: "SSD", value: "128GB", color: "text-green-400" },
        { icon: <Monitor className="w-4 h-4" />, label: "RAM", value: "8GB DDR4", color: "text-cyan-400" },
        { icon: <Settings className="w-4 h-4" />, label: "크기", value: "170×500×300mm", color: "text-amber-400" },
    ];

    return (
        <section id="specs" className="py-24 bg-navy-900 border-t border-white/5 relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-gold-500 font-semibold tracking-wide uppercase text-sm">Hardware Specifications</span>
                    <h2 className="text-4xl font-bold text-white mt-3 mb-4">
                        상업 환경에 최적화된<br />
                        <span className="text-slate-300">견고한 성능과 내구성</span>
                    </h2>
                </motion.div>

                {/* Image + Overlay Specs */}
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative max-w-[600px] mx-auto mb-8"
                >
                    <img
                        src="/img/kiosk-main.png"
                        alt="거목 배리어프리 키오스크 - 정부 공식 검증 통과"
                        className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
                    />
                </motion.div>

                {/* Compact Specs Grid */}
                {/* Compact Specs Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto"
                >
                    {specs.map((spec, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                            }}
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-3 p-3 rounded-xl bg-navy-800/50 border border-white/5 hover:border-gold-500/50 hover:bg-navy-800 hover:shadow-lg hover:shadow-gold-500/10 transition-all cursor-default"
                        >
                            <div className={`${spec.color} shrink-0`}>{spec.icon}</div>
                            <div className="min-w-0">
                                <p className="text-slate-500 text-[10px] font-medium uppercase truncate">{spec.label}</p>
                                <p className="text-white font-bold text-sm truncate">{spec.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
