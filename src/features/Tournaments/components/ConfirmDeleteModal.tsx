import React from "react";
import { Trash2 } from "lucide-react";
import Modal from "@shared/components/Modal";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  teamName: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  teamName,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete Team"
      icon={<Trash2 className="w-6 h-6 text-red-500" />}
      footer={
        <>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </>
      }
    >
      Are you sure you want to delete <strong>{teamName}</strong>? This action
      cannot be undone.
    </Modal>
  );
};

export default ConfirmDeleteModal;
