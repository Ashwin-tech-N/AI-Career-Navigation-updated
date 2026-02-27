import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-neutral-900 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium leading-6 text-neutral-900">{title}</h3>
              <button
                type="button"
                className="rounded-md bg-white text-neutral-400 hover:text-neutral-500 focus:outline-none"
                onClick={onClose}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">{children}</div>
          </div>
          {footer && (
            <div className="bg-neutral-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
