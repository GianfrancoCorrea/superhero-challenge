const LoadingPulse: React.FC = () => {
    return (
      <div className="loading-pulse border shadow rounded-lg p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4 place-content-center">
          <div className="rounded-full bg-slate-700 h-10 w-10" />
        </div>
      </div>
    );
  };
  
  export default LoadingPulse;
