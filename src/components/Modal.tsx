import React, {FC, ReactElement, useState} from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


interface ModalProps {
    element?: ReactElement<string>
    title?: string
}

export const ModalAdd: FC<ModalProps> = ({children, title, element}) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='d-flex justify-content-end'>
            <div onClick={() => setOpen(true)}>
                {element}
            </div>
            <Modal
                centered
                isOpen={open}
                toggle={() => setOpen(false)}
            >
                <ModalHeader toggle={() => setOpen(false)}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter className='justify-content-start'>
                    <span className='text-danger'>*</span><span>Required fields</span>
                </ModalFooter>
            </Modal>
        </div>
    );
};

