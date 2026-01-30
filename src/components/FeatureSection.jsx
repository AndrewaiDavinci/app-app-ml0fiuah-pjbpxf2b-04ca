import { Palette, Zap, Target, Users } from 'lucide-react';

export default function FeatureSection() {
  const features = [
    {
      icon: Palette,
      title: '브랜드 아이덴티티',
      description: '독창적이고 일관된 브랜드 이미지를 구축하여 시장에서 차별화된 위치를 확보합니다.'
    },
    {
      icon: Zap,
      title: 'UI/UX 디자인',
      description: '사용자 중심의 직관적인 인터페이스로 최상의 사용자 경험을 제공합니다.'
    },
    {
      icon: Target,
      title: '마케팅 전략',
      description: '데이터 기반의 체계적인 마케팅 전략으로 비즈니스 성장을 가속화합니다.'
    },
    {
      icon: Users,
      title: '컨설팅 서비스',
      description: '풍부한 경험을 바탕으로 비즈니스 목표 달성을 위한 맞춤형 컨설팅을 제공합니다.'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            전문적인 서비스
          </h2>
          <p className="text-xl text-slate-600">
            다양한 분야의 전문가들이 모여 최고의 결과물을 만들어냅니다
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 bg-slate-50 rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-1 cursor-pointer animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 group-hover:text-blue-50 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
            모든 서비스 보기
          </button>
        </div>
      </div>
    </section>
  );
}