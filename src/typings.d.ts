declare var nprocess: Process

interface Process {
  env: Env;
}

interface Env {
  GITLAB_URL: string;
  GITLAB_PRIVATE_TOKEN: string;
}

interface GlobalEnvironment {
  nprocess: Process;
}