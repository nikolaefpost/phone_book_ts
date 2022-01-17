import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import {ContactActionTypes, IUser} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { Card, CardBody, CardLink, CardSubtitle,  CardTitle } from 'reactstrap';
import {ModalAdd} from "../components/Modal";
import EditButton from "../components/EditButton";
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
        <div className='container p-5'>
            <Card className='p-5'>
                <CardBody className=''>
                    <CardTitle tag="h5" className='mb-3'>
                        {item[0].name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 "
                        tag="h6"
                    >

                        {item[0].img ? <img  className='rounded' src={(item[0].img).toString()}
                                         style={{width: '100px', height: '100px'}}/>:

                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#6c757d"
                                 className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path
                                    d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg> }

                    </CardSubtitle>
                </CardBody>

                <CardBody className='d-flex flex-column align-items-center'>
                    <div className=' d-flex '>
                        <div className='me-3'>
                            <p>Name: </p><p>Surname :</p><p className=''>Phone: </p>
                        </div>
                        <div >
                            <p><strong>{item[0].name}</strong> </p>
                            <p><strong>{item[0].username}</strong>  </p>
                            <p><strong>{item[0].phone}</strong>  </p>
                        </div>

                    </div>

                </CardBody>
                <CardBody className='d-flex justify-content-start' >
                    <CardLink href="#" className='d-flex flex-column  align-items-center'>
                        <ModalAdd
                            id={item[0].id}
                            fname={item[0].name}
                            username={item[0].username}
                            phone={item[0].phone}
                            img={item[0].img}
                            dispatch_type ={ContactActionTypes.EDIT_CONTACTS}
                        ><EditButton/></ModalAdd>

                    </CardLink>
                </CardBody>
            </Card>

        </div>
    );
};

export default About;