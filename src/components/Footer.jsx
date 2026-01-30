import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: '회사 소개', href: '#about' },
      { label: '팀 소개', href: '#team' },
      { label: '채용 정보', href: '#careers' },
      { label: '파트너십', href: '#partners' }
    ],
    services: [
      { label: '브랜드 디자인', href: '#brand' },
      { label: 'UI/UX 디자인', href: '#uiux' },
      { label: '웹 개발', href: '#web' },
      { label: '모바일 앱', href: '#mobile' }
    ],
    resources: [
      { label: '블로그', href: '#blog' },
      { label: '포트폴리오', href: '#portfolio' },
      { label: '고객 후기', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Design Studio</h3>
              <p className="text-slate-400 leading-relaxed">
                창의적인 디자인으로 브랜드의 가치를 높이고, 비즈니스의 성공을 이끌어갑니다.
              </p>
            </div>

            <div className="space-y-3">
              <a href="mailto:contact@designstudio.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>contact@designstudio.com</span>
              </a>

              <a href="tel:+82-2-1234-5678" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>02-1234-5678</span>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>서울특별시 강남구 테헤란로 123<br />디자인타워 10층</span>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">리소스</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 Design Studio. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}