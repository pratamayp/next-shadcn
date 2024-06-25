import { cn } from '@/lib/utils';
import { SideNav } from './side-nav';
import { items } from '@/constants/sidebar';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside
      className={cn(
        `relative hidden h-screen border-r pt-16 md:block w-72`,
        // status && 'duration-500',
        // isOpen ? 'w-72' : 'w-[78px]',
        className,
      )}
    >
      <div className="">
        <SideNav
          className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
          items={items}
        />
      </div>
    </aside>
  );
};
