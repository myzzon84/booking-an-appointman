import useResize from "./pageSize";
import './BookingAppointment.scss';
import googleMap from './assets/images/googleMap.png';
import clinicLogo from './assets/images/clinicLogo.png';
import clockIcon from './assets/images/clock.svg';
import geoPointIcon from './assets/images/geoPoint.svg';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import calendarIcon from './assets/images/calendarIcon.svg';
import avatar from './assets/images/avatar.png';
import { Scrollbar } from 'react-scrollbars-custom';
import { Fragment, createRef, useRef, useState } from "react";
import { Transition, Listbox } from "@headlessui/react";
import backArrow from './assets/images/backArrow.svg';
import { useForm } from "react-hook-form";

const appointment = [
  'Cosmetic Consultation',
  'Orthodontic Consultation',
  'Broken Tooth/ Crown/Inlay/ Filling',
  'Emergency Consultation',
  'Whitening',
  'Prosthetics',
];

const BookingAppointment = () => {

  const pageSize = useResize();

  const [selectedAppointment, setSelectedAppointment] = useState(appointment[0]);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

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
    'Whitening',
    'Broken Tooth/ Crown/Inlay/ Filling',
    'Prosthetics',

  ];

  const visitTypeList = visitTypeArr.map((item, i) => {
    return (
      <div className={` border-solid border-[2px] border-[#E8E8E9] w-[380px] h-[50px] flex items-center rounded-lg pl-5 font-nunitoSans text-[18px]/[25px] text-[#64697E] tracking-[0.81px] mb-10 hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.11)] cursor-pointer`} key={i}>
        {item}
      </div>
    );
  });

  const doctors = [
    {
      id: 1,
      avatar: avatar,
      name: 'Charlotte Watson',
      speciality: 'dentist',
      time: [
        { title: '11:40 am', date: '2023-08-28' },
        { title: '11:40 am', date: '2023-08-28' },
        { title: '11:40 am', date: '2023-08-28' },
        { title: '11:40 am', date: '2023-08-29' },
        { title: '11:40 am', date: '2023-08-29' },
        { title: '11:40 am', date: '2023-08-30' },
        { title: '11:40 am', date: '2023-08-31' },
        { title: '11:40 am', date: '2023-08-31' },
        { title: '11:40 am', date: '2023-08-31' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
        { title: '11:40 am', date: '2023-09-01' },
      ]
    },
    {
      id: 2,
      avatar: avatar,
      name: 'Audrey Grant',
      speciality: 'dentist',
      time: [
        { title: '11:40 am', date: '2023-08-22' },
        { title: '1:30 pm', date: '2023-08-22' },
        { title: '8:00 am', date: '2023-08-23' },
        { title: '9:00 am', date: '2023-08-23' },
        { title: '11:40 am', date: '2023-08-23' },
        { title: '8:00 am', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-24' },
        { title: '1:30 pm', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-25' },
        { title: '1:30 pm', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-26' },
        { title: '1:30 pm', date: '2023-08-26' },
      ]
    },
    {
      id: 3,
      avatar: avatar,
      name: 'Charlotte Watson',
      speciality: 'dentist',
      time: [
        { title: '11:40 am', date: '2023-08-22' },
        { title: '1:30 pm', date: '2023-08-22' },
        { title: '8:00 am', date: '2023-08-23' },
        { title: '9:00 am', date: '2023-08-23' },
        { title: '11:40 am', date: '2023-08-23' },
        { title: '1:40 pm', date: '2023-08-23' },
        { title: '4:00 pm', date: '2023-08-23' },
        { title: '6:45 pm', date: '2023-08-23' },
        { title: '8:00 am', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-24' },
        { title: '1:30 pm', date: '2023-08-24' },
        { title: '2:40 pm', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-25' },
        { title: '1:30 pm', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-26' },
        { title: '1:30 pm', date: '2023-08-26' },
      ]
    },
    {
      id: 4,
      avatar: avatar,
      name: 'Audrey Grant',
      speciality: 'dentist',
      time: [
        { title: '11:40 am', date: '2023-08-22' },
        { title: '1:30 pm', date: '2023-08-22' },
        { title: '8:00 am', date: '2023-08-28' },
        { title: '9:00 am', date: '2023-08-28' },
        { title: '11:40 am', date: '2023-08-28' },
        { title: '1:40 pm', date: '2023-08-28' },
        { title: '4:00 pm', date: '2023-08-28' },
        { title: '6:45 pm', date: '2023-08-28' },
        { title: '8:00 am', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-24' },
        { title: '1:30 pm', date: '2023-08-24' },
        { title: '2:40 pm', date: '2023-08-24' },
        { title: '9:00 am', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-25' },
        { title: '1:30 pm', date: '2023-08-25' },
        { title: '11:40 am', date: '2023-08-26' },
        { title: '1:30 pm', date: '2023-08-26' },
      ]
    },
  ];

  const Header = () => {
    return (
      <div className="w-full bg-white h-[110px] shadow-[0_4px_17px_0_rgba(0,0,0,0.08)] mb-[10px] flex justify-center items-center">
        <div className=" w-[1180px] h-2 bg-[#BAC9FF] rounded-lg relative">
          {/* <span className={`absolute -top-[2px] left-[calc(16%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(33%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(50%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(67%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span>
          <span className={`absolute -top-[2px] left-[calc(84%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`}></span> */}

          {points}
          <div className={`absolute h-3 w-[33%] left-0 -top-[2px] bg-[#8380FF] rounded-md`}></div>
          <div className={`absolute w-[125px] h-9 -top-[14px] left-[calc(33%-64px)] bg-[#8380FF] rounded-[18px] flex justify-center items-center text-white text-[15px]/[20px] font-semibold font-openSans tracking-[0.675px]`}>
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

  const VisiteTypePage = () => {
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

  let calendarRef = useRef(null);

  let calendarRefs = doctors.map((item) => createRef(item.id));

  const SchedulerPage = () => {
    return (
      <>
        <Header />
        <div className={`pt-[30px] pr-[53px] pl-[46px] pb-[30px] bg-white`}>
          <div className={`flex relative`}>
            <div className={`w-[30%] flex flex-col`}>
              <div className={`text-[24px]/[33px] font-nunitoSans font-semibold text-[#7C67FF] tracking-[1.08px] inline-block max-w-max mb-[38px]`}>
                Select an appointment
              </div>

              <div className={`text-[16px]/[22px] text-[#64697E] font-nunitoSans tracking-[0.72px] max-w-[265px]`}>
                <Listbox
                  as={'div'}
                  value={selectedAppointment}
                  onChange={setSelectedAppointment}
                  className={`relative`}
                >
                  <Listbox.Button
                    className={` w-[265px] h-[49px] px-[25px] border-[1px] border-[#E8E8E9] rounded-[10px] text-left relative z-[10] hover:border-[#CACACA] bg-[url("./assets/images/listArrow.svg")] hover:bg-[url("./assets/images/listArrowHover.svg")] bg-no-repeat bg-[90%_20px] bg-white`}
                  >
                    {selectedAppointment}
                  </Listbox.Button>
                  <Transition
                    as={'div'}
                    className={`relative -top-[50px] z-[1] `}
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Listbox.Options className={`absolute top-[39px] left-0 pt-3 z-[1] bg-white rounded-[10px]`}>
                      {appointment.map((item, i) => {
                        return (
                          <Listbox.Option
                            key={i}
                            value={item}
                            className={`h-[49px] px-[25px] flex items-center cursor-pointer hover:bg-[#F3F3FF]`}
                          >
                            {item}
                          </Listbox.Option>
                        );
                      })}
                    </Listbox.Options>
                  </Transition>

                </Listbox>
              </div>

            </div>
            <div className={`headerCalendar w-[70%]`}>
              <div className={`text-[16px]/[22px] text-[#64697E] font-nunitoSans font-normal flex justify-end`}>
                <span className={`pt-[15px] pb-3 px-[25px] rounded-[10px] border-[1px] border-solid border-[#E8E8E9] flex`}>
                  <span className={`mr-[14px]`}>
                    Warsaw
                  </span>
                  <img className={`h-5`} src={geoPointIcon} alt="geopoint" />
                </span>
                <div className={`relative pt-[15px] pb-3 px-[25px] rounded-[10px] border-[1px] border-solid border-[#E8E8E9] flex items-center ml-[10px]`}>
                  <span className={`mr-[15px]`}>
                    Select Date
                  </span>
                  <img src={calendarIcon} alt="date picker" />
                </div>
              </div>
              <FullCalendar
                ref={calendarRef}
                firstDay={1}
                headerToolbar={
                  {
                    left: 'myCustomButtonPrev',
                    right: 'myCustomButtonNext',
                    center: 'title',
                  }
                }
                titleFormat={
                  {
                    month: 'long'
                  }
                }
                dayHeaderContent={(data) => dayFormat(data)}
                plugins={[dayGridPlugin]}
                initialView="dayGridWeek"
                customButtons={
                  {
                    myCustomButtonPrev: {
                      click: () => {
                        calendarRef.current.getApi().prev();
                        calendarRefs.forEach((item) => {
                          item.current.getApi().prev();
                        })
                      }
                    },
                    myCustomButtonNext: {
                      click: () => {
                        calendarRef.current.getApi().next();
                        calendarRefs.forEach((item) => {
                          item.current.getApi().next();
                        })
                      }
                    }
                  }
                }
              />
            </div>


          </div>
          <Scrollbar
            style={{ height: `${window.innerHeight - 320}px` }}
            trackYProps={{ className: "trackY" }}
            thumbYProps={{ className: "thumbY" }}
          >
            <div className={`shadow-[0px_4px_17px_0px_rgba(0,0,0,0.08)]`}>
              {doctors.map((item, i) => {
                return (
                  <div className={`flex border-b-[2px] border-b-[#E8E8E9]`} key={i}>
                    <div className={`flex py-10 pl-10 w-[30%] border-r-[2px] border-r-[#E8E8E9] items-center`}>
                      <div className={` bg-white  w-[50px] h-[50px] mr-[25px]`}>
                        <img className={`rounded-[25px]`} src={item.avatar} alt="avatar" />
                      </div>
                      <div className={`flex flex-col`}>
                        <span className={`uppercase text-[16px]/[22px] text-[#D2D2D2] font-nunitoSans font-bold tracking-[0.72px]`}>
                          {item.speciality}
                        </span>
                        <span className={`text-[18px]/[25px] text-[#6C6C6C] font-nunitoSans font-semibold tracking-[0.81px]`}>
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <div className={`eachDoctorCalendar w-[70%] min-h-max bg-[#FBFCFF]`}>
                      <FullCalendar
                        firstDay={1}
                        headerToolbar={false}
                        dayHeaders={false}
                        plugins={[dayGridPlugin]}
                        initialView="dayGridWeek"
                        events={item.time}
                        eventContent={TimeAppointment}
                        height={"auto"}
                        ref={calendarRefs[i]}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Scrollbar>
        </div>

      </>
    );
  };

  const ContinueAsPage = () => {

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

    return (
      <div className={`continueAsWrapper`}>
        <Header />
        <div className={`mainBlock max-w-[1420px] h-[656px]`}>
          <ChoseStatus />
          {/* <SignIn /> */}
        </div>
        <Footer />
      </div>
    );
  };

  const TimeAppointment = (eventInfo) => {
    return (
      <div className={`bg-white text-[14px]/[19px] text-[#6674F3] font-openSans tracking-[0.63px] w-24 h-[35px] flex justify-center items-center border-[1px] border-solid border-[#E8E8E9] rounded-[5px] hover:bg-[#F2F3FF] cursor-pointer mb-[10px]`}>
        {eventInfo.event.title}
      </div>
    );
  };

  const dayFormat = (data) => {
    let dayTitle = data.text.split(' ');
    let dayNumber = data.text.split('/');
    return (
      <div className={`flex flex-col font-nunitoSans text-[15px]/[20px] tracking-[0.675px] font-normal`}>
        <span className={`text-[#64697E]`}>
          {dayTitle[0]}
        </span>
        <span className={`text-[#C3C2D1]`}>
          {dayNumber[1]}
        </span>
      </div>
    );
  };

  return (
    <div className='bookingAppointmentPage w-full h-[100%] bg-[#F4F7FF]'>
      <span className=" fixed top-0 right-[50px] text-[30px]/[32px]">{`${pageSize[0]} X ${pageSize[1]}`}</span>
      <div className='bookingAppointmentWrapper max-w-[1420px] mx-auto'>
        {/* <VisiteTypePage /> */}
        {/* <SchedulerPage /> */}
        <ContinueAsPage />
      </div>
    </div>
  );
};

export default BookingAppointment;
