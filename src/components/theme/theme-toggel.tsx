import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="p-0 m-0 text-darkText border-none hover:bg-transparent hover:text-orange focus-within:border-none focus:border-none outline-none focus-visible:outline-none focus:outline-none
         focus:ring-0 focus-visible:ring-0 rounded-none focus:shadow-none focus-visible:shadow-none dark:bg-transparent dark:text-darkText dark:focus:ring-0 dark:focus-visible:ring-0 dark:focus:shadow-none dark:focus-visible:shadow-none dark:focus:border-none dark:focus:visible:border-none dark:focus:outline-none dark:focus-visible:outline-none">
          <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" />
          <Moon className=" rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-[#22383D] hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="font-normal text-sm">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="font-normal text-sm">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="font-normal text-sm">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
