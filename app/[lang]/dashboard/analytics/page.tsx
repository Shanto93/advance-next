import Link from "next/link";

const AnalyticsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Data Fetching Types</h2>

      <div className="mt-8 flex gap-8">
        <Link href="/dashboard/analytics/serial">
          <div className="">
            <h1 className="px-3 py-2 border-2 rounded-2xl hover:bg-gray-200">
              Serial Data Fetching
            </h1>
          </div>
        </Link>
        <Link href="/dashboard/analytics/parallel">
          <div>
            <h1 className="px-3 py-2 border-2 rounded-2xl hover:bg-gray-200">
              Parallel Data fetching
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalyticsPage;
