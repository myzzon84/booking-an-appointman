import useResize from "./pageSize";
import './BookingAppointment.scss';

import googleMap from './assets/images/googleMap.png';
import clinicLogo from './assets/images/clinicLogo.png';
import clockIcon from './assets/images/clock.svg';
import geoPointIcon from './assets/images/geoPoint.svg';

const BookingAppointment = () => {
  const pageSize = useResize();

  let percent = [16, 33, 50, 67, 84];

  const points = percent.map((item, i) => {
    return (
      <span className={`absolute -top-[2px] left-[calc(${item}%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`} key={i}></span>
    );
  });

  const visitTypeArr = [
    'Cosmetic Consultation',
    'Emergency Consultation',
    'Orthodontic Consultation',
    'Existing Patient - Exam and Cleaning',
    'Broken Tooth/ Crown/Inlay/ Filling',
    'New Patient - Exam and Cleaning',

  ];

  const visitTypeList = visitTypeArr.map((item, i) => {
    return (
      <div className={` border-solid border-[2px] border-[#E8E8E9] w-[380px] h-[50px] flex items-center rounded-lg pl-5 font-nunitoSans text-[18px]/[25px] text-[#64697E] tracking-[0.81px] mb-10 hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.11)] cursor-pointer`} key={i}>
        {item}
      </div>
    );
  });

  const Header = () => {
    return (
      <div className="w-full bg-white h-[110px] shadow-[0_4px_17px_0_rgba(0,0,0,0.08)] mb-[10px] flex justify-center items-center">
        <div className=" w-[1180px] h-2 bg-[#BAC9FF] rounded-lg relative">
          {points}
          {/* <span className={`absolute -top-[2px] left-[calc(16%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(33%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(50%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(67%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(84%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span> */}
          <div className={`absolute h-3 w-[16%] left-0 -top-[2px] bg-[#8380FF] rounded-md`}></div>
          <div className={`absolute w-[125px] h-9 -top-[14px] left-[calc(16%-64px)] bg-[#8380FF] rounded-[18px] flex justify-center items-center text-white text-[15px]/[20px] font-semibold font-openSans tracking-[0.675px]`}>
            Visit Type
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className={`flex bg-white h-[240px]`}>
        <div className={`w-1/2 flex`}>
          <div className={`pt-[30px] pl-[30px]`}>
            <img className={`w-[90px] h-[90px]`} src={clinicLogo} alt="clinic logo" />
          </div>
          <div className={`pt-10 pl-[35px] flex flex-col`}>
            <h2 className={`text-[20px]/[27px] text-[#64697E] font-nunitoSans font-semibold mb-5`}>
              Warsaw Dental Center
            </h2>
            <div className={`flex font-nunitoSans text-[16px]/[22px] text-[#64697E] tracking-[0.72px]`}>
              <div className={`flex flex-col max-w-[200px] mr-[76px]`}>
                <img className={`w-5 h-5 mb-[13px]`} src={clockIcon} alt="clock" />
                <span>
                  Pon. — Pt. 9.00 — 21.00
                </span>
                <span>
                  ul. Topiel 11, 00-342 Warszawa
                </span>
              </div>
              <div className={`flex flex-col max-w-[184px] items-start`}>
                <img className={`h-5 mb-[13px]`} src={geoPointIcon} alt="geo point" />
                <span>
                  Warsaw Dental Center Leończak Kupryś Sp.k.
                </span>
                <span>
                  NIP: 1182180875
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/2 py-[15px]`}>
          <img src={googleMap} alt="google map" />
        </div>
      </div>
    );
  };

  return (
    <div className='bookingAppointmentPage w-full h-[100%] bg-[#F4F7FF]'>
      <span className=" fixed top-0 right-[50px] text-[30px]/[32px]">{`${pageSize[0]} X ${pageSize[1]}`}</span>
      <div className='bookingAppointmentWrapper max-w-[1420px] mx-auto'>
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
      </div>
    </div>
  );
};

export default BookingAppointment;
