'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Briefcase, Users, MessageCircle, Film } from 'lucide-react';

const MOBILE_NAV = [
  { href: '/',           icon: LayoutGrid,    label: 'Feed'    },
  { href: '/jobs',       icon: Briefcase,     label: 'Jobs'    },
  { href: '/networking', icon: Users,         label: 'Network' },
  { href: '/chat',       icon: MessageCircle, label: 'Chat'    },
  { href: '/reels',      icon: Film,          label: 'Reels'   },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-brand-pink/90 backdrop-blur-md border-t border-pink-200 h-16 flex items-center">
      {MOBILE_NAV.map(({ href, icon: Icon, label }) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2 transition-colors ${
              isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
            <span className="text-[10px] font-semibold">{label}</span>
            {isActive && <span className="absolute bottom-1 w-1 h-1 bg-violet-500 rounded-full" />}
          </Link>
        );
      })}
    </nav>
  );
}
