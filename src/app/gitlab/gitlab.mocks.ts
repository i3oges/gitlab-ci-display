
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
  group: {
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
  },
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
  pipelineStatus: {
    id: 47,
    project_id: 9,
    project_name: 'Html5 Boilerplate',
    group_name: 'Foobar Group',
    group_id: 5,
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
        status: 'running',
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
  },
  traceFile: 'here is some text',
  job: {
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
    created_at: '2015-12-24T15:51:21.880Z',
    started_at: '2015-12-24T17:54:30.733Z',
    finished_at: '2015-12-24T17:54:31.198Z',
    duration: 0.465,
    artifacts_expire_at: '2016-01-23T17:54:31.198Z',
    id: 8,
    name: 'rubocop',
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
    web_url: 'https://example.com/foo/bar/-/jobs/8',
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
  pipelineStatusDifferentStatuses: {
    ...this.pipelineStatus,
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
        status: 'passed',
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
    }]
  },
  project: {
    id: 3,
    description: null,
    default_branch: 'master',
    visibility: 'private',
    ssh_url_to_repo: 'git@example.com:diaspora/diaspora-project-site.git',
    http_url_to_repo: 'http://example.com/diaspora/diaspora-project-site.git',
    web_url: 'http://example.com/diaspora/diaspora-project-site',
    readme_url: 'http://example.com/diaspora/diaspora-project-site/blob/master/README.md',
    tag_list: [
      'example',
      'disapora project'
    ],
    owner: {
      id: 3,
      name: 'Diaspora',
      created_at: '2013-09-30T13:46:02Z'
    },
    name: 'Diaspora Project Site',
    name_with_namespace: 'Diaspora / Diaspora Project Site',
    path: 'diaspora-project-site',
    path_with_namespace: 'diaspora/diaspora-project-site',
    issues_enabled: true,
    open_issues_count: 1,
    merge_requests_enabled: true,
    jobs_enabled: true,
    wiki_enabled: true,
    snippets_enabled: false,
    resolve_outdated_diff_discussions: false,
    container_registry_enabled: false,
    created_at: '2013-09-30T13:46:02Z',
    last_activity_at: '2013-09-30T13:46:02Z',
    creator_id: 3,
    namespace: {
      id: 3,
      name: 'Diaspora',
      path: 'diaspora',
      kind: 'group',
      full_path: 'diaspora',
      avatar_url: 'http://localhost:3000/uploads/group/avatar/3/foo.jpg',
      web_url: 'http://localhost:3000/groups/diaspora'
    },
    import_status: 'none',
    import_error: null,
    permissions: {
      project_access: {
        access_level: 10,
        notification_level: 3
      },
      group_access: {
        access_level: 50,
        notification_level: 3
      }
    },
    archived: false,
    avatar_url: 'http://example.com/uploads/project/avatar/3/uploads/avatar.png',
    license_url: 'http://example.com/diaspora/diaspora-client/blob/master/LICENSE',
    license: {
      key: 'lgpl-3.0',
      name: 'GNU Lesser General Public License v3.0',
      nickname: 'GNU LGPLv3',
      html_url: 'http://choosealicense.com/licenses/lgpl-3.0/',
      source_url: 'http://www.gnu.org/licenses/lgpl-3.0.txt'
    },
    shared_runners_enabled: true,
    forks_count: 0,
    star_count: 0,
    runners_token: 'b8bc4a7a29eb76ea83cf79e4908c2b',
    ci_default_git_depth: 50,
    public_jobs: true,
    shared_with_groups: [
      {
        group_id: 4,
        group_name: 'Twitter',
        group_full_path: 'twitter',
        group_access_level: 30
      },
      {
        group_id: 3,
        group_name: 'Gitlab Org',
        group_full_path: 'gitlab-org',
        group_access_level: 10
      }
    ],
    repository_storage: 'default',
    only_allow_merge_if_pipeline_succeeds: false,
    only_allow_merge_if_all_discussions_are_resolved: false,
    remove_source_branch_after_merge: false,
    printing_merge_requests_link_enabled: true,
    request_access_enabled: false,
    merge_method: 'merge',
    statistics: {
      commit_count: 37,
      storage_size: 1038090,
      repository_size: 1038090,
      wiki_size: 0,
      lfs_objects_size: 0,
      job_artifacts_size: 0,
      packages_size: 0
    },
    _links: {
      self: 'http://example.com/api/v4/projects',
      issues: 'http://example.com/api/v4/projects/1/issues',
      merge_requests: 'http://example.com/api/v4/projects/1/merge_requests',
      repo_branches: 'http://example.com/api/v4/projects/1/repository_branches',
      labels: 'http://example.com/api/v4/projects/1/labels',
      events: 'http://example.com/api/v4/projects/1/events',
      members: 'http://example.com/api/v4/projects/1/members'
    }
  }
};
