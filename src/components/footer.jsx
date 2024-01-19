import { VscGlobe } from "react-icons/vsc";
import { VscGithubInverted } from "react-icons/vsc";

export const Footer=()=>{
    return(
        <div className="inline-flex items-center justify-around gap-[400px] bg-[#331a04] w-[70%] rounded-xl my-[20px] font-bold">
            <div>
                <div className="text-[#fdfdfd] text-[30px]">Join Our</div>
                <div className="text-[#ffc603] text-[25px]">Community</div>
            </div>
            <div className="flex gap-[20px] py-[20px]">
                <div className="text-[#fdfdfd] text-[30px] bg-[#0e0d0d] rounded-[57.29px] p-[15px]">
                    <VscGlobe />
                </div>
                <div className="text-[#fdfdfd] text-[30px] bg-[#0e0d0d] rounded-[57.29px] p-[15px]">
                    <VscGithubInverted />
                </div>
            </div>
        </div>
    )
}