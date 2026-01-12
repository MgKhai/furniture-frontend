import { Button } from "@/components/ui/button"
import {Link} from "react-router";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Header from "@/components/layouts/Header.tsx";
import Footer from "@/components/layouts/Footer.tsx";
import { Icons } from "@/components/ui/icons";

function Error() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex mx-auto  flex-1 items-center mt-16">
                    <Card className="lg:w-100 w-75 flex gap-5">
                        <CardHeader className="flex flex-col items-center text-center gap-3">
                            <div className="border border-dashed border-muted-foreground/70 rounded-full size-24 grid place-items-center">
                                <Icons.exclamationTriangle className="size-10 text-muted-foreground/70" aria-hidden="true" />
                            </div>
                            <CardTitle>Oops!</CardTitle>
                            <CardDescription>
                                An error occurred while trying to retrieve this page.
                            </CardDescription>
                        </CardHeader>

                        <CardFooter className="flex-col gap-2">
                            <Link to="/">
                                <Button variant="outline" className="w-full">
                                    Go to Home
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Error;