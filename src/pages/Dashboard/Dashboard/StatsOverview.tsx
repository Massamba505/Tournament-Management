import { Trophy } from "lucide-react";

const StatsOverview = () => {
  const stats: any = [
    {
      title: "Active Tournaments",
      value: "12",
      change: "+2 from last month",
      icon: Trophy,
      color: "bg-blue-50 text-blue-600",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="flex w-full justify-between pr-15 sm:pr-0 flex-wrap gap-6">
      {stats.map((stat: any, index: any) => (
        <div
          key={index}
          className="bg-white flex-1 min-w-56 p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
            </div>
            <div className={`p-3 rounded-full ${stat.iconBg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color.split(" ")[1]}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
