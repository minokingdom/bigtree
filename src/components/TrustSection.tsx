"use client";

import { Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        국가가 인정한 확실한 기술력
                    </h2>
                    <p className="text-gray-600">
                        거목 키오스크는 엄격한 기준을 통과한 정부 인증 제품입니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Certification 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
                    >
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                2026 소상공인 우수공급기업 선정
                            </h3>
                            <p className="text-gray-600 mb-4">
                                소상공인시장진흥공단이 주관하는 스마트상점 기술보급사업의 우수 공급기업으로 선정되었습니다.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="font-bold">검증된 신뢰성</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certification 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow"
                    >
                        <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                            <Award className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                NIA 우선구매대상 지능정보제품
                            </h3>
                            <p className="text-gray-600 mb-4">
                                한국지능정보사회진흥원(NIA)의 엄격한 접근성 및 안정성 기준을 통과했습니다.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="font-bold">관공서 도입 추천</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
