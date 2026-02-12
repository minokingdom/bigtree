"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >

                    {/* Contact Info */}
                    <div className="bg-navy-800 p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-6">도입 상담 문의</h2>
                            <p className="text-slate-300 mb-10 leading-relaxed">
                                거목 키오스크 도입을 고민 중이신가요?<br />
                                전문 상담원이 정부 지원 혜택부터<br />
                                설치까지 친절하게 안내해 드립니다.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-400 text-sm mb-1">전화 문의</h4>
                                        <p className="font-bold text-xl text-white">010-0000-0000</p>
                                        <p className="text-xs text-slate-500 mt-1">평일 09:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-400 text-sm mb-1">이메일 문의</h4>
                                        <p className="font-bold text-white">help@bigtree-kiosk.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-950 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-slate-400 text-sm mb-1">오시는 길</h4>
                                        <p className="text-white">강원도 (상세 주소 입력 필요)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-xs text-slate-400">
                                * 상담 신청을 남겨주시면 담당자가 24시간 이내에 연락드리겠습니다.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 md:w-3/5 bg-navy-900/30">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">성함 / 담당자명</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all placeholder:text-slate-600"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">연락처</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all placeholder:text-slate-600"
                                        placeholder="010-1234-5678"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="store" className="block text-sm font-medium text-slate-300 mb-2">매장명 (선택)</label>
                                <input
                                    type="text"
                                    id="store"
                                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all placeholder:text-slate-600"
                                    placeholder="거목 식당"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">문의 내용</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 outline-none transition-all resize-none placeholder:text-slate-600"
                                    placeholder="궁금하신 점을 자유롭게 적어주세요."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold py-4 rounded-xl transition-all text-lg shadow-lg shadow-gold-500/20"
                            >
                                무료 상담 신청하기
                            </motion.button>
                        </form>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
