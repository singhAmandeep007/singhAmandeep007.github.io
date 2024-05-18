/**
 * @param {string} username
 * @returns Promise
 */
export async function getGithubData(username: string) {
  const token =
    "4SDtgP4SuqYXYFktjSSfmjTgRMTn5+wIrg8ZECLX7KH9JcpHA/XMSZdanB3OQyD5xvUq4ITcZvm70FguO+0llLc4Y1wRT9yTId9T7W5tL8XpFuF8OYZ3V0yZyf9aRvp/"; //process.env.REACT_APP_GITHUB_TOKEN;

  console.log(token);

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

  // will return either data or errors
  const { data, errors } = await response.json();

  if (!errors) {
    return data;
  }

  throw new Error("Failed to fetch github data");
}
