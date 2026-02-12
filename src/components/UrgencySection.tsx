"use client";

import { AlertTriangle, Gavel } from "lucide-react";
import { motion } from "framer-motion";

export default function UrgencySection() {
    const fines = [
        { count: "1회 위반", amount: "900", unit: "만 원", desc: "시정명령 불이행 시" },
        { count: "2회 위반", amount: "1,500", unit: "만 원", desc: "가중 처벌 적용 시" },
        { count: "3회 위반", amount: "2,400", unit: "만 원", desc: "최대 과태료 부과" },
    ];

    return (
        <section id="urgency" className="py-24 bg-navy-900 text-white relative overflow-hidden">
            {/* Background warning pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
                <Gavel className="w-[800px] h-[800px] text-red-900 rotate-[-15deg]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-6 font-semibold animate-pulse">
                        <AlertTriangle className="w-4 h-4" />
                        <span>2025년 1월 28일 시행</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        선택이 아닌 <span className="text-red-500">의무</span>가 되었습니다.
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        이제 상시 100명 미만 근로자를 사용하는 소규모 사업장도 <br className="md:hidden" />
                        <strong className="text-white">장애인 차별 금지법</strong> 적용 대상입니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {fines.map((fine, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="bg-navy-800/50 backdrop-blur border border-white/5 p-8 rounded-2xl text-center group hover:border-red-500/50 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h3 className="text-slate-400 font-medium mb-4">{fine.count}</h3>
                            <div className="text-5xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                {fine.amount}<span className="text-2xl font-medium text-slate-500 ml-1">{fine.unit}</span>
                            </div>
                            <p className="text-sm text-slate-500">{fine.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl text-slate-300">
                        "거목은 법적 리스크로부터 사장님을 보호하고,<br className="md:hidden" /> 모든 고객에게 열린 매장을 완성합니다."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
