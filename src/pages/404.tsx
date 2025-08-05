import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <Link href="/" className="text-theme hover:text-theme-dark underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;