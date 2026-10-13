import React from 'react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon, InstagramIcon } from './IconComponents';

const Podcast: React.FC = () => {
    return (
        <section id="podcast" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
                <span className="eyebrow text-accent">05</span>
                <span className="eyebrow text-muted">Listen &amp; learn</span>
                <span className="flex-1 h-px bg-rule" />
            </div>

            <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6">
                    <p className="eyebrow text-accent mb-4">Coming soon</p>
                    <h2 className="display text-5xl md:text-6xl">The Prompted <em className="italic text-accent">Podcast</em></h2>
                    <p className="mt-6 text-lg text-ink-2 leading-relaxed max-w-lg">
                        Exploring the intersections of identity, culture, technology and purpose, one thoughtful conversation at a time.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-5 text-muted">
                        <span className="flex items-center gap-4 opacity-60" aria-label="Spotify, Apple Podcasts, YouTube and Instagram, coming soon">
                            <SpotifyIcon className="h-6 w-6" />
                            <ApplePodcastsIcon className="h-6 w-6" />
                            <YouTubeIcon className="h-6 w-6" />
                            <InstagramIcon className="h-6 w-6" />
                        </span>
                    </div>
                </div>

                <article className="lg:col-span-6 bg-paper-2 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="eyebrow bg-ink text-paper px-2 py-1">Coming soon</span>
                        <span className="eyebrow text-muted">First episode</span>
                    </div>
                    <h3 className="font-serif text-3xl mb-3">The Genesis of Ideas</h3>
                    <p className="text-ink-2 leading-relaxed">
                        In the first episode, we'll dive into the creative process, exploring where new ideas come from and how to capture them. With a special guest from the design world.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Podcast;
