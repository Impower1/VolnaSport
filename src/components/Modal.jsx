function Modal({setModal}) {
    document.body.style.overflow = 'hidden';
    setTimeout(()=>{
        setModal(false)
                document.body.style.overflow = 'auto';
    }, 1000)
    return ( 
        <>
            <div className="modal-wrapper" onClick={()=>{
                setModal(false)
                document.body.style.overflow = 'auto';
                }}></div>
            <div className="modal">
                <h1>Спасибо за ответ!</h1>
            </div>
        </>
     );
}

export default Modal;