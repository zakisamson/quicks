import React from 'react'
import QuickButton from '../atoms/QuickButton'

function Slide1() {
    return (
        <div>
            <QuickButton size="big" className="bg-[#2F80ED]">
                {/* default */}
                <svg width="18" height="32" viewBox="0 0 18 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4427 0.335929C13.3618 0.948634 13.6101 2.19037 12.9974 3.10943L5.73704 14H16C16.7376 14 17.4153 14.406 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0285 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8097 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.5941 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890629C10.2819 -0.0284284 11.5237 -0.276776 12.4427 0.335929Z" fill="white" />
                </svg>
            </QuickButton>
            <QuickButton size="big" status="active" className="bg-[#8785FF]">
                {/* inbox active*/}
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0371 0.926147H1.66671C0.974114 0.926147 0.407448 1.49281 0.407448 2.18541V19.815L5.44448 14.778H18.0371C18.7297 14.778 19.2963 14.2113 19.2963 13.5187V2.18541C19.2963 1.49281 18.7297 0.926147 18.0371 0.926147ZM16.7778 3.44458V12.2594H4.39931L3.65635 13.0024L2.92598 13.7327V3.44458H16.7778ZM21.8149 5.96321H24.3334C25.026 5.96321 25.5926 6.52987 25.5926 7.22247V26.1114L20.5556 21.0743H6.70374C6.01115 21.0743 5.44448 20.5077 5.44448 19.8151V17.2965H21.8149V5.96321Z" fill="white" />
                </svg>
            </QuickButton>
            <QuickButton size="small" status="inactive">
                {/* inbox inactive */}
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z" fill="#8885FF" />
                </svg>
            </QuickButton>
            <QuickButton size="big" status="active" className="bg-[#F8B76B]">
                {/* task active */}
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11117 0.66626H23.1112C24.3334 0.66626 25.3334 1.66626 25.3334 2.88848V17.3329C25.3334 18.5551 24.3334 19.5551 23.1112 19.5551H3.11117C1.88895 19.5551 0.888947 18.5551 0.888947 17.3329V2.88848C0.888947 1.66626 1.88895 0.66626 3.11117 0.66626ZM3.11117 2.88848V17.3329H12.0001V2.88848H3.11117ZM23.1112 17.3329H14.2223V2.88848H23.1112V17.3329ZM22.0001 6.77737H15.3334V8.44404H22.0001V6.77737ZM15.3334 9.55515H22.0001V11.2218H15.3334V9.55515ZM22.0001 12.3329H15.3334V13.9996H22.0001V12.3329Z" fill="white" />
                </svg>

            </QuickButton>
            <QuickButton size="small" status="inactive">
                {/* task inactive */}
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11114 0.666687H23.1111C24.3334 0.666687 25.3334 1.66669 25.3334 2.88891V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88891C0.888916 1.66669 1.88892 0.666687 3.11114 0.666687ZM3.11114 2.88891V17.3334H12V2.88891H3.11114ZM23.1111 17.3334H14.2222V2.88891H23.1111V17.3334ZM22 6.7778H15.3334V8.44446H22V6.7778ZM15.3334 9.55558H22V11.2222H15.3334V9.55558ZM22 12.3334H15.3334V14H22V12.3334Z" fill="#F8B76B" />
                </svg>
            </QuickButton>
        </div>
    )
}

export default Slide1