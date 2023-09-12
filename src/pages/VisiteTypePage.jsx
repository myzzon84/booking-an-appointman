import Header from "./Header";
import Footer from "./Footer";

const visitTypeArr = [
    'Cosmetic Consultation',
    'Emergency Consultation',
    'Orthodontic Consultation',
    'Whitening',
    'Broken Tooth/ Crown/Inlay/ Filling',
    'Prosthetics',
];

const VisiteTypePage = () => {

    const visitTypeList = visitTypeArr.map((item, i) => {
        return (
            <div className={` border-solid border-[2px] border-[#E8E8E9] w-[380px] h-[50px] flex items-center rounded-lg pl-5 font-nunitoSans text-[18px]/[25px] text-[#64697E] tracking-[0.81px] mb-10 hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.11)] cursor-pointer`} key={i}>
                {item}
            </div>
        );
    });

    return (
        <>
            <Header />
            <div className={`bg-white pt-[163px] pb-[139px] mb-5`} >
                <h1 className={`text-[32px]/[44px] font-nunitoSans font-semibold text-[#7C67FF] text-center tracking-[1.44px] mb-10 mt-0`}>
                    What type of appointment would you like to schedule?
                </h1>
                <div className={`max-w-[860px] w-full mx-auto flex flex-wrap justify-between`}>
                    {visitTypeList}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default VisiteTypePage;