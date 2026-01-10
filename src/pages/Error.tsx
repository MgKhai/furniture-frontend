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

function Error() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex mx-auto  flex-1 items-center">
                    <Card className="lg:w-100 w-75">
                        <CardHeader>
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
            </div>
        </>
    );
}

export default Error;