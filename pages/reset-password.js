import Link from "next/link";

export default function ResetPass() {
    return (
        <div className="container py-[50px] mx-auto text-center max-w-[504px] xl:px-0">
            <p className="text-[24px] text-[#000C1F] mb-[88px]">Enter your <strong>membership number</strong>  and we will <strong>email</strong>  you instructions on how to <strong>create a new password.</strong></p>
            <form>
                <div className="flex flex-col items-center w-full">
                    <div className="mb-[24px] flex flex-col items-start w-full">
                        <label className="mb-[2px]" for="last">Password</label>
                        <input className="bg-[#EBECED] text-[#858B94] p-[20px] w-full" type="password" id="last" name="last" placeholder="38736" />
                    </div>
                </div>
                <button className="bg-[#003A8F] w-full text-center py-[14px] text-white text-lg mb-[24px]" type="submit">RESET PASSWORD</button>
                <Link href="/login">
                    <span className="text-[#3D4655] underline underline-offset-8">BACK TO LOGIN</span>
                </Link>
                <p className="text-[#000C1F] font-bold text-[24px] mt-[80px] ">
                    Having Trouble?
                </p>
                <p className="mt-[24px] text-[20px] mb-[15px] text-[#000C1F]">
                    If you are still experiencing problems, contact the team for assistance:

                </p>
                <span className="">
                    <br></br>
                    Email: marketing@raca.com.au
                    <br></br>
                    Tel: 02 8273 2300
                </span>
            </form>
        </div>
    )
}