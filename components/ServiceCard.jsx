'use client'

export const ServiceCard = ({ name, title, element, textStyles, style2, style }) => {

  return (
        <div className={`tilting-card-wrapper ${style} w-[80vw] md:!w-[35vw] lg:w-[30vw] h-[10rem] z-1000 !transition-all !duration-1000 dark:!transition-all dark:!duration-1000`}>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className="mouse-position-tracker"></div>
            <div className={`tilting-card-body  px-6 py-6 md:px-6 group glass [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.3))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] !transition-all !duration-1000 dark:!transition-all dark:!duration-1000 ${textStyles} !items-start !justify-center flex !flex-row overflow-hidden`}>
                <div>
                    <div>{element}</div>
                </div>
                <div className={`${style2} flex flex-col py-0 my-0`}>
                    <h4 className='text-md md:text-lg text-black dark:text-white font-bold'>{name}</h4>
                    <span className='text-sm md:text-sm text-black dark:text-white font-light text-start'>{title}</span>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-0 group-hover:bg-[linear-gradient(rgba(255,255,255,0.7)_20%,transparent_80%)]" />
        </div>
  );
};