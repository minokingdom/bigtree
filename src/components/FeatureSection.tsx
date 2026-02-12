"use client";

import { Accessibility, Ear, Eye, Layers, Mic, Palette, ScanFace } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FeatureSection() {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const features = [
        {
            id: 0,
            icon: <Accessibility className="w-6 h-6" />,
            title: "저자세 모드",
            desc: "휠체어 사용자, 어린이를 위해 주요 버튼을 화면 하단으로 재배치합니다.",
            image: "/img/mode-low.png",
            color: "bg-orange-500",
        },
        {
            id: 1,
            icon: <Eye className="w-6 h-6" />,
            title: "화면 확대 모드",
            desc: "저시력자를 위해 글씨와 이미지를 크게 확대하여 가독성을 높입니다.",
            image: "/img/mode-zoom.png",
            color: "bg-orange-500",
        },
        {
            id: 2,
            icon: <Palette className="w-6 h-6" />,
            title: "고대비 모드",
            desc: "색각 이상자를 위해 명도 대비를 극대화하여 정보를 명확히 전달합니다.",
            image: "/img/mode-contrast.png",
            color: "bg-orange-500",
        },
        {
            id: 3,
            icon: <Mic className="w-6 h-6" />,
            title: "음성 안내",
            desc: "이어폰 잭 연결 시 화면 정보와 결제 과정을 음성으로 안내합니다.",
            image: "/img/mode-voice.png",
            color: "bg-orange-500",
        }
    ];

    const toggleCard = (id: number) => {
        setOpenCard(openCard === id ? null : id);
    };

    return (
        <section id="features" className="py-24 bg-navy-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-gold-500 font-semibold tracking-wide uppercase text-sm">barrier-free UI/UX</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                        누구나 쉽고 편하게<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">사용자 친화적 디자인</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {features.map((feature) => {
                        const isOpen = openCard === feature.id;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ margin: "-50px" }}
                                transition={{ duration: 0.5, delay: feature.id * 0.15 }}
                                onClick={() => toggleCard(feature.id)}
                                className={`group bg-navy-900/60 backdrop-blur-sm border rounded-3xl overflow-hidden p-8 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'border-gold-500/30' : 'border-white/10 hover:border-gold-500/30'
                                    }`}
                            >
                                {/* Text content - always visible */}
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    <div className={`${feature.color} text-white px-6 py-2 rounded-full font-bold text-xl shadow-lg shrink-0`}>
                                        {feature.title}
                                    </div>
                                    <div className="text-slate-300 text-base md:text-lg font-medium leading-tight">
                                        {feature.desc}
                                    </div>
                                </div>

                                {/* Image - desktop: hover, mobile: tap toggle */}
                                <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${isOpen
                                    ? 'max-h-[500px] opacity-100 mt-6'
                                    : 'max-h-0 opacity-0 mt-0 md:group-hover:max-h-[500px] md:group-hover:opacity-100 md:group-hover:mt-6'
                                    }`}>
                                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
                                        {/* Crop top of image to remove built-in text header */}
                                        <div className="overflow-hidden">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-auto object-contain -mt-[12%] scale-[1.05]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile tap hint */}
                                <div className={`md:hidden text-center mt-3 text-xs text-slate-500 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                                    탭하여 미리보기
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
