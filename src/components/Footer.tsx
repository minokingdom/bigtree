import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-slate-400 py-16 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-6 block">
                            BigTree<span className="text-gold-500">.</span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed mb-6 max-w-sm">
                            기술이 사람을 향할 때, 진정한 혁신이 시작됩니다.<br />
                            거목은 누구나 제약 없이 세상과 소통하는<br />
                            배리어프리 키오스크의 새로운 기준을 만듭니다.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li>상호명: (주)거목</li>
                            <li>대표자: 홍길동</li>
                            <li>사업자등록번호: 000-00-00000</li>
                            <li>주소: 강원도 (상세 주소 입력 필요)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <span className="block text-slate-500 text-xs mb-1">고객센터</span>
                                <span className="text-white font-medium text-lg">010-0000-0000</span>
                            </li>
                            <li>
                                <span className="block text-slate-500 text-xs mb-1">이메일</span>
                                <span className="text-white">help@bigtree-kiosk.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
                    <p>&copy; {new Date().getFullYear()} Big Tree Kiosk. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
