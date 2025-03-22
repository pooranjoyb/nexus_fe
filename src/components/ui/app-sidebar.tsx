"use client"
import { Home, LayoutDashboard, LucideLogOut, UploadCloud, SearchCheck } from "lucide-react"
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
        title: "Home",
        url: "/dashboard/home",
        icon: Home,
    },
    {
        title: "Upload Resume",
        url: "/dashboard/upload-resume",
        icon: UploadCloud,
    },
    {
        title: "Analyse Resume",
        url: "/dashboard/analyse-resume",
        icon: SearchCheck,
    }
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
