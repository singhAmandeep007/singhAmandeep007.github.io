export type TGithubUserData = {
  name: string;
  avatarUrl: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  contributionsCollection: {
    contributionYears: number[];
    startedAt: string;
    endedAt: string;
    contributionCalendar: {
      totalContributions: number;
      months: {
        name: string;
        firstDay: string;
        year: number;
        totalWeeks: number;
      }[];
      colors: string[];
      weeks: {
        contributionDays: {
          color: string;
          contributionCount: number;
          contributionLevel: string;
          date: string;
        }[];
      }[];
    };
  };
};

export type TGithubDataApiResponse = {
  data: {
    user: TGithubUserData;
  };
  errors?: unknown;
};

/**
 * @param {string} username
 * @returns Promise
 */
export async function getGithubData(username: string) {
  const token = import.meta.env.VITE_GITHUB_TOKEN as string;

  const headers = {
    Authorization: `bearer ${token}`,
  };

  /**
   * DOCS:
   * user - https://docs.github.com/en/graphql/reference/objects#user
   * contributionCollection - https://docs.github.com/en/graphql/reference/objects#contributionscollection
   */
  const body = {
    query: `query {
					user(login: "${username}") {
						name
						avatarUrl
						followers {
							totalCount
						}
						following {
							totalCount
						}
						contributionsCollection {
							contributionYears
							startedAt
							endedAt
							contributionCalendar {
								totalContributions
								months {
									name
									firstDay
									year
									totalWeeks
								}
								colors
								weeks {
									contributionDays {
										color
										contributionCount
										contributionLevel
										date
									}
								}
							}
						}
					}
				}`,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  // will return either data or errors
  const { data, errors } = (await response.json()) as TGithubDataApiResponse;

  if (!errors) {
    return data;
  }

  throw new Error("Failed to fetch github data");
}
