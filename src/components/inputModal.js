import { useAddInputStore } from "../store/slider/addInputStore";

export default function InputModal({ onCancel, onConfirm }) {
    const { inputValue, setInputValue } = useAddInputStore();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-white dark:bg-black">
            {/* 遮罩层 */}
            <div className="w-full h-full fixed inset-0 z-50 bg-black/40 flex flex-col items-center justify-center">
                {/* 弹窗 */}
                <div className="w-1/4 h-1/4 rounded-md  bg-gray-200 dark:bg-white">
                    <h2 className="pl-4 pt-4 text-xl font-bold text-black dark:text-white">
                        添加类别
                    </h2>
                    <div className="flex flex-row items-center justify-center">
                        <input
                            className="w-5/6 h-10 mb-4 mt-4 border border-stone-400 focus:ring-2 focus:ring-stone-500  dark:border-gray-600 rounded-md"
                            id="categoryInput"
                            type="text"
                            placeholder="请输入"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row items-center justify-around">
                        <button
                            className="w-1/3 h-10 bg-stone-400 dark:bg-white text-white dark:text-black rounded-md"
                            onClick={onCancel}
                        >
                            取消
                        </button>
                        <button
                            className="w-1/3 h-10 bg-stone-400 dark:bg-white text-white dark:text-black rounded-md"
                            onClick={() => {
                                if (inputValue.trim() === "") {
                                    return;
                                }
                                onConfirm();
                            }}
                        >
                            确定
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
