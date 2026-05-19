import { Link, replace, useLocation, useNavigate } from "react-router";
import * as s from "./styles";
import { LuPencil } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import Button from "../Button/Button";
import { useState } from "react";

function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [ show, setShow ] = useState(false);

    const handleWriteOnClick = () => {
        navigate("/write");
    }

    const handleProfileonClick = () => {
        setShow(prev => !prev);
    }

    const handleLogoutOnClick = () => {
        localStorage.removeItem("accessToken");
        navigate("/auth/signin", {
            replace: true,
        });
    }

    return (
        <header css={s.layout}>
            <div css={s.left}>
                <Link to={"/"}>
                    <h1><LuPencil />PostLab</h1>
                </Link>
            </div>
            <div css={s.right}>
                {
                    !pathname.startsWith("/write") &&
                    <Button onClick={handleWriteOnClick}><BiPlus/>글쓰기</Button>
                }
                <div css={s.profile} onClick={handleProfileonClick}>
                    <span>노푸른</span>
                    <ul css={s.profileMenu(show)}>
                        <li>프로필 설정</li>
                        <li onClick={handleLogoutOnClick}>로그아웃</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}


export default Header;