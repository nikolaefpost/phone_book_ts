import React, {FC} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import { fetchContacts } from '../store/action_creators/contacts';
// import {useActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";
import SearchSvg from "../svg/SearchSvg";
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
                        id="search"
                        name="search"
                        placeholder="name"
                        type="text"
                        value={search}
                        onChange={(e)=>setSearch(e.currentTarget.value.toLowerCase())}
                    />
                </Col>
                <Label
                    for="search"
                    size="lg"
                    sm={4}
                    className='mt-0 text-start '
                >
                    <span  className="border px-3 pt-1 pb-2 rounded  bg-secondary d-none d-sm-inline" >
                        <SearchSvg/>
                    </span>
                </Label>
            </FormGroup>
        </Form>
    );
};

export default Search;