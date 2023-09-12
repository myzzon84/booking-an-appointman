import { useState, useRef, createRef } from "react";

import Header from "./Header";
import { Listbox, Transition } from "@headlessui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { Scrollbar } from 'react-scrollbars-custom';

import geoPointIcon from '../assets/images/geoPoint.svg';
import calendarIcon from '../assets/images/calendarIcon.svg';
import avatar from '../assets/images/avatar.png';

const appointment = [
    'Cosmetic Consultation',
    'Orthodontic Consultation',
    'Broken Tooth/ Crown/Inlay/ Filling',
    'Emergency Consultation',
    'Whitening',
    'Prosthetics',
];

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

const SchedulerPage = () => {

    const [selectedAppointment, setSelectedAppointment] = useState(appointment[0]);

    let calendarRef = useRef(null);

    const TimeAppointment = (eventInfo) => {
        return (
            <div className={`bg-white text-[14px]/[19px] text-[#6674F3] font-openSans tracking-[0.63px] w-24 h-[35px] flex justify-center items-center border-[1px] border-solid border-[#E8E8E9] rounded-[5px] hover:bg-[#F2F3FF] cursor-pointer mb-[10px]`}>
                {eventInfo.event.title}
            </div>
        );
    };

    let calendarRefs = doctors.map((item) => createRef(item.id));

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
                                    leave="transition duration-500 ease-out"
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

export default SchedulerPage;