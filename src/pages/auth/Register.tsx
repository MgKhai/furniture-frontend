import {RegisterForm} from "@/components/auth/RegisterForm.tsx";

function RegisterPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <RegisterForm className="h-130"/>
            </div>
        </div>
    );
}

export default RegisterPage;