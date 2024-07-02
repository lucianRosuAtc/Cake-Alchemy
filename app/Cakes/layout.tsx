import SideNav from '@/components/SideNav';

// export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:flex-row overflow-hidden">
      <div className="w-full flex-none md:w-64 my-6">
        <SideNav />
      </div>

      <div className="flex-grow overflow-y-auto my-6">{children}</div>
    </div>
  );
}
