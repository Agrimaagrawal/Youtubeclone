import React,{useContext}from 'react';
import { useNavigate } from 'react-router-dom';
import {Context} from '../context/Contextapi';
import LeftNavMenuItem from '../components/LeftNavMenuItem';
import { categories } from '../utils/constant';


const LeftNav = () => {
  const { selectCategories, setselectCategories, mobileMenu } =
        useContext(Context);

   const navigate=useNavigate();     

  const clickHandler=(name,type)=>{
    switch(type){
      case "category":
        return setselectCategories(name);
        case "home":
          return setselectCategories(name);
          case "menu":
            return false;
          default:
            break;
    }

  }

  return (
    <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
                mobileMenu ? "translate-x-2 overflow-y-hidden" : ""
            }`}>
              <div className='flex px-5 flex-col'>
                {
                  categories.map((item)=>{
                    return (
                      <>
                      <LeftNavMenuItem 
                         text={item.type==='home'?"Home":item.name}
                         icon={item.icon}
                         action={()=>{clickHandler(item.name ,item.type);
                        navigate('/')}}
                         className={`${selectCategories===item.name? "bg-white/[0.15]"
                         : ""}`}
                               
                        />
                        {item.divider&&
                                (<hr className='my-5 border-white/[0.2]'/>)
                            
                        }

                      </>
                    )

                  })
                }

              </div>
        </div>
  )
}

export default LeftNav
