import SideNav from '@/components/SideNav';

export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:flex-row overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      <div className="flex-grow  overflow-y-auto m-8 md:m-0 ">{children}</div>
    </div>
  );
}
