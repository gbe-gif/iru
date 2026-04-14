import { Home as HomeIcon, User, Image as ImageIcon } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'character', label: 'Character', icon: User },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#121212]/90 backdrop-blur-md border-t border-gray-800 z-50 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-300 ${
                isActive ? 'text-[#8B0000]' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wider uppercase">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
