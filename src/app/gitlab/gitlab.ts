// PipelineStatus represents the most recent pipeline status for a single project
// uses Job, Pipeline, and GroupProject interfaces
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
  share_with_group_lock: false;
  require_two_factor_authentication: false;
  two_factor_grace_period: number;
  project_creation_level: string;
  auto_devops_enabled: boolean;
  subgroup_creation_level: string;
  emails_disabled: boolean;
  lfs_enabled: true;
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
  avatar_url: null;
  star_count: number;
  forks_count: number;
  open_issues_count: number;
  public_jobs: boolean;
  shared_with_groups: [];
  request_access_enabled: false;
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
  coverage: number | null;
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
