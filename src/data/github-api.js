// github-api.js

exports.githubApiQuery = `
  query($github_login: String!) {
    user(login: $github_login) {
      url
      login
      name
      followers {totalCount}
      repositories(last: 6) {
        nodes {
          id
          openGraphImageUrl
          url
          name
          description
          primaryLanguage {
            id
            name
          }
          languages(last: 6) {
            nodes {
              name
            }
          }
          updatedAt
          stargazers {
            totalCount
          }
          forkCount
          watchers {
            totalCount
          }
          readme: object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
          licenseInfo {
            id
            name
          }
        }
      }
    }
  }
`
