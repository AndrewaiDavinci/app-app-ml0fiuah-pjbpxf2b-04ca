import { CheckCircle, Award, TrendingUp, Heart } from 'lucide-react';

export default function CompanyInfo() {
  const values = [
    {
      icon: CheckCircle,
      title: '품질 우선',
      description: '타협 없는 품질로 고객의 기대를 뛰어넘습니다'
    },
    {
      icon: Award,
      title: '전문성',
      description: '업계 최고의 전문가들과 함께합니다'
    },
    {
      icon: TrendingUp,
      title: '혁신',
      description: '끊임없는 혁신으로 미래를 선도합니다'
    },
    {
      icon: Heart,
      title: '고객 중심',
      description: '고객의 성공이 우리의 성공입니다'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                디자인으로 세상을 <span className="text-blue-400">변화</span>시킵니다
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                2008년부터 시작된 우리의 여정은 수많은 브랜드의 성공 스토리를 만들어왔습니다. 
                창의성과 전략이 만나 비즈니스의 가치를 창출합니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">15</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">년의 경험</h4>
                  <p className="text-slate-400 text-sm">다양한 산업군에서 쌓은 풍부한 경험</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">50</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">명의 전문가</h4>
                  <p className="text-slate-400 text-sm">각 분야 최고의 전문가로 구성된 팀</p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium hover:shadow-lg hover:shadow-blue-600/50">
              회사 소개서 다운로드
            </button>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-300">
            <h3 className="text-2xl font-bold text-white mb-8">우리의 가치</h3>
            
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-blue-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 group-hover:bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}