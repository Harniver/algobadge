import { Category } from "components/category/Category";
import { Header } from "components/header/Header";
import { Loading } from "components/loading/Loading";
import { Login } from "components/login/Login";
import Tree from "components/tree/Tree";
import { useLoggedUser } from "lib/auth";
import { computeCategoryBadges } from "lib/badges";
import { getTaskGraph, TaskGraph } from "lib/taskgraph";
import { getUserInfo, UserInfo } from "lib/training-api";
import { useEffect, useState } from "react";

export default function Home({ taskGraph }: { taskGraph: TaskGraph }) {
  const user = useLoggedUser();
  const [userInfo, setUserInfo] = useState<UserInfo | null | undefined>(
    undefined
  );
  const [selectedNode, setSelectedNode] = useState<string>(
    taskGraph.nodes.find((n) => n.prerequisites.length === 0)?.id ?? ""
  );

  useEffect(() => {
    if (user === null) {
      setUserInfo(null);
    }
    if (!user) return;
    getUserInfo(user.username).then((info) => setUserInfo(info));
  }, [user]);

  if (user === undefined || userInfo === undefined) return <Loading />;
  if (user === null || userInfo === null) return <Login />;

  const badges = computeCategoryBadges(taskGraph, userInfo);

  return (
    <div>
      <Header user={user} />
      <Tree badges={badges} setSelectedNode={setSelectedNode} />
      {selectedNode in badges && (
        <Category badge={badges[selectedNode]} badges={badges} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const taskGraph = getTaskGraph();

  return {
    props: {
      taskGraph,
    },
  };
}
