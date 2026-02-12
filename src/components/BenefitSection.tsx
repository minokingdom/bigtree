"use client";

import { ArrowRight, Calendar, CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BenefitSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-navy-900 to-navy-950 relative text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold mb-6 border border-blue-500/30">
                            <FileText className="w-4 h-4" />
                            <span>소상공인시장진흥공단 주관</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            2026 스마트상점 기술보급사업<br />
                            <span className="text-gold-400">우수공급기업 선정</span>
                        </h2>

                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                            정부 지원을 통해 비용 부담 없이 배리어프리 키오스크를 도입하세요.<br />
                            거목이 복잡한 서류 신청부터 설치까지 모든 과정을 함께합니다.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                            <div className="bg-navy-950/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                                <Calendar className="w-8 h-8 text-gold-500 shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">모집 일정</h3>
                                    <p className="text-slate-400">2026년 3월 예정 (참여 소상공인 모집)</p>
                                    <p className="text-xs text-slate-500 mt-1">* 일정은 공단 사정에 따라 변동될 수 있습니다.</p>
                                </div>
                            </div>
                            <div className="bg-navy-950/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                                <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">지원 혜택</h3>
                                    <p className="text-slate-400">일반형 배리어프리 키오스크 도입 비용의 일부를 정부가 지원합니다.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Link href="#contact">
                                <button className="px-10 py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    지원 사업 알림 신청하기
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
