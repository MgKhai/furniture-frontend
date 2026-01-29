import type {User} from "@/types";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuShortcut,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    LayoutDashboardIcon
} from "lucide-react"



interface UserProps {
    user: User;
}

function AuthDropDown({user}: UserProps) {

    if(!user) {
        return (
            <Button size="sm" asChild >
                <Link to="/login">
                    Login
                    <span className="sr-only">Login</span>
                </Link>
            </Button>
        );
    }
    const initialName = `${user.firstName?.charAt(0) ?? ""}${user?.secondName?.charAt(0) ?? ""}`;
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                        <Avatar className="size-9">
                            <AvatarImage
                                src={user.imageUrl}
                                alt={user.userName ?? "" }
                                className="grayscale"
                            />
                            <AvatarFallback>
                                {initialName}
                            </AvatarFallback>
                        </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                            <p className="leading-none">{user.userName}</p>
                            <p className="text-muted-foreground leading-none">{user.email}</p>
                        </div>
                        <DropdownMenuSeparator />
                    </DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                        <Link to="/description">
                            <LayoutDashboardIcon />
                            Dashboard
                            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="/billing">
                            <CreditCardIcon />
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link to="/settings">
                            <SettingsIcon />
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" asChild>
                        <Link to="/logout">
                            <LogOutIcon />
                            Log out
                            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default AuthDropDown;