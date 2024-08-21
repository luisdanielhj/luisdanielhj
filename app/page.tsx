'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Github, Twitter, Linkedin, Sun, Moon, Instagram} from 'lucide-react'
import {useState, useEffect} from 'react'

// Custom hook for managing theme
const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            // If no saved theme, default to dark
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    return [theme, setTheme]
}

export default function Component() {
    const [theme, setTheme] = useTheme()

    const toggleTheme = () => {
        // @ts-ignore
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <header className="w-full max-w-4xl mx-auto mt-12 text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                        src="/daniel.jpg"
                        alt="Profile Picture"
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <h1 className="text-4xl font-semibold mb-0">Daniel Hernandez</h1>
                <a href={"https://instagram.com/luisdanielhj"}
                   className="text-sm text-muted-foreground underline">@luisdanielhj</a>
                <div className="flex justify-center space-x-4 mb-6 mt-4">
                    <Link href="https://instagram.com/luisdanielhj" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-6 h-6"/>
                    </Link>
                    <Link href="https://twitter.com/luisdanielhj" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/luisdanielhj/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6"/>
                    </Link>
                    <Link href="https://github.com/luisdanielhj" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6"/>
                    </Link>
                </div>
            </header>

            {/* About Me Section */}
            <section className="w-full max-w-2xl mx-auto mt-8 px-6">
                {/*<h2 className="text-2xl font-semibold mb-4">About Me</h2>*/}
                <p className="text-muted-foreground">
                    I am Daniel Hernandez, a visionary with a passion for technology and a drive to push boundaries. As
                    the founder and CEO of UpSky, I’ve spent over five years building a software development company
                    that thrives on innovation and excellence. My journey in tech isn’t just about coding—it&apos;s about
                    transforming ideas into powerful digital experiences and leading a team committed to redefining
                    what’s possible.
                    <br/><br/>
                    As a developer, I merge the art and science of crafting seamless digital experiences. I create
                    solutions that are not only functional but also intuitive and elegant, with every line of code
                    contributing to a larger vision. Whether building robust applications or designing scalable systems,
                    I’m dedicated to delivering excellence in every project.
                    <br/><br/>
                    My interests extend beyond the office. I’m deeply fascinated by AI, the sleek beauty of automotive
                    design, and the potential of new technologies to reshape our future. I believe in the power of
                    connections and the value of a strong network. If you share this vision and are ready to discuss
                    bold ideas, let&apos;s connect.
                </p>
            </section>

            {/* Projects Carousel */}
            <section className="w-full max-w-2xl mx-auto mt-16 px-4">
                <h2 className="text-2xl font-normal mb-4 text-center">My Projects</h2>
                <Carousel className="w-full  mx-auto">
                    <CarouselContent>
                        {[1, 2, 3].map((project) => (
                            <CarouselItem key={project}>
                                <Card>
                                    <CardContent className="flex flex-col items-center p-6">
                                        <Image
                                            src={`/placeholder.svg?height=200&width=350&text=Project+${project}`}
                                            alt={`Project ${project}`}
                                            width={350}
                                            height={200}
                                            className="rounded-lg mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                                        <p className="text-center text-muted-foreground mb-4">
                                            A brief description of Project {project} and its key features.
                                        </p>
                                        <Button asChild>
                                            <Link href={`#project-${project}`}>Learn More</Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="sm:flex hidden"/>
                    <CarouselNext className="sm:flex hidden"/>

                </Carousel>
            </section>

            {/* Blog Section */}
            <section className="w-full max-w-2xl mx-auto mt-16 px-4">
                <h2 className="text-2xl font-normal mb-4 text-center">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    {[1, 2, 3, 4].map((post) => (
                        <Card key={post}>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-normal mb-2">Blog Post {post}</h3>
                                <p className="text-muted-foreground mb-4">
                                    A short excerpt or summary of Blog Post {post} to give readers an idea of its
                                    content.
                                </p>
                                <Button variant="outline" asChild>
                                    <Link href={`#blog-${post}`}>Read More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full mt-12 py-6 bg-muted border-t-2">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="mb-4"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon className="h-6 w-6"/> : <Sun className="h-6 w-6"/>}
                    </Button>
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} Daniel Hernandez. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}