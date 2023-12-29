import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { MdContentCopy } from "react-icons/md";

export default function CreateApiModal({ isOpen, onOpenChange, setApiKeys }) {

    const [generatedApi, setGeneratedApi] = React.useState(false);
    const [input, setInput] = React.useState('API KEY');

    React.useEffect(() => {
        return () => {
            setGeneratedApi(false)
            setInput('API KEY');
        }
    }, [isOpen])


    function generateAPI() {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    const handleCreateAPI = () => {
        const api = generateAPI();
        setInput(api);
        setGeneratedApi(true);
        setApiKeys((pre) => [
            ...pre,
            {
                key: api, 
                name: input
            }
        ]);

    }

    const handleCopyButton = () => {
        navigator.clipboard.writeText(input).then(function () {
            console.log('API Key copied to clipboard');
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
    }


    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="opaque"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className="bg-[#242427] border border-[#44444A] rounded-[10px] min-w-[463px]">
                    {(onClose) => (


                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[16px] text-[#EFEFEF]">
                                Create New Api
                            </ModalHeader>
                            <div className="bg-[#44444A] h-[1px]"></div>
                            <ModalBody>
                                <div>
                                    <div>{!generatedApi ? 'Name' : 'API Key'}</div>
                                    <div className="flex mt-[10px] gap-[5px]">
                                        <input type="text" readOnly={generatedApi} value={input} onChange={(e) => setInput(e.currentTarget.value)} className="text-[#fff] outline-0 px-2 bg-[#2D2D30] border-[#606069] rounded-[0.25rem] py-[3px] border w-full" />
                                        {generatedApi &&
                                            <button className="bg-white text-black px-2 rounded-[0.25rem]" onClick={handleCopyButton}><MdContentCopy /></button>}
                                    </div>
                                </div>


                            </ModalBody>
                            <ModalFooter className="border-t border-[#606069] mt-4">
                                {!generatedApi ?
                                    <button type="button" onClick={handleCreateAPI} className="bg-white text-black rounded-[7px] py-[5px] px-[15px]">
                                        Create Key
                                    </button>
                                    :
                                    <button type="button" onClick={() => onOpenChange(false)} className="bg-white text-black rounded-[7px] py-[5px] px-[15px]">
                                        Close
                                    </button>
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
