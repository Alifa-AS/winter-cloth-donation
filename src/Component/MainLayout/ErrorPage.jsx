import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="font-bold text-center text-4xl text-red-500">ERROR 404</h2>
            <p className="text-lg text-gray-600 mt-4">The page you are looking for does not exist.</p>
            <a
                href="/"
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Go Back to Home
            </a>
        </div>
    );
};

export default ErrorPage;