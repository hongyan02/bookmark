"use client";

import { useState, useEffect } from "react";
import SliderTabs from "./sliderTabs";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

/**
 * 侧边栏组件，包含用户头像、欢迎语和主题切换功能
 * @param {Object} props - 组件属性
 * @param {string} props.avatar - 用户头像URL
 * @param {string} props.welcome - 欢迎语文本
 * @param {string} props.userName - 用户名
 * @returns {JSX.Element} 侧边栏组件
 */
export default function Slider({ avatar, welcome, userName }) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <div className="w-1/4 h-full flex flex-col justify-between">
            {/* 顶部区域--头像、欢迎语 */}
            <div className="pt-16 pl-16">
                <div className="rounded-full overflow-hidden w-[60px] h-[60px] border-2 border-white shadow-lg transition-colors duration-300 ease-in-out">
                    <img className="w-full h-full object-cover" src={avatar} alt="avatar" />
                </div>
                <div className="h-20 w-full pt-4">
                    <h2 className="h-full w-full text-black dark:text-white transition-colors duration-300 ease-in-out">
                        {welcome},<strong>{userName}</strong>
                    </h2>
                </div>
            </div>

            {/* 中间区域--菜单 */}
            <div className="pl-16 w-full">
                <SliderTabs />
            </div>

            {/* 底部区域--功能按钮 */}
            <div className="w-full h-full pl-16 flex items-end pb-8">
                <button
                    className="w-20 h-20 text-3xl hover:opacity-80 flex items-center justify-center transition-colors duration-300 ease-in-out"
                    onClick={() => setDark(!dark)}
                >
                    {dark ? (
                        <MoonOutlined
                            className="text-white"
                            style={{ fontSize: "2rem", color: "white" }}
                        />
                    ) : (
                        <SunOutlined
                            className="text-black"
                            style={{ fontSize: "2rem", color: "black" }}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
