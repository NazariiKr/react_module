import {simpsons} from "../../data/data.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";

const FamilyComponent = () => {
    return (
        <>
            {
                simpsons.map((value,index) =><CharacterComponent key={index} value={value}>
                    {value.info}
                </CharacterComponent> )
            }
        </>
    );
};

export default FamilyComponent;