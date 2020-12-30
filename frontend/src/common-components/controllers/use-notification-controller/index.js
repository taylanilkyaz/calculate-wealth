import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const options = {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    pauseOnFocusLoss: false,
    progress: undefined,
    transition: Zoom
}

export const notifySuccess = (message) => {
    toast.success(message, options);
}

export const notifyInfo = (message) => {
    toast.info(message, options);
}

export const notifyWarn = (message) => {
    toast.warn(message, options);
}

export const notifyError = (message) => {
    toast.error(message, options);
}