'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sun, Moon, Github, Twitter, Linkedin } from 'lucide-react'

// Custom hook for managing theme (same as in main page)
const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    return [theme, setTheme] as const
}

export default function BlogPost() {
    const { slug } = useParams()
    const [theme, setTheme] = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    // Force dark mode on initial render
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    // Mock blog post data (replace with actual data fetching logic)
    const post = {
        title: `Blog Post: ${slug}`,
        date: 'May 1, 2023',
        content: 'This is the content of the blog post. Replace this with your actual blog post content.',
        author: 'Your Name'
    }

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Header */}
            <header className="w-full py-6 bg-muted">
                <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">Your Name</Link>
                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-4xl mx-auto mt-12 px-4">
                <Button variant="ghost" asChild className="mb-6">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>

                <Card>
                    <CardContent className="p-6">
                        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                        <p className="text-muted-foreground mb-4">Published on {post.date} by {post.author}</p>
                        <div className="prose dark:prose-invert max-w-none">
                            {post.content}
                        </div>
                    </CardContent>
                </Card>
            </main>

            {/* Footer */}
            <footer className="w-full mt-12 py-6 bg-muted">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center px-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="mb-4"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                    </Button>
                    <p className="text-muted-foreground">
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}