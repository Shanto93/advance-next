const ParallelRouteLayout = ({
  children,
  assignments,
  notifications,
  quiz,
}: {
  children: React.ReactNode;
  assignments: React.ReactNode;
  notifications: React.ReactNode;
  quiz: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="space-y-5">
          {assignments}
          {quiz}
        </div>
        {notifications}
      </div>
    </>
  );
};

export default ParallelRouteLayout;
