import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";
import * as s from "./styles";
import { BiLeftArrow } from "react-icons/bi";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

function PostList() {

    return (
        <div>
            <Header />
            <main>
                <article css={s.topPosting}>

                </article>
                <div css={s.searchContainver}>
                    <TextInput />
                    <Button>검색</Button>
                </div>
                <ul css={s.postListContainer}>
                    <li css={s.card}>
                        <div></div>
                        <footer></footer>
                    </li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                    <li css={s.card}></li>
                </ul>
                <div css={s.pagination}>
                    <Button><FiChevronsLeft/></Button>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button><FiChevronsRight/></Button>
                </div>
            </main>
        </div>
    )
}

export default PostList;