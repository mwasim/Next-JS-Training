"use client"; //error.tsx must be a client component

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
