import React, { useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Repos = () => {
  const ref = useRef('noopener noreferrer')
  const data = useStaticQuery(graphql`
    query {
      allGithubData {
        nodes {
          data {
            user {
              url
              login
              name
              repositories {
                nodes {
                  id
                  openGraphImageUrl
                  name
                  description
                  url
                  primaryLanguage {
                    name
                  }
                  languages {
                    nodes {
                      name
                    }
                  }
                  updatedAt(fromNow: true)
                  stargazers {
                    totalCount
                  }
                  forkCount
                  watchers {
                    totalCount
                  }
                  readme {
                    text
                  }
                  licenseInfo {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const user = data.allGithubData.nodes[0].data.user
  const repos = data.allGithubData.nodes[0].data.user.repositories.nodes

  return (
    <React.Fragment>
      <h3 className='text-center'>Tech contributions</h3>
      <div className='row row-cols-1 row-cols-md-3'>
        {repos.map(repo => (
          <div className='col py-4' key={repo.id}>
            <div className='card h-100 shadow border-0'>
              <div className="card-header bg-transparent border-0">
                <a className='text-decoration-none' href={repo.url} target='_blank' ref={ref}>
                  <strong>{user.login}/{repo.name}</strong>
                </a>
              </div>
              <div className='card-body'>
                <p>{repo.description}</p>
                <p>Languages: {repo.languages.nodes.name}</p>
                {/* <p>{repo.licenseInfo.name}</p> */}
              </div>
              <div className='card-footer bg-transparent border-0'>
                <div className='d-flex justify-content-between'>
                  <span className='badge p-0'>Watch: {repo.watchers.totalCount}</span>
                  <span className='badge p-0'>Star: {repo.stargazers.totalCount}</span>
                  <span className='badge p-0'>Fork: {repo.forkCount}</span>
                </div>
                <small className='text-muted'>Last updated {repo.updatedAt}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Repos
