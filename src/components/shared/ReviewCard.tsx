import React from "react";
import type { Review } from "../../types/shared/customerreview.types";


export const ReviewCard: React.FC<Review> = ({
    title,
    content,
    name,
    date,
    avatar,
}) => (
    <div className="border rounded-xl border-[#28707b] text-[#28707b] px-6 py-6 max-w-[390px] min-w-[300px] flex flex-col justify-between bg-white">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-body mt-2">{content}</p>
        <div className="mt-4">
            <div className="h-[1px] bg-[#28707b] my-3"></div>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-white">
                        {avatar && <img src={avatar} alt={name} />}
                    </div>
                    <span className="text-submenu font-bold uppercase">{name}</span>
                </div>
                <div className="rounded-full bg-[#28707b] text-white px-2 text-xs">
                    {date}
                </div>
            </div>
        </div>
    </div>
);
