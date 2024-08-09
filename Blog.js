import React from 'react';

const BlogPage = () => {
    // Sample blog posts
    const posts = [
        { id: 1, title: ' React Hooks', summary: 'A deep dive into React Hooks and their usage.', date: 'August 10, 2024' },
        { id: 2, title: 'CSS Grid ', summary: 'Comparing CSS Grid and Flexbox for modern web layouts.', date: 'August 5, 2024' },
        { id: 3, title: ' React Hooks', summary: 'A deep dive into React Hooks and their usage.', date: 'August 10, 2024' },
        { id: 4, title: 'CSS Grid ', summary: 'Comparing CSS Grid and Flexbox for modern web layouts.', date: 'August 5, 2024' },
        { id: 5, title: ' React Hooks', summary: 'A deep dive into React Hooks and their usage.', date: 'August 10, 2024' },
        { id: 6, title: 'CSS Grid ', summary: 'Comparing CSS Grid and Flexbox for modern web layouts.', date: 'August 5, 2024' },
        { id: 7, title: ' React Hooks', summary: 'A deep dive into React Hooks and their usage.', date: 'August 10, 2024' },
        { id: 8, title: 'CSS Grid ', summary: 'Comparing CSS Grid and Flexbox for modern web layouts.', date: 'August 5, 2024' },
        // Add more posts here
    ];

    return (
        <div className="px-4 py-8 md:px-8 md:py-16">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-lg mt-2">Latest articles </p>
            </header>
            <main>
                <div className="grid gap-6">
                    {posts.map(post => (
                        <article key={post.id} className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
                            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.summary}</p>
                            <span className="text-gray-400 text-sm">{post.date}</span>
                            {/* <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 block">Read More</a> */}
                        </article>
                    ))}
                </div>
            </main>
            <footer className="mt-8 text-center text-gray-600">
                <p>© 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BlogPage;

