import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import {IUser} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap';
interface AboutProps{
    user: IUser;
}
interface ParamTypes  {
    id: string;
}

const About: FC<AboutProps> = ({user}) => {
    const {id} = useParams<ParamTypes>();
    const contacts = useTypedSelector(state => state.contact.contacts)
    const item = contacts.filter(item=>item.id===Number(id))
    console.log(item)
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                </CardBody>
                {item[0].img && <img
                    alt="Card image cap"
                    src={(item[0].img).toString()}
                    width="20%"
                />}
                <CardBody>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <CardLink href="#">
                        Card Link
                    </CardLink>
                    <CardLink href="#">
                        Another Link
                    </CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default About;