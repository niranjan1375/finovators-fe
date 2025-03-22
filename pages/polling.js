import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRequest } from "finovators/commons/hooks/useRequest";
console.log(' useRequest:', useRequest);


const PollingPage = () => {
  const router = useRouter();
  const [{ data,  error }, refetch] = useRequest(
    { url: "/analysis/status" },
    { manual: true }
  );
  const [polling, setPolling] = useState(true);

  useEffect(() => {
    if (!polling) return;

    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, [polling, refetch]);

  useEffect(() => {
    if (data?.status === "completed") {
      setPolling(false);
      router.push("/cohorts");
    }
  }, [data, router]);

  if (error) return <p>Error fetching status...</p>;

  return (
    <div className="loading-container">
      <p>Analyzing files... Please wait.</p>
    </div>
  );
};

export default PollingPage;
