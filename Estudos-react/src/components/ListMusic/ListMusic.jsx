// const Cards = () => {

// }
// exporte = Cards
import { Music } from "../Music/Music";

import imageMusic1 from "../../assets/images/1.png";
import imageMusic2 from "../../assets/images/2.png";
import imageMusic3 from "../../assets/images/3.png";


export function ListMusic() {
    return (
    //   fragment
    <>
        <Music image={imageMusic1} title={"5GB"} author={"Node e Modules"}></Music>
        <Music image={imageMusic2} title={"5GB"} author={"Node e Modules"}></Music>
        <Music image={imageMusic3} title={"5GB"} author={"Node e Modules"}></Music>
    </>
    );
}
