import { cn } from '@/lib/utils';

import { MobileSidebar } from './mobile-sidebar';
import { ThemeToggle } from './theme-toggle';

export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className={cn('block md:!hidden')}>
          <MobileSidebar />
        </div>
        <div>Title</div>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
