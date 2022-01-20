import React, {FC} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import { fetchContacts } from '../store/action_creators/contacts';
// import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
interface FormProps{
    search: string
    setSearch: (search: string) => void
}
const Search: FC<FormProps> = ({search, setSearch}) => {
    // const {fetchContacts } = useActions()
    const dispatch = useDispatch()
    const loadContact = () => {
        dispatch(fetchContacts())
    }
    return (
        <Form>
            <FormGroup row className='align-items-center'>
                <Col sm={4} className='mb-2 mb-sm-0'>
                    <Button onClick={loadContact}>Load Contacts</Button>
                </Col>
                <Col sm={4}>
                    <Input
                        bsSize="lg"
                        id="exampleEmail"
                        name="email"
                        placeholder="name"
                        type="email"
                        value={search}
                        onChange={(e)=>setSearch(e.currentTarget.value.toLowerCase())}
                    />
                </Col>
                <Label
                    for="exampleEmail"
                    size="lg"
                    sm={4}
                    className='mt-0 text-start '
                >
                        <span  className="border px-3 pt-1 pb-2 rounded  bg-secondary d-none d-sm-inline" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f8f9fa"
                                 className="bi bi-search" viewBox="0 0 16 16 ">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </span>
                </Label>
            </FormGroup>
        </Form>
    );
};

export default Search;