import React from 'react'
import {useSelector} from "react-redux";
import TestModal from "../../../features/sandbox/TestModal";
import LoginForm from "../../../features/auth/LofinForm";

const ModalManager = () => {
    const modalLookup = {
        TestModal,
        LoginForm
    }
    const currentModal = useSelector(state => state.modals)
    let renderModal;
    if (currentModal){
        const {modalType, modalProps} = currentModal
        const ModalComponent = modalLookup[modalType]
        renderModal = <ModalComponent {...modalProps}/>
    }
return (
<span>
    {renderModal}
</span>
)
}
export default ModalManager