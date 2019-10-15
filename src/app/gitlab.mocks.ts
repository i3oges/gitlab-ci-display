
export const GitlabMocks = {
  groups: [
    {
      id: 1,
      name: 'Foobar Group',
      path: 'foo-bar',
      description: 'An interesting group',
      visibility: 'public',
      share_with_group_lock: false,
      require_two_factor_authentication: false,
      two_factor_grace_period: 48,
      project_creation_level: 'developer',
      auto_devops_enabled: null,
      subgroup_creation_level: 'owner',
      emails_disabled: null,
      lfs_enabled: true,
      avatar_url: 'http://localhost:3000/uploads/group/avatar/1/foo.jpg',
      web_url: 'http://localhost:3000/groups/foo-bar',
      request_access_enabled: false,
      full_name: 'Foobar Group',
      full_path: 'foo-bar',
      file_template_project_id: 1,
      parent_id: null
    }
  ],
  groupProjects: [
    {
      id: 9,
      description: 'foo',
      default_branch: 'master',
      tag_list: [],
      archived: false,
      visibility: 'internal',
      ssh_url_to_repo: 'git@gitlab.example.com/html5-boilerplate.git',
      http_url_to_repo: 'http://gitlab.example.com/h5bp/html5-boilerplate.git',
      web_url: 'http://gitlab.example.com/h5bp/html5-boilerplate',
      name: 'Html5 Boilerplate',
      name_with_namespace: 'Experimental / Html5 Boilerplate',
      path: 'html5-boilerplate',
      path_with_namespace: 'h5bp/html5-boilerplate',
      issues_enabled: true,
      merge_requests_enabled: true,
      wiki_enabled: true,
      jobs_enabled: true,
      snippets_enabled: true,
      created_at: '2016-04-05T21:40:50.169Z',
      last_activity_at: '2016-04-06T16:52:08.432Z',
      shared_runners_enabled: true,
      creator_id: 1,
      namespace: {
        id: 5,
        name: 'Experimental',
        path: 'h5bp',
        kind: 'group'
      },
      avatar_url: null,
      star_count: 1,
      forks_count: 0,
      open_issues_count: 3,
      public_jobs: true,
      shared_with_groups: [],
      request_access_enabled: false
    }
  ],
  jobs: [
    {
      commit: {
        author_email: 'admin@example.com',
        author_name: 'Administrator',
        created_at: '2015-12-24T16:51:14.000+01:00',
        id: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
        message: 'Test the CI integration.',
        short_id: '0ff3ae19',
        title: 'Test the CI integration.'
      },
      coverage: null,
      allow_failure: false,
      created_at: '2015-12-24T15:51:21.727Z',
      started_at: '2015-12-24T17:54:24.729Z',
      finished_at: '2015-12-24T17:54:24.921Z',
      duration: 0.192,
      artifacts_expire_at: '2016-01-23T17:54:24.921Z',
      id: 6,
      name: 'rspec:other',
      pipeline: {
        id: 6,
        ref: 'master',
        sha: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
        status: 'pending'
      },
      ref: 'master',
      artifacts: [],
      runner: null,
      stage: 'test',
      status: 'failed',
      tag: false,
      web_url: 'https://example.com/foo/bar/-/jobs/6',
      user: {
        id: 1,
        name: 'Administrator',
        username: 'root',
        state: 'active',
        avatar_url: 'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon',
        web_url: 'http://gitlab.dev/root',
        created_at: '2015-12-21T13:14:24.077Z',
        bio: null,
        location: null,
        public_email: '',
        skype: '',
        linkedin: '',
        twitter: '',
        website_url: '',
        organization: ''
      }
    },
    {
      commit: {
        author_email: 'admin@example.com',
        author_name: 'Administrator',
        created_at: '2015-12-24T16:51:14.000+01:00',
        id: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
        message: 'Test the CI integration.',
        short_id: '0ff3ae19',
        title: 'Test the CI integration.'
      },
      coverage: null,
      allow_failure: false,
      created_at: '2015-12-24T15:51:21.802Z',
      started_at: '2015-12-24T17:54:27.722Z',
      finished_at: '2015-12-24T17:54:27.895Z',
      duration: 0.173,
      artifacts_file: {
        filename: 'artifacts.zip',
        size: 1000
      },
      artifacts: [
        { file_type: 'archive', size: 1000, filename: 'artifacts.zip', file_format: 'zip' },
        { file_type: 'metadata', size: 186, filename: 'metadata.gz', file_format: 'gzip' },
        { file_type: 'trace', size: 1500, filename: 'job.log', file_format: 'raw' },
        { file_type: 'junit', size: 750, filename: 'junit.xml.gz', file_format: 'gzip' }
      ],
      artifacts_expire_at: '2016-01-23T17:54:27.895Z',
      id: 7,
      name: 'teaspoon',
      pipeline: {
        id: 6,
        ref: 'master',
        sha: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
        status: 'pending'
      },
      ref: 'master',
      runner: null,
      stage: 'test',
      status: 'failed',
      tag: false,
      web_url: 'https://example.com/foo/bar/-/jobs/7',
      user: {
        id: 1,
        name: 'Administrator',
        username: 'root',
        state: 'active',
        avatar_url: 'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon',
        web_url: 'http://gitlab.dev/root',
        created_at: '2015-12-21T13:14:24.077Z',
        bio: null,
        location: null,
        public_email: '',
        skype: '',
        linkedin: '',
        twitter: '',
        website_url: '',
        organization: ''
      }
    }
  ],
  pipelines: [
    {
      id: 47,
      status: 'pending',
      ref: 'new-pipeline',
      sha: 'a91957a858320c0e17f3a0eca7cfacbff50ea29a',
      web_url: 'https://example.com/foo/bar/pipelines/47',
      created_at: '2016-08-11T11:28:34.085Z',
      updated_at: '2016-08-11T11:32:35.169Z',
    },
    {
      id: 48,
      status: 'pending',
      ref: 'new-pipeline',
      sha: 'eb94b618fb5865b26e80fdd8ae531b7a63ad851a',
      web_url: 'https://example.com/foo/bar/pipelines/48',
      created_at: '2016-08-12T10:06:04.561Z',
      updated_at: '2016-08-12T10:09:56.223Z',
    }
  ],
  pipelineStatus: [{
    id: 47,
    project_id: 9,
    project_name: 'Html5 Boilerplate',
    ref: 'new-pipeline',
    sha: 'a91957a858320c0e17f3a0eca7cfacbff50ea29a',
    stage: [{
      name: 'test',
      jobs: [{
        commit: {
          author_email: 'admin@example.com',
          author_name: 'Administrator',
          created_at: '2015-12-24T16:51:14.000+01:00',
          id: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
          message: 'Test the CI integration.',
          short_id: '0ff3ae19',
          title: 'Test the CI integration.'
        },
        coverage: null,
        allow_failure: false,
        created_at: '2015-12-24T15:51:21.727Z',
        started_at: '2015-12-24T17:54:24.729Z',
        finished_at: '2015-12-24T17:54:24.921Z',
        duration: 0.192,
        artifacts_expire_at: '2016-01-23T17:54:24.921Z',
        id: 6,
        name: 'rspec:other',
        pipeline: {
          id: 6,
          ref: 'master',
          sha: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
          status: 'pending'
        },
        ref: 'master',
        artifacts: [],
        runner: null,
        stage: 'test',
        status: 'failed',
        tag: false,
        web_url: 'https://example.com/foo/bar/-/jobs/6',
        user: {
          id: 1,
          name: 'Administrator',
          username: 'root',
          state: 'active',
          avatar_url: 'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon',
          web_url: 'http://gitlab.dev/root',
          created_at: '2015-12-21T13:14:24.077Z',
          bio: null,
          location: null,
          public_email: '',
          skype: '',
          linkedin: '',
          twitter: '',
          website_url: '',
          organization: ''
        }
      },
      {
        commit: {
          author_email: 'admin@example.com',
          author_name: 'Administrator',
          created_at: '2015-12-24T16:51:14.000+01:00',
          id: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
          message: 'Test the CI integration.',
          short_id: '0ff3ae19',
          title: 'Test the CI integration.'
        },
        coverage: null,
        allow_failure: false,
        created_at: '2015-12-24T15:51:21.802Z',
        started_at: '2015-12-24T17:54:27.722Z',
        finished_at: '2015-12-24T17:54:27.895Z',
        duration: 0.173,
        artifacts_file: {
          filename: 'artifacts.zip',
          size: 1000
        },
        artifacts: [
          { file_type: 'archive', size: 1000, filename: 'artifacts.zip', file_format: 'zip' },
          { file_type: 'metadata', size: 186, filename: 'metadata.gz', file_format: 'gzip' },
          { file_type: 'trace', size: 1500, filename: 'job.log', file_format: 'raw' },
          { file_type: 'junit', size: 750, filename: 'junit.xml.gz', file_format: 'gzip' }
        ],
        artifacts_expire_at: '2016-01-23T17:54:27.895Z',
        id: 7,
        name: 'teaspoon',
        pipeline: {
          id: 6,
          ref: 'master',
          sha: '0ff3ae198f8601a285adcf5c0fff204ee6fba5fd',
          status: 'pending'
        },
        ref: 'master',
        runner: null,
        stage: 'test',
        status: 'failed',
        tag: false,
        web_url: 'https://example.com/foo/bar/-/jobs/7',
        user: {
          id: 1,
          name: 'Administrator',
          username: 'root',
          state: 'active',
          avatar_url: 'http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon',
          web_url: 'http://gitlab.dev/root',
          created_at: '2015-12-21T13:14:24.077Z',
          bio: null,
          location: null,
          public_email: '',
          skype: '',
          linkedin: '',
          twitter: '',
          website_url: '',
          organization: ''
        }
      }]
    }],
    status: 'pending',
    web_url: 'https://example.com/foo/bar/pipelines/47',
    created_at: '2016-08-11T11:28:34.085Z',
    updated_at: '2016-08-11T11:32:35.169Z'
  }]
};
