import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>창의적인 디자인 솔루션</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              당신의 브랜드를
              <span className="block text-blue-600 mt-2">특별하게</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              혁신적인 디자인과 전략으로 브랜드의 가치를 극대화합니다. 
              우리는 비즈니스 목표를 달성하는 창의적인 솔루션을 제공합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/50 font-medium flex items-center justify-center gap-2">
                프로젝트 시작하기
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors border-2 border-slate-200 font-medium">
                포트폴리오 보기
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600 mt-1">프로젝트 완료</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-600 mt-1">고객 만족도</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">15년</div>
                <div className="text-sm text-slate-600 mt-1">업계 경험</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl rotate-12 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 backdrop-blur-sm rounded-2xl -rotate-12 animate-pulse delay-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center space-y-4 p-8">
                  <div className="text-6xl font-bold">DS</div>
                  <div className="text-xl font-light">Design Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}