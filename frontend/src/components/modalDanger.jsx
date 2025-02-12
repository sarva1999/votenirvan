import * as Dialog from "@radix-ui/react-dialog";

const ModalDanger = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog.Root open={isOpen} onClose={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg px-4 py-6 sm:flex items-center justify-center w-full max-w-lg">
          <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mt-4 text-center sm:ml-4 sm:text-left">
            <Dialog.Title className="text-lg font-medium text-gray-800">Logout?</Dialog.Title>
            <Dialog.Description className="mt-2 text-sm leading-relaxed text-gray-500">
             Confirming Logout means cannot perform admin actions and will be redirected to login page</Dialog.Description>
            <div className="items-center gap-2 mt-3 text-sm sm:flex">
              <Dialog.Close asChild>
                <button onClick={onConfirm} className="w-full p-2.5 flex-1 text-white bg-red-600 rounded-md ring-offset-2 ring-red-600 focus:ring-2">Logout</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button onClick={onClose} className="w-full p-2.5 flex-1 text-gray-800 rounded-md border ring-offset-2 ring-indigo-600 focus:ring-2">Cancel</button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalDanger;
