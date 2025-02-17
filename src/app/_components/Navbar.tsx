"use client"
import { FileUser, Mails, Menu, X } from 'lucide-react'
import { useState, Fragment } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuVariants = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    }

    const listItemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: 20,
            transition: {
                delay: i * 0.05,
                duration: 0.2,
                ease: "easeIn"
            }
        })
    }

    const navItems = [
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/ramon-garcia-jr/' },
        { text: 'Github', href: 'https://github.com/RamonGarciaJr956' },
        { text: 'Projects', href: '/#projects' },
        { text: 'About Me', href: '/#aboutMe' },
        { text: 'Certifications', href: '/#certifications' },
        { text: 'Resume', href: '/Ramon Garcia Jr - Resume.pdf' }
    ]

    const textExpandVariants = {
        hover: {
            width: "auto",
            opacity: 1,
            marginLeft: "0.5rem",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        initial: {
            width: 0,
            opacity: 0,
        }
    }

    const linkVariants = {
        hover: {
            color: "#FFFFFF",
            transition: {
                duration: 0.2
            }
        }
    }

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault()
            const targetId = href.replace('/#', '')
            const element = document.getElementById(targetId)
            
            if (element) {
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - 100
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
                
                setMenuOpen(false)
                window.history.pushState({}, '', href)
            }
        }
    }

    return (
        <>
            <div className='hidden lg:flex flex-row justify-between items-center w-full p-4 font-GeneralSans fixed top-0 z-50'>
                <motion.div
                    className="backdrop-blur-sm bg-white/10 rounded-full p-2 flex justify-center items-center"
                    whileHover="hover"
                    initial="initial"
                >
                    <Link href={`mailto:ramon@ramongarciajr.tech`} className="flex items-center">
                        <motion.div variants={linkVariants}>
                            <Mails className="text-neutral-300" />
                        </motion.div>
                        <motion.p
                            className="text-neutral-300 font-light"
                            variants={textExpandVariants}
                            style={{ overflow: 'hidden' }}
                        >
                            ramon@ramongarciajr.tech
                        </motion.p>
                    </Link>
                </motion.div>

                <motion.div
                    className="backdrop-blur-sm bg-white/10 w-fit rounded-full py-1.5 px-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <ul className='flex text-neutral-300 gap-3 text-lg'>
                        {navItems.map((item, index) => (
                            <Fragment key={item.text}>
                                <motion.li
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                >
                                    <motion.div whileHover={{ scale: 1.05 }}>
                                        <Link
                                            href={item.href}
                                            onClick={(e) => handleScroll(e, item.href)}
                                        >
                                            <motion.span
                                                className="text-neutral-300"
                                                whileHover={{ color: "#FFFFFF" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.text}
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                </motion.li>
                                {index < navItems.length - 1 && (
                                    <motion.li
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.7 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        /
                                    </motion.li>
                                )}
                            </Fragment>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="backdrop-blur-sm bg-white/10 rounded-full p-2 flex justify-center items-center"
                    whileHover="hover"
                    initial="initial"
                >
                    <Link href="/Ramon Garcia Jr - Resume.pdf" className="flex items-center">
                        <motion.div variants={linkVariants}>
                            <FileUser className="text-neutral-300" />
                        </motion.div>
                        <motion.p
                            className="text-neutral-300 font-light"
                            variants={textExpandVariants}
                            style={{ overflow: 'hidden' }}
                        >
                            Resume
                        </motion.p>
                    </Link>
                </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className='lg:hidden flex flex-row justify-between items-center w-full p-4 font-GeneralSans absolute top-0 z-50'>
                <Link
                    href={`mailto:ramon@ramongarciajr.tech`}
                    className="backdrop-blur-sm bg-white/10 rounded-full p-2 flex justify-center items-center group z-50"
                >
                    <Mails className="text-neutral-300 group-hover:text-white" />
                    <p className="text-neutral-300 font-light w-0 overflow-hidden transition-all duration-300 group-hover:w-[205px] group-hover:pl-2">
                        ramon@ramongarciajr.tech
                    </p>
                </Link>

                <motion.button
                    onClick={() => setMenuOpen(prev => !prev)}
                    className="backdrop-blur-sm bg-white/10 rounded-full p-2 flex justify-center items-center group z-50"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: menuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {menuOpen ? (
                            <X className='text-neutral-300' />
                        ) : (
                            <Menu className='text-neutral-300' />
                        )}
                    </motion.div>
                </motion.button>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="backdrop-blur-lg bg-black/10 absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center"
                        >
                            <motion.ul className='flex flex-col text-neutral-300 gap-3 text-xl'>
                                {navItems.map((item, i) => (
                                    <motion.li
                                        key={item.text}
                                        custom={i}
                                        variants={listItemVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <Link
                                            href={item.href}
                                            className='hover:text-white transition-colors duration-200'
                                            onClick={(e) => {
                                                handleScroll(e, item.href)
                                            }}
                                        >
                                            {item.text}
                                        </Link>
                                        <hr />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}