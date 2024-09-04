import React from "react";

export const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white p-4">
        <div className="h-6 w-48 bg-gray-700 rounded animate-pulse"></div>
      </header>

      {/* Main content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-16 min-h-screen flex flex-col items-center py-4">
          <div className="h-10 w-10 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
          <div className="h-10 w-10 bg-gray-700 rounded-lg animate-pulse"></div>
        </aside>

        {/* Dashboard content */}
        <main className="flex-1 p-6">
          <div className="h-8 w-64 bg-gray-300 rounded mb-6 animate-pulse"></div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[...Array(5)].map((_, index) => (
              <StatCardSkeleton key={index} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartSkeleton />
            <ChartSkeleton />
          </div>
        </main>
      </div>
    </div>
  );
};

function StatCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="h-4 w-24 bg-gray-300 rounded mb-2 animate-pulse"></div>
      <div className="h-8 w-16 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="h-6 w-48 bg-gray-300 rounded mb-4 animate-pulse"></div>
      <div className="h-64 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}
