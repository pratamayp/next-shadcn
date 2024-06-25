import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';

export const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className={cn('block md:!hidden')}>
          <MobileSidebar />
        </div>
      </nav>
    </div>
  );
};
