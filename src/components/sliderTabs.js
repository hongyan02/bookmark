import { PlusCircleOutlined } from "@ant-design/icons";
import { useAddInputStore } from "../store/slider/addInputStore";
import InputModal from "./inputModal";
import { useState } from "react";

/**
 * 标签页组件，用于显示分类标签或添加新分类
 * @param {Object} props - 组件属性
 * @param {Array} props.items - 标签页数据数组
 * @returns {JSX.Element} 标签页组件
 */
export default function SliderTabs({ items }) {
    const { isModalOpen, openModal, closeModal } = useAddInputStore();

    return (
        <>
            {items && items.length > 0 ? (
                <div>
                    {items.map((item) => (
                        <div key={item.label}>{item.label}</div>
                    ))}
                </div>
            ) : (
                <div className="w-2/5 h-6 border border-dashed border-gray-400 dark:border-white flex items-center justify-center rounded-md transition-colors duration-300 ease-in-out">
                    <button
                        className="w-full h-full text-gray-400 dark:text-white text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:opacity-80"
                        onClick={openModal}
                    >
                        <PlusCircleOutlined className="mr-1" />
                        添加类别
                    </button>
                </div>
            )}
            {isModalOpen && <InputModal onCancel={closeModal} onConfirm={closeModal} />}
        </>
    );
}
