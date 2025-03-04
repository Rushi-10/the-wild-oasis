import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import ButtonIcon from "../../ui/ButtonIcon";
export default function Logout(){
    const{logout,isLoading}=useLogout();
    return(
        <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading?<HiArrowRightOnRectangle/>:
            <SpinnerMini/>

        }
        </ButtonIcon>

    );
}