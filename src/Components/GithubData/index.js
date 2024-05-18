import { useEffect, useState } from "react";
import { GithubCalendar } from "./GithubCalendar";
import { getGithubData } from "./services";

const GithubData = ({ username = "singhAmandeep007" }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const githubData = await getGithubData(username);

      setData(githubData);
    }

    getData();
  }, [username]);

  return (
    <>
      {data ? (
        <div style={{ marginBottom: "4rem" }}>
          <GithubCalendar data={data} />
        </div>
      ) : null}
    </>
  );
};

export default GithubData;
