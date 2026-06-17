export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-50">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-100" />
    </div>
  );
} 