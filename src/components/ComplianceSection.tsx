"use client";

import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function ComplianceSection() {
    return (
        <section className="py-20 bg-amber-50 border-y border-amber-100 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-amber-100 p-6 rounded-full text-amber-600 shrink-0"
                    >
                        <AlertTriangle className="w-12 h-12" />
                    </motion.div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            2025년 1월 28일, <span className="text-amber-600">장애인 차별 금지법</span> 적용 확대
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>상시 100명 미만의 소규모 사업장</strong>도 이제 법적용 대상입니다.
                            </p>
                            <p>
                                키오스크 접근성 의무 위반 시 <span className="text-red-500 font-bold">최대 3,000만 원의 과태료</span>가 부과될 수 있습니다.
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                * 거목 키오스크는 법적 기준을 100% 충족하는 배리어프리 솔루션으로 과태료 걱정을 덜어드립니다.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="shrink-0"
                    >
                        <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-amber-100 text-amber-800 font-bold text-lg cursor-pointer">
                            지금 바로 대비하세요!
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
