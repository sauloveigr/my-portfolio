'use client';

import {FaLocationArrow} from 'react-icons/fa6';

import {projects} from '@/data';
import {PinContainer} from './ui/Pin';

const RecentProjects = () => {
    return (
        <section id="projects" className="py-20">
            <h1 className="heading">
                A small selection of{' '}
                <span className="text-purple">my projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item, index) => (
                    <a
                        className="lg:min-h-[38.5rem] h-[31rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={index}
                        href={item.link}
                        target="_blank"
                    >
                        <PinContainer title={item.title}>
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-dark-blue"
                                >
                                    <img
                                        src="/bg.png"
                                        alt="bgimg"
                                        className="overflow-hidden"
                                    />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-3 left-1/2 -translate-x-1/2 w-[95%] max-h-[80%] object-contain object-bottom rounded-3xl"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:font-normal font-light text-sm leading-relaxed line-clamp-6 min-h-[7.125rem] text-white-100 my-[1vh]"
                            >
                                {item.description}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow
                                        className="ms-3 text-purple"
                                    />
                                </div>
                            </div>
                        </PinContainer>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default RecentProjects;
