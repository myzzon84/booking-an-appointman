import { useForm } from "react-hook-form";

import Header from "./Header";
import Footer from "./Footer";

import backArrow from '../assets/images/backArrow.svg';

const ContinueAsPage = () => {
    return (
        <div className={`continueAsWrapper`}>
            <Header />
            <div className={`mainBlock max-w-[1420px] h-[656px]`}>
                {/* <ChoseStatus /> */}
                <SignIn />
            </div>
            <Footer />
        </div>
    );
};

const ContinueButton = () => {
    return (
        <div className={`w-[193px] h-10 py-[10px] bg-[#8380FF] rounded-[5px] mx-auto text-[15px]/[20px] text-white font-semibold tracking-[0.675px] text-center cursor-pointer`}>
            {'Continue'}
        </div>
    );
};

const ChoseStatus = () => {
    return (
        <div className={`w-[780px] mx-auto pt-[50px] font-nunitoSans`}>
            <h1 className={`text-[32px]/[44px] text-[#E8EAFF] font-semibold text-center mb-[41px] relative`}>
                Continue as:
                <img className={`absolute top-[calc(50%-10px)] left-0 cursor-pointer`} src={backArrow} alt="back" />
            </h1>
            <div className={`flex justify-between pb-10`}>
                <div className={`selectGuest w-[360px] pt-[214px] rounded-[10px] px-[25px] pb-8`}>
                    <div className={`text-center text-[24px]/[33px] text-[#E8EAFF] font-bold mb-[15px] tracking-[1.08px]`}>
                        Guest
                    </div>
                    <p className={`text-[15px]/[20px] text-[#E8EAFF] font-normal tracking-[0.675px] text-center mb-[26px]`}>
                        Opting for the 'Guest' login allows you to schedule appointments seamlessly, skipping the registration process.
                    </p>
                    <ContinueButton />
                </div>
                <div className={`selectUser w-[360px] pt-[214px] rounded-[10px] px-[25px] pb-8`}>
                    <div className={`text-center text-[24px]/[33px] text-[#E8EAFF] font-bold mb-[15px] tracking-[1.08px]`}>
                        User
                    </div>
                    <p className={`text-[15px]/[20px] text-[#E8EAFF] font-normal tracking-[0.675px] text-center mb-[26px]`}>
                        Sign up and gain access to your medical records. Register with us for your personal health journey.
                    </p>
                    <ContinueButton />
                </div>
            </div>
            <div className={`text-white text-[15px]/[20px] font-normal tracking-[0.675px] text-center`}>
                Do you have an account? <span className={`text-[#77DEFF] cursor-pointer`}>Sign in</span>
            </div>
        </div>
    );
};

const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className={`pt-[110px]`}>
            <div className={`signInBlock w-[353px] rounded-[10px] py-11 mx-auto`}>
                <div className={`text-[32px]/[44px] text-[#E8EAFF] font-nunitoSans font-semibold tracking-[1.44px] text-center mb-[25px] cursor-default`}>
                    Sign in
                </div>
                <form
                    className={`w-[265px] mx-auto`}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={`flex flex-col mb-[15px]`}>
                        <label htmlFor="email" className={`text-[15px]/[18px] text-[#BBAFFF] font-inter font-normal tracking-[0.675px]`}>
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className={`rounded-[5px] bg-[rgba(53,34,140,0.37)] h-9 pl-[15px]`}
                        />
                    </div>
                    <div className={`flex flex-col mb-[15px]`}>
                        <label htmlFor="password" className={`text-[15px]/[18px] text-[#BBAFFF] font-inter font-normal tracking-[0.675px]`}>
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={`rounded-[5px] bg-[rgba(53,34,140,0.37)] h-9 pl-[15px]`}
                        />
                    </div>
                    <input
                        value={'Sign in'}
                        type="submit"
                        className={`w-full h-10 rounded-[5px] bg-[#8380FF] text-white text-[15px]/[20px] font-nunitoSans font-semibold tracking-[0.675px] mb-[20px] cursor-pointer`}
                    />
                </form>
                <div className={`flex justify-center items-center mb-5`}>
                    <hr className={`w-[70px] border-[2px] border-[#6858CC]`} />
                    <span className={`text-[14px]/[17px] text-[#BBAFFF] font-inter font-medium mx-3 cursor-default`}>
                        Or Continue With
                    </span>
                    <hr className={`w-[70px] border-[2px] border-[#6858CC]`} />
                </div>
                <div className={`flex justify-center`}>
                    <div className={`googleLogin w-[83px] h-[41px] rounded-lg bg-[rgba(53,34,140,0.37)] mx-[10px] cursor-pointer`}>

                    </div>
                    <div className={`appleLogin w-[83px] h-[41px] rounded-lg bg-[rgba(53,34,140,0.37)] mx-[10px] cursor-pointer`}>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContinueAsPage;