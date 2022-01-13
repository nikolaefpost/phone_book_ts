import React, {FC} from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import {CONTACTS_ROUTE} from "../utils/consts";

export enum CardVariant{
    outlined = 'outlined',
    primary = 'primary',
}

interface HomeProps {
    width?: string;
    height?: string
    // children?: React.ReactChild | React.ReactNode
    variant?: CardVariant
    onClick?: (word: string)=>void
}

const Home: FC<HomeProps> = ({
                                 width,
                                 height,
                                 children,
                                 variant,
    onClick
} ) => {
    const history = useHistory();
    console.log(variant)
    return (
        <div
        //     style={{width, height, background: variant === CardVariant.primary? 'grey': "inherit",
        //     border: variant === CardVariant.outlined? '1px solid lightgrey': 'none'
        // }}
        //      onClick={()=>onClick('CLICK')}
        >
            {children}HOME
            <Button onClick={()=> history.push(CONTACTS_ROUTE)}>Contact</Button>
        </div>
    );
};

export default Home;