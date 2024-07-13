import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { sideBarData } from '../data';
import SidebarImg from './../assets/images/sidebar.png';
import { Arrow, Dropdown } from '../assets/icons';
const Sidebar = () => {
    const [selectedRoute, setSelectedRoute] = useState<string>('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const toggleDropdown = (id: any) => {
      setOpenDropdown(openDropdown === id ? null : id);
    };
  return (
    <aside className=' py-3 lg:py-6 text-grey flex flex-col justify-between h-full shadow-sm'>
      <div>
        <div className='bg-orange rounded-lg py-3 px-2 mx-4 flex justify-between items-center'>
        <p className='text-white font-bold text-sm leading-4 w-2/4'>General Dashboard</p>
        <img src={Arrow} alt='arrow'/>
      </div>
      <div className='mt-8'>
      

        {sideBarData.map((main) => (
           
            <Link to={main.route} key={main?.id}>
              {main?.children ? (
                <>
                  <div
                    onClick={() => toggleDropdown(main.id)}
                    className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                      main.route === selectedRoute ? 'border-l-4 border-l-orange' : ''
                    } flex gap-8 cursor-pointer p-4 items-center ${
                      main.route === selectedRoute ? 'bg-hoverOrange text-grey' : ''
                    }`}
                  >
                    <img src={main.icon} alt={main.title} />
                    <span className="text-gray text-[14px]">{main.title}</span>
                    <img src={Dropdown} alt='dropdown'/>
                  
                  </div>
                  {openDropdown === main?.id && (
                    <div>
                      {main?.children?.map((children) => (
                        <div
                          key={children?.id}
                          onClick={() => setSelectedRoute(children.route)}
                          className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                            children.route === selectedRoute ? 'border-l-4 border-l-orange' : ''
                          } flex gap-8 cursor-pointer p-4 items-center ${
                            children.route === selectedRoute ? 'bg-hoverOrange text-grey' : ''
                          }`}
                        >
                          <div></div>
                          <a href={children.route} className="text-gray text-[14px]">
                            {children.title}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  onClick={() => setSelectedRoute(main.route)}
                  className={`hover:bg-orange hover:border-l-4 hover:border-l-orange ${
                    main.route === selectedRoute ? 'border-l-4 border-l-orange' : ''
                  } flex gap-8 cursor-pointer p-4 items-center ${
                    main.route === selectedRoute ? 'bg-hoverOrange text-grey' : ''
                  }`}
                >
                  <img src={main.icon} alt={main.title} />
                  <a href={main.route} className="text-gray text-[14px]">
                    {main.title}
                  </a>
                </div>
              )}
            </Link>
        ))}
      </div></div>
<div >
    <img src={SidebarImg} alt='flowery'/>
</div>
    
    </aside> 

  )
}

export default Sidebar
