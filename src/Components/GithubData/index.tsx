import { SectionTitle } from "@/Components/CommonElements";
import { useEffect, useState } from "react";
import { GithubCalendar } from "./GithubCalendar";
import { TGithubDataApiResponse, getGithubData } from "./services";

const GithubData = ({ username }: { username?: string }) => {
  const [data, setData] = useState<TGithubDataApiResponse["data"] | null>(null);

  useEffect(() => {
    async function getData() {
      const githubData = await getGithubData(username!);

      setData(githubData);
    }

    if (username) {
      getData().catch(console.error);
    }
  }, [username]);

  return (
    <>
      {data ? (
        <>
          <SectionTitle
            as="h3"
            style={{ fontSize: "2rem", margin: "2rem 0 2rem 0" }}
          >
            My Github Contributions
          </SectionTitle>
          <div style={{ marginBottom: "4rem" }}>
            <GithubCalendar contributionCalendar={data.user.contributionsCollection.contributionCalendar} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default GithubData;
