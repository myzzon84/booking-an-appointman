import clinicLogo from '../assets/images/clinicLogo.png';
import clockIcon from '../assets/images/clock.svg';
import geoPointIcon from '../assets/images/geoPoint.svg';
import googleMap from '../assets/images/googleMap.png';

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

export default Footer;