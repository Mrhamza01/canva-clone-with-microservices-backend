"use client";

import { Home, FolderOpen, CreditCard, Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";

export function AppSidebar() {
  const handleCreateNewDesign = async () => {};

  const menu = [
    { title: "Home", icon: Home, action: () => {} },
    { title: "Projects", icon: FolderOpen, action: () => {} },
    { title: "Billing", icon: CreditCard, action: () => {} },
  ];

  return (
    <Sidebar
      className="border-r bg-[#f8f8fc]"
      style={{
        // 🔥 FIX: force real sidebar width
        "--sidebar-width": "72px",
        "--sidebar-width-mobile": "72px",
      } as React.CSSProperties}
    >
      <SidebarContent className="flex flex-col items-center pt-6">

        {/* Create Button */}
        <Button
          onClick={handleCreateNewDesign}
          className="
            w-14 h-14 
            bg-purple-600 rounded-xl 
            flex items-center justify-center 
            text-white 
            shadow-sm
            hover:bg-purple-700 
            transition-all
          "
        >
          <Plus className="w-6 h-6" />
        </Button>

        <SidebarGroup className="mt-2 w-full">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1 items-center w-full">
              {menu.map((item) => (
                <SidebarMenuItem key={item.title} className="w-full">
                  <SidebarMenuButton
                    onClick={item.action}
                    className="
                      flex flex-col items-center justify-center 
                      h-20 
                      w-full
                      hover:bg-white 
                      hover:text-purple-600
                      rounded-xl 
                      transition-all
                    "
                  >
                    <item.icon />
                    <span className="text-[11px] font-medium">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
