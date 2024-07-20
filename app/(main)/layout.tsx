"use client";
import Sidebar, { SidebarItem } from "@/components/molecules/sidebar";
import UserCard from "@/components/molecules/userCard";
import { BarChart4, Earth, GraduationCap, Home, Timer } from "lucide-react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  const pathName = usePathname();
  const isBelajar = pathName === "/belajar";

  return (
    <div className="flex w-full">
      <Sidebar>
        <SidebarItem
          text="Mengetik 10 Jari"
          icon={<GraduationCap />}
          link="/belajar"
        />
        <SidebarItem
          text="Eksplorasi Budaya"
          icon={<Earth />}
          link="/explorasi"
        />
        <SidebarItem
          text="Tes Kecepatan"
          icon={<Timer />}
          link="/tes-mengetik"
        />
        <SidebarItem
          text="Leaderboard"
          icon={<BarChart4 />}
          link="/leaderboard"
        />
      </Sidebar>
      <main className="h-full w-full">{children}</main>

      {isBelajar && <UserCard />}
    </div>
  );
};

export default MarketingLayout;
