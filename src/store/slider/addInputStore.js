import { create } from "zustand";

export const useAddInputStore = create((set) => ({
    // 值管理
    inputValue: "",
    setInputValue: (inputValue) => set({ inputValue }),
    // 模态框管理
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
}));
