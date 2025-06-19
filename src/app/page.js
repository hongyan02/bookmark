import MainTabs from "@/components/mainTabs";
import { PlusOutlined } from "@ant-design/icons";

export default function Home() {
    return (
        <div>
            <div className="w-full h-full flex flex-col justify-between">
                {/* 顶部区域 */}
                <div className="w-full h-full flex flex-row items-center justify-between">
                    <h2 className="w-1/4 h-full pt-16 text-xl font-bold text-black dark:text-white">
                        Slider Tab
                    </h2>
                    <div className="w-1/4 h-full pt-16 flex flex-col justify-end">
                        <button className="w-16 h-16 text-3xl bg-black dark:bg-white text-white dark:text-black rounded-md flex items-center justify-center">
                            <PlusOutlined />
                        </button>
                    </div>
                </div>

                {/* 中间区域 */}
                <div className="w-full h-full pt-4">
                    <MainTabs
                        items={[
                            { key: "1", label: "all", children: <div>1</div> },
                            { key: "2", label: "video", children: <div>2</div> },
                            { key: "3", label: "audio", children: <div>3</div> },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
