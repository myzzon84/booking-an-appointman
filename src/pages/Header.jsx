const Header = () => {

    let percent = [16, 33, 50, 67, 84];

    const points = percent.map((item, i) => {
        return (
            <span className={`absolute -top-[2px] left-[calc(${item}%-6px)] h-3 w-3 rounded-md bg-[#8380FF]`} key={i}></span>
        );
    });

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

export default Header;