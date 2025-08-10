import React from 'react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, InstagramIcon } from './IconComponents';

const Podcast: React.FC = () => {
    return (
        <section id="podcast" className="animate-fade-in-up scroll-mt-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white">The Prompted Podcast!</h2>
                <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
                    Exploring the intersections of identity, culture, technology, and purpose — one thoughtful conversation at a time.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Player and Social Links */}
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-md bg-base-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center aspect-square">
                        <div className="w-24 h-24 bg-base-300 rounded-md mb-4"></div>
                        <h3 className="text-xl font-bold text-white">Podcast Player</h3>
                        <p className="text-text-secondary">Coming Soon</p>
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                        <a href="#" aria-label="Listen on Spotify" className="text-text-secondary hover:text-white transition-colors"><SpotifyIcon className="h-8 w-8" /></a>
                        <a href="#" aria-label="Listen on Apple Podcasts" className="text-text-secondary hover:text-white transition-colors"><ApplePodcastsIcon className="h-8 w-8" /></a>
                        <a href="#" aria-label="Watch on YouTube" className="text-text-secondary hover:text-white transition-colors"><YouTubeIcon className="h-8 w-8" /></a>
                        <a href="#" aria-label="Follow on Instagram" className="text-text-secondary hover:text-white transition-colors"><InstagramIcon className="h-8 w-8" /></a>
                    </div>
                </div>

                {/* Right Column: Featured Episode & CTA */}
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">Featured Episode</h3>
                    <div className="bg-base-200 p-8 rounded-lg shadow-lg mb-6">
                        <h4 className="text-xl font-bold text-brand-secondary mb-2">#01: The Genesis of Ideas</h4>
                        <p className="text-text-secondary leading-relaxed">
                            In our first episode, we dive into the creative process, exploring where innovative ideas come from and how to capture them. Joined by a special guest from the design world.
                        </p>
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-brand-primary text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-brand-secondary transition-transform transform hover:scale-105 duration-300"
                    >
                        Listen on Your Favorite Platform
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Podcast;