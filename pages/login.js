import Link from "next/link";

export default function LogIn() {
    return (
        <div className="container py-[50px] mx-auto text-center max-w-[504px] xl:px-0">
            <p className="text-lg text-[#000C1F] mb-[88px]">Please log in using your <strong>membership number</strong> and  <strong>password</strong></p>
            <form>
                <div className="flex flex-col items-center w-full">
                    <div className="mb-[24px] flex flex-col items-start w-full">
                        <label className="mb-[2px]" for="first ">Membership Number</label>
                        <input className="bg-[#EBECED] text-[#858B94] p-[20px] w-full" type="number" id="first" name="first" placeholder="38736" />
                    </div>
                    <div className="mb-[24px] flex flex-col items-start w-full">
                        <label className="mb-[2px]" for="last">Password</label>
                        <input className="bg-[#EBECED] text-[#858B94] p-[20px] w-full" type="password" id="last" name="last" placeholder="38736" />
                    </div>
                </div>
                <button className="bg-[#003A8F] w-full text-center py-[14px] text-white text-lg" type="submit">LOG IN</button>
                <Link href="/reset-password">
                    <p className="mt-[24px] text-left text-[#000C1F]">
                        Forgot your password?<strong> Reset password.</strong>
                    </p>
                </Link>
                <p className="mt-[20px] text-left text-[#000C1F]">
                    You need more help?<strong> Get help.</strong>
                </p>
            </form>
        </div>
    )
}