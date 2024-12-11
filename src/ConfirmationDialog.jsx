import './ConfirmationDialog.css';

function ConfirmationDialog({ isOpen, onClose,onConfirm }) {
    if (!isOpen) return null;

    return (
        // <div className="modal">
        //     <div className="modal-content">
        //         <p>Form Submitted Successfully!</p>
        //         <button onClick={onClose}>OK</button>
        //     </div>
        // </div>
        <div className="modal">
            <div className="modal-content">
                <p>Please confirm that your information is correct,and click "Confirm" to proceed</p>
                <div className="action">
                    <button className='btn-confirm' onClick={onConfirm}>Confirm</button>
                    <button  className='btn-close' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationDialog;
