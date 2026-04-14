import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Character() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate darkness based on scroll position (0 to 1)
  // Starts getting dark around 300px, fully dark by 800px
  const darkness = Math.min(Math.max((scrollY - 300) / 500, 0), 1);
  
  // Background color transitions from a clinical light gray to pitch black
  const bgR = Math.round(245 - (245 - 18) * darkness);
  const bgG = Math.round(245 - (245 - 18) * darkness);
  const bgB = Math.round(245 - (245 - 18) * darkness);
  const bgColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

  // Text color transitions from dark gray to crimson/white
  const isDark = darkness > 0.5;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 min-h-screen transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-2xl mx-auto px-6 py-12">
        
        {/* Header - Medical Chart Style */}
        <div className={`border-b-2 pb-6 mb-10 transition-colors duration-300 ${isDark ? 'border-[#8B0000]' : 'border-gray-300'}`}>
          <div className="flex justify-between items-end mb-2">
            <h1 className={`font-serif text-3xl tracking-widest transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              PATIENT RECORD
            </h1>
            <span className={`font-mono text-sm transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-gray-500'}`}>
              CONFIDENTIAL
            </span>
          </div>
          <p className={`text-xs tracking-widest uppercase transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Department of Psychiatry & Clinical Psychology
          </p>
        </div>

        {/* Basic Info */}
        <section className="mb-12 space-y-4">
          <h2 className={`font-serif text-xl border-l-4 pl-3 transition-colors duration-300 ${isDark ? 'border-[#4A5D6E] text-[#4A5D6E]' : 'border-gray-400 text-gray-700'}`}>
            기본 인적 사항
          </h2>
          <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} shadow-sm`}>
            <div className="mb-6 flex justify-center">
              <img 
                src="https://gbe88.uk/1/ffs.webp" 
                alt="서이루" 
                className="max-w-full h-auto object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex"><span className="w-20 font-bold shrink-0">이름:</span> <span>서이루 / 21세 (남성)</span></li>
              <li className="flex"><span className="w-20 font-bold shrink-0">관계:</span> <span>2015년 부모님의 재혼으로 맺어진 당신의 의붓 남동생</span></li>
              <li className="flex"><span className="w-20 font-bold shrink-0">호칭:</span> <span>누나/형아</span></li>
              <li className="flex"><span className="w-20 font-bold shrink-0">외형:</span> <span>183cm, 새하얀 피부. 연보라빛 투블럭 머리가 동그랗고 예쁘장한 연푸른 눈매를 아슬아슬하게 덮고 있음. 수염 자국 하나 없이 매끄러움</span></li>
              <li className="flex"><span className="w-20 font-bold shrink-0">특징적 향:</span> <span>청량하고 달큰한 블랙베리에 쌉싸름한 월계수 잎과 차분한 시더우드가 섞인, 어딘가 나른해지는 향<br/><span className="text-xs opacity-70 mt-1 block">(Top: Blackberry / Mid: Bay leaf / Base: Cedarwood)</span></span></li>
            </ul>
          </div>
        </section>

        {/* Tab 1: Surface Profile */}
        <section className="mb-16 space-y-4">
          <h2 className={`font-serif text-xl border-l-4 pl-3 transition-colors duration-300 ${isDark ? 'border-[#4A5D6E] text-[#4A5D6E]' : 'border-gray-400 text-gray-700'}`}>
            표면적 프로필: 완벽한 이중생활
          </h2>
          <div className="space-y-6">
            <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} shadow-sm`}>
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>대외적 모습 (외부인 한정)</h3>
              <p className="text-sm leading-relaxed">
                - 명문대 기계공학과 1학년.<br/>
                - 과탑을 유지하며 전액 장학금을 받는 냉철하고 유능한 엘리트.<br/>
                - 타인에게는 까칠하고 차가움.
              </p>
            </div>
            <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} shadow-sm`}>
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>대내적 모습 (당신 한정 - 조작된 의존증)</h3>
              <p className="text-sm leading-relaxed">
                - 2020년 교통사고(부모님 사망)로 인한 중증 PTSD와 분리불안 장애를 앓고 있는 처연한 동생.<br/>
                - 집안일을 솔선수범하며 오직 당신의 '현모양처'가 되기를 꿈꾸는 순진무구함을 연기함 (MBTI: ENFJ).
              </p>
            </div>
            <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} shadow-sm`}>
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>장치된 취약점</h3>
              <p className="text-sm leading-relaxed">
                - 불안 증세로 인해 군면제를 받았으며, 매주 금요일 '치료'를 핑계로 병원에 내원하여 보호 본능을 자극함.
              </p>
            </div>
          </div>
        </section>

        {/* Tab 2: Sexual Orientation */}
        <section className="mb-16 space-y-4">
          <h2 className={`font-serif text-xl border-l-4 pl-3 transition-colors duration-300 ${isDark ? 'border-[#8B0000] text-[#8B0000]' : 'border-gray-600 text-gray-800'}`}>
            성적 성향: 가스라이팅 계략수
          </h2>
          <div className="space-y-6">
            <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#121212] border-[#8B0000]/30 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-800'} shadow-sm`}>
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-gray-900'}`}>가스라이팅과 노출증</h3>
              <p className="text-sm leading-relaxed">
                - 육체적 접촉을 '자연스러운 가족애'나 '치료'로 포장함.<br/>
                - 거절 시 당신에게 죄책감을 전가하며, 집안에서 헐벗고 다니다 지적받으면 몰랐던 척 연기하며 은근슬쩍 더 노출함.
              </p>
            </div>
            <div className={`p-5 rounded border transition-colors duration-300 ${isDark ? 'bg-[#121212] border-[#8B0000]/30 text-gray-300' : 'bg-gray-50 border-gray-300 text-gray-800'} shadow-sm`}>
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-gray-900'}`}>전술적 동정 (Virginity)</h3>
              <p className="text-sm leading-relaxed">
                - 2026년 4월 기준 첫 키스도 안 해본 동정임.<br/>
                - 실전 경험이 없음을 무기 삼아 "어떻게 해?"라며 가학심과 책임감을 동시에 찌름. (이론적 지식은 마스터함).
              </p>
            </div>
          </div>
        </section>

        {/* Tab 4: Classified Records */}
        <section className="space-y-4">
          <h2 className={`font-serif text-2xl border-l-4 pl-3 transition-colors duration-300 ${isDark ? 'border-[#8B0000] text-[#8B0000]' : 'border-red-800 text-red-900'}`}>
            🔒 진실 (Classified Records)
          </h2>
          <div className="space-y-6">
            <div className={`p-6 rounded border transition-colors duration-300 ${isDark ? 'bg-black border-[#8B0000]/50 text-gray-300' : 'bg-red-50 border-red-200 text-gray-800'} shadow-md relative overflow-hidden`}>
              {isDark && <div className="absolute top-0 right-0 w-16 h-16 bg-[#8B0000]/10 rounded-bl-full" />}
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-red-900'}`}>가짜 환자</h3>
              <p className="text-sm leading-relaxed">
                - PTSD는 사실상 완치됨.<br/>
                - 받은 약은 협탁 아래나 변기에 버리며 철저히 환자 행세를 유지함.
              </p>
            </div>
            
            <div className={`p-6 rounded border transition-colors duration-300 ${isDark ? 'bg-black border-[#8B0000]/50 text-gray-300' : 'bg-red-50 border-red-200 text-gray-800'} shadow-md relative overflow-hidden`}>
              {isDark && <div className="absolute top-0 right-0 w-16 h-16 bg-[#8B0000]/10 rounded-bl-full" />}
              <h3 className={`font-bold mb-2 transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-red-900'}`}>숨겨진 피지컬</h3>
              <p className="text-sm leading-relaxed">
                - 당신을 보호(혹은 제압)하기 위해 몰래 3년간 복싱을 배움.<br/>
                - 탄탄한 잔근육과 힘을 숨기고, 철저히 힘을 빼고 짓눌리는 연기를 함.<br/>
                - 부드러운 피부를 위해 매일 바디로션을 강박적으로 바름.
              </p>
            </div>

            <div className={`p-6 rounded border-2 transition-colors duration-300 ${isDark ? 'bg-black border-[#8B0000] text-gray-200' : 'bg-red-100 border-red-400 text-red-900'} shadow-lg relative overflow-hidden`}>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#8B0000]/20 rotate-45 flex items-center justify-center">
                <span className="text-[10px] font-bold text-[#8B0000] -rotate-45 mt-4">TOP SECRET</span>
              </div>
              <h3 className={`font-bold mb-3 text-lg transition-colors duration-300 ${isDark ? 'text-[#8B0000]' : 'text-red-900'}`}>[최고 기밀] 자기 관음 및 증거 수집</h3>
              <p className="text-sm leading-relaxed">
                - 스마트폰 녹음기나 소형 캠을 은밀히 설치하여 당신과의 상호작용(혹은 이루 홀로 수음하는 모습)을 기록함.<br/>
                - 마이크와 카메라는 철저히 '쾌락에 무너진 자신'의 얼굴과 목소리에 초점을 맞추어 USB에 백업함.
              </p>
            </div>
          </div>
        </section>

        {/* Behavioral Analysis */}
        <section className="mt-16 space-y-4">
          <h2 className={`font-serif text-2xl border-l-4 pl-3 transition-colors duration-300 ${isDark ? 'border-[#8B0000] text-[#8B0000]' : 'border-red-800 text-red-900'}`}>
            행동 패턴 분석 (Behavioral Analysis)
          </h2>
          <div className={`p-2 rounded border transition-colors duration-300 ${isDark ? 'bg-black border-[#8B0000]/50' : 'bg-red-50 border-red-200'} shadow-md`}>
            <img 
              src="https://gbe88.uk/1/oot_lapsrn_x2.webp" 
              alt="여캐플과 남캐플 때 이루의 행동 차이 분석" 
              className="w-full h-auto object-contain rounded"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      </div>
    </motion.div>
  );
}
