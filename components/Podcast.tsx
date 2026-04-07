import React from 'react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, InstagramIcon } from './IconComponents';

const Podcast: React.FC = () => {
    return (
        <section id="podcast" className="animate-fade-in-up scroll-mt-20">
            <div className="text-center mb-12">
                <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-3">Listen & Learn</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Prompted Podcast!</h2>
                <p className="text-lg text-text-secondary mt-4 max-w-3xl mx-auto">
                    Exploring the intersections of identity, culture, technology, and purpose — one thoughtful conversation at a time.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Column: Player and Social Links */}
                <div className="flex flex-col items-center">
                    <div className="w-full bg-base-200 rounded-xl border border-base-400/30 p-8 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl mb-5 flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Podcast Player</h3>
                        <p className="text-text-muted text-sm">Coming Soon</p>
                    </div>
                    <div className="mt-5 flex items-center gap-5">
                        <a href="#" aria-label="Listen on Spotify" className="text-text-muted hover:text-brand-accent transition-colors duration-200"><SpotifyIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Listen on Apple Podcasts" className="text-text-muted hover:text-brand-accent transition-colors duration-200"><ApplePodcastsIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Watch on YouTube" className="text-text-muted hover:text-brand-accent transition-colors duration-200"><YouTubeIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Follow on Instagram" className="text-text-muted hover:text-brand-accent transition-colors duration-200"><InstagramIcon className="h-7 w-7" /></a>
                    </div>
                </div>

                {/* Right Column: Featured Episode & CTA */}
                <div className="flex flex-col gap-5">
                    <div className="card-glow bg-base-200 rounded-xl p-7 border border-base-400/20">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="bg-brand-accent/15 text-brand-accent text-xs font-bold px-2.5 py-0.5 rounded-full border border-brand-accent/25">LATEST</span>
                            <span className="text-text-muted text-xs">Episode #01</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">The Genesis of Ideas</h4>
                        <p className="text-text-secondary leading-relaxed text-sm">
                            In our first episode, we dive into the creative process, exploring where innovative ideas come from and how to capture them. Joined by a special guest from the design world.
                        </p>
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-brand-primary text-white font-bold py-4 px-8 rounded-xl text-base hover:bg-brand-secondary transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/25 hover:-translate-y-0.5"
                    >
                        Listen on Your Favorite Platform
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Podcast;
