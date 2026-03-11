import React, { useState } from 'react';
import './Bookshelf.css';

const booksInfo = [
    {
        title: 'The Creative Act',
        spineBg: '#e2e2e2',
        textColor: '#1a1a1a',
        image: '/The Creative Act A Way of Being.jpg',
        isDark: false,
        author: 'Rick Rubin',
        summary: 'A beautiful and generous course of study that illuminates the path of the artist as a road we all can follow. It distills the wisdom gleaned from a lifetime\'s work into a luminous reading experience.',
    },
    {
        title: 'Principles of UX',
        spineBg: '#1e1e1e',
        textColor: '#e2e2e2',
        image: '/Universal Principles of UX.jpg',
        isDark: true,
        author: 'Irene Pereyra',
        summary: '100 timeless strategies to create positive interactions between people and technology. A comprehensive guide offering cross-disciplinary perspectives from human-computer interaction.',
    },

    {
        title: 'Genius Behind Apple',
        spineBg: '#050505',
        textColor: '#e2e2e2',
        image: '/genius behind apple.jpg',
        isDark: true,
        author: 'Leander Kahney',
        summary: 'An intricate look into the mind of Jony Ive, exploring how his secretive design studio and obsessive attention to detail helped turn Apple into the most valuable company in the world.',
    },
    {
        title: 'Kinfolk Entrepreneur',
        spineBg: '#f4f4f4',
        textColor: '#1a1a1a',
        image: '/kinfolk entrepreneur.jpg',
        isDark: false,
        author: 'Nathan Williams',
        summary: 'Visits with over 40 creative entrepreneurs who offer insights into how they\'ve built visionary companies and the meaning they find behind their work.',
    },
    {
        title: 'Grid Systems',
        spineBg: '#f05a28',
        textColor: '#1a1a1a',
        image: '/grid system.jpg',
        isDark: false,
        author: 'Josef Müller-Brockmann',
        summary: 'The definitive word on using grid systems in graphic design. A classic handbook providing a comprehensive framework for structuring two and three-dimensional spaces.',
    },
];

const Bookshelf = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

    /* Reset the hovered index if leaving the container to ensure books collapse */
    return (
        <div className="bookshelf-accordion-scene group relative overflow-hidden bg-black w-full h-full py-20 flex items-center justify-center">

            {/* Dynamic Ambient Red/White Spotlights */}
            <div className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-700 group-hover:opacity-70 z-0">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-600/30 blur-[120px] mix-blend-screen" />
            </div>

            {/* Giant Architectural Typography */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-hidden">
                <h2 className="text-[200px] md:text-[300px] lg:text-[400px] font-heading font-[900] uppercase text-white opacity-[0.03] select-none whitespace-nowrap leading-none tracking-tighter">
                    BOOKS
                </h2>
            </div>

            {/* Books Container */}
            <div className="books-accordion-container relative z-20" onMouseLeave={handleMouseLeave}>
                {booksInfo.map((book, i) => {
                    const isHovered = hoveredIndex === i;

                    return (
                        <div
                            key={i}
                            className={`accordion-book-item ${isHovered ? 'is-expanded' : ''}`}
                            onMouseEnter={() => handleMouseEnter(i)}
                        >
                            {/* Spine */}
                            <div
                                className={`accordion-spine ${book.isDark ? 'dark-text-shadow' : ''}`}
                                style={{ backgroundColor: book.spineBg, color: book.textColor }}
                            >
                                <div className={`accordion-texture ${book.isDark ? 'dark-noise' : 'light-noise'}`}></div>
                                <span className="accordion-spine-text">{book.title}</span>
                            </div>

                            {/* Expanding Content Wrapper */}
                            <div className="accordion-content-wrapper relative">

                                {/* Cover Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <img src={book.image} alt={book.title} className="accordion-cover-image" />
                                    {/* Inner spine shadow to simulate depth */}
                                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
                                    {/* Bottom gradient to make text readable */}
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                                </div>

                                {/* Title & Floating Frost Glass Card on top of cover */}
                                <div className={`absolute inset-0 p-5 flex flex-col justify-end z-10 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 ease-out pointer-events-none`}>

                                    <div className="glass-card pointer-events-auto">
                                        <h3 className="text-white text-lg md:text-xl font-heading font-bold uppercase tracking-tight mb-1">
                                            {book.title}
                                        </h3>
                                        <p className="text-red-500 font-mono text-xs uppercase tracking-wider mb-3">
                                            By {book.author}
                                        </p>
                                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed tracking-wide font-light">
                                            {book.summary}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Bookshelf;
