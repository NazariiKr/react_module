import {ICharacterComponent} from "../../models/ICharacterComponent.ts";
import {ReactNode} from "react";
import './characterComponent.css'

type CharacterComponentType={
    value:ICharacterComponent,
    children:ReactNode
}

const CharacterComponent = ({value,children}:CharacterComponentType) => {
    return (
        <div className={'my-10 border-2 bg-slate-300'}>
            <h2>{value.name} {value.surname}</h2>
            <img src={value.photo} alt={value.surname}/>
            <p>{children}</p>

        </div>
    );
};

export default CharacterComponent;