import Header from "./Header";
import Footer from "./Footer";

const ForWhoPage = () => {



    return (
        <div className={`forWhoPage`}>
            <Header />
            <div className={`mainBlock w-full h-[656px] pt-[194px] font-nunitoSans`}>
                <h1 className={`text-[32px]/[44px] text-white font-semibold tracking-[1.44px] max-w-[587px] mx-auto text-center mb-10`}>
                    Are you scheduling this appointment for you, or someone else?
                </h1>
                <ChoseButton text={'Scheduling for me'} />
                <ChoseButton text={'Scheduling for someone else'} />
                <BackButton />
            </div>
            <Footer />
        </div>
    );
};

const BackButton = () => {
    return (
        <div className={`w-[380px] h-[45px] rounded-[10px] bg-white text-[16px]/[22px] text-[#7C67FF] font-nunitoSans font-semibold tracking-[0.72px] mx-auto flex justify-center items-center`}>
            Back
        </div>
    );
};

const ChoseButton = ({ text }) => {
    return (
        <div className={`w-[380px] h-[50px] rounded-lg bg-[rgba(53,34,140,0.37)] mx-auto text-[18px]/[25px] text-white font-nunitoSans tracking-[0.81px] flex items-center pl-5 mb-[30px]`}>
            {text}
        </div>
    );
};

export default ForWhoPage;