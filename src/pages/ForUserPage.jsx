import { useState } from "react";
import { useForm } from "react-hook-form";

const ForUserPage = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);

   const gender = ['Male', 'Female', 'Other'];

   const [showList, setShowList] = useState(false);
   const [arrowHover, setArrowHover] = useState(false);
   const [selectedGender, setSelectedGender] = useState('');

   return (
      <div className={`forUserPageWrapper flex`}>
         <div className={`max-w-[663px] w-full bg-white px-[60px] pt-[47px]`}>
            <div className={`text-[24px]/[29px] text-[#7C67FF] font-inter font-medium tracking-[1.08px] mb-10`}>
               Please enter your exact information
            </div>
            <form className={`flex flex-wrap justify-between mb-[10px]`} onSubmit={handleSubmit(onSubmit)}>
               <InputBlock label={'PESEL'} placeholder={'Input PESEL'} width={'full'} id={'pesel'} />
               <InputBlock label={'First Name'} placeholder={'First name'} width={'[265px]'} value={'Jack'} id={'firstName'} />
               <InputBlock label={'Last Name'} placeholder={'Last name'} width={'[265px]'} value={'Smith'} id={'lastName'} />
               <InputBlock label={'Date of Birth'} placeholder={'MM/DD/YY'} width={'[265px]'} id={'dateOfBirth'} />
               <div className={`flex flex-col w-[265px] mb-[15px] relative`}>
                  <div className={`text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px]`}>
                     Gender
                  </div>
                  <div 
                     className={`border-[2px] border-[#E8E8E9] rounded-[10px] h-9 relative cursor-pointer flex items-center pl-5 text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px]`}
                     onClick={() => setShowList(!showList)}
                     onMouseEnter={() => setArrowHover(true)}
                     onMouseLeave={() => setArrowHover(false)}
                  >
                     {selectedGender}
                     <div className={`absolute top-[36px] left-0 w-full ${showList ? 'opacity-100 visible' : 'opacity-0 invisible'} duration-500`}>
                        {gender.map((item, i) => (
                           <div
                              key={i}
                              className={`bg-white h-9 flex items-center pl-5 text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px] hover:bg-[#F3F3FF] hover:text-[#6674F3] cursor-pointer`}
                              onClick={() => {setShowList(!showList); setSelectedGender(item)}}
                           >
                              {item}
                           </div>
                        ))}
                     </div>
                     <span className={`w-[18px] h-[10px] absolute top-[calc(50%-5px)] right-5 ${showList ? ' rotate-180' : ' rotate-0'} duration-500 ${arrowHover ? 'bg-[url("./assets/images/listArrowHover.svg")]' : 'bg-[url("./assets/images/listArrow.svg")]'}`}>

                     </span>
                  </div>
               </div>
               <InputBlock label={'Email'} placeholder={'example@gmail.com'} width={'[265px]'} id={'email'} />
               <InputBlock label={'Phone number'} placeholder={'(000) 000 0000'} width={'[265px]'} id={'phoneNumber'} />
               <InputBlock label={'City'} width={'[265px]'} id={'city'} />
               <InputBlock label={'Address'} width={'[265px]'} id={'address'} />
               <InputBlock label={'Password'} width={'[265px]'} id={'password'} type={'password'} />
               <InputBlock label={'Confirm password'} width={'[265px]'} id={'confirmPassword'} type={'password'} />
               <div className={`flex flex-col w-full mb-[30px]`}>
                  <label 
                     htmlFor="comments"
                     className={`text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px] mb-[2px]`}
                  >
                     Comments or special requests
                  </label>
                  <textarea 
                     id="comments"
                     className={`border-[2px] border-[#E8E8E9] bg-white rounded-[10px] h-[71px]`}
                  >

                  </textarea>
               </div>
               <input type="submit" className={`bg-[#7C67FF] w-full h-[45px] rounded-[10px] text-[16px]/[22px] text-white font-nunitoSans font-semibold tracking-[0.72px] cursor-pointer`} />
            </form>
            <div className={`w-full h-[45px] rounded-[10px] text-[16px]/[22px] text-[#7C67FF] font-nunitoSans font-semibold tracking-[0.72px] cursor-pointer flex justify-center items-center`}>
               Back
            </div>
         </div>
      </div>
   );
};

const InputBlock = ({ label, placeholder, width, height, value, id, type }) => {
   return (
      <div className={`inputBlock flex flex-col w-${width} mb-[15px]`}>
         <label htmlFor={id} className={`text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px] mb-[2px]`}>{label}</label>
         <input
            type={type || 'text'}
            id={id}
            placeholder={placeholder}
            className={` border-[2px] border-[#E8E8E9] bg-white h-9 rounded-[10px] pl-[15px] text-[15px]/[18px] text-[#5E5E5E] font-inter tracking-[0.675px]`}
            defaultValue={value}
         />
      </div>
   );
};

export default ForUserPage;