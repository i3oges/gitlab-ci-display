// PipelineStatus represents the most recent pipeline status for a single project
// uses Job; Pipeline; and GroupProject interfaces
export interface PipelineStatus {
  id: number;
  project_id: number;
  project_name: string;
  ref: string;
  sha: string;
  stage: {
    name: string;
    jobs: Job[]
  }[];
  status: string;
  web_url: string;
  created_at: string;
  updated_at: string;
  group_name: string;
  group_id: number;
}

// Group represents the response from GET /groups
// https://docs.gitlab.com/ee/api/groups.html#list-groups
export interface Group {
  id: number;
  name: string;
  path: string;
  description: string;
  visibility: string;
  share_with_group_lock: boolean;
  require_two_factor_authentication: boolean;
  two_factor_grace_period: number;
  project_creation_level: string;
  auto_devops_enabled: boolean;
  subgroup_creation_level: string;
  emails_disabled: boolean;
  lfs_enabled: boolean;
  avatar_url: string;
  web_url: string;
  request_access_enabled: boolean;
  full_name: string;
  full_path: string;
  file_template_project_id: number;
  parent_id: number;
}

// GroupProject represents the response from GET /groups/:id/projects
// https://docs.gitlab.com/ee/api/groups.html#list-a-groups-projects
export interface GroupProject {
  id: number;
  description: string;
  default_branch: string;
  tag_list: string[];
  archived: boolean;
  visibility: string;
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  created_at: string;
  last_activity_at: string;
  shared_runners_enabled: boolean;
  creator_id: number;
  namespace: {
    id: number;
    name: string;
    path: string;
    kind: string;
  };
  avatar_url: string;
  star_count: number;
  forks_count: number;
  open_issues_count: number;
  public_jobs: boolean;
  shared_with_groups: [];
  request_access_enabled: boolean;
}

// Jobs represents data from GET /projects/:id/pipelines/:pipeline_id/jobs
// https://docs.gitlab.com/ee/api/jobs.html#list-pipeline-jobs
export interface Job {
  commit: {
    author_email: string;
    author_name: string;
    created_at: string;
    id: string;
    message: string;
    short_id: string;
    title: string;
  };
  coverage: number | string;
  allow_failure: boolean;
  created_at: string;
  started_at: string;
  finished_at: string;
  duration: number;
  artifacts_expire_at: string;
  id: number;
  name: string;
  pipeline: {
    id: number;
    ref: string;
    sha: string;
    status: string;
  };
  ref: string;
  artifacts: any[];
  runner: any;
  stage: string;
  status: string;
  tag: boolean;
  web_url: string;
  user: {
    id: number;
    name: string;
    username: string;
    state: string;
    avatar_url: string;
    web_url: string;
    created_at: string;
    bio: string;
    location: string;
    public_email: string;
    skype: string;
    linkedin: string;
    twitter: string;
    website_url: string;
    organization: string;
  };
}

export interface Pipeline {
  id: number;
  status: string;
  ref: string;
  sha: string;
  web_url: string;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  description: string;
  default_branch: string;
  visibility: string;
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: string;
  tag_list: string[];
  owner: {
    id: number;
    name: string;
    created_at: string;
  };
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  issues_enabled: boolean;
  open_issues_count: number;
  merge_requests_enabled: boolean;
  jobs_enabled: boolean;
  wiki_enabled: boolean;
  snippets_enabled: boolean;
  resolve_outdated_diff_discussions: boolean;
  container_registry_enabled: boolean;
  created_at: string;
  last_activity_at: string;
  creator_id: number;
  namespace: {
    id: number;
    name: string;
    path: string;
    kind: string;
    full_path: string;
    avatar_url: string;
    web_url: string;
  };
  import_status: string;
  import_error: string;
  permissions: {
    project_access: {
      access_level: number;
      notification_level: number
    };
    group_access: {
      access_level: number;
      notification_level: number
    }
  };
  archived: boolean;
  avatar_url: string;
  license_url: string;
  license: {
    key: string;
    name: string;
    nickname: string;
    html_url: string;
    source_url: string;
  };
  shared_runners_enabled: boolean;
  forks_count: number;
  star_count: number;
  runners_token: string;
  ci_default_git_depth: number;
  public_jobs: boolean;
  shared_with_groups: [
    {
      group_id: number;
      group_name: string;
      group_full_path: string;
      group_access_level: number
    },
    {
      group_id: number;
      group_name: string;
      group_full_path: string;
      group_access_level: number
    }
  ];
  repository_storage: string;
  only_allow_merge_if_pipeline_succeeds: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  printing_merge_requests_link_enabled: boolean;
  request_access_enabled: boolean;
  merge_method: string;
  statistics: {
    commit_count: number;
    storage_size: number;
    repository_size: number;
    wiki_size: number;
    lfs_objects_size: number;
    job_artifacts_size: number;
    packages_size: number
  };
  _links: {
    self: string;
    issues: string;
    merge_requests: string;
    repo_branches: string;
    labels: string;
    events: string;
    members: string;
  }
}