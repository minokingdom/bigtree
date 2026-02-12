"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import PixelBlast from "./PixelBlast";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative pt-24 pb-16 overflow-hidden bg-navy-950 text-white">
            {/* Background PixelBlast & Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: 0 }}>
                    <PixelBlast
                        variant="square"
                        pixelSize={4}
                        color="#B19EEF"
                        patternScale={2}
                        patternDensity={1}
                        pixelSizeJitter={0}
                        enableRipples={true}
                        rippleSpeed={0.4}
                        rippleThickness={0.12}
                        rippleIntensityScale={1.5}
                        liquid={false}
                        liquidStrength={0.12}
                        liquidRadius={1.2}
                        liquidWobbleSpeed={5}
                        speed={0.5}
                        edgeFade={0.25}
                        transparent={true}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left col-span-1"
                >
                    {/* Government Certification Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800/50 border border-gold-500/30 text-gold-400 mb-3 backdrop-blur-sm">
                        <ShieldCheck className="w-3 h-3 lg:w-5 lg:h-5" />
                        <span className="text-[10px] lg:text-sm font-semibold tracking-wide">정부 공식 검증</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight mb-3">
                        기술,<br />
                        모두를 위한<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600 text-glow">
                            따뜻한 시선.
                        </span>
                    </h1>

                    <p className="text-xs sm:text-base lg:text-lg text-slate-300 mb-6 max-w-xl leading-relaxed break-keep">
                        정부 검증 기술로 누구나 차별없는 주문 경험을 제공합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-4 py-3 lg:px-8 lg:py-4 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-xl flex justify-center items-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] text-sm lg:text-base">
                                도입 문의
                                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                            </button>
                        </Link>
                        <Link href="#features" className="hidden sm:block">
                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all backdrop-blur-sm">
                                기능 자세히 보기
                            </button>
                        </Link>
                    </div>

                    <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 text-xs lg:text-sm text-slate-400">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            <span>NIA 우선구매</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            <span>국가검증</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - GIF with base */}
                <motion.div
                    style={{ y, opacity }}
                    className="relative flex flex-col items-center justify-end lg:items-end col-span-1"
                >
                    <div className="relative w-full max-w-[400px] flex flex-col items-center scale-90 lg:scale-100 origin-right">
                        {/* Floating Card Frame (moves up/down) */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative bg-navy-900/60 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden p-3 lg:p-6 flex flex-col items-center z-10"
                        >
                            <img
                                src="/img/배리어프리.gif"
                                alt="거목 배리어프리 키오스크 - 높낮이 자동 조절"
                                className="w-full max-h-[250px] lg:max-h-[420px] object-contain rounded-lg lg:rounded-xl"
                            />
                            <div className="mt-3 lg:mt-4 bg-gold-500/90 text-navy-950 px-3 lg:px-5 py-1 lg:py-2 rounded-full font-bold shadow-lg text-[10px] lg:text-sm whitespace-nowrap">
                                ↕ 높낮이 자동 조절
                            </div>
                        </motion.div>

                        {/* Fixed Base/Pedestal (stays still) */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 lg:w-16 h-8 lg:h-12 bg-gradient-to-b from-navy-600 to-navy-700 border-x border-white/20"></div>
                            <div className="w-20 lg:w-32 h-2 lg:h-3 bg-navy-600 rounded-b-lg border border-t-0 border-white/20"></div>
                        </div>
                    </div>

                    {/* Outer Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 blur-[80px] lg:blur-[120px] -z-10 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
}
