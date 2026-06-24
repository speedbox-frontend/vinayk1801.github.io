export const metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <a href="/" className="btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}