import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {ContactActionTypes} from "../types/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Card, CardBody, CardLink, CardSubtitle, CardTitle} from 'reactstrap';
import {ModalAdd} from "../components/Modal";
import {CONTACTS_ROUTE} from "../utils/consts";
import ButtonsCombine from "../components/ButtonsCombine";
import UserBigSvg from "../svg/UserBigSvg";
import FormAddContact from "../components/FormAddContact";

interface ParamTypes {
    id: string;
}
const button = <ButtonsCombine title='Edite'><i className="bi bi-pencil-square"></i></ButtonsCombine>

const About: React.FC = () => {
    const history = useHistory();
    let {id} = useParams<ParamTypes>();

    let contacts = useTypedSelector(state => state.contact.contacts)

    if (contacts.length === 0) history.push(CONTACTS_ROUTE)
    else contacts = contacts.filter(elem => elem.id === Number(id))

    return (
        <div className='container p-5'>
            {contacts.length !== 0 && <Card className='p-5'>
                <CardBody className=''>
                    <CardTitle tag="h5" className='mb-3'>
                        {contacts[0].name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 "
                        tag="h6"
                    >
                        {contacts[0].img ?
                            <img className='rounded' alt='contact foto' src={(contacts[0].img).toString()}
                                 style={{height: '100px'}}/> : <UserBigSvg/>}
                    </CardSubtitle>
                </CardBody>

                <CardBody className='d-flex flex-column align-items-center'>
                    <div className=' d-flex '>
                        <div className='me-3'>
                            <p>Name: </p><p>Surname :</p><p className=''>Phone: </p>
                        </div>
                        <div>
                            <p><strong>{contacts[0].name ? contacts[0].name : '-'}</strong></p>
                            <p><strong>{contacts[0].username ? contacts[0].username : '-'}</strong></p>
                            <p><strong>{contacts[0].phone ? contacts[0].phone : '-'}</strong></p>
                        </div>

                    </div>

                </CardBody>
                <CardBody className='d-flex justify-content-between'>
                    <CardLink className='d-flex flex-column align-items-center' onClick={() => {
                        history.push(CONTACTS_ROUTE)
                    }}>
                        <ButtonsCombine title='Back'><i className="bi bi-arrow-return-left"></i></ButtonsCombine>
                    </CardLink>
                    <CardLink className='d-flex flex-column  align-items-center'>
                        <ModalAdd element={button} title="Enter contact details, please.">
                            <FormAddContact
                                id={contacts[0].id}
                                contact_name={contacts[0].name}
                                contact_username={contacts[0].username}
                                contact_phone={contacts[0].phone}
                                contact_img={contacts[0].img}
                                dispatch_type={ContactActionTypes.EDIT_CONTACTS}
                                action='Edit contact'
                            />
                        </ModalAdd>
                    </CardLink>

                </CardBody>
            </Card>}

        </div>
    );
};

export default About;