import { useEffect, useState } from "react";
import { GithubCalendar } from "./GithubCalendar";
import { TGithubDataApiResponse, getGithubData } from "./services";

const GithubData = ({ username = "singhAmandeep007" }) => {
  const [data, setData] = useState<TGithubDataApiResponse["data"] | null>(null);

  useEffect(() => {
    async function getData() {
      const githubData = await getGithubData(username);

      setData(githubData);
    }

    getData().catch(console.error);
  }, [username]);

  return (
    <>
      {data ? (
        <div style={{ marginBottom: "4rem" }}>
          <GithubCalendar contributionCalendar={data.user.contributionsCollection.contributionCalendar} />
        </div>
      ) : null}
    </>
  );
};

export default GithubData;
