import React from "react";

export default function FeatureCard(props:{
    title:string;
    description:string;
    children?:React.ReactNode;
})
{
    const {title,description,children}=props;
    return(
        <div className="bg-neutral-600/40 border border-white/10 p-6 rounded-3xl">
            <div className="aspect-video">
                {children}
            </div>
            <div>
                <h3 className="text-3xl mt-6 text-secondary font-semibold">{title}</h3>
                <p className="text-white/60 mt-2">{description}</p>
            </div>
        </div>
    )
}