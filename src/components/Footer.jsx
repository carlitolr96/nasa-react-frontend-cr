import { FaGithub, FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Footer() {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.8, 1], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

    return (
        <motion.footer
            style={{ y, opacity }}
            className="bg-white fixed bottom-0 left-0 w-full z-50"
        >
            <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 pointer-events-auto">
                <div className="mx-auto max-w-md">
                    <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl font-[Poppins]">
                        ¿Quieres conocer más de mi como desarrollador?
                    </strong>
                </div>
                <div className="flex pb-5 px-3 m-auto pt-5 text-sm flex-col max-w-screen-lg items-center">
                    <div className="mt-2 flex-row flex">
                        <a href="https://github.com/carlitolr96" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-gray-700 hover:text-[#24292e]" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.behance.net/Carloslr" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                            <FaBehanceSquare className="text-2xl text-gray-700 hover:text-[#053eff]" />
                            <span className="sr-only">Behance</span>
                        </a>
                        <a href="https://www.linkedin.com/in/carlosrivera96/" className="w-6 mx-1" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-gray-700 hover:text-[#0e76a8]" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-300 pt-8">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        © {new Date().getFullYear()} NASA Gallery. Todos los derechos reservados.
                        <br />
                        Created with
                        <a
                            href="https://vite.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 underline transition hover:text-gray-700/75"
                        >
                            ViteJs
                        </a>
                        <span> and </span>
                        <a
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 underline transition hover:text-gray-700/75"
                        >
                            Tailwind
                        </a>.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;