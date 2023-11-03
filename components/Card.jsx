'use client'

export const Card = ({ name, title, element, textStyles, style2, style }) => {

  return (
    <div className={`tilting-card-wrapper ${style} w-[10rem] h-[10rem] !transition-all !duration-1000 dark:!transition-all dark:!duration-1000`}>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className={`tilting-card-body glass px-6 py-10 md:px-9 md:py-7 gap-3 group [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.3))] dark:[background:linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0))] !transition-all !duration-1000 dark:!transition-all dark:!duration-1000 next-link dark:next-link ${textStyles}`}>
            <div>
                <div>{element}</div>
                <h4 className='text-md md:text-lg text-black dark:text-white font-bold'>{name}</h4>
            </div>
                <span className='text-xs md:text-sm text-black dark:text-white font-medium'>{title}</span>
        </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[linear-gradient(rgba(255,255,255,0.7)_20%,transparent_80%)]" />
    </div>
  );
};

{/*<div className="flex flex-col [perspective:800px]">
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
          console.log(boundingRef.current);
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className={`group relative transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] ${textStyles}`}
      >
        <div className="pt-4">
        <BadgeIcon className='icon text-4xl p-1'/>
          <p className="text-3xl font-bold">{name}Experience</p>
          <p className="text-xl">{title}Fresher</p>
        </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
      </div>
    </div>*/}