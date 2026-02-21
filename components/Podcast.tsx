import React from 'react';
import { MicrophoneIcon, SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, InstagramIcon } from './IconComponents';

const Podcast: React.FC = () => {
    return (
        <section id="podcast" className="animate-fade-in-up scroll-mt-24">
            <div className="text-center mb-12">
                <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Podcast</p>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Prompted Podcast!</h2>
                <p className="text-lg text-surface-400 max-w-2xl mx-auto">
                    Exploring the intersections of identity, culture, technology, and purpose — one thoughtful conversation at a time.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 items-start">
                {/* Player placeholder */}
                <div className="lg:col-span-2 flex flex-col items-center">
                    <div className="w-full bg-surface-900 border border-surface-800 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
                        <div className="w-20 h-20 rounded-2xl bg-brand-600/15 flex items-center justify-center mb-6">
                            <MicrophoneIcon className="h-10 w-10 text-brand-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Podcast Player</h3>
                        <p className="text-surface-500 text-sm">Coming Soon</p>
                    </div>
                    <div className="mt-5 flex items-center gap-5">
                        <a href="#" aria-label="Listen on Spotify" className="text-surface-500 hover:text-green-400 transition-colors"><SpotifyIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Listen on Apple Podcasts" className="text-surface-500 hover:text-purple-400 transition-colors"><ApplePodcastsIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Watch on YouTube" className="text-surface-500 hover:text-red-400 transition-colors"><YouTubeIcon className="h-7 w-7" /></a>
                        <a href="#" aria-label="Follow on Instagram" className="text-surface-500 hover:text-pink-400 transition-colors"><InstagramIcon className="h-7 w-7" /></a>
                    </div>
                </div>

                {/* Episodes */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-white mb-1">Latest Episodes</h3>

                    <div className="bg-surface-900 border border-surface-800 p-5 rounded-xl card-hover">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono font-medium text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded">#01</span>
                            <span className="text-xs text-surface-500">Featured</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">The Genesis of Ideas</h4>
                        <p className="text-surface-400 text-sm leading-relaxed">
                            In our first episode, we dive into the creative process, exploring where innovative ideas come from and how to capture them.
                        </p>
                    </div>

                    <div className="bg-surface-900 border border-surface-800 p-5 rounded-xl card-hover">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono font-medium text-surface-400 bg-surface-800 px-2 py-0.5 rounded">#02</span>
                            <span className="text-xs text-surface-500">Upcoming</span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">Building in Public</h4>
                        <p className="text-surface-400 text-sm leading-relaxed">
                            Why sharing your journey matters — transparency, community, and the unexpected benefits of building out loud.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="w-full text-center bg-brand-600 text-white font-semibold py-3.5 px-8 rounded-xl hover:bg-brand-500 transition-all duration-200 shadow-lg shadow-brand-600/25 mt-2"
                    >
                        Listen on Your Favorite Platform
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Podcast;