import { useState } from "react";

export const formatResponse = (requestObj, dataFormatter) =>
  requestObj.then(response => ({
    ...response,
    data: dataFormatter(response.data),
  }));

export const DialogVariable = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openDialog,
    closeDialog
  }
}