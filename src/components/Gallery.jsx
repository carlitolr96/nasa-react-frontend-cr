import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTrash } from 'react-icons/fi';

function Gallery({ photo, onDelete }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative rounded-xl shadow-md overflow-hidden"
        >
            <button
                onClick={() => onDelete(photo.id)}
                className="cursor-pointer absolute top-2 right-2 bg-white/80 hover:bg-red-500 text-red-600 hover:text-white p-2 rounded-full shadow-md transition duration-300"
            >
                <FiTrash className="w-4 h-4" />
            </button>

            <div>
                <img
                    src={photo.img_src}
                    alt={photo.rover.name}
                    className="w-full object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide font-[Poppins]">
                                {photo.rover.status}
                            </span>
                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                Fecha &bull; {photo.earth_date}
                            </div>
                        </div>

                        <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate font-[Poppins]">
                            {photo.rover.name}
                        </h4>

                        <div className="mt-4">
                            <span className="text-black-200 text-md font-semibold font-[Poppins]">Camara</span>
                            <br />
                            <span className="text-sm text-gray-600">{photo.camera.full_name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Gallery;