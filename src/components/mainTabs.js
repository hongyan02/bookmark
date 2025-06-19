"use client";

import React, { useState, useRef, useEffect } from "react";

/**
 * Tabs组件
 * @param {any} {items}
 * @returns {any}
 */
export default function MainTabs({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabsRef = useRef(null);

    // 计算indicator的样式
    useEffect(() => {
        if (!tabsRef.current) {
            return;
        }
        const currentTab = tabsRef.current.children[activeIndex];
        if (currentTab) {
            setIndicatorStyle({
                width: currentTab.offsetWidth - 20,
                left: currentTab.offsetLeft + 10,
            });
        }
    }, [activeIndex]);

    return (
        <div className="">
            <div className="flex h-10 w-full relative" ref={tabsRef}>
                {items.map((item) => {
                    return (
                        <div
                            key={item.key}
                            onClick={() => setActiveIndex(item.key - 1)}
                            style={{
                                height: "40px",
                                width: "80px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "15px",
                                margin: "0 10px",
                                cursor: "pointer",
                                color: activeIndex === item.key - 1 ? "black" : "gray",
                            }}
                        >
                            {item.label}
                        </div>
                    );
                })}
                <div
                    className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 rounded-md"
                    style={indicatorStyle}
                />
            </div>

            <div className="p-4">{items[activeIndex].children}</div>
        </div>
    );
}
