import Container from "@/common/components/elements/Container";

const ErrorPage = () => {
  return (
    <Container>
      <div className="text-center py-16 my-20">
        <img src="/Images/man-repairing-dark.png" alt="404" className="w-xs animate-pulse mx-auto" />
        <h1 className="pt-10 text-2xl font-semibold align-text-bottom">404 - Not Found | The page you are looking for does not exist.</h1>
        <div className="flex justify-center gap-3">
          <p className="text-sm underline pt-2">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <a href="/" className="mt-1.5 underline text-blue-600">
            Back to Home Page
          </a>
        </div>
      </div>
    </Container>
  )
};

export default ErrorPage;