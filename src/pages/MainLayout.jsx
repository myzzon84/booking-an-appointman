import '../BookingAppointment.scss';
import useResize from '../pageSize';
import VisiteTypePage from './VisiteTypePage';
import SchedulerPage from './SchedulerPage';
import ContinueAsPage from './ContinueAsPage';
import ForWhoPage from './ForWhoPage';
import ForSomeoneElsePage from './ForSomeoneElsePage';
import ForUserPage from './ForUserPage';

const MainLayout = () => {

    const pageSize = useResize();

    return (
        <div className='bookingAppointmentPage w-full h-[100%] bg-[#F4F7FF]'>
            {/* <span className=" fixed top-0 right-[50px] text-[30px]/[32px]">{`${pageSize[0]} X ${pageSize[1]}`}</span> */}
            <div className='bookingAppointmentWrapper max-w-[1420px] mx-auto'>
                {/* <VisiteTypePage /> */}
                {/* <SchedulerPage /> */}
                {/* <ContinueAsPage /> */}
                {/* <ForWhoPage /> */}
                <ForSomeoneElsePage />
                {/* <ForUserPage/> */}
            </div>
        </div>
    );
};

export default MainLayout;