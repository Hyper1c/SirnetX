// /components/DeleteConfirmModal.tsx
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DeleteConfirmModal: React.FC<Props> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 border border-blue-600/30">
        <h2 className="text-2xl font-bold text-white mb-4">¿Eliminar perfil?</h2>
        <p className="text-gray-300 mb-6">
          Este perfil y todas sus configuraciones se perderán para siempre.
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
