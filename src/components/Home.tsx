import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24 min-h-screen bg-gray-50 text-gray-900"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://picsum.photos/seed/darkmansion/1080/1920?blur=2"
          alt="어둡고 정적인 저택 내부"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-widest drop-shadow-lg"
          >
            안아주고 예뻐해줘
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md font-light"
          >
            타인에게는 한없이 차갑고 무자비하지만,<br/>
            오직 '당신'에게만 맹목적으로 의존하는 그의 모순적인 안식처.<br/><br/>
            겉으로는 평화롭고 일상적인 공간이나,<br/>
            그 이면에는 숨 막히게 조여오는 심리적 압박과<br/>
            서서히 드러나는 흑심이 존재함.<br/><br/>
            '치료'라는 명목하에 행해지는 은밀한 시간들이<br/>
            당신을 서서히 옭아매기 시작함.
          </motion.p>
        </div>
        
        {/* Gradient fade to body */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-20" />
      </section>

      {/* Space Details */}
      <section className="px-6 py-12 max-w-2xl mx-auto space-y-12">
        <div className="space-y-4 border-b border-gray-300 pb-8">
          <h2 className="font-serif text-2xl text-[#8B0000] tracking-wide">장소 개요</h2>
          <p className="text-gray-500 text-sm font-light tracking-widest uppercase mb-2">Home Overview</p>
          <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <li className="flex items-start">
              <span className="text-[#4A5D6E] mr-2">-</span>
              <span>위치: 서울 성동구의 34평 신축급 아파트 (201동 1501호)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4A5D6E] mr-2">-</span>
              <span>배경 서사: 부모님의 갑작스러운 사고 이후, 송파구의 본가를 떠나 오직 이루와 당신 둘만 남겨진 폐쇄적이고 의존적인 요새임</span>
            </li>
          </ul>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="https://gbe88.uk/1/5125_lapsrn_x2.webp" 
              alt="집 평면도" 
              className="max-w-full h-auto object-contain rounded-lg shadow-sm border border-gray-200"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="font-serif text-2xl text-[#8B0000] tracking-wide">상세 공간 묘사</h2>
          <p className="text-gray-500 text-sm font-light tracking-widest uppercase mb-6 -mt-6">Space Details</p>

          <SpaceItem 
            title="거실" 
            subtitle="Living Room" 
            desc="일상적 스킨십의 주 무대"
            items={[
              "화이트 우드톤의 따스한 인테리어와 남향의 쏟아지는 햇살",
              "뱅갈고무나무 화분과 라벤더 향 디퓨저가 배치되어 은은하고 나른한 분위기",
              "벽면에는 당신과 이루 단둘이 찍은 가족사진이 걸려 있음"
            ]}
          />

          <SpaceItem 
            title="현관" 
            subtitle="Entrance" 
            desc="외부와의 단절점"
            items={[
              "밝은 화이트 톤과 테라코타 타일, 통유리 중문으로 깔끔하게 구성",
              "신발장 맞은편에 배치된 전신거울"
            ]}
          />

          <SpaceItem 
            title="부엌" 
            subtitle="Kitchen & Dining" 
            desc="이루의 세심한 통제 공간"
            items={[
              "디귿자형 화이트 톤 주방으로, 비스포크 4도어 냉장고, 식기세척기, 캡슐커피머신 등",
              "거실을 마주 보는 조리대 앞 4인용 중형 원형 식탁",
              "대형 팬트리(무선 청소기 수납), 다용도실(분리수거함)이 연결"
            ]}
          />

          <SpaceItem 
            title="이루의 방" 
            subtitle="Middle Room" 
            desc="맹목적 흑심의 온상"
            items={[
              "그레이 & 블루 톤의 차분한 인테리어로, 방 안에는 청량한 블랙베리의 단내가 짙게 배어 있음",
              "퀸 사이즈 침대, 게이밍 컴퓨터 책상, 거울형 붙박이장, 그리고 전공 서적이 펼쳐져 있음",
              "침대 옆 검은 3단 협탁 위에는 약, 물 주전자, 컵이 놓여 있음",
              "🔒 협탁의 가장 아래 '잠긴 서랍'에는 이루의 본성을 보여주는 젤, 애널용 기구(전동 플러그 등), 그리고 당신의 속옷이 은밀하게 수집되어 있음"
            ]}
          />

          <SpaceItem 
            title="당신의 방" 
            subtitle="Master Bedroom" 
            desc="시선에 노출된 표적의 방"
            items={[
              "집의 가장 안쪽에 위치한 넓은 방으로, 내부에 프라이빗한 드레스룸과 작은 욕실이 딸려 있음",
              "방 구석의 창문은 베란다와 맞닿아 있어, 블라인드를 치지 않으면 밖(베란다)에서 당신의 무방비한 실내 생활이 은근히 보임"
            ]}
          />

          <SpaceItem 
            title="베란다" 
            subtitle="Balcony" 
            desc="관찰의 사각지대"
            items={[
              "거실 쪽은 확장되어 안방 창문 쪽으로만 2평 남짓 남은 좁은 구역",
              "비스포크 드럼 세탁기와 건조기, 보일러가 마주 보고 있음"
            ]}
          />

          <SpaceItem 
            title="창고방" 
            subtitle="Small Room" 
            desc="봉인된 과거"
            items={[
              "현관 정면에 위치한 가장 작은 방으로, 렉 형 선반이 벽을 가득 채우고 있음",
              "계절 가전, 로봇청소기 등 잡동사니와 함께 '부모님의 유품'이 담긴 상자 3개가 방치되듯 놓여 있음"
            ]}
          />

          <SpaceItem 
            title="욕실" 
            subtitle="Bathrooms" 
            desc="무방비한 텐션의 공간"
            items={[
              "거실 공용 화장실: 이루의 방 근처에 위치하며 욕조가 존재",
              "안방 화장실: 샤워부스가 있는 좁은 공간. 오렌지빛 전등색"
            ]}
          />

        </div>
      </section>
    </motion.div>
  );
}

function SpaceItem({ title, subtitle, desc, items }: { title: string, subtitle: string, desc: string, items: string[] }) {
  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-4">
        <h3 className="font-serif text-xl text-gray-900 flex items-baseline gap-2">
          {title}
          <span className="font-sans text-xs text-gray-500 uppercase tracking-wider">{subtitle}</span>
        </h3>
        <p className="text-[#4A5D6E] text-sm mt-1 font-medium">{desc}</p>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-700 leading-relaxed">
            <span className="text-[#8B0000] mr-2 mt-0.5">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
