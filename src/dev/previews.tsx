import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import FoodCard from "../component/FoodCard.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FoodCard">
                <FoodCard/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;