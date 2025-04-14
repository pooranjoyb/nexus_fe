"use client"
import { LayoutDashboard, LucideLogOut, HistoryIcon, SearchCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Analyse Resume",
        url: "/dashboard/analyse-resume",
        icon: SearchCheck,
    },
    {
        title: "Upload History",
        url: "/dashboard/upload-history",
        icon: HistoryIcon,
    },
]

export function AppSidebar() {
    async function handleLogout() {
        localStorage.removeItem('user');
        redirect('/auth/login');
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>NEXUS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>
            <Button className="cursor-pointer w-auto m-3 " 
            onClick={handleLogout}
            >
                <LucideLogOut /> Logout
            </Button>
        </Sidebar>
    )
}
