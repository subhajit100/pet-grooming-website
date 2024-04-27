import React from 'react'

const CallOptions = () => {
  return (
    <>
      {/* Image for phone */}
      <img
        src="/images/phone_icon.png"
        alt="Phone"
        className="fixed bottom-5 left-3 z-20 h-14 w-14 cursor-pointer"
      />
      {/* Image for WhatsApp */}
      <img
        src="/images/whats_app_icon.png"
        alt="WhatsApp"
        className="fixed bottom-3 right-1 z-20 h-20 w-20 cursor-pointer"
      />
    </>
  )
}

export default CallOptions
