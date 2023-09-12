import { useForm } from "react-hook-form";
import { useState } from "react";

import Header from "./Header";

import avatar67 from '../assets/images/avatar67.png';
import googleMap from '../assets/images/googleMap1.png';

const gender = ['Male', 'Female', 'Other'];

const ForSomeoneElsePage = () => {

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);

   const [selectedGender, setSelectedGender] = useState(gender[0]);
   const [showListGender, setShowListGender] = useState(false);
   const [arrowHover, setArrowHover] = useState(false);

   const genderList = gender.map((item, i) => {
      return (
         <div
            className={`h-9 flex items-center pl-[25px] hover:bg-[#F3F3FF] hover:text-[#6674F3]`}
            key={i}
            onClick={(e) => { setShowListGender(false); console.log(showListGender); setSelectedGender(item); e.stopPropagation() }}
         >
            {item}
         </div>
      );
   })

   return (
      <div className={`forSomeoneElseWrapper pb-5`}>
         <Header />
         <div className={`flex justify-between`}>
            <div className={`w-[46%] px-[60px] pt-[76px] bg-white shadow-[0px_4px_17px_0px_rgba(0,0,0,0.08)] font-inter`}>
               <h1 className={`text-[24px]/[29px] text-[#7C67FF] font-medium tracking-[1.08px] mb-[51px]`}>
                  Who are you scheduling for?
               </h1>
               <form onSubmit={handleSubmit(onSubmit)} className={`pb-[10px]`}>
                  <div className={`flex flex-wrap justify-between`}>
                     <InputBlock
                        name={'firstName'}
                        id={'firstName'}
                        label={'Patient First Name'}
                        type={'text'}
                     />
                     <InputBlock
                        name={'lastName'}
                        id={'lastName'}
                        label={'Patient Last Name'}
                        type={'text'}
                     />
                     <InputBlock
                        name={'dateOfBirth'}
                        id={'dateOfBirth'}
                        label={'Patient Date of Birth'}
                        type={'text'}
                     />
                     <div className={`mb-[25px] flex flex-col`}>
                        <span
                           className={`text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px]`}
                        >
                           {'Patient Gender'}
                        </span>

                        {/* Gender select */}
                        <div
                           className={`w-[265px] h-9 border-[2px] border-[#E8E8E9] rounded-[10px] cursor-pointer relative flex items-center pl-[25px] text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px] bg-white`}
                           onMouseEnter={() => { setArrowHover(true); }}
                           onMouseLeave={() => { setArrowHover(false); }}
                           onClick={() => setShowListGender(true)}
                        >
                           {selectedGender}
                           <div className={`absolute left-0 top-[36px] bg-white w-full duration-500 ${showListGender ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                              {genderList}
                           </div>
                           <span className={`${arrowHover ? "bg-[url('./assets/images/listArrowHover.svg')]" : "bg-[url('./assets/images/listArrow.svg')]"} absolute w-[18px] h-[10px] right-[25px] ${showListGender ? 'rotate-180' : 'rotate-0'} duration-500`}>

                           </span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <div className={`text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px] mb-[15px]`}>
                        Are you the parent or legal guardian of the patient?
                     </div>
                     <div className={`flex text-[16px]/[19px] text-[#5E5E5E] font-inter tracking-[0.72px] mb-[30px]`}>
                        <div className={`flex items-center mr-[38px]`}>
                           <input className={`mr-[10px]`} type="radio" name="yesno" id="yes" value={true} />
                           <label className={``} htmlFor="yes">Yes</label>
                        </div>
                        <div className={`flex items-center`}>
                           <input className={`mr-[10px]`} type="radio" name="yesno" id="no" value={false} />
                           <label className={``} htmlFor="no">No</label>
                        </div>
                     </div>
                  </div>
                  <div className={`w-full h-[45px] rounded-[10px] bg-[#7C67FF] text-[16px]/[22px] text-white font-nunitoSans font-semibold tracking-[0.72px] flex items-center justify-center`}>
                     Next
                  </div>
               </form>
               <div className={`w-full h-[45px] rounded-[10px] bg-white text-[16px]/[22px] text-[#7C67FF] font-nunitoSans font-semibold tracking-[0.72px] flex items-center justify-center`}>
                  Back
               </div>
            </div>
            <div className={`w-[53%] flex flex-col`}>
               <div className={`flex mb-[13px] bg-white shadow-[0px_4px_17px_0px_rgba(0,0,0,0.08)]`}>
                  <div className={`max-w-[348px] w-full pt-[44px] pl-10`}>
                     <div className={`text-[16px]/[22px] mb-[43px]`}>
                        <div className={`text-[#D9D6EA] font-nunitoSans font-bold tracking-[0.72px] mb-[3px]`}>
                           APPOINTMENT
                        </div>
                        <div className={`text-[#3F4455] font-openSans tracking-[0.72px] mb-[3px]`}>
                           Cosmetic Consultation
                        </div>
                        <div className={`text-[#3F4455] font-openSans tracking-[0.72px]`}>
                           Fri Aug 26 2023 at 1:30 pm
                        </div>
                     </div>
                     <div className={`mb-[50px]`}>
                        <div className={`text-[16px]/[22px] text-[#D9D6EA] font-nunitoSans font-bold tracking-[0.72px] mb-2`}>
                           ADDRESS
                        </div>
                        <div>
                           <span className={`text-[18px]/[25px] text-[#3F4455] font-nunitoSans font-semibold tracking-[0.81px] mb-1 inline-block`}>
                              Warsaw Dental Center
                           </span><br />
                           <span className={`text-[16px]/[26px] text-[#3F4455] font-openSans tracking-[0.72px]`}>
                              Leończak Kupryś Sp.k. <br />ul. Topiel 11, 00-342 Warszawa<br />+48225421804
                           </span>
                        </div>
                     </div>
                     <div className={`flex items-center mb-[31px]`}>
                        <div className={`mr-[17px]`}>
                           <img className={`rounded-[100px]`} src={avatar67} alt="avatar" />
                        </div>
                        <div>
                           <div className={`text-[20px]/[27px] text-[#3F4455] font-nunitoSans font-semibold tracking-[0.9px]`}>
                              Charlotte Watson
                           </div>
                           <div className={`text-[16px]/[22px] text-[#D9D6EA] font-nunitoSans font-bold tracking-[0.72px]`}>
                              Dentist
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`w-full py-5 pr-5`}>
                     <img src={googleMap} alt="Google map" />
                  </div>
               </div>

               <div className={`bg-white pt-[46px] pl-[48px] pb-[50px] shadow-[0px_4px_17px_0px_rgba(0,0,0,0.08)]`}>
                  <div className={`text-[16px]/[22px] text-[#7C67FF] font-nunitoSans font-bold tracking-[0.72px] uppercase mb-[17px]`}>
                     Information
                  </div>
                  <div className={`flex w-[60%] justify-between mb-[56px]`}>
                     <InfoBlock title={'Patient Name'} info={'Jack Smith'}/>
                     <InfoBlock title={'Date of birth'} info={'10/21/2010'}/>
                     <InfoBlock title={'Sex'} info={'Male'}/>
                  </div>
                  <div className={`flex w-[60%] justify-between mb-[70px]`}>
                     <InfoBlock title={'Guardian'} info={''}/>
                     <InfoBlock title={'Date of birth'} info={''}/>
                     <InfoBlock title={'Sex'} info={''}/>
                  </div>
                  <div className={`text-[16px]/[22px] text-[#7C67FF] font-nunitoSans font-bold tracking-[0.72px] uppercase mb-[16px]`}>
                     contacts
                  </div>
                  <div className={`flex w-[70%] justify-between`}>
                     <InfoBlock title={'Phone'} info={''}/>
                     <InfoBlock title={'Email'} info={''}/>
                     <InfoBlock title={'Address'} info={''}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

const InputBlock = ({ name, id, label, type }) => {
   return (
      <div className={`flex flex-col mb-[25px]`}>
         <label htmlFor={id} className={`text-[15px]/[18px] text-[#5E5E5E] font-inter font-normal tracking-[0.675px]`}>
            {label}
         </label>
         <input
            className={`rounded-[10px] bg-white border-[2px] border-[#E8E8E9] w-[265px] h-9 pl-5`}
            name={name}
            id={id}
            type={type}
         />
      </div>
   );
};

const InfoBlock = ({ title, info }) => {

   let infoClassName = 'text-[15px]/[20px] text-[#5E5E5E] font-openSans tracking-[0.675px]';

   if (info === '') {
      infoClassName = `w-full my-[11px] border-[2px] border-[#DCDCDC]`
   }

   return (
      <div>
         <div className={`text-[16px]/[22px] text-[#D9D6EA] font-nunitoSans font-bold uppercase tracking-[0.72px] mb-[5px]`}>
            {title}
         </div>
         <div className={infoClassName}>
            {info}
         </div>
      </div>
   );
};

export default ForSomeoneElsePage;