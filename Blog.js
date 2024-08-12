import React from 'react';

const BlogPage = () => {
    // Sample blog posts
    const posts = [
        { id: 1, title: 'React Hooks', summary: 'A deep dive into React Hooks and their usage.', date: 'August 10, 2024' },
        { id: 2, title: 'CSS Grid', summary: 'Comparing CSS Grid and Flexbox for modern web layouts.', date: 'August 5, 2024' },
        { id: 3, title: 'JavaScript Promises', summary: 'Understanding the fundamentals of Promises in JavaScript.', date: 'August 12, 2024' },
        { id: 4, title: 'Node.js Event Loop', summary: 'An in-depth look at how the Node.js event loop works.', date: 'August 15, 2024' },
        { id: 5, title: 'Async/Await in JavaScript', summary: 'Simplifying asynchronous code in JavaScript with async/await.', date: 'August 18, 2024' },
        { id: 6, title: 'TypeScript Basics', summary: 'Getting started with TypeScript for safer JavaScript development.', date: 'August 20, 2024' },
        { id: 7, title: 'Web Accessibility', summary: 'Best practices for making your web applications accessible to everyone.', date: 'August 22, 2024' },
        { id: 8, title: 'Progressive Web Apps', summary: 'Building fast and reliable Progressive Web Apps.', date: 'August 25, 2024' },
        { id: 9, title: 'GraphQL vs REST', summary: 'A comparison between GraphQL and REST APIs.', date: 'August 28, 2024' },
        { id: 10, title: 'React Context API', summary: 'Managing state in React with the Context API.', date: 'September 1, 2024' },
        { id: 11, title: 'Webpack Configuration', summary: 'Optimizing your Webpack configuration for production.', date: 'September 3, 2024' },
        { id: 12, title: 'Microservices Architecture', summary: 'Designing scalable applications with microservices.', date: 'September 5, 2024' },
        { id: 13, title: 'Docker for Developers', summary: 'Introduction to Docker and containerization for developers.', date: 'September 8, 2024' },
        { id: 14, title: 'Serverless Computing', summary: 'Exploring serverless architecture and its use cases.', date: 'September 10, 2024' },
        { id: 15, title: 'Machine Learning Basics', summary: 'An introduction to machine learning concepts and techniques.', date: 'September 12, 2024' },
    ];

    return (
        <div className="px-4 py-4 md:px-4 md:py-4 bg-gray-100  mx-auto">

            <header className="text-center mb-12 bg-sky-300">
                <h1 className="text-4xl font-bold text-white-800">Blog</h1>
                <p className="text-lg mt-2 text-white-600">Latest articles and insights</p>
            </header>
            <main>
                <div className="space-y-8">
                    {posts.map(post => (
                        <article 
                            key={post.id} 
                            className="flex items-center border border-gray-200 rounded-lg p6 shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="flex-shrink-0 w-24 h-24 bg-blue-100 rounded-full mr-6"
                            ></div>
                            <div >
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.summary}</p>
                                <span className="text-gray-400 text-sm">{post.date}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
            <footer className="mt-16 text-center text-gray-600">
                <p>© 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default BlogPage;
