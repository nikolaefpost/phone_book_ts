import React, {FC} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {ContactActionTypes, IUser} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import { Card, CardBody, CardLink, CardSubtitle, CardTitle} from 'reactstrap';
import {ModalAdd} from "../components/Modal";
import {CONTACTS_ROUTE} from "../utils/consts";
import ButtonsCombine from "../components/ButtonsCombine";
import UserBigSvg from "../svg/UserBigSvg";
interface AboutProps{
    user: IUser;
}
interface ParamTypes  {
    id: string;
}

const About: FC<AboutProps> = ({user}) => {
    const history = useHistory();
    const {id} = useParams<ParamTypes>();
    const contacts = useTypedSelector(state => state.contact.contacts)
    const item = contacts.filter(item=>item.id===Number(id))
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
                        {item[0].img ? <img  className='rounded' alt='contact foto' src={(item[0].img).toString()}
                                         style={{ height: '100px'}}/>: <UserBigSvg/>}
                    </CardSubtitle>
                </CardBody>

                <CardBody className='d-flex flex-column align-items-center'>
                    <div className=' d-flex '>
                        <div className='me-3'>
                            <p>Name: </p><p>Surname :</p><p className=''>Phone: </p>
                        </div>
                        <div >
                            <p><strong>{item[0].name? item[0].name: '-'}</strong> </p>
                            <p><strong>{item[0].username? item[0].username: '-'}</strong>  </p>
                            <p><strong>{item[0].phone? item[0].phone: '-'}</strong>  </p>
                        </div>

                    </div>

                </CardBody>
                <CardBody className='d-flex justify-content-between' >
                    <CardLink className='d-flex flex-column align-items-center' onClick={()=>{history.push(CONTACTS_ROUTE)}}>
                        <ButtonsCombine title='Back'><i className="bi bi-arrow-return-left"></i></ButtonsCombine>
                    </CardLink>
                    <CardLink  className='d-flex flex-column  align-items-center' >
                        <ModalAdd
                            id={item[0].id}
                            fname={item[0].name}
                            username={item[0].username}
                            phone={item[0].phone}
                            img={item[0].img}
                            dispatch_type ={ContactActionTypes.EDIT_CONTACTS}
                            action='Edit contact'
                        >
                            <ButtonsCombine title='Edite'><i className="bi bi-pencil-square"></i></ButtonsCombine>
                        </ModalAdd>
                    </CardLink>

                </CardBody>
            </Card>

        </div>
    );
};

export default About;