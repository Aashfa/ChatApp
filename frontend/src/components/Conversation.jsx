import React from 'react'
import useConversation from '../zustand/useConversation';


const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""} border-b border-slate-500`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img
                            src={conversation.profilePic}
                            alt="user avatar"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">{conversation.fullName}</p>
                        <span className="text-xl">...</span>
                    </div>
                </div>
            </div>
            {lastIdx && <div className="divider my-6 py-8 h-1" />}

        </>
    );
}

export default Conversation