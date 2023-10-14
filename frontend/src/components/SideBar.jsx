import React from 'react'

const SideBar = () => {
  return (
    <div className='w-[20%] bg-blue-200 sidebar'>
        <div className="content-sidebar w-[100%] h-[100%] p-3 flex flex-col items-center">
            <section className="profile-image rounded-full w-[80%] h-[28%] bg-white">

            </section>
            <section className='h-[50%]'>
                <section className='skills'>
                    <div>HTML5</div>
                    <div>CSS3</div>
                    <div>Javascript</div>
                    <div>NodeJS</div>
                    <div>ReactJS</div>
                    <div>Python</div>
                    <div>Flask</div>
                </section>
            </section>
        </div>
    </div>
  )
}

export default SideBar