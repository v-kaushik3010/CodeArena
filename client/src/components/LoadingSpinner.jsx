function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">

      <div
        className="
          w-12
          h-12
          border-4
          border-zinc-700
          border-t-green-400
          rounded-full
          animate-spin
        "
      />

    </div>
  );
}

export default LoadingSpinner;